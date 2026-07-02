# Lumina Learn

A production-ready marketing website for **Lumina Learn** — a modern Learning Management System (LMS). Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Font | Inter (via `next/font`) |

---

## Getting Started

### Prerequisites

- Node.js **18.17+** (required by Next.js 14)
- npm, yarn, or pnpm

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## Project Structure

```
lumina-learn/
├── app/
│   ├── globals.css          # Tailwind base + custom utilities
│   ├── layout.tsx           # Root layout, Inter font, metadata
│   └── page.tsx             # Home page — assembles all sections
│
├── components/
│   ├── Navbar.tsx           # Sticky nav, scroll effect, mobile menu
│   ├── Hero.tsx             # Split hero with headline + dashboard mockup
│   ├── DashboardMockup.tsx  # Pixel-precise HTML/CSS LMS dashboard
│   ├── InstallerModal.tsx   # 4-step OS installer with progress animations
│   ├── Features.tsx         # 6-feature grid
│   ├── DashboardPreview.tsx # Tabbed product showcase (3 views)
│   ├── Benefits.tsx         # Large stats + ratings callout
│   ├── Testimonials.tsx     # 3-column quote cards
│   ├── Pricing.tsx          # 3-tier pricing with monthly/annual toggle
│   ├── CTASection.tsx       # Final CTA banner
│   └── Footer.tsx           # Multi-column footer with social links
│
├── hooks/
│   └── useScrollReveal.ts   # IntersectionObserver scroll animation hook
│
├── tailwind.config.ts       # Custom brand colors, shadows, animations
├── next.config.mjs
├── tsconfig.json
├── postcss.config.js
└── README.md
```

---

## Key Features

### Installer Modal
Click **"Download Desktop App"** anywhere on the page to trigger a polished 4-step installer:
1. **Platform selection** — Windows, macOS, or Linux
2. **Download progress** — animated bar with real-time step labels
3. **Install progress** — separate animated installation phase
4. **Success screen** — green checkmark with "Launch App" CTA

### Dashboard Mockup
The hero section contains a fully HTML/CSS-rendered LMS dashboard (no images required), featuring:
- A dark sidebar with navigation
- Stat cards (completed courses, hours learned, certificates, streak)
- Live-looking course cards with progress bars
- Floating "Course completed" and learner badges

### Scroll Animations
All sections use a custom `useScrollReveal` hook (IntersectionObserver) for clean, performant fade-up animations on scroll.

### Responsive Design
- Mobile-first layouts throughout
- Hamburger menu with animated slide-down drawer
- Dashboard mockup hidden on mobile (shows text-only hero)
- Pricing grid collapses to single column on small screens

---

## Design System

| Token | Value |
|---|---|
| Primary blue | `#1877F2` |
| Dark blue | `#0E5FCC` |
| Accent green | `#10B981` |
| Background | `#FFFFFF` / `#F8FAFC` |
| Text primary | `#0F172A` |
| Text muted | `#64748B` |
| Border | `#E2E8F0` |
| Font | Inter (weights 400–900) |

---

## Accessibility

- Semantic HTML with correct heading hierarchy
- `aria-label`, `aria-expanded`, `aria-controls`, `aria-modal` on interactive elements
- `role="navigation"`, `role="dialog"`, `role="contentinfo"` applied correctly
- All interactive elements are keyboard-accessible with visible focus rings
- `aria-hidden="true"` on decorative elements and mockups
- Reduced-motion respected via Framer Motion's `useReducedMotion` compatibility

---

## Customization

### Changing brand colors
Edit `tailwind.config.ts` → `theme.extend.colors.brand`:
```ts
brand: {
  500: '#YOUR_COLOR',
  600: '#YOUR_DARKER_COLOR',
}
```

### Adding a new section
1. Create `components/YourSection.tsx`
2. Import and add to `app/page.tsx` inside `<main>`

### Connecting real downloads
Replace the `<button onClick={onOpenModal}>` in `InstallerModal.tsx` step 4 with actual download URLs per platform using `window.location.href` or `<a download>` links.

---

## License

MIT — use freely for commercial and personal projects.
