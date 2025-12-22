# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TypeScript. This site showcases my professional experience, projects, and skills as a Senior Frontend Engineer.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (Static Export)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: CSS Modules
- **Icons**: React Icons
- **Image Gallery**: Yet Another React Lightbox
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js 18+ (or as specified in `package.json` engines)
- pnpm (recommended) or npm/yarn

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Build for production (creates static export in ./out)
pnpm build
```

### Test Production Build Locally

```bash
# Build and serve locally
pnpm test:build
```

This builds the site and serves it locally so you can test the production build before deploying.

## 📁 Project Structure

```
portfolio-react-v4.0/
├── pages/              # Next.js pages (routes)
│   ├── _app.tsx       # App wrapper
│   ├── _document.tsx  # Document structure
│   ├── _error.tsx     # Error page
│   ├── index.tsx      # Home page
│   ├── about.tsx      # About page
│   ├── contact.tsx    # Contact page
│   └── portfolio.tsx  # Portfolio page
├── src/
│   ├── components/    # React components
│   │   ├── Animated/           # Animation wrapper
│   │   ├── AnimateOnScroll/    # Scroll animations
│   │   ├── ImageGallery/       # Image gallery component
│   │   ├── PageContent/        # Page content wrapper
│   │   ├── ResumeJobsInfo/     # Resume job listings
│   │   ├── SiteFooter/         # Site footer
│   │   ├── SiteHead/           # SEO head component
│   │   ├── SiteHeader/         # Site header/navigation
│   │   ├── SiteLayout/         # Main layout wrapper
│   │   ├── SiteNavigation/     # Navigation component
│   │   └── SiteNavigationItem/ # Navigation item
│   ├── constants/     # Data constants
│   │   ├── galleryPhotos.tsx
│   │   ├── navData.tsx
│   │   └── resumeData.tsx
│   ├── hooks/         # Custom React hooks
│   │   ├── useAnimateOnScroll.tsx
│   │   └── useIntersectionObserver.tsx
│   ├── lib/           # Utilities
│   │   └── fonts.ts   # Font configuration
│   └── styles/        # Global styles
│       ├── globals.css
│       └── theme.ts
├── next.config.js     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## 🎨 Features

- **Responsive Design**: Mobile-first, works on all screen sizes
- **Performance Optimized**: Static export for fast loading
- **Type-Safe**: Full TypeScript implementation
- **Accessible**: Semantic HTML and ARIA attributes
- **SEO Friendly**: Proper meta tags and structured data
- **Smooth Animations**: Custom animation components
- **Image Gallery**: Interactive lightbox for portfolio images

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server (requires build first)
- `pnpm test:build` - Build and serve locally for testing
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm lint` - Run ESLint

## 🚢 Deployment

This site is configured for static export and can be deployed to any static hosting service.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

```bash
# Build the site
pnpm build

# Upload the contents of ./out to your hosting provider
```

## 🧪 Code Quality

- **ESLint**: Configured with Next.js and Prettier
- **Prettier**: Code formatting
- **TypeScript**: Strict type checking enabled
- **No Console Logs**: ESLint rule prevents console statements in production code

## 📄 License

ISC

## 👤 Author

Kristine Pemberton

---

Built with ❤️ using Next.js and React
