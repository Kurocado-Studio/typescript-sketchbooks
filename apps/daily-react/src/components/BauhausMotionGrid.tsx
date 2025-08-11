import { Grid } from '@kurocado-studio/ui-react-research-and-development';
import {
  BorderPrimaryColors,
  CursorFollowSettings,
  PrimaryColors,
  SurfaceColors,
  bauhausBasicColorsGridComposer,
} from '@ui';
import { motion } from 'framer-motion';
import React from 'react';

import { useCursorFollow } from 'src/hooks/useCursorFollow';

const defaultSettings2: CursorFollowSettings = {
  damping: 100,
  stiffness: 600,
  maxDistance: 3000,
  intensity: 0.1,
};

const defaultSettings3: CursorFollowSettings = {
  damping: 200,
  stiffness: 1000,
  maxDistance: 4000,
  intensity: 0.2,
};

const dcd = bauhausBasicColorsGridComposer();

export function BauhausMotionGrid() {
  const defaultGridProps = {
    columns: '12',
    gap: '0',
    rows: '12',
  };

  const mainCursorFollower = useCursorFollow(defaultSettings2);
  const secondaryCursorFollower = useCursorFollow(defaultSettings3);

  return (
    <div className='relative h-screen w-screen'>
      <Grid
        {...defaultGridProps}
        aria-hidden={true}
        className={`h-screen ${SurfaceColors.BASE}`}
      >
        <motion.span
          ref={mainCursorFollower.ref}
          style={{
            y: mainCursorFollower.x,
          }}
          className={`col-span-4 flex align-bottom w-full row-start-7 row-span-2 ${PrimaryColors.RED}`}
        >
          <Grid
            {...defaultGridProps}
            className={`w-full subgrid flex items-end`}
          >
            <span
              className={`col-span-4 h-1 w-full row-start-12 ${PrimaryColors.BLUE}`}
            />
            <span
              className={`col-span-4 h-1 w-full row-start-12 ${PrimaryColors.YELLOW}`}
            />
            <span className={`col-span-4 h-1 w-full row-start-12 bg-black`} />
          </Grid>
        </motion.span>
        <span
          aria-hidden={true}
          className={'col-span-4 overflow-hidden w-full row-start-7 row-span-2'}
        >
          <div className="h-full w-full bg-[url('../images/circles.svg')] bg-repeat"></div>
        </span>
        <motion.span
          ref={mainCursorFollower.ref}
          style={{
            x: mainCursorFollower.y,
          }}
          aria-hidden={true}
          className={`col-span-2 row-span-8 w-full ${PrimaryColors.BLUE}`}
        >
          <span>
            <Grid {...defaultGridProps} className={`w-full h-full subgrid`}>
              <span
                className={`row-span-4 col-span-12 w-full border-r-4 border-black`}
              />
              <span
                className={`row-span-4 col-span-12 w-full border-r-4 row-start-5 ${BorderPrimaryColors.RED}`}
              />
              <span
                className={`row-span-4 col-span-12 w-full border-r-4 row-start-9 ${BorderPrimaryColors.YELLOW}`}
              />
            </Grid>
          </span>
        </motion.span>
        <motion.span
          ref={mainCursorFollower.ref}
          style={{
            x: mainCursorFollower.x,
          }}
          aria-hidden={true}
          className={`col-span-2 col-start-7 top-0 row-span-4 row-start-9 w-full ${PrimaryColors.YELLOW}`}
        >
          <Grid {...defaultGridProps} className={`w-full h-full subgrid`}>
            <span className={`row-span-4 w-1 bg-black`} />
            <span
              className={`row-span-4 w-1 row-start-5 ${PrimaryColors.RED}`}
            />
            <span
              className={`row-span-4 w-1 row-start-9 ${PrimaryColors.BLUE}`}
            />
          </Grid>
        </motion.span>
      </Grid>
      <Grid
        {...defaultGridProps}
        aria-hidden={true}
        className={`h-screen w-screen absolute top-0 left-0 right-0 bottom-0`}
      >
        <span
          className={`col-span-2 col-start-3 w-full row-span-12 overflow-hidden`}
        >
          {Array.from({ length: 100 }).map((_, index) => {
            return (
              <motion.span
                ref={secondaryCursorFollower.ref}
                style={{
                  x: secondaryCursorFollower.x,
                  y: secondaryCursorFollower.y,
                }}
                key={index}
                className={'bg-black dark:bg-white block h-0.5 mb-6'}
              />
            );
          })}
        </span>
        <span
          className={`col-span-6 col-start-7 w-full row-span-3 row-start-2 overflow-hidden`}
        >
          {Array.from({ length: 1150 }).map((_, index) => {
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

            const prefersMotion = !window.matchMedia(
              '(prefers-reduced-motion: reduce)',
            ).matches;

            return (
              <motion.span
                key={index}
                {...(index % 8 === 0 &&
                  prefersMotion && { animate, transition })}
                className={`rounded-full inline-flex m-0.5 space-x-1 space-y-1 h-1 w-1 ${PrimaryColors.YELLOW}`}
              />
            );
          })}
        </span>
      </Grid>
    </div>
  );
}
