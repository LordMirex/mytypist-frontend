# Technical Implementation Specification

This document provides the low-level technical details required to build the MyTypist frontend from scratch, including the directory structure, global state management, and critical utility logic.

## 1. Directory Structure (Proposed for `main`)

```text
main/
├── src/
│   ├── assets/             # SVGs, Images, Favicons
│   ├── components/
│   │   ├── navigation/     # Shared Nav, MobileMenu, Logo
│   │   ├── studio/         # Document Creator sub-components
│   │   ├── ui/             # Shadcn base components
│   │   └── shared/         # Layout, ErrorBoundary, SEO
│   ├── hooks/              # useIsMobile, useToast, useAuth
│   ├── lib/                # cn utility, api client (React Query)
│   ├── pages/
│   │   ├── admin/          # Admin suite pages
│   │   ├── auth/           # Login, Signup, ForgotPassword
│   │   ├── dashboard/      # User dashboard pages
│   │   ├── document/       # Studio, Templates, Gallery
│   │   └── marketing/      # Home, Pricing, About, etc.
│   ├── styles/             # tailwind.css, globals.css
│   ├── types/              # TypeScript interfaces/types
│   ├── utils/              # Helper functions, data formatters
│   ├── App.tsx             # Root Router
│   └── main.tsx            # Entry Point
├── public/                 # Static assets
├── .env                    # Environment variables
├── tailwind.config.ts      # Merged design system
└── tsconfig.json           # TS configuration
```

## 2. Global State & Logic

### Authentication (Proposed)
- **Library**: `zustand` (recommended over v1's local `useState` mock).
- **State**: `user`, `role`, `isAuthenticated`.
- **Logic**: Persistent login via `localStorage` or `cookies`.

### Document State (Studio)
- **Object Schema**:
  ```typescript
  interface DocumentState {
    templateId: string;
    title: string;
    content: string;
    formData: Record<string, any>;
    recipients: string[];
    progress: number;
  }
  ```
- **Live Sync**: Use a `useEffect` hook to calculate `progress` whenever `formData` or `content` changes.

## 3. Critical Utilities

### Class Merging (`cn`)
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Date Formatting
Standardized date formatting for Dashboard and Admin tables:
- `toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })`

## 4. Dependencies to Install

### Essential
- `react-router-dom`: Routing.
- `lucide-react`: Icons.
- `clsx`, `tailwind-merge`: Utility styles.
- `framer-motion`: For v2's smooth animations.
- `react-helmet-async`: SEO management.
- `@tanstack/react-query`: Data fetching and caching.

### UI Foundation (v1 Extraction)
- `@radix-ui/react-*`: Primitives for Shadcn components.
- `tailwindcss-animate`: For animation keyframes.

## 5. Performance Optimization
- **Code Splitting**: Use `React.lazy` for all routes outside of the core marketing pages (Home, Login, Signup).
- **Asset Preloading**: Preload the **Playfair Display** font and critical Hero images.
- **Image Optimization**: Use WebP format for all gallery thumbnails.
