'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks';
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Palette,
  Shield,
  ArrowRight,
  CheckCircle2,
  Users,
  Globe,
  BarChart3,
  Rocket,
  Target,
  Settings,
  Brain,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'End-to-end software solutions tailored to your unique business requirements and objectives.',
    features: [
      'Full-stack web applications',
      'Enterprise software solutions',
      'API development & integration',
      'Legacy system modernization',
    ],
    pricing: 'Starting from $50/hour',
    timeline: '2-6 months',
    color: 'from-blue-500 to-cyan-500',
    popular: true,
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'iOS & Android development',
      'React Native & Flutter',
      'App Store optimization',
      'Mobile UI/UX design',
    ],
    pricing: 'Starting from $15K',
    timeline: '3-8 months',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions & DevOps',
    description:
      'Scalable cloud infrastructure and DevOps practices for modern, resilient applications.',
    features: [
      'AWS, Azure, GCP deployment',
      'CI/CD pipeline setup',
      'Container orchestration',
      'Infrastructure as Code',
    ],
    pricing: 'Starting from $5K',
    timeline: '1-3 months',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design Services',
    description:
      'User-centered design that creates intuitive, engaging, and conversion-optimized interfaces.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design systems',
      'Usability testing',
    ],
    pricing: 'Starting from $3K',
    timeline: '2-4 weeks',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Database,
    title: 'Data Analytics & AI',
    description:
      'Transform your data into actionable insights with advanced analytics and AI solutions.',
    features: [
      'Data pipeline development',
      'Machine learning models',
      'Business intelligence dashboards',
      'Predictive analytics',
    ],
    pricing: 'Starting from $10K',
    timeline: '2-5 months',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Services',
    description:
      'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    features: [
      'Security audits & testing',
      'Compliance frameworks',
      'Incident response planning',
      'Security training',
    ],
    pricing: 'Starting from $7.5K',
    timeline: '1-2 months',
    color: 'from-gray-600 to-gray-800',
  },
];

const industries = [
  { name: 'Healthcare', icon: Users, projects: '50+' },
  { name: 'FinTech', icon: BarChart3, projects: '35+' },
  { name: 'E-commerce', icon: Globe, projects: '40+' },
  { name: 'Education', icon: Brain, projects: '25+' },
  { name: 'Manufacturing', icon: Settings, projects: '30+' },
  { name: 'Startups', icon: Rocket, projects: '100+' },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '150+', label: 'Happy Clients' },
  { value: '50+', label: 'Team Members' },
  { value: '99%', label: 'Client Satisfaction' },
];

export function ServicesOverview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-white to-gray-50"
      ref={ref}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-tc-primary/10 px-4 py-2">
            <Target className="h-5 w-5 text-tc-primary" />
            <span className="text-sm font-semibold text-tc-primary">
              Our Services
            </span>
          </div>

          <h2 className="mb-6 font-heading text-4xl font-bold text-tc-text md:text-5xl">
            Comprehensive Technology Solutions
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            From concept to deployment, we provide end-to-end technology
            services that drive innovation, streamline operations, and
            accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {service.popular && (
                <div className="absolute -right-12 top-4 rotate-45 bg-tc-accent px-12 py-1 text-xs font-bold text-white">
                  Popular
                </div>
              )}

              <div
                className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
              >
                <service.icon className="h-8 w-8" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-tc-text">
                {service.title}
              </h3>

              <p className="mb-6 leading-relaxed text-gray-600">
                {service.description}
              </p>

              <div className="mb-6 space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-tc-primary" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Starting Price:</span>
                  <span className="font-semibold text-tc-primary">
                    {service.pricing}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Timeline:</span>
                  <span className="font-semibold text-gray-700">
                    {service.timeline}
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full transition-all duration-300 group-hover:border-tc-primary group-hover:bg-tc-primary group-hover:text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-24"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-tc-text">
              Industries We Serve
            </h3>
            <p className="text-lg text-gray-600">
              Delivering specialized solutions across diverse industry verticals
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-tc-primary/10">
                  <industry.icon className="h-8 w-8 text-tc-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-tc-text">
                  {industry.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {industry.projects} projects
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="rounded-3xl bg-gradient-to-r from-tc-primary via-tc-secondary to-tc-accent p-8 text-white">
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-3xl font-bold">
                Trusted by Leading Organizations
              </h3>
              <p className="text-lg text-white/90">
                Our track record speaks for itself
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="mb-2 text-4xl font-bold">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-tc-text">
              Ready to Start Your Project?
            </h3>
            <p className="mb-6 text-gray-600">
              Let's discuss your requirements and create a custom solution that
              drives your business forward.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="gradient" className="group">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
