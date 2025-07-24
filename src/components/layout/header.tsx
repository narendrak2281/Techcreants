'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils';

const navigationItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Resources', href: '#resources' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isMounted && isScrolled
          ? 'border-b border-gray-100 bg-white/95 shadow-lg backdrop-blur-sm'
          : 'bg-white/85 backdrop-blur-sm',
        className
      )}
    >
      <nav className="container-custom flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="group flex items-center">
          <Image
            src="/logo.svg"
            alt="Techcreants"
            width={72}
            height={72}
            className="h-18 w-18 transition-all duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105',
                'text-tc-text hover:text-tc-primary'
              )}
            >
              <span className="relative z-10">{item.label}</span>
              {/* Hover background effect */}
              <div className="absolute inset-0 rounded-lg bg-tc-primary/10 opacity-0 transition-all duration-300 group-hover:opacity-100" />
              {/* Underline effect */}
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-tc-primary transition-all duration-300 group-hover:left-0 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="default"
            size="sm"
            className="group relative overflow-hidden border border-white/30 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white shadow-lg backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 backdrop-blur-sm" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100" />

            {/* Inner glow */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-cyan-300/30 via-blue-400/20 to-purple-500/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />

            <span className="relative z-10 font-semibold text-white drop-shadow-lg">
              Get Started
            </span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 transition-all duration-300 hover:scale-110 hover:bg-tc-primary/10 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-tc-text transition-colors" />
          ) : (
            <Menu className="h-6 w-6 text-tc-text transition-colors" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-100 bg-white/95 backdrop-blur-sm md:hidden"
          >
            <div className="container-custom space-y-2 py-4">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-tc-text transition-all duration-300 hover:translate-x-2 hover:bg-tc-primary/10 hover:text-tc-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigationItems.length * 0.1 }}
                className="pt-2"
              >
                <Button
                  className="group relative w-full overflow-hidden border border-white/30 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white shadow-lg backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
                  size="sm"
                >
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 backdrop-blur-sm" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100" />

                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-md bg-gradient-to-br from-cyan-300/30 via-blue-400/20 to-purple-500/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  <span className="relative z-10 font-semibold text-white drop-shadow-lg">
                    Get Started
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
