'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks';
import {
  ArrowRight,
  Play,
  Star,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Monitor,
  Cloud,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'CloudSync Pro',
    category: 'Enterprise',
    tagline: 'Unified Cloud Management Platform',
    description:
      'Streamline your multi-cloud infrastructure with our intelligent orchestration platform. Manage, monitor, and optimize across AWS, Azure, and GCP from a single dashboard.',
    features: [
      'Multi-cloud orchestration',
      'Cost optimization engine',
      'Real-time monitoring',
      'Automated scaling',
      'Security compliance',
    ],
    metrics: {
      users: '50K+',
      rating: 4.9,
      uptime: '99.9%',
    },
    pricing: {
      starter: '$99/month',
      pro: '$299/month',
      enterprise: 'Custom',
    },
    demo: '/demos/cloudsync.mp4',
    image: '/products/cloudsync.jpg',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    badges: ['Most Popular', 'Enterprise Ready'],
  },
  {
    id: 2,
    name: 'DataViz Studio',
    category: 'Analytics',
    tagline: 'Advanced Data Visualization Suite',
    description:
      'Transform complex data into stunning, interactive visualizations. Build dashboards, reports, and presentations that tell compelling data stories.',
    features: [
      'Drag & drop interface',
      'Real-time data connections',
      'Custom chart libraries',
      'Collaborative workspaces',
      'Export to any format',
    ],
    metrics: {
      users: '25K+',
      rating: 4.8,
      uptime: '99.8%',
    },
    pricing: {
      starter: '$49/month',
      pro: '$149/month',
      enterprise: 'Custom',
    },
    demo: '/demos/dataviz.mp4',
    image: '/products/dataviz.jpg',
    icon: TrendingUp,
    color: 'from-emerald-500 to-teal-500',
    badges: ["Editor's Choice", 'Fast Growing'],
  },
  {
    id: 3,
    name: 'SecureFlow',
    category: 'Security',
    tagline: 'Next-Gen Cybersecurity Platform',
    description:
      'Protect your digital assets with AI-powered threat detection and automated response systems. Stay ahead of evolving security challenges.',
    features: [
      'AI threat detection',
      'Automated incident response',
      'Compliance monitoring',
      'Risk assessment',
      'Security analytics',
    ],
    metrics: {
      users: '15K+',
      rating: 4.9,
      uptime: '99.99%',
    },
    pricing: {
      starter: '$199/month',
      pro: '$499/month',
      enterprise: 'Custom',
    },
    demo: '/demos/secureflow.mp4',
    image: '/products/secureflow.jpg',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    badges: ['Security Leader', 'Certified'],
  },
  {
    id: 4,
    name: 'DevOps Hub',
    category: 'Development',
    tagline: 'Complete DevOps Automation Platform',
    description:
      'Accelerate your development lifecycle with integrated CI/CD pipelines, container management, and deployment automation.',
    features: [
      'CI/CD pipelines',
      'Container orchestration',
      'Environment management',
      'Performance monitoring',
      'Team collaboration',
    ],
    metrics: {
      users: '30K+',
      rating: 4.7,
      uptime: '99.7%',
    },
    pricing: {
      starter: '$79/month',
      pro: '$199/month',
      enterprise: 'Custom',
    },
    demo: '/demos/devops.mp4',
    image: '/products/devops.jpg',
    icon: Zap,
    color: 'from-purple-500 to-indigo-500',
    badges: ['Developer Favorite', 'Open Source'],
  },
];

export function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentProduct = products[activeProduct];

  return (
    <section id="products" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-tc-primary/10 px-4 py-2">
            <Monitor className="h-5 w-5 text-tc-primary" />
            <span className="text-sm font-semibold text-tc-primary">
              Our Products
            </span>
          </div>

          <h2 className="mb-6 font-heading text-4xl font-bold text-tc-text md:text-5xl">
            Flagship Software Products
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Discover our suite of innovative SaaS products designed to
            streamline operations, boost productivity, and drive digital
            transformation across industries.
          </p>
        </motion.div>

        {/* Product Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`group relative rounded-xl px-6 py-4 text-left transition-all duration-300 ${
                activeProduct === index
                  ? 'bg-tc-primary text-white shadow-lg'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <product.icon className="h-5 w-5" />
                <div>
                  <div className="font-semibold">{product.name}</div>
                  <div className="text-xs opacity-75">{product.category}</div>
                </div>
              </div>

              {product.badges.includes('Most Popular') && (
                <div className="absolute -right-2 -top-2 rounded-full bg-tc-accent px-2 py-1 text-xs font-bold text-white">
                  Popular
                </div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Main Product Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-12 lg:grid-cols-2 lg:gap-16"
          >
            {/* Product Demo */}
            <div className="relative">
              <div
                className={`relative rounded-2xl bg-gradient-to-br ${currentProduct.color} p-1 shadow-2xl`}
              >
                <div className="rounded-xl bg-white p-8">
                  {/* Demo Video/Image */}
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-lg bg-gray-100">
                    {!isPlaying ? (
                      <div className="flex h-full items-center justify-center bg-gray-50">
                        <Button
                          size="xl"
                          onClick={() => setIsPlaying(true)}
                          className="group bg-tc-primary/90 hover:bg-tc-primary"
                        >
                          <Play className="mr-2 h-6 w-6 transition-transform group-hover:scale-110" />
                          Watch Demo
                        </Button>
                      </div>
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gray-100">
                        <span className="text-gray-500">
                          Demo Video Playing...
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Metrics */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="rounded-lg bg-gray-50 p-3">
                      <Users className="mx-auto mb-1 h-5 w-5 text-tc-primary" />
                      <div className="font-bold text-tc-text">
                        {currentProduct.metrics.users}
                      </div>
                      <div className="text-xs text-gray-500">Active Users</div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <Star className="mx-auto mb-1 h-5 w-5 text-yellow-500" />
                      <div className="font-bold text-tc-text">
                        {currentProduct.metrics.rating}
                      </div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <TrendingUp className="mx-auto mb-1 h-5 w-5 text-green-500" />
                      <div className="font-bold text-tc-text">
                        {currentProduct.metrics.uptime}
                      </div>
                      <div className="text-xs text-gray-500">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 -top-4 space-y-2">
                {currentProduct.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-tc-accent px-3 py-1 text-xs font-bold text-white shadow-lg"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              <div>
                <div className="mb-2 flex items-center space-x-2">
                  <currentProduct.icon className="h-6 w-6 text-tc-primary" />
                  <span className="rounded-full bg-tc-primary/10 px-3 py-1 text-sm font-medium text-tc-primary">
                    {currentProduct.category}
                  </span>
                </div>

                <h3 className="mb-3 font-heading text-3xl font-bold text-tc-text">
                  {currentProduct.name}
                </h3>

                <p className="mb-4 text-xl font-medium text-tc-secondary">
                  {currentProduct.tagline}
                </p>

                <p className="leading-relaxed text-gray-600">
                  {currentProduct.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="mb-4 text-lg font-semibold text-tc-text">
                  Key Features
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {currentProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-tc-primary" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Preview */}
              <div>
                <h4 className="mb-4 text-lg font-semibold text-tc-text">
                  Starting From
                </h4>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-tc-primary">
                    {currentProduct.pricing.starter}
                  </div>
                  <div className="text-gray-500">
                    <div className="text-sm">Starter Plan</div>
                    <div className="text-xs">Billed monthly</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  size="lg"
                  className="group flex-1 bg-tc-primary hover:bg-tc-secondary"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button size="lg" variant="outline" className="flex-1">
                  View Details
                </Button>
              </div>

              {/* Social Proof */}
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="mb-2 flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    {currentProduct.metrics.rating}/5
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  "Game-changing product that transformed our workflow
                  completely. Highly recommended for any growing business."
                </p>
                <div className="mt-2 text-xs text-gray-500">
                  - Verified Customer Review
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Products Quick Access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-tc-primary/5 to-tc-secondary/5 p-8">
            <h3 className="mb-4 text-2xl font-bold text-tc-text">
              Explore Our Complete Product Suite
            </h3>
            <p className="mb-6 text-gray-600">
              Get access to all our premium products with our Enterprise package
              and save up to 40%
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="gradient">
                View All Products
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
