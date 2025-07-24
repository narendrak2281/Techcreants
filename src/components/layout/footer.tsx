'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#about' },
      { label: 'Careers', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
      { label: 'Custom Software', href: '#services' },
      { label: 'Consulting', href: '#services' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'SaaS Solutions', href: '#products' },
      { label: 'Developer Tools', href: '#products' },
      { label: 'Platforms', href: '#products' },
      { label: 'Integrations', href: '#products' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#contact' },
    ],
  },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn',
  },
];

const contactInfo = [
  {
    icon: Mail,
    value: 'hello@techcreants.com',
    href: 'mailto:hello@techcreants.com',
  },
  { icon: Phone, value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, value: 'San Francisco, CA', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-tc-text text-white">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Techcreants"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              {/* <span className="text-xl font-bold">Techcreants</span> */}
            </Link>

            <p className="mb-6 max-w-md text-gray-300">
              Leading IT product and software development company creating
              innovative solutions for startups, SMEs, and enterprises
              worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <Link
                  key={item.value}
                  href={item.href}
                  className="group flex items-center space-x-3 text-gray-300 transition-all duration-300 hover:rotate-1 hover:scale-105 hover:text-white"
                >
                  <item.icon className="h-4 w-4 transition-all duration-300 group-hover:scale-125 group-hover:text-tc-primary" />
                  <span className="text-sm">{item.value}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={`${section.title}-${index}`}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-gray-300 transition-all duration-300 hover:rotate-1 hover:scale-110 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="max-w-md">
            <h3 className="mb-4 font-semibold">Stay Updated</h3>
            <p className="mb-4 text-sm text-gray-300">
              Get the latest updates on our products and industry insights.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-tc-primary focus:outline-none"
              />
              <button className="rounded-md bg-tc-primary px-6 py-2 font-medium transition-all duration-300 hover:rotate-1 hover:scale-105 hover:bg-tc-primary/90 hover:shadow-lg hover:shadow-tc-primary/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2025 Techcreants. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group relative rounded-lg bg-gray-800/50 p-2 text-gray-300 transition-all duration-300 hover:scale-110 hover:bg-tc-primary hover:text-white hover:shadow-lg hover:shadow-tc-primary/25"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-300 transition-all duration-300 hover:rotate-1 hover:scale-110 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-300 transition-all duration-300 hover:rotate-1 hover:scale-110 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
