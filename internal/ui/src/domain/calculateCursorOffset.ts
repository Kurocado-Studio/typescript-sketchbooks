export interface CursorFollowSettings {
  damping: number;
  stiffness: number;
  maxDistance: number;
  intensity: number;
  magneticModeActivationRadius?: number;
}

export function calculateCursorOffset(
  element: HTMLElement,
  mouseX: number,
  mouseY: number,
  settings: CursorFollowSettings,
): { x: number; y: number } {
  const elementRect = element.getBoundingClientRect();
  const elementCenterX = elementRect.left + elementRect.width / 2;
  const elementCenterY = elementRect.top + elementRect.height / 2;

  const offsetXFromCenter = mouseX - elementCenterX;
  const offsetYFromCenter = mouseY - elementCenterY;

  const { magneticModeActivationRadius, maxDistance, intensity } = settings;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return { x: 0, y: 0 };
  }

  if (typeof magneticModeActivationRadius === 'number') {
    const distanceToCursor = Math.sqrt(
      offsetXFromCenter ** 2 + offsetYFromCenter ** 2,
    );

    if (distanceToCursor > maxDistance) {
      return { x: 0, y: 0 };
    }

    let proximityStrength = 0;
    if (distanceToCursor < magneticModeActivationRadius) {
      proximityStrength = 1 - distanceToCursor / magneticModeActivationRadius;
    }

    return {
      x: offsetXFromCenter * proximityStrength * intensity,
      y: offsetYFromCenter * proximityStrength * intensity,
    };
  }

  // Smooth follow mode
  if (
    Math.abs(offsetXFromCenter) < maxDistance &&
    Math.abs(offsetYFromCenter) < maxDistance
  ) {
    const proximityStrength =
      1 -
      Math.max(Math.abs(offsetXFromCenter), Math.abs(offsetYFromCenter)) /
        maxDistance;

    return {
      x: offsetXFromCenter * proximityStrength * intensity,
      y: offsetYFromCenter * proximityStrength * intensity,
    };
  }

  return { x: 0, y: 0 };
}
