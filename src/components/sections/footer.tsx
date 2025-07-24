'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Globe,
  ArrowRight,
  Heart,
  Shield,
  FileText,
  Users,
  Zap,
  Award,
  BookOpen,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const companyLinks = [
  { title: 'About Us', href: '#about', icon: Users },
  { title: 'Our Team', href: '#team', icon: Users },
  { title: 'Careers', href: '/careers', icon: Award },
  { title: 'Press Kit', href: '/press', icon: FileText },
  { title: 'Partner Program', href: '/partners', icon: Zap },
  { title: 'Investor Relations', href: '/investors', icon: FileText },
];

const serviceLinks = [
  { title: 'Custom Software Development', href: '#services' },
  { title: 'Mobile App Development', href: '#services' },
  { title: 'Cloud & DevOps Solutions', href: '#services' },
  { title: 'UI/UX Design Services', href: '#services' },
  { title: 'Data Analytics & AI', href: '#services' },
  { title: 'Cybersecurity Solutions', href: '#services' },
];

const resourceLinks = [
  { title: 'Blog & Insights', href: '/blog', icon: BookOpen },
  { title: 'Case Studies', href: '/case-studies', icon: Award },
  { title: 'White Papers', href: '/whitepapers', icon: FileText },
  { title: 'API Documentation', href: '/docs', icon: FileText },
  { title: 'Developer Tools', href: '/tools', icon: Zap },
  { title: 'Community Forum', href: '/community', icon: MessageSquare },
];

const legalLinks = [
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms of Service', href: '/terms' },
  { title: 'Cookie Policy', href: '/cookies' },
  { title: 'GDPR Compliance', href: '/gdpr' },
  { title: 'Security', href: '/security' },
  { title: 'Accessibility', href: '/accessibility' },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/techcreants',
    label: 'LinkedIn',
    color: 'hover:bg-blue-600',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/techcreants',
    label: 'Twitter',
    color: 'hover:bg-blue-400',
  },
  {
    icon: Github,
    href: 'https://github.com/techcreants',
    label: 'GitHub',
    color: 'hover:bg-gray-800',
  },
  {
    icon: Globe,
    href: '/blog',
    label: 'Blog',
    color: 'hover:bg-tc-primary',
  },
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@techcreants.com',
    href: 'mailto:hello@techcreants.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    value: 'San Francisco, CA',
    href: '#contact',
  },
];

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'AWS Advanced Partner',
  'Google Cloud Partner',
  'Microsoft Gold Partner',
];

export function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-br from-tc-text via-gray-900 to-gray-800 text-white"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.3),transparent_50%)]" />
      </div>

      <div className="container-custom relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="border-b border-gray-700 py-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
              Stay Updated with Tech Insights
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Get the latest trends, best practices, and industry insights
              delivered to your inbox.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-tc-primary focus:outline-none focus:ring-2 focus:ring-tc-primary/20"
              />
              <Button size="lg" variant="gradient" className="group">
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:col-span-4"
            >
              {/* Logo */}
              <div className="mb-6">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-tc-primary to-tc-secondary">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-heading text-2xl font-bold">
                    Techcreants
                  </span>
                </Link>
              </div>

              <p className="mb-6 leading-relaxed text-gray-300">
                We're passionate about building innovative digital solutions
                that transform businesses and create meaningful impact. From
                startups to enterprises, we help organizations navigate their
                digital transformation journey.
              </p>

              {/* Contact Info */}
              <div className="mb-6 space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="group flex items-center space-x-3 text-gray-300 transition-colors hover:text-white"
                  >
                    <contact.icon className="h-5 w-5 text-tc-primary transition-colors group-hover:text-tc-secondary" />
                    <span>{contact.value}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700/50 text-gray-300 backdrop-blur-sm transition-all duration-300 ${social.color} hover:text-white`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="mb-6 text-lg font-bold">Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="inline-block transform text-gray-300 transition-colors duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="mb-6 text-lg font-bold">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex items-center space-x-2 text-gray-300 transition-colors hover:text-white"
                    >
                      <link.icon className="h-4 w-4 text-tc-primary transition-colors group-hover:text-tc-secondary" />
                      <span className="transform duration-200 group-hover:translate-x-1">
                        {link.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="mb-6 text-lg font-bold">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex items-center space-x-2 text-gray-300 transition-colors hover:text-white"
                    >
                      <link.icon className="h-4 w-4 text-tc-primary transition-colors group-hover:text-tc-secondary" />
                      <span className="transform duration-200 group-hover:translate-x-1">
                        {link.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="mb-6 text-lg font-bold">Support</h3>
              <ul className="mb-6 space-y-3">
                <li>
                  <Link
                    href="/help"
                    className="inline-block transform text-gray-300 transition-colors duration-200 hover:translate-x-1 hover:text-white"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="inline-block transform text-gray-300 transition-colors duration-200 hover:translate-x-1 hover:text-white"
                  >
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/status"
                    className="inline-block transform text-gray-300 transition-colors duration-200 hover:translate-x-1 hover:text-white"
                  >
                    System Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="inline-block transform text-gray-300 transition-colors duration-200 hover:translate-x-1 hover:text-white"
                  >
                    Contact Support
                  </Link>
                </li>
              </ul>

              {/* Certifications */}
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Certifications
                </h4>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Shield className="h-3 w-3 text-green-400" />
                      <span className="text-xs text-gray-400">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="border-t border-gray-700 py-8"
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; 2024 Techcreants. All rights reserved.</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>in San Francisco</span>
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export * from './case-studies';
