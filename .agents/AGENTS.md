# AGENTS.md — Next-Boilerplate

This file provides guidance for AI agents (GitHub Copilot, Claude, Cursor, etc.) working on this codebase. Read this before making any changes.

---

## 🧠 Project Overview

**Next-Boilerplate** is a modern, production-ready Next.js boilerplate with glassmorphism UI theme. It uses a curated tech stack focused on type safety, developer experience, and scalability.

- **Owner:** Dimas Nuryadin ([@DimasNuryadin](https://github.com/DimasNuryadin))
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Package Manager:** npm
- **Node Version:** >= 18

---

## 📁 Folder Structure

```
next-boilerplate/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout (Providers, Navbar, Footer)
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles + glassmorphism variables
│   │   ├── providers.tsx           # Client providers (Jotai, React Query, ThemeProvider)
│   │   └── (routes)/               # Route groups
│   │       ├── login/page.tsx
│   │       ├── register/page.tsx
│   │       └── dashboard/
│   │           ├── layout.tsx      # Dashboard layout with Sidebar
│   │           ├── page.tsx        # Dashboard overview
│   │           ├── users/page.tsx
│   │           └── posts/page.tsx
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components (flat structure)
│   │   │   ├── button/
│   │   │   │   ├── button.tsx
│   │   │   │   ├── button.test.tsx
│   │   │   │   ├── button.stories.tsx
│   │   │   │   └── index.ts
│   │   │   └── [component-name]/   # Same pattern for all UI components
│   │   ├── layout/                 # Structural components
│   │   │   ├── navbar/
│   │   │   ├── footer/
│   │   │   └── sidebar/
│   │   └── shared/                 # Reusable feature components
│   │       ├── login-form/
│   │       └── theme-toggle/
│   ├── store/
│   │   ├── atoms/
│   │   │   ├── ui.ts               # themeAtom, sidebarOpenAtom
│   │   │   └── auth.ts             # userAtom
│   │   └── derived/
│   │       └── index.ts            # isAuthenticatedAtom, isDarkAtom
│   ├── hooks/
│   │   ├── useTheme.ts             # Wraps next-themes
│   │   ├── useAuth.ts              # Auth state via Jotai
│   │   └── useApi.ts               # React Query hooks (useUsers, usePosts, etc.)
│   ├── lib/
│   │   ├── api-client.ts           # openapi-fetch client instance
│   │   ├── query-client.ts         # React Query client config
│   │   ├── utils.ts                # cn() utility
│   │   └── validations.ts          # Zod schemas (loginSchema, registerSchema)
│   ├── services/
│   │   ├── openapi.json            # OpenAPI spec (source of truth)
│   │   ├── generated/              # Auto-generated files (do not edit manually)
│   │   └── index.ts                # Service layer (userService, postService)
│   ├── types/
│   │   ├── api.ts                  # Generated from OpenAPI spec (do not edit manually)
│   │   ├── common.ts               # Shared types (User, etc.)
│   │   └── env.d.ts                # Type-safe environment variables
│   └── config/
│       ├── site.ts                 # Site metadata
│       ├── navigation.ts           # Nav items config
│       └── constants.ts            # ROUTES, QUERY_KEYS, PAGINATION
├── __tests__/
│   ├── integration/                # Multi-module integration tests
│   └── e2e/                        # Playwright E2E tests
├── .storybook/                     # Storybook config
├── .husky/                         # Git hooks
├── .env.local                      # Local environment variables (not committed)
├── .env.example                    # Environment variables template
├── jest.config.ts
├── jest.setup.ts
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | Next.js | 16 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | v4 |
| UI Components | shadcn/ui + Radix UI | latest |
| Client State | Jotai | 2 |
| Server State | TanStack React Query | 5 |
| API Client | openapi-fetch | latest |
| API Types | openapi-typescript | 7 |
| Forms | React Hook Form + Zod | latest |
| Auth | Better Auth | latest |
| Theme | next-themes | latest |
| Animation | motion | latest |
| Icons | Lucide React | latest |
| Testing | Jest + React Testing Library | latest |
| E2E | Playwright | latest |
| Storybook | Storybook | latest |
| Git Hooks | Husky + lint-staged | latest |
| Linting | ESLint + Prettier | latest |

---

## 🎨 UI Theme — Glassmorphism

This boilerplate uses a **glassmorphism** design system with dark/light mode support.

### CSS Variables (defined in `src/app/globals.css`)

```css
/* Change these 2 lines to update the entire color theme */
--gradient-from: #7c3aed;  /* purple */
--gradient-to: #2563eb;    /* blue */
```

### Utility Classes

| Class | Usage |
|-------|-------|
| `.glass` | Frosted glass background (low opacity) |
| `.glass-card` | Glass card with padding and border radius |
| `.glass-strong` | Stronger glass effect |
| `.gradient-text` | Purple-to-blue gradient text |
| `.gradient-blob` | Background decorative blob element |

### Rules for UI Components
- Always use `.glass` or `.glass-card` for card-like elements
- Use `gradient-text` for headings and accents
- Use `border-white/20` for borders on glass elements
- Dark mode is handled automatically via CSS variables — do NOT hardcode colors

---

## 🗃️ State Management Rules

This boilerplate uses a **two-layer state approach**:

### Jotai (Client State)
Use for: UI state, theme, auth session, sidebar, modals

```ts
// ✅ Correct — simple global UI state
import { useAtom } from 'jotai'
import { sidebarOpenAtom } from '@/store/atoms/ui'

const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom)
```

```ts
// ✅ Correct — derived/computed state
import { atom } from 'jotai'
import { userAtom } from '@/store/atoms/auth'

export const isAuthenticatedAtom = atom((get) => get(userAtom) !== null)
```

### React Query (Server State)
Use for: API calls, data fetching, caching, loading/error states

```ts
// ✅ Correct — all API calls go through React Query hooks
const { data, isLoading, error } = useUsers()
```

### Rules
- **Never** fetch data directly in a component — always use a hook
- **Never** use Jotai for server/async data — use React Query
- **Never** use React Query for pure UI state — use Jotai
- All React Query hooks live in `src/hooks/useApi.ts`
- All Jotai atoms live in `src/store/atoms/`

---

## 🌐 API Call Best Practices

### Architecture: OpenAPI → Types → Client → Service → Hook → Component

```
openapi.json
    ↓ (npm run generate:api)
src/types/api.ts         ← auto-generated, DO NOT edit manually
    ↓
src/lib/api-client.ts    ← openapi-fetch client (typed)
    ↓
src/services/index.ts    ← service layer per resource
    ↓
src/hooks/useApi.ts      ← React Query hooks
    ↓
Component                ← consume hook, never call API directly
```

### Adding a New API Endpoint

**Step 1:** Add to `src/services/openapi.json`
```json
{
  "paths": {
    "/todos": {
      "get": {
        "summary": "Get all todos",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": { "$ref": "#/components/schemas/Todo" }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

**Step 2:** Regenerate types
```bash
npm run generate:api
```

**Step 3:** Add service in `src/services/index.ts`
```ts
export const todoService = {
  getAll: () => apiClient.GET('/todos'),
  getById: (id: number) =>
    apiClient.GET('/todos/{id}', { params: { path: { id } } }),
}
```

**Step 4:** Add React Query hook in `src/hooks/useApi.ts`
```ts
export function useTodos() {
  return useQuery({
    queryKey: [QUERY_KEYS.todos],
    queryFn: async () => {
      const { data, error } = await todoService.getAll()
      if (error) throw error
      return data
    },
  })
}
```

**Step 5:** Use in component
```tsx
const { data: todos, isLoading } = useTodos()
```

### Rules
- **Never** call `apiClient` directly in a component
- **Never** call `fetch()` or `axios` directly — always use `apiClient`
- **Always** handle `error` from `openapi-fetch` response
- **Always** add query key to `QUERY_KEYS` in `src/config/constants.ts`
- **Always** invalidate related queries after mutations

---

## 📦 Component Rules

### Creating a New Component

**UI Component** (shadcn-based, simple):
```
src/components/ui/[name]/
├── [name].tsx          # Main component
├── [name].test.tsx     # Unit test
├── [name].stories.tsx  # Storybook story
└── index.ts            # Re-export: export * from './[name]'
```

**Shared Component** (feature component):
```
src/components/shared/[name]/
├── [name].tsx
├── [name].test.tsx
├── [name].stories.tsx
└── index.ts
```

**Layout Component** (structural):
```
src/components/layout/[name]/
├── [name].tsx
├── [name].test.tsx
└── index.ts
```

### Import Rules
```tsx
// ✅ Correct — import per component
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Navbar } from '@/components/layout/navbar'
import { LoginForm } from '@/components/shared/login-form'

// ❌ Avoid — barrel imports for ui components
import { Button, Input, Card } from '@/components/ui'
```

### Component Rules
- All components use TypeScript — no `.jsx` files
- Client components must have `'use client'` at the top
- Server components are the default — only add `'use client'` when needed
- Use `cn()` from `@/lib/utils` for conditional class merging
- Never hardcode colors — always use CSS variables or Tailwind classes

---

## 🧪 Testing Rules

### Test File Location
```
# Unit tests — next to the source file
src/components/ui/button/button.test.tsx
src/hooks/useTheme.test.ts
src/lib/utils.test.ts

# Integration tests
__tests__/integration/auth.test.tsx

# E2E tests (Playwright)
__tests__/e2e/login.spec.ts
```

### Running Tests
```bash
npm test              # Run all unit tests
npm test -- --watch   # Watch mode
npm run test:coverage # With coverage report
```

### Test Rules
- Every new component must have at least a render test
- Every new utility function must have unit tests
- Mock external dependencies (next-themes, API calls)
- Use `@testing-library/react` for component tests
- Never test implementation details — test behavior

---

## 🔐 Authentication

Auth is handled by **Better Auth**. 

- Auth config lives in `src/lib/auth.ts`
- Protected routes are defined in `src/middleware.ts`
- Auth state is synced to Jotai via `userAtom` in `src/store/atoms/auth.ts`
- Use `useAuth()` hook to access auth state in components

### Protected Routes
Currently protected: `/dashboard`, `/profile`
Auth routes (redirect if logged in): `/login`, `/register`

---

## 📝 Code Style

### General Rules
- Use TypeScript strict mode — no `any` types
- Use named exports — no default exports for components
- Use `type` over `interface` for object types
- No barrel exports for `components/ui/`
- Import order: React → Next.js → Third-party → Internal (`@/`)

### Naming Conventions
| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `UserCard` |
| Hooks | camelCase with `use` prefix | `useUsers` |
| Atoms | camelCase with `Atom` suffix | `userAtom` |
| Files | kebab-case | `user-card.tsx` |
| Constants | SCREAMING_SNAKE_CASE | `QUERY_KEYS` |
| Types | PascalCase | `LoginSchema` |

### Commit Convention
Follow Conventional Commits:
```
feat: add user profile page
fix: resolve sidebar toggle on mobile
refactor: move api types to services folder
docs: update README with new env variables
test: add unit tests for useAuth hook
chore: update dependencies
```

---

## 🚀 Available Scripts

```bash
npm run dev           # Start development server (localhost:3000)
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Run ESLint
npm run format        # Run Prettier
npm run generate:api  # Generate TypeScript types from openapi.json
npm test              # Run Jest unit tests
npm run storybook     # Start Storybook (localhost:6006)
npm run build-storybook # Build Storybook
```

---

## ⚙️ Environment Variables

```env
# Required
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000

# Better Auth (when configured)
BETTER_AUTH_SECRET=your-secret-here
BETTER_AUTH_URL=http://localhost:3000
```

Copy `.env.example` to `.env.local` before starting development.

---

## ⚠️ Important Notes for Agents

1. **Never edit** `src/types/api.ts` manually — it is auto-generated
2. **Never edit** `src/services/generated/` — auto-generated files
3. **Always run** `npm run generate:api` after updating `openapi.json`
4. **Never use** `localStorage` or `sessionStorage` directly — use Jotai `atomWithStorage`
5. **Never call** API directly in components — always go through service → hook
6. **Always add** `suppressHydrationWarning` on `<html>` tag (required for next-themes)
7. **Never hardcode** theme colors — use CSS variables from `globals.css`
8. **Always use** `--no-verify` flag when committing if no tests exist yet for new features
9. **The `.env.local`** file is gitignored — never commit secrets
10. **Middleware** handles route protection — update `src/middleware.ts` for new protected routes
