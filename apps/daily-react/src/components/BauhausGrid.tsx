import { Grid } from '@kurocado-studio/ui-react-research-and-development';
import {
  PrimaryColors,
  ariaHidden,
  bauhausBasicColorsGridComposer,
  bauhausVerticalLinesGridComposer,
} from '@ui';
import { motion } from 'framer-motion';
import React from 'react';

import { useCursorFollow } from 'src/hooks/useCursorFollow';

const bauhausBasicColorsGrid = bauhausBasicColorsGridComposer('react');
const bauhausVerticalLinesGrid = bauhausVerticalLinesGridComposer('react');

export function BauhausGrid() {
  return (
    <div {...ariaHidden} className='relative h-screen w-screen'>
      <PrimaryColorGrid />
      <VerticalLinesGrid />
    </div>
  );
}

export function PrimaryColorGrid() {
  const mainCursorFollower = useCursorFollow({
    damping: 100,
    stiffness: 600,
    maxDistance: 3000,
    intensity: 0.1,
  });

  return (
    <Grid {...bauhausBasicColorsGrid.mainGridProps}>
      <motion.span
        ref={mainCursorFollower.ref}
        style={{ y: mainCursorFollower.x }}
        {...bauhausBasicColorsGrid.redSpanColumn}
      >
        <Grid {...bauhausBasicColorsGrid.innerRedSpanColumnGridProps}>
          {bauhausBasicColorsGrid.threeColumnsBasicColorBorders[
            PrimaryColors.RED
          ].map((spanProps, index) => (
            <span key={index} {...spanProps} />
          ))}
        </Grid>
      </motion.span>
      <span {...bauhausBasicColorsGrid.blackSpanColumn}></span>
      <motion.span
        ref={mainCursorFollower.ref}
        style={{ x: mainCursorFollower.y }}
        {...bauhausBasicColorsGrid.blueSpanColumn}
      >
        <span>
          <Grid {...bauhausBasicColorsGrid.innerBlueSpanColumnGridProps}>
            {bauhausBasicColorsGrid.threeColumnsBasicColorBorders[
              PrimaryColors.BLUE
            ].map((spanProps, index) => (
              <span key={index} {...spanProps} />
            ))}
          </Grid>
        </span>
      </motion.span>
      <motion.span
        ref={mainCursorFollower.ref}
        style={{ x: mainCursorFollower.x }}
        {...bauhausBasicColorsGrid.yellowSpanColumn}
      >
        <Grid {...bauhausBasicColorsGrid.innerYellowSpanColumnGridProps}>
          {bauhausBasicColorsGrid.threeColumnsBasicColorBorders[
            PrimaryColors.YELLOW
          ].map((spanProps, index) => (
            <span key={index} {...spanProps} />
          ))}
        </Grid>
      </motion.span>
    </Grid>
  );
}

export function VerticalLinesGrid() {
  const secondaryCursorFollower = useCursorFollow({
    damping: 200,
    stiffness: 1000,
    maxDistance: 4000,
    intensity: 0.2,
  });

  return (
    <Grid {...bauhausVerticalLinesGrid.mainGridProps}>
      <span {...bauhausVerticalLinesGrid.verticalSpanColumn}>
        {bauhausVerticalLinesGrid.innerVerticalLines.map((spanProps, index) => {
          return (
            <motion.span
              ref={secondaryCursorFollower.ref}
              style={{
                x: secondaryCursorFollower.x,
                y: secondaryCursorFollower.y,
              }}
              key={index}
              {...spanProps}
            />
          );
        })}
      </span>
      <span {...bauhausVerticalLinesGrid.innerYellowDotsContainer}>
        {bauhausVerticalLinesGrid.blinkingYellowDots.map((spanProps, index) => {
          return <motion.span key={index} {...spanProps} />;
        })}
      </span>
    </Grid>
  );
}
