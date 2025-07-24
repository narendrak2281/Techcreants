'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from ;

const navigationItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Resources', href: '#resources' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-gradient-to-b from-white/95 via-white/90 to-white/60 shadow-lg backdrop-blur-lg'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Techcreants"
              width={280}
              height={70}
              className="h-16 w-auto drop-shadow-lg filter transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'group relative text-base font-semibold transition-all duration-300 hover:text-tc-primary',
                  isScrolled ? 'text-tc-text' : 'text-tc-text/90'
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-tc-primary to-tc-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center space-x-4 md:flex">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('#contact')}
              className={cn(
                'text-base font-semibold',
                isScrolled
                  ? 'text-tc-text hover:bg-tc-primary/10 hover:text-tc-primary'
                  : 'text-tc-text/90 hover:bg-tc-primary/10 hover:text-tc-primary'
              )}
            >
              Sign In
            </Button>
            <Button
              variant="gradient"
              onClick={() => scrollToSection('#demo')}
              className="text-base font-semibold shadow-lg"
            >
              Get Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-tc-text" />
            ) : (
              <Menu
                className={cn(
                  'h-6 w-6',
                  isScrolled ? 'text-tc-text' : 'text-tc-text/90'
                )}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute left-0 right-0 top-16 border-t border-gray-200 bg-white shadow-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-4 px-4 py-6">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full py-2 text-left font-medium text-tc-text transition-colors hover:text-tc-primary"
                >
                  {item.label}
                </button>
              ))}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('#contact')}
                  className="w-full"
                >
                  Sign In
                </Button>
                <Button
                  variant="gradient"
                  onClick={() => scrollToSection('#demo')}
                  className="w-full"
                >
                  Get Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
