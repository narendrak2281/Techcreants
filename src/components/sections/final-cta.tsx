'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowRight,
  Calendar,
  MessageSquare,
  Phone,
  CheckCircle2,
  Star,
  Users,
  Clock,
  Shield,
  Award,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: CheckCircle2,
    text: 'Free 30-minute consultation',
  },
  {
    icon: CheckCircle2,
    text: 'Custom project roadmap',
  },
  {
    icon: CheckCircle2,
    text: 'No-obligation quote',
  },
  {
    icon: CheckCircle2,
    text: '24/7 ongoing support',
  },
];

const urgencyPoints = [
  {
    icon: Clock,
    title: 'Limited Availability',
    description: 'Only 3 consultation slots left this week',
  },
  {
    icon: TrendingUp,
    title: 'Project Queue',
    description: 'Next available start date: 2 weeks',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Senior developers assigned to your project',
  },
];

const socialProof = [
  {
    stat: '500+',
    label: 'Projects Delivered',
    icon: Award,
  },
  {
    stat: '98%',
    label: 'Client Satisfaction',
    icon: Star,
  },
  {
    stat: '24/7',
    label: 'Support Available',
    icon: Shield,
  },
];

const actionButtons = [
  {
    variant: 'gradient' as const,
    size: 'lg' as const,
    icon: Calendar,
    title: 'Schedule Free Consultation',
    subtitle: 'Book your 30-min strategy session',
    action: '#calendar',
    primary: true,
  },
  {
    variant: 'outline' as const,
    size: 'lg' as const,
    icon: MessageSquare,
    title: 'Start Live Chat',
    subtitle: 'Get instant answers to your questions',
    action: '#chat',
    primary: false,
  },
  {
    variant: 'outline' as const,
    size: 'lg' as const,
    icon: Phone,
    title: 'Call Now',
    subtitle: '+1 (555) 123-4567',
    action: 'tel:+15551234567',
    primary: false,
  },
];

export function FinalCTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="section-padding relative overflow-hidden bg-gradient-to-br from-tc-primary via-blue-600 to-tc-secondary"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-6xl">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Zap className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">
                Ready to Transform Your Business?
              </span>
            </div>

            <h2 className="mb-6 font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Let's Build Something
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100 md:text-2xl">
              Join 500+ successful companies who've transformed their digital
              presence with Techcreants. Your next breakthrough is just one
              conversation away.
            </p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto mb-12 grid max-w-2xl gap-4 sm:grid-cols-2"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-white"
                >
                  <benefit.icon className="h-5 w-5 text-green-300" />
                  <span className="text-lg">{benefit.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-16 grid gap-6 md:grid-cols-3"
          >
            {actionButtons.map((button, index) => (
              <motion.a
                key={index}
                href={button.action}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className={`group block rounded-2xl p-6 transition-all duration-300 ${
                  button.primary
                    ? 'hover:shadow-3xl bg-white text-tc-primary shadow-2xl hover:scale-105'
                    : 'border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                }`}
              >
                <div className="mb-4 flex items-center justify-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${
                      button.primary
                        ? 'bg-gradient-to-br from-tc-primary to-tc-secondary text-white'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    <button.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3
                  className={`mb-2 text-xl font-bold ${
                    button.primary ? 'text-tc-primary' : 'text-white'
                  }`}
                >
                  {button.title}
                </h3>
                <p
                  className={`text-sm ${
                    button.primary ? 'text-gray-600' : 'text-blue-100'
                  }`}
                >
                  {button.subtitle}
                </p>
                <div className="mt-4 flex items-center justify-center">
                  <ArrowRight
                    className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                      button.primary ? 'text-tc-primary' : 'text-white'
                    }`}
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Urgency & Social Proof */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Urgency Points */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
            >
              <h3 className="mb-6 text-2xl font-bold text-white">
                Why Act Now?
              </h3>
              <div className="space-y-4">
                {urgencyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      <point.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {point.title}
                      </h4>
                      <p className="text-blue-100">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
            >
              <h3 className="mb-6 text-2xl font-bold text-white">
                Trusted by Industry Leaders
              </h3>
              <div className="grid gap-6">
                {socialProof.map((proof, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-orange-300">
                      <proof.icon className="h-6 w-6 text-tc-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">
                        {proof.stat}
                      </div>
                      <div className="text-blue-100">{proof.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="mx-auto inline-flex items-center space-x-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <Shield className="h-6 w-6 text-green-300" />
              <span className="font-semibold text-white">
                100% Risk-Free Consultation • No Obligation • Cancel Anytime
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export * from './case-studies';
