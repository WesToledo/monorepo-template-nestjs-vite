# Monorepo Template NestJS Vite - Frontend

Modular React application following the **Antigravity** architecture guidelines.

## 🏗 Project Architecture

Follows a modular, feature-oriented structure designed for scalability:

- **`src/assets/`**: Static resources like images, SVGs, and fonts.
- **`src/components/`**: Reusable UI building blocks.
  - **`ui/`**: Atomic, low-level primitives (Buttons, Inputs, etc.) built using **Chakra UI v3**.
- **`src/contexts/`**: Shared state management using React Context (e.g., Theme/ColorMode).
- **`src/hooks/`**: Custom, reusable business logic and side effects.
- **`src/layouts/`**: Structural components wrapping pages for consistent UI shells.
- **`src/lib/`**: Third-party library configurations (e.g., Chakra system, API clients).
- **`src/pages/`**: View-level components mapped to specific routes.
- **`src/routes/`**: Routing infrastructure using React Router.
- **`src/services/`**: Data fetching and external API communication layer.
- **`src/styles/`**: Global style definitions and theme tokens.
- **`src/helpers/`**: Pure, side-effect-free utility functions.
- **`src/types/`**: Shared TypeScript interfaces.

## 🛠 Tech Stack

- **React 19** & **Vite 7**
- **TypeScript** (Strict mode)
- **Chakra UI v3** (with `next-themes`)
- **React Router 7**
- **Zod** (Schema validation)
- **Biome** (Linting & Formatting)
- **Vite PWA** (Offline support)

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint & Format

```bash
npm run lint
npm run format
```

## 🏷 Naming Conventions

- **Directories:** `kebab-case`
- **Components:** `PascalCase.tsx`
- **Hooks:** `camelCase.ts` starting with `use`
- **Utilities:** `kebab-case.ts`
