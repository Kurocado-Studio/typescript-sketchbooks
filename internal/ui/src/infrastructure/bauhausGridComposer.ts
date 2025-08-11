import { BorderPrimaryColors, PrimaryColors } from '../domain/colors';

export const defaultGridProps = {
  columns: '12',
  gap: '0',
  rows: '12',
};

export type UIMode = 'react' | 'vue';

export const ariaHidden = {
  'aria-hidden': true,
};

export const composeCssClassName = (uiMode: UIMode, cssClass: string) => {
  return uiMode === 'react'
    ? {
        className: cssClass,
      }
    : {
        class: cssClass,
      };
};

export const bauhausBasicColorsGridComposer = (uiMode: UIMode) => {
  const mainGridProps = {
    ...defaultGridProps,
    ...ariaHidden,
    ...composeCssClassName(
      uiMode,
      `h-screen w-screen absolute top-0 left-0 right-0 bottom-0`,
    ),
  };

  const redSpanColumn = {
    ...defaultGridProps,
    ...ariaHidden,
    ...composeCssClassName(
      uiMode,
      `col-span-4 flex align-bottom w-full row-start-7 row-span-2 ${PrimaryColors.RED}`,
    ),
  };

  const innerRedSpanColumnGridProps = {
    ...defaultGridProps,
    ...ariaHidden,
    ...composeCssClassName(uiMode, `w-full subgrid flex items-end`),
  };

  const innerBlueSpanColumnGridProps = {
    ...defaultGridProps,
    ...ariaHidden,
    ...composeCssClassName(uiMode, `w-full h-full subgrid`),
  };

  const innerYellowSpanColumnGridProps = {
    ...innerBlueSpanColumnGridProps,
  };

  const blackSpanColumn = {
    ...defaultGridProps,
    ...ariaHidden,
    ...composeCssClassName(
      uiMode,
      `col-span-4 overflow-hidden w-full row-start-7 row-span-2 bg-[url(\'../images/circles.svg\')] bg-repeat`,
    ),
  };

  const blueSpanColumn = {
    ...ariaHidden,
    ...composeCssClassName(
      uiMode,
      `col-span-2 row-span-8 w-full ${PrimaryColors.BLUE}`,
    ),
  };

  const yellowSpanColumn = {
    ...ariaHidden,
    ...composeCssClassName(
      uiMode,
      `col-span-2 col-start-7 top-0 row-span-4 row-start-9 w-full ${PrimaryColors.YELLOW}`,
    ),
  };

  const threeColumnsBasicColorBorders = {
    [PrimaryColors.YELLOW]: [
      {
        ...ariaHidden,
        ...composeCssClassName(uiMode, `row-span-4 w-1 bg-black`),
      },
      {
        ...ariaHidden,
        ...composeCssClassName(
          uiMode,
          `row-span-4 w-1 row-start-5 ${PrimaryColors.RED}`,
        ),
      },
      {
        ...ariaHidden,
        ...composeCssClassName(
          uiMode,
          `row-span-4 w-1 row-start-9 ${PrimaryColors.BLUE}`,
        ),
      },
    ],
    [PrimaryColors.RED]: [
      {
        ...ariaHidden,
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 ${PrimaryColors.BLUE}`,
        ),
      },
      {
        ...ariaHidden,
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 ${PrimaryColors.YELLOW}`,
        ),
      },
      {
        ...ariaHidden,
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 bg-black`,
        ),
      },
    ],
    [PrimaryColors.BLUE]: [
      {
        ...ariaHidden,
        ...composeCssClassName(
          uiMode,
          `row-span-4 col-span-12 w-full border-r-4 border-black`,
        ),
      },
      {
        ...ariaHidden,
        ...composeCssClassName(
          uiMode,
          `row-span-4 col-span-12 w-full border-r-4 row-start-5 ${BorderPrimaryColors.RED}`,
        ),
      },
      {
        ...ariaHidden,
        ...composeCssClassName(
          uiMode,
          `row-span-4 col-span-12 w-full border-r-4 row-start-9 ${BorderPrimaryColors.YELLOW}`,
        ),
      },
    ],
  };

  return {
    blueSpanColumn,
    mainGridProps,
    redSpanColumn,
    innerRedSpanColumnGridProps,
    threeColumnsBasicColorBorders,
    blackSpanColumn,
    innerBlueSpanColumnGridProps,
    yellowSpanColumn,
    innerYellowSpanColumnGridProps,
  };
};

export const bauhausVerticalLinesGridComposer = (uiMode: UIMode) => {
  const mainGridProps = {
    ...defaultGridProps,
    ...ariaHidden,
    ...composeCssClassName(
      uiMode,
      `h-screen w-screen absolute top-0 left-0 right-0 bottom-0`,
    ),
  };

  const verticalSpanColumn = {
    ...ariaHidden,
    ...composeCssClassName(
      uiMode,
      `col-span-2 col-start-3 w-full row-span-12 overflow-hidden`,
    ),
  };

  const innerYellowDotsContainer = {
    ...composeCssClassName(
      uiMode,
      'col-span-6 col-start-7 w-full row-span-3 row-start-2 overflow-hidden',
    ),
  };

  const innerVerticalLines = Array.from({ length: 100 }).map((_) => {
    return composeCssClassName(
      uiMode,
      'bg-black dark:bg-white block h-0.5 mb-6',
    );
  });

  const blinkingYellowDots = Array.from({ length: 1150 }).map((_, index) => {
    const delay = Math.random() * 2;

    const animate = {
      backgroundColor: ['#FFFF00', '#FF0000', '#0000FF'],
    };

    const transition = {
      duration: 4,
      times: [0, 0.33, 0.66, 1],
      repeat: Infinity,
      repeatType: 'loop',
      delay,
    };

    const prefersMotion = !window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches;

    return {
      ...(index % 8 === 0 && prefersMotion && { animate, transition }),
      ...composeCssClassName(
        uiMode,
        `rounded-full inline-flex m-0.5 space-x-1 space-y-1 h-1 w-1 ${PrimaryColors.YELLOW}`,
      ),
    };
  });

  return {
    blinkingYellowDots,
    mainGridProps,
    verticalSpanColumn,
    innerVerticalLines,
    innerYellowDotsContainer,
  };
};
