# System Architecture - Orqys Playground

This document outlines the architectural patterns, directory structure, and technical conventions used in the Orqys Playground repository. It serves as a guide for AI agents and human developers to maintain consistency across the codebase.

## 🚀 Technology Stack

- **Core Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Outfit)
- **Icons**: Custom SVG icons managed with `@svgr/webpack`
- **Charts**: ApexCharts (`react-apexcharts`)
- **Forms**: Flatpickr for date picking
- **State Management**: React Context API
- **Deployment**: Optimized for Vercel/Next.js hosting

---

## 📂 Directory Structure

```text
/
├── public/                # Static assets (images, logos, icons)
│   └── images/
│       └── logo/          # Brand logos (Orqys)
├── src/
│   ├── app/               # Next.js App Router (Routing Engine)
│   │   ├── (admin)/       # Protected/Admin dashboard routes with Sidebar
│   │   ├── (full-width-pages)/ # Auth and standalone pages
│   │   ├── globals.css    # Global Tailwind styles
│   │   └── layout.tsx     # Root layout with Theme and Sidebar providers
│   ├── components/        # Reusable UI Components (Feature-based)
│   │   ├── charts/        # Data visualization
│   │   ├── common/        # Shared elements (Grid shapes, Toggles)
│   │   ├── ecommerce/     # Dashboard-specific widgets
│   │   ├── form/          # Inputs, Selects, Checkboxes
│   │   ├── tables/        # Data tables
│   │   └── ui/            # Basic UI elements (Buttons, Badges)
│   ├── context/           # React Context Providers
│   │   ├── SidebarContext.tsx
│   │   └── ThemeContext.tsx
│   ├── hooks/             # Custom React Hooks
│   ├── icons/             # Custom SVG Icons (SVGR)
│   ├── layout/            # Layout-specific components (Sidebar, Header)
│   └── svg.d.ts           # Type definitions for SVG imports
├── package.json           # Dependencies and scripts (npm run dev)
├── next.config.ts         # Next.js & Turbopack configuration
├── tailwind.config.ts     # Tailwind CSS theme extension
└── tsconfig.json          # TypeScript configuration
```

---

## 🏗️ Core Architectural Patterns

### 1. Routing & Layouts
- The app uses **Route Groups** (`(...)`) to organize layouts without affecting URLs.
- **`(admin)`**: Used for pages that require the main sidebar and header structure.
- **`(full-width-pages)`**: For login, signup, and marketing pages where the sidebar is absent.

### 2. State Management
- Local UI state (Sidebar collapse, Theme mode) is handled via **React Context** in `src/context`.
- Data should be fetched using standard Next.js Server Components where possible, with Client Components for interactive elements.

### 3. Styling & Theming
- **Tailwind CSS v4**: This project uses Tailwind v4 with the `@tailwindcss/postcss` plugin.
- **Theme Configuration**: Instead of `tailwind.config.js`, the theme is configured using the `@theme` directive in `src/app/globals.css`. This includes custom colors (brand, error, success, etc.), breakpoints, and fonts.
- **Dark Mode**: Supported via a custom `ThemeProvider` that manages a "dark" class on the body. A custom variant `dark` is defined in `globals.css` as `@custom-variant dark (&:is(.dark *));`.
- **Theming Strategy**: Avoid hardcoding hex values; use Tailwind classes or CSS variables defined in `@theme`.

### 4. Components
- **Atomic-ish Design**: Basic elements live in `src/components/ui`. Functional widgets live in feature-specific directories like `src/components/ecommerce`.
- All components should be typed with TypeScript interfaces.

### 5. Icons
- Icons are stored as SVG files in `src/icons` and imported as React components thanks to `@svgr/webpack`.
- Usage: `import HomeIcon from '@/icons/home.svg'`.

---

## 🛠️ Development Workflow

- **Local Development**: `npm run dev`
- **Build**: `npm run build`
- **Branding**: The project uses **Orqys** branding. Changes to logos or favicons should be made in `public/images/logo/` and updated in `src/app/layout.tsx`.
- **Git Strategy**: The `main` branch tracks the production-ready playground. Remotes are configured to `https://github.com/Orqys/orqys-playground.git`.

---

## 🤖 Guidance for AI

- **Navigation**: Always check `src/app/layout.tsx` for global metadata and providers.
- **Creating Pages**: Determine if a page belongs in `(admin)` or `(full-width-pages)` based on whether it needs a sidebar.
- **Theming**: When adding components, ensure they support both light and dark modes using Tailwind `dark:` prefix.
- **SVGs**: Do not use `<img>` tags for internal icons; import them as components from `@src/icons`.
