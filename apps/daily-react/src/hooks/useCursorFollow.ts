import { CursorFollowSettings, calculateCursorOffset } from '@ui';
import { useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const defaultSettings: CursorFollowSettings = {
  damping: 100,
  stiffness: 600,
  maxDistance: 3000,
  intensity: 0.1,
};

export function useCursorFollow(settings = defaultSettings) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  const springX = useSpring(x, {
    damping: settings.damping,
    stiffness: settings.stiffness,
  });

  const springY = useSpring(y, {
    damping: settings.damping,
    stiffness: settings.stiffness,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!element) return;
      const { x: newX, y: newY } = calculateCursorOffset(
        element,
        e.clientX,
        e.clientY,
        settings,
      );
      x.set(newX);
      y.set(newY);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [element, settings]);

  return { ref: setElement, x: springX, y: springY };
}
