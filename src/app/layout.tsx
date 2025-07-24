import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Techcreants - Innovative IT Solutions & Software Development',
    template: '%s | Techcreants',
  },
  description:
    'Leading IT product and software development company creating proprietary software products and providing custom development services for startups, SMEs, and enterprises.',
  keywords: [
    'software development',
    'IT solutions',
    'custom software',
    'web development',
    'mobile apps',
    'tech startup',
    'digital transformation',
    'API development',
    'cloud solutions',
  ],
  authors: [{ name: 'Techcreants' }],
  creator: 'Techcreants',
  publisher: 'Techcreants',
  metadataBase: new URL('https://techcreants.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techcreants.com',
    title: 'Techcreants - Innovative IT Solutions & Software Development',
    description:
      'Leading IT product and software development company creating proprietary software products and providing custom development services.',
    siteName: 'Techcreants',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Techcreants - Innovative IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techcreants - Innovative IT Solutions & Software Development',
    description:
      'Leading IT product and software development company creating proprietary software products and providing custom development services.',
    images: ['/og-image.jpg'],
    creator: '@techcreants',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#28B9F2" />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
