# Kurocado Studio Daily UI

| Platform        | URL                                                                                |
| --------------- | ---------------------------------------------------------------------------------- |
| React Storybook | [daily-ui-challenge-react.vercel.app](https://daily-ui-challenge-react.vercel.app) |

## Overview

**Kurocado Studio Daily UI** is a creative initiative to design and implement user interface
components in **React**.

It functions as both:

- A **portfolio showcase** — demonstrating UI/UX craft through Daily UI challenges.
- An **R&D sandbox** — testing the internal packages that power the upcoming **Kurocado UI Kit** (a
  theming and UI SDK for building scalable design systems).

[`figma-to-framework`](https://github.com/Kurocado-Studio/figma-to-framework) exists as a **proof of
concept** for the theming engine — a high-level preview of how design tokens can be mapped from
Figma into runtime theming across frameworks.

## Context

### R&D Workflow

This repository integrates private, internal packages under active development:

- `@kurocado-studio/ui-research-and-development`
- `@kurocado-studio/motion-research-and-development`

These serve as the core engine for:

- **Design token theming** and runtime token mapping
- **Animation and motion primitives** for fluid interaction
- **Developer experience testing** (type safety, API design, DX validation)

Once stable, these packages will be released as the **Kurocado UI Kit** — an open-source SDK for
creating design systems with React, Tailwind, and design tokens at the core.

## Purpose

- Showcase UI/UX craft through Daily UI challenges
- Test and validate internal R&D packages
- Build reusable, theme-aware React components
- Provide early demonstrations of the Kurocado UI Kit vision through
  [`figma-to-framework`](https://github.com/Kurocado-Studio/figma-to-framework)

## Tech Stack

- **Design**: Figma (select challenges include design files)
- **Frontend**: React
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + internal motion utilities
- **Component Foundation**: Internal R&D packages

Each UI challenge includes:

- A **React implementation**
- (Optionally) a **Figma design reference**

## Goals

- Practice rapid prototyping and design-to-code accuracy
- Validate the R&D theming engine and motion layer
- Build a portfolio of reusable UI patterns
- Evolve towards a scalable, open-source UI Kit

## Access & Limitations

This project depends on internal, private packages:

- `@kurocado-studio/ui-research-and-development`
- `@kurocado-studio/motion-research-and-development`

As a result:

- The repo will **not run locally** without access to these packages
- Components here are **experimental prototypes** until stabilized within the Kurocado UI Kit

The **public-facing demo** of the theming engine lives under:

- [`figma-to-framework`](https://github.com/Kurocado-Studio/figma-to-framework)  
  These packages are part of Kurocado Studio's internal R\&D efforts and are **not publicly
  accessible**.

As a result:

- This repository will **not install or run properly** unless you are a member of the Kurocado
  Studio GitHub organization with access to these packages.
- Components are experimental and used to evaluate design and animation patterns before being
  finalized.

## Notes

- UI ideas are original or inspired by prompts from the
  [Daily UI Challenge](https://www.dailyui.co/)
- This project emphasizes quality, reusability, and framework-agnostic component design
- Screenshots and embeds will be added as designs evolve
