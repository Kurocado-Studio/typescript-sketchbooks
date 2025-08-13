import { GlassFilters } from '@kurocado-studio/ui-react-research-and-development';
import { SurfaceColors, gridContainerProps } from '@ui';
import { motion } from 'framer-motion';
import React from 'react';

import { BauhausGrid } from 'src/components/BauhausGrid';
import { LoginForm } from 'src/components/LoginForm';

export function Daily001(): React.ReactNode {
  return (
    <motion.section {...gridContainerProps} className={SurfaceColors.BASE}>
      <LoginForm />
      <BauhausGrid />
      <GlassFilters />
    </motion.section>
  );
}
