# Kurocado Studio Daily UI

| Platform        | URL                                                                                |
| --------------- | ---------------------------------------------------------------------------------- |
| React Storybook | [daily-ui-challenge-react.vercel.app](https://daily-ui-challenge-react.vercel.app) |
| Vue Storybook   | [daily-ui-challenge-vue.vercel.app](https://daily-ui-challenge-vue.vercel.app)     |

## Overview

**Kurocado Studio Daily UI** is a hands-on initiative to design and implement user interface
components using both **React** and **Vue 3**. It serves as a daily creative exercise in UI/UX and a
testing ground for evaluating multi-framework workflows and design-token consistency.

This repo is where experimental components are prototyped, iterated on, and tested before being
refined and exported to
[`figma-to-framework`](https://github.com/Kurocado-Studio/figma-to-framework) — a public-facing
technical foundation that will evolve into the **Kurocado Design System**.

## Context

### R\&D Workflow

Each project in the initiative integrates internal, private packages from the Kurocado Studio R\&D
layer:

- `@kurocado-studio/ui-research-and-development`
- `@kurocado-studio/motion-research-and-development`

These packages act as root sources for:

- Exploring **framework portability** (React, Vue, etc.)
- Defining **design token mappings**
- Validating **developer experience**, including type safety and API surface patterns

This R\&D layer is where ideas are tested and refined. Once validated, stable components are
promoted to [`figma-to-framework`](https://github.com/Kurocado-Studio/figma-to-framework) — the
**technical foundation** for the upcoming **Kurocado Design System**.

[`figma-to-framework`](https://github.com/Kurocado-Studio/figma-to-framework) serves as:

- The public-facing **portfolio** and **demo** repository
- The integration point for Figma assets and Token Studio mappings
- A cross-framework component library where finalized, open-source components will live

All design and development efforts here are ultimately in service of building a scalable,
multi-framework design system grounded in real-world use and R\&D iteration.

## Purpose

- Explore daily UI patterns through design and code
- Build reusable components across React and Vue
- Practice product design and frontend engineering
- Contribute stable components to
  [`figma-to-framework`](https://github.com/Kurocado-Studio/figma-to-framework)

## Tech Stack

- **Design**: Figma (added optionally as designs are created)
- **Frontend**: React + Vue 3
- **Styling**: Tailwind CSS
- **Component Library**:
  [`figma-to-framework`](https://github.com/Kurocado-Studio/figma-to-framework)

Each UI challenge includes:

- A React implementation
- A Vue implementation
- (Optionally) a Figma design

## Goals

- Improve speed and accuracy translating designs into code
- Maintain parity between React and Vue implementations
- Evaluate component reusability and framework flexibility
- Create a high-quality portfolio of UI work

## Limitations

This project relies on private, internal packages:

- `@kurocado-studio/ui-research-and-development`
- `@kurocado-studio/motion-research-and-development`

These packages are part of Kurocado Studio's internal R\&D efforts and are **not publicly
accessible**.

As a result:

- This repository will **not install or run properly** unless you are a member of the Kurocado
  Studio GitHub organization with access to these packages.
- Components are experimental and used to evaluate design and animation patterns before being
  finalized.

The **public-facing demo and portfolio** of stable components will be published under:

- [`figma-to-framework`](https://github.com/Kurocado-Studio/figma-to-framework)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Kurocado-Studio/daily-ui.git
cd daily-ui
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run locally

```bash
pnpm run dev
```

## Components

Components are added incremental and may include:

- Forms
- Cards
- Dashboards
- Modals
- Other UI patterns

All components are experimental until finalized and merged into
[`figma-to-framework`](https://github.com/Kurocado-Studio/figma-to-framework).

## Notes

- UI ideas are original or inspired by prompts from the
  [Daily UI Challenge](https://www.dailyui.co/)
- This project emphasizes quality, reusability, and framework-agnostic component design
- Screenshots and embeds will be added as designs evolve
