import { gridContainerProps } from '@ui';
import { motion } from 'framer-motion';
import React from 'react';

import { BauhausMotionGrid } from 'src/components/BauhausMotionGrid';
import { LoginForm } from 'src/components/LoginForm';
import { GlassFilters } from 'src/views/Glass';

export function Daily001(): React.ReactNode {
  return (
    <motion.section {...gridContainerProps}>
      {/*<LoginForm />*/}
      <BauhausMotionGrid />
      <GlassFilters />
    </motion.section>
  );
}
