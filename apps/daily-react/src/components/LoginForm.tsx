import {
  Avatar,
  Button,
  Card,
  FadeIn,
  FadeInStaggerGroup,
  Input,
  Label,
  Typography,
} from '@kurocado-studio/ui-react-research-and-development';
import { SurfaceColors } from '@ui';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { GlassContainer } from 'src/components/Glass';

export const LoginForm = () => {
  return (
    <GlassContainer
      className={twMerge(
        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full min-w-[300px] max-w-4xl',
      )}
    >
      <FadeIn
        tag={Card}
        as='article'
        className={`${SurfaceColors.MODAL} lg:p-12 w-full z-20`}
      >
        <FadeInStaggerGroup
          staggerSpeed={0.1}
          tag={Card.Body}
          as='form'
          className={SurfaceColors.MODAL}
        >
          <FadeIn staggerOrder={0} fadeInDirection='DOWN'>
            <Avatar
              className='mb-8'
              alt='kurocado-studio'
              src='https://avatars.githubusercontent.com/u/148841069?s=200&v=4'
            />
          </FadeIn>
          <FadeIn staggerOrder={1}>
            <Typography className={'font-display'} weight='bold' size='2xl'>
              Welcome Back
            </Typography>
            <Typography weight='light' className='mb-8 mt-4' size='lg'>
              Please enter your credentials.
            </Typography>
          </FadeIn>
          <FadeIn staggerOrder={3}>
            <Label htmlFor='email'>Email</Label>
            <Input
              className='mb-4'
              type='email'
              name='email'
              placeholder='e-mail@example.com'
            />
            <Label htmlFor='email'>Password</Label>
            <Input
              className='mb-8'
              type='password'
              name='password'
              placeholder='Password'
            />
            <Button fullWidth>Login</Button>
          </FadeIn>
        </FadeInStaggerGroup>
      </FadeIn>
    </GlassContainer>
  );
};
