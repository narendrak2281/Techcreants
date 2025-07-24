# Techcreants Website

A modern, high-performance website for Techcreants built with Next.js 15, React 19, TypeScript, and Tailwind CSS, managed with Bun.

## 🚀 Tech Stack

### Frontend

- **Next.js 15.1.3** - React framework with App Router
- **React 19.0.0** - Latest React with concurrent features
- **TypeScript 5.7.2** - Type safety and enhanced DX
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 11.14.4** - Animations and transitions
- **Radix UI** - Accessible component primitives

### Package Manager

- **Bun 1.1.34** - Ultra-fast package manager and runtime

### Development Tools

- **ESLint 9.17.0** - Code linting
- **Prettier 3.4.2** - Code formatting
- **Jest 29.7.0** - Unit testing
- **Playwright 1.49.1** - E2E testing

## 📋 Prerequisites

1. **Install Bun** (recommended):

   ```bash
   # Windows (PowerShell)
   irm bun.sh/install.ps1 | iex

   # macOS/Linux
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Node.js 20+** (fallback if Bun is not available)

## 🛠️ Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd techcreants-website
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Setup environment variables**:

   ```bash
   cp .env.local.example .env.local
   ```

   Update the environment variables in `.env.local`:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
   ```

## 🚀 Development

### Start the development server:

```bash
bun dev
```

The application will be available at `http://localhost:3000`.

### Other useful commands:

```bash
# Type checking
bun run type-check

# Linting
bun run lint

# Code formatting
bun run format

# Build for production
bun run build

# Start production server
bun start

# Run tests
bun test

# Run E2E tests
bun run test:e2e
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── sections/      # Page sections
│   └── navigation/    # Navigation components
└── lib/               # Utilities and types
    ├── api.ts         # API client
    ├── types.ts       # TypeScript types
    └── utils.ts       # Utility functions
```

## 🎨 Design System

### Colors (Techcreants Brand)

- **Primary**: `#28B9F2` - Links, buttons, navigation
- **Secondary**: `#005CEB` - Hover states, focus
- **Accent**: `#D228CF` - Highlights, badges
- **Surface**: `#F0F7FF` - Page backgrounds, cards
- **Text**: `#1F2546` - Headings, body copy

### Typography

- **Headings**: Plus Jakarta Sans (600-800 weight)
- **Body/UI**: Inter (400-500 weight)
- **Fluid scaling**: `clamp()` functions for responsive text

### Components

All components are built with:

- Accessibility in mind (WCAG 2.1 AA)
- Responsive design (mobile-first)
- TypeScript for type safety
- Consistent API patterns

## 🔧 Configuration Files

### Package Management

- `package.json` - Dependencies and scripts (Bun optimized)
- `bun.lockb` - Dependency lock file (auto-generated)

### TypeScript

- `tsconfig.json` - TypeScript configuration
- `next-env.d.ts` - Next.js type definitions

### Styling

- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

### Code Quality

- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration

### Testing

- `jest.config.ts` - Jest configuration
- `jest.setup.js` - Jest setup file
- `playwright.config.ts` - Playwright E2E configuration

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the application
bun run build

# The output will be in the `.next` folder
# Deploy the `.next` folder to your hosting provider
```

## 📊 Performance Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Lighthouse Score**: 90+
- **Mobile PageSpeed**: 85+

## 🔒 Security Features

- **Content Security Policy** headers
- **X-Frame-Options** protection
- **X-Content-Type-Options** protection
- **Referrer Policy** configuration
- **DNS Prefetch Control**

## 🧪 Testing

### Unit Tests (Jest)

```bash
bun test
```

### E2E Tests (Playwright)

```bash
bun run test:e2e
```

### Type Checking

```bash
bun run type-check
```

## 📈 Analytics & Monitoring

- **Google Analytics 4** - User behavior tracking
- **Hotjar** - User session recordings
- **Core Web Vitals** - Performance monitoring
- **Error Tracking** - Ready for Sentry integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 🆘 Support

For support, please contact the development team or create an issue in the repository.

---

Built with ❤️ by Techcreants Development Team
