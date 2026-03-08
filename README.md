# Garments E-Commerce Platform

A highly optimized full-stack web application designed for a garments business. Built with a strong emphasis on clean architecture, minimal code duplication, strict typing, and high performance.

## 🚀 Tech Stack

- **Frontend**: React (via Vite) + TypeScript
- **Backend**: Node.js + Express + TypeScript
- **Database, Auth & Storage**: Supabase (PostgreSQL) replaces MongoDB in this architecture.
- **Tooling**: Strict ESLint, Prettier, TypeScript Strict Mode (`tsc`)

## 🎯 Engineering Philosophy

As a senior developer, this architecture strictly adheres to the following principles:

- **Zero Duplication (DRY)**: Extensive use of a shared `types` package for both frontend and backend means writing interfaces only once.
- **Minimalist Codebase (KISS)**: Less code means fewer bugs. We avoid over-engineering and bloated libraries (e.g., opting for native Context or Zustand over Redux).
- **Absolute Type Safety**: `strict: true` in `tsconfig.json` and strict ESLint rules ban `any`, ensuring runtime stability.

## 📁 Suggested Folder Structure

A monorepo-style setup ensures that we don't duplicate code between the client and server.

```text
ecommerceTest/
├── frontend/             # React application (Vite)
├── backend/              # Express API
├── shared/               # Shared TS Interfaces (e.g., Product, User, Order)
├── .eslintrc.cjs         # Global Strict ESLint configuration
├── tsconfig.json         # Base strict TypeScript config
└── README.md
```

## 🗺️ Step-by-Step Implementation Plan

### Phase 1: Infrastructure & Configuration

1. **Initialize Project**: Set up the workspace folder structure (`frontend`, `backend`, `shared`).
2. **TypeScript & Linter Setup**: Configure a strict base `tsconfig.json` and `.eslintrc.cjs` at the root level to enforce standards uniformly across the entire stack.
3. **Database Architecture (Supabase)**:
   - Define minimal and normalized SQL schema (`users`, `products`, `categories`, `orders`).
   - Configure Row Level Security (RLS) policies to handle permissions natively, reducing backend authorization code.

### Phase 2: Shared Logic & Backend (Express)

1. **Shared Types**: Define universal TypeScript models (`IProduct`, `IUser`, `cartItem`) in the `shared/` folder.
2. **Core Setup**: Initialize Express with minimal middleware (cors, helmet, express.json).
3. **Supabase Integration**: Set up the Supabase admin client for secure operations.
4. **API Routes**: Create RESTful endpoints using a controller-service pattern.
   - Example endpoints: `/api/products` (filter, pagination), `/api/orders` (checkout flow).
5. **DRY Error Handling**: Implement a single global error-handling middleware to avoid repetitive `try/catch` blocks in every route.

### Phase 3: Frontend (React)

1. **Core Layout**: Initialize Vite React-TS. Build core layout boundaries (Navbar, Footer, Error Boundaries).
2. **Supabase Auth Integration**: Implement seamless JWT session management (Login/Register/OAuth) using Supabase's native client.
3. **Reusable UI Components**: Build completely atomic, generic UI components (e.g., `<Button />`, `<Input />`, `<Modal />`) to prevent writing duplicate HTML/CSS.
4. **State Management**: Use abstract custom hooks (e.g., `useCart()`) bound to React Context for simple, global state propagation.
5. **Views**: Implement Product Catalog (with filters), Shopping Cart, Checkout, and User Profile.

### Phase 4: Quality Assurance & Optimization

1. **Linting Check**: Run `npx eslint "src/**/*.{ts,tsx}" --max-warnings=0`. Ensure absolutely zero `ts-ignore` statements.
2. **Type Checking**: Run `tsc --noEmit` across all modules.
3. **Optimization**: Code splitting via `React.lazy()` for route-level chunking, preventing users from downloading the whole app at once.

## 🛠️ Best Practices to Follow During Development

- **Never use `any`**. Use `unknown` if a type is truly dynamic, then narrow it down.
- **Destructure early**. Extract props and variables at the top of functions for readability.
- **Fail Fast**. Validate inputs early in backend controllers and return `400 Bad Request` immediately to save execution time.
- **Keep Components Small**. If a React component exceeds 150 lines, it usually needs to be broken down into sub-components.

---

_Ready to start coding? Let's move to Phase 1 and initialize the repositories!_
