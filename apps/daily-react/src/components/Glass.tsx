import { motion } from 'framer-motion';
import React, {
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from 'react';
import { twMerge } from 'tailwind-merge';

import { glassFilterHref } from 'src/views/utils';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function GlassButton(
  props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>,
): React.ReactNode {
  return (
    <button
      type='button'
      {...props}
      className={`glass-button ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export const GlassContainer = ({
  children,
  className = '',
  style = {},
  ...props
}: GlassContainerProps): React.ReactNode => {
  return (
    <motion.div
      className={twMerge(
        'w-full p-4 md:p-12 lg:p-18',
        'before:rounded-[40px] after:rounded-[40px]',
        'md:before:rounded-[84px] md:after:rounded-[84px]',
        'xl:before:rounded-[110px] xl:after:rounded-[110px]',
        `glass__container ${className}`,
      )}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export function GlassFilters(): React.ReactNode {
  return (
    <svg style={{ display: 'none' }} aria-hidden='true' focusable='false'>
      <filter id='container-glass' x='0%' y='0%' width='100%' height='100%'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='0.008 0.008'
          numOctaves='2'
          seed='92'
          result='noise'
        />
        <feGaussianBlur in='noise' stdDeviation='0.02' result='blur' />
        <feDisplacementMap
          in='SourceGraphic'
          in2='blur'
          scale='77'
          xChannelSelector='R'
          yChannelSelector='G'
        />
      </filter>
      <filter id='btn-glass' primitiveUnits='objectBoundingBox'>
        <feImage
          href={glassFilterHref}
          x='0'
          y='0'
          width='1'
          height='1'
          result='map'
        />
        <feGaussianBlur in='SourceGraphic' stdDeviation='0.02' result='blur' />
        <feDisplacementMap
          id='disp'
          in='blur'
          in2='map'
          scale='1'
          xChannelSelector='R'
          yChannelSelector='G'
        />
      </filter>
    </svg>
  );
}
