<template>
  <main
    class="grid px-4 place-items-center h-screen bg-gray-50 dark:bg-gray-800"
  >
    <Card class="w-full max-w-2xl">
      <FadeIn>
        <CardBody>
          <Avatar
            class="mb-8"
            alt="kurocado-studio"
            src="https://avatars.githubusercontent.com/u/148841069?s=200&v=4"
          />
          <Typography weight="bold" size="2xl"> Welcome Back </Typography>
          <Typography weight="light" className="mb-8 mt-4" size="lg">
            Please enter your credentials.
          </Typography>
          <Label for="email">Email</Label>
          <Input
            class="mb-4"
            type="email"
            name="email"
            placeholder="e-mail@example.com"
          />
          <Label for="email">Password</Label>
          <Input
            class="mb-8"
            type="password"
            name="password"
            placeholder="Password"
          />
          <Button type="submit" full-width>Login</Button>
        </CardBody>
      </FadeIn>
    </Card>
  </main>
</template>

<script setup lang="ts">
import {
  Avatar,
  Button,
  Card,
  CardBody,
  FadeIn,
  Input,
  Label,
  Typography,
} from '@kurocado-studio/ui-vue-research-and-development';
</script>
