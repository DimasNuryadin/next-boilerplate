# Next-Boilerplate 🚀

A modern, production-ready Next.js boilerplate with a curated set of tools and best practices. Built for developers who want to skip the setup and start building.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Jotai](https://img.shields.io/badge/Jotai-2-black)](https://jotai.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Features

- **Next.js 16** with App Router and React Server Components
- **TypeScript** — strict mode, fully typed
- **Tailwind CSS v4** — utility-first styling
- **shadcn/ui** — accessible, composable UI components (Radix UI)
- **Jotai** — atomic state management, lightweight and minimal
- **React Query** — async server state, caching, and data fetching
- **OpenAPI TypeScript** — auto-generate types from OpenAPI/Swagger spec
- **openapi-fetch** — fully type-safe HTTP client
- **React Hook Form + Zod** — performant forms with schema validation
- **NextAuth.js v5** — authentication with App Router support
- **React Compiler** — automatic memoization, zero manual useMemo/useCallback
- **Husky + lint-staged** — pre-commit hooks for clean code
- **Prettier + ESLint** — consistent formatting and linting
- **Commitlint** — conventional commit messages

---

## 📁 Folder Structure

```
my-boilerplate/
└─ src/
   ├─ app/                  # Next.js App Router (layouts, pages, routes)
   ├─ components/
   │  ├─ ui/                # shadcn/ui components
   │  ├─ layout/            # Navbar, Footer, Sidebar, etc.
   │  └─ shared/            # Reusable components
   ├─ store/
   │  ├─ atoms/             # Jotai atoms (ui.ts, auth.ts)
   │  └─ derived/           # Derived/computed atoms
   ├─ hooks/                # Custom React hooks
   ├─ lib/
   │  ├─ api-client.ts      # openapi-fetch client
   │  ├─ query-client.ts    # React Query client config
   │  └─ utils.ts           # cn() and other utilities
   ├─ services/
   │  ├─ generated/         # Auto-generated OpenAPI types
   │  └─ index.ts           # Service layer per resource
   ├─ types/
   │  ├─ api.ts             # Generated from OpenAPI spec
   │  ├─ common.ts          # Shared types (User, etc.)
   │  └─ env.d.ts           # Type-safe environment variables
   └─ config/
      ├─ site.ts            # Site metadata
      └─ constants.ts       # App-wide constants
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18`
- pnpm `>= 9`

### Installation

```bash
# Clone the repository
git clone https://github.com/DimasNuryadin/next-boilerplate.git
cd next-boilerplate

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
```

---

## 🗂️ State Management

This boilerplate uses a two-layer state approach:

| Layer        | Tool        | Purpose                           |
| ------------ | ----------- | --------------------------------- |
| Server state | React Query | API calls, caching, loading/error |
| Client state | Jotai       | UI state, theme, auth session     |

```ts
// Jotai atom example
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const themeAtom = atomWithStorage<"light" | "dark">("theme", "light");
```

```ts
// React Query example
const { data, isLoading } = useQuery({
  queryKey: ["users"],
  queryFn: () => userService.getAll(),
});
```

---

## 🌐 OpenAPI Integration

Generate TypeScript types from your OpenAPI spec:

```bash
# Place your spec at src/services/openapi.json, then:
pnpm generate:api
```

This generates `src/types/api.ts` with fully typed paths, request bodies, and responses.

---

## 📜 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Run Prettier
pnpm generate:api # Generate types from OpenAPI spec
pnpm test         # Run unit tests
```

---

## 🧱 Tech Stack

| Category       | Technology              |
| -------------- | ----------------------- |
| Framework      | Next.js 16 (App Router) |
| Language       | TypeScript 5            |
| Styling        | Tailwind CSS v4         |
| UI Components  | shadcn/ui + Radix UI    |
| State (client) | Jotai                   |
| State (server) | TanStack React Query    |
| API Client     | openapi-fetch           |
| API Types      | openapi-typescript      |
| Forms          | React Hook Form + Zod   |
| Auth           | NextAuth.js v5          |
| Icons          | Lucide React            |
| Linting        | ESLint + Prettier       |
| Git Hooks      | Husky + lint-staged     |
| Deployment     | Vercel                  |

---

## 📄 License

MIT © [Dimas Nuryadin](https://github.com/DimasNuryadin)
