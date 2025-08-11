import { DEFAULT_VIEWPORT, TRANSITION_SECTION } from './motion';

export const gridContainerProps = {
  initial: 'hidden',
  transition: TRANSITION_SECTION,
  variants: {
    hidden: { opacity: 0, filter: 'blur(8px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
  viewport: DEFAULT_VIEWPORT,
  whileInView: 'visible',
};
