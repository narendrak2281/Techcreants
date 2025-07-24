'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-tc-primary via-tc-secondary to-tc-accent"
    >
      {/* Navigation area overlay for better logo visibility */}
      <div className="z-5 absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0">
        <div className="absolute left-10 top-40 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-tc-accent/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-tc-secondary/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="mb-8 inline-flex items-center space-x-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Star className="h-4 w-4 fill-current text-yellow-300" />
            <span className="text-sm font-medium">
              Trusted by 500+ Companies
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Innovative IT Solutions
            <br />
            <span className="gradient-text bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
              That Drive Success
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-100 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We create cutting-edge software products and provide world-class
            development services to help your business thrive in the digital
            age.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button
              size="xl"
              variant="cta"
              className="group font-semibold shadow-xl"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="xl"
              className="group border-2 border-white bg-transparent font-semibold text-white transition-all duration-300 hover:bg-white hover:text-tc-primary"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Project
            </Button>
          </motion.div>

          {/* Social Proof Numbers */}
          <motion.div
            className="mx-auto grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold">500+</div>
              <div className="text-gray-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold">98%</div>
              <div className="text-gray-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold">24/7</div>
              <div className="text-gray-200">Support Available</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
          <div className="mt-2 h-3 w-1 rounded-full bg-white/70" />
        </div>
      </motion.div>
    </section>
  );
}
