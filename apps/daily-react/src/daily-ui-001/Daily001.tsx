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
import React from 'react';

export function Daily001(): React.ReactNode {
  return (
    <main className='grid px-4 place-items-center h-screen bg-gray-50 dark:bg-gray-800'>
      <Card className='w-full max-w-2xl'>
        <Card.Body className='w-full max-w-2xl'>
          <FadeInStaggerGroup staggerSpeed={0.1} tag={Card.Body}>
            <FadeIn staggerOrder={0} fadeInDirection='DOWN'>
              <Avatar
                className='mb-8'
                alt='kurocado-studio'
                src='https://avatars.githubusercontent.com/u/148841069?s=200&v=4'
              />
            </FadeIn>
            <FadeIn staggerOrder={1}>
              <Typography weight='bold' size='2xl'>
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
        </Card.Body>
      </Card>
    </main>
  );
}
