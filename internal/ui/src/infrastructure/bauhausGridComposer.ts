import { PrimaryColors, SurfaceColors } from '../domain/colors';

export type CursorFollower = {};

export const defaultGridProps = {
  columns: '12',
  gap: '0',
  rows: '12',
};

export type UIMode = 'react' | 'vue';

export type BauhausGridComposer = () => {
  mainGridProps: typeof defaultGridProps;
  innerRedSpanColumnGridProps: typeof defaultGridProps;
  redSpanColumn: Record<string, unknown>;
  blueSpanColumn: Record<string, unknown>;
  blackSpanColumn: Record<string, unknown>;
  yellowSpanColumn: Record<string, unknown>;
};

export const composeCssClassName = (uiMode: UIMode, cssClass: string) => {
  return uiMode === 'react'
    ? {
        classname: cssClass,
      }
    : {
        class: cssClass,
      };
};

export const bauhausBasicColorsGridComposer = (uiMode: UIMode) => {
  const mainGridProps = {
    ...defaultGridProps,
    'aria-hidden': true,
    ...composeCssClassName(uiMode, `h-screen ${SurfaceColors.BASE}`),
  };

  const redSpanColumn = {
    ...defaultGridProps,
    'aria-hidden': true,
    ...composeCssClassName(
      uiMode,
      `col-span-4 flex align-bottom w-full row-start-7 row-span-2 ${PrimaryColors.RED}`,
    ),
  };

  const innerRedSpanColumnGridProps = {
    ...defaultGridProps,
    ...composeCssClassName(uiMode, `w-full subgrid flex items-end`),
  };

  const threeColumnsBasicColorBorders = {
    [PrimaryColors.YELLOW]: [
      {
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 ${PrimaryColors.BLUE}`,
        ),
      },
      {
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 ${PrimaryColors.YELLOW}`,
        ),
      },
      {
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 bg-black`,
        ),
      },
    ],
    [PrimaryColors.RED]: [
      {
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 ${PrimaryColors.BLUE}`,
        ),
      },
      {
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 ${PrimaryColors.YELLOW}`,
        ),
      },
      {
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 bg-black`,
        ),
      },
    ],
    [PrimaryColors.BLUE]: [
      {
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 ${PrimaryColors.BLUE}`,
        ),
      },
      {
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 ${PrimaryColors.YELLOW}`,
        ),
      },
      {
        ...composeCssClassName(
          uiMode,
          `col-span-4 h-1 w-full row-start-12 bg-black`,
        ),
      },
    ],
  };

  return {
    mainGridProps,
    redSpanColumn,
    innerRedSpanColumnGridProps,
    threeColumnsBasicColorBorders,
  };
};
