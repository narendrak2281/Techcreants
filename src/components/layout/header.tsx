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
  {
    label: 'Products',
    href: '#products',
    dropdown: [
      {
        label: 'SaaS Solutions',
        href: '#products',
        description: 'Cloud-based software solutions',
      },
      {
        label: 'Mobile Apps',
        href: '#products',
        description: 'Native and cross-platform apps',
      },
      {
        label: 'Web Platforms',
        href: '#products',
        description: 'Custom web applications',
      },
      {
        label: 'Developer Tools',
        href: '#products',
        description: 'Tools for developers',
      },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      {
        label: 'Web Development',
        href: '#services',
        description: 'Full-stack web solutions',
      },
      {
        label: 'Mobile Development',
        href: '#services',
        description: 'iOS & Android apps',
      },
      {
        label: 'UI/UX Design',
        href: '#services',
        description: 'User experience design',
      },
      {
        label: 'Consulting',
        href: '#services',
        description: 'Technical consultation',
      },
    ],
  },
  {
    label: 'Resources',
    href: '#resources',
    dropdown: [
      {
        label: 'Blog',
        href: '#blog',
        description: 'Latest insights and articles',
      },
      {
        label: 'Case Studies',
        href: '#case-studies',
        description: 'Success stories',
      },
      {
        label: 'Documentation',
        href: '#docs',
        description: 'Technical guides',
      },
      {
        label: 'Support',
        href: '#contact',
        description: 'Get help and support',
      },
    ],
  },
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

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
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.dropdown && handleDropdownEnter(item.label)
              }
              onMouseLeave={() => item.dropdown && handleDropdownLeave()}
            >
              <Link
                href={item.href}
                className={cn(
                  'group relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105',
                  'flex items-center gap-1 text-tc-text hover:text-tc-primary'
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {item.dropdown && (
                  <svg
                    className={cn(
                      'h-3 w-3 transition-transform duration-200',
                      activeDropdown === item.label ? 'rotate-180' : 'rotate-0'
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
                {/* Hover background effect */}
                <div className="absolute inset-0 rounded-lg bg-tc-primary/10 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                {/* Underline effect */}
                <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-tc-primary transition-all duration-300 group-hover:left-0 group-hover:w-full" />
              </Link>

              {/* iOS-like Liquid Glass Dropdown */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute left-1/2 top-full z-50 mt-2 w-80 -translate-x-1/2"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {/* Liquid Glass Container */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/80 shadow-2xl shadow-black/10 backdrop-blur-2xl">
                      {/* Glass overlay effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/40" />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5" />

                      {/* Content */}
                      <div className="relative z-10 p-6">
                        <div className="space-y-4">
                          {item.dropdown.map((dropdownItem, index) => (
                            <motion.div
                              key={dropdownItem.label}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={dropdownItem.href}
                                className="group flex items-start space-x-3 rounded-xl p-3 transition-all duration-200 hover:scale-105 hover:bg-white/50"
                              >
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-tc-primary to-tc-secondary">
                                  <div className="h-3 w-3 rounded-full bg-white/80" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-tc-text transition-colors group-hover:text-tc-primary">
                                    {dropdownItem.label}
                                  </h4>
                                  <p className="mt-1 text-xs text-gray-600">
                                    {dropdownItem.description}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom shine effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="default"
            size="sm"
            className="group relative overflow-hidden rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-2 text-blue-600 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-blue-500/30"
          >
            {/* Clean shimmer effect */}
            <div className="absolute inset-0 w-1/2 -translate-x-full transform rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />

            <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-white">
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
                  className="group relative w-full overflow-hidden rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-2 text-blue-600 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-blue-500/30"
                  size="sm"
                >
                  {/* Clean shimmer effect */}
                  <div className="absolute inset-0 w-1/2 -translate-x-full transform rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />

                  <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-white">
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
