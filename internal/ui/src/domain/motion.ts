import { easeIn, easeOut } from 'framer-motion';

export const MOTION_ORIGIN = 36;
export const MOTION_DESTINATION = 0;
export const MOTION_DURATION = 0.3;
export const MOTION_STAGGER_CHILDREN = 0.1;
export const MOTION_DELAY_CHILDREN = 0.24;

const blurFilters = {
  hidden: { filter: 'blur(8px)' },
  visible: { filter: 'blur(0px)' },
};

export const MOTION_VISIBLE_TRANSITION = easeIn;

export const MOTION_HIDDEN_TRANSITION = easeOut;

export const DEFAULT_VIEWPORT = {
  once: false,
  margin: '0px 0px -200px',
};

export const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION_STAGGER_CHILDREN,
      ease: MOTION_VISIBLE_TRANSITION,
    },
  },
};

export const LIST_VARIANTS_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: MOTION_STAGGER_CHILDREN,
      delayChildren: MOTION_DELAY_CHILDREN,
      duration: MOTION_DURATION,
      ease: MOTION_VISIBLE_TRANSITION,
    },
  },
};

export const LIST_ITEMS_VARIANTS = {
  hidden: { opacity: 0, x: MOTION_ORIGIN },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const SLIDE_MENU_VARIANTS = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: MOTION_DURATION,
      ease: MOTION_VISIBLE_TRANSITION,
    },
    ...blurFilters.visible,
  },
  hidden: {
    x: 1000,
    opacity: 0,
    transition: {
      duration: MOTION_DURATION,
      ease: MOTION_HIDDEN_TRANSITION,
    },
    ...blurFilters.hidden,
  },
};

export const VARIANTS_SECTION = {
  hidden: {
    opacity: 0,
    y: MOTION_ORIGIN,
    transition: {
      duration: MOTION_DURATION,
      ease: MOTION_HIDDEN_TRANSITION,
    },
    ...blurFilters.hidden,
  },
  visible: {
    opacity: 1,
    y: MOTION_DESTINATION,
    transition: {
      duration: MOTION_DURATION,
      ease: MOTION_VISIBLE_TRANSITION,
    },
    ...blurFilters.visible,
  },
};

export const TRANSITION_SECTION = {
  duration: MOTION_DURATION,
};
