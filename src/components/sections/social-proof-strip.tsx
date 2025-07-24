'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const companies = [
  { name: 'Microsoft', logo: '/logos/microsoft.svg', industry: 'Technology' },
  { name: 'Google', logo: '/logos/google.svg', industry: 'Technology' },
  { name: 'Amazon', logo: '/logos/amazon.svg', industry: 'E-commerce' },
  { name: 'Apple', logo: '/logos/apple.svg', industry: 'Technology' },
  { name: 'Netflix', logo: '/logos/netflix.svg', industry: 'Entertainment' },
  { name: 'Spotify', logo: '/logos/spotify.svg', industry: 'Music' },
  { name: 'Uber', logo: '/logos/uber.svg', industry: 'Transportation' },
  { name: 'Airbnb', logo: '/logos/airbnb.svg', industry: 'Hospitality' },
  { name: 'Tesla', logo: '/logos/tesla.svg', industry: 'Automotive' },
  { name: 'Shopify', logo: '/logos/shopify.svg', industry: 'E-commerce' },
];

const achievements = [
  {
    icon: Star,
    number: '4.9/5',
    label: 'Client Rating',
    description: 'Based on 500+ reviews',
    color: 'text-yellow-500',
  },
  {
    icon: TrendingUp,
    number: '300%',
    label: 'ROI Average',
    description: 'Client growth metrics',
    color: 'text-green-500',
  },
  {
    icon: Users,
    number: '50M+',
    label: 'End Users',
    description: 'Using our solutions',
    color: 'text-blue-500',
  },
  {
    icon: Award,
    number: '15+',
    label: 'Industry Awards',
    description: 'Recognition received',
    color: 'text-purple-500',
  },
];

const testimonialHighlights = [
  {
    quote: 'Transformed our business completely',
    author: 'Sarah Chen',
    company: 'TechCorp',
    rating: 5,
  },
  {
    quote: 'Exceptional development quality',
    author: 'Mike Rodriguez',
    company: 'StartupX',
    rating: 5,
  },
  {
    quote: "Best investment we've made",
    author: 'Emily Watson',
    company: 'GrowthCo',
    rating: 5,
  },
];

export function SocialProofStrip() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="social-proof" className="bg-tc-surface py-20" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-tc-primary/10 px-4 py-2">
            <CheckCircle className="h-5 w-5 text-tc-primary" />
            <span className="text-sm font-semibold text-tc-primary">
              Trusted Globally
            </span>
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold text-tc-text md:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            From startups to Fortune 500 companies, businesses worldwide trust
            Techcreants to deliver exceptional results and drive digital
            transformation.
          </p>
        </motion.div>

        {/* Company Logos Carousel */}
        <div className="relative mb-16 overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-tc-surface to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-tc-surface to-transparent" />

          <motion.div
            className="flex items-center space-x-12"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {[...companies, ...companies, ...companies].map(
              (company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  className="group flex h-20 w-40 flex-shrink-0 items-center justify-center rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="text-center">
                    <div className="mb-2 h-8 w-32 rounded bg-gray-200 opacity-60 transition-opacity group-hover:opacity-100" />
                    <span className="text-xs font-medium text-gray-500">
                      {company.industry}
                    </span>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="group rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <achievement.icon
                className={`mx-auto mb-3 h-8 w-8 ${achievement.color} transition-transform group-hover:scale-110`}
              />
              <div className="mb-1 text-2xl font-bold text-tc-text md:text-3xl">
                {achievement.number}
              </div>
              <div className="mb-2 font-semibold text-tc-text">
                {achievement.label}
              </div>
              <div className="text-sm text-gray-500">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Testimonial Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-tc-text">
              What Our Clients Say
            </h3>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-2 text-sm font-medium text-gray-600">
                4.9 out of 5 stars
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {testimonialHighlights.map((testimonial, index) => (
              <motion.div
                key={index}
                className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
                whileHover={{
                  y: -2,
                  shadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: 0.2 * index, duration: 0.4 }}
              >
                <div className="mb-2 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-3 text-sm italic text-gray-700">
                  "{testimonial.quote}"
                </p>
                <div className="text-xs">
                  <div className="font-semibold text-tc-text">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-tc-primary/5 to-tc-secondary/5 p-8">
            <h3 className="mb-4 text-xl font-semibold text-tc-text">
              Industry Recognition
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                Top 100 Software Companies
              </span>
              <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                Best Development Partner 2024
              </span>
              <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                Innovation Excellence Award
              </span>
              <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                Client Choice Award
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
