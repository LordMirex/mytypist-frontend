# Visual Asset & Iconography Catalog

This document catalogs every icon, image, and visual asset used across `v1` and `v2`, ensuring a consistent visual language for the `main` project.

## 1. Iconography System
- **Library**: `Lucide-React`.
- **v2 Wrapper**: `AppIcon.jsx` uses a dynamic lookup for Lucide icons.
- **Key Icons per Context**:
  - **Auth**: `User`, `Mail`, `Lock`, `Shield`, `LogOut`.
  - **Document Operations**: `Plus`, `FileText`, `PenTool`, `Download`, `Share2`, `Save`, `Eye`.
  - **UI Interaction**: `ChevronDown`, `ChevronRight`, `Menu`, `X`, `Search`, `Filter`, `HelpCircle`, `Info`.
  - **Status**: `CheckCircle`, `AlertCircle`, `Clock`, `TrendingUp`, `Zap`, `Brain`.
  - **Admin**: `Shield`, `Users`, `Activity`, `Database`, `Settings`, `Upload`.

## 2. Image Assets

### Public Assets (`v1/public`)
- `favicon.ico`: Standard site icon.
- `placeholder.svg`: Used for template previews when an image is missing.
- `robots.txt`: Search engine instructions.
- `_headers`: Vercel/Netlify security headers.

### Public Assets (`v2/public`)
- `manifest.json`: PWA metadata.
- `assets/images/no_image.png`: Fallback for broken image links.

### External/CDN Images (v2 Mocks)
- **Templates**:
  - Business Letter: `https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop`
  - Proposal: `https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=400&h=500&fit=crop`
  - Invoice: `https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=400&h=500&fit=crop`
- **Dashboards**:
  - Resume Thumbnail: `https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop`
  - Report Thumbnail: `https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=400&h=300&fit=crop`

## 3. Brand Primitives (CSS)
- **Gradients**:
  - Primary: `from-primary to-brand-authority` (Blue to Dark Blue).
  - Conversion: `from-orange-500 to-orange-600`.
  - Muted: `from-muted/30 via-background to-muted/30`.
- **Patterns**:
  - `bg-grid-pattern`: A subtle dot/line grid used in v2 Hero sections.
- **Radius**:
  - Default: `0.5rem` (`rounded-lg`).
  - Interactive: `0.75rem` (`rounded-xl`).
  - Pours: `1rem` (`rounded-2xl`).

## 4. Animation Styles
- **Entrance**: `animate-fade-in` (0.15s), `animate-slide-in` (0.1s), `animate-scale-in`.
- **Engagement**: `animate-bounce-gentle` (Search focus), `animate-pulse-slow` (Loading states).
- **Hover**: `interactive` (Translate-Y -1px).
