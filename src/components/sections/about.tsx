'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks';
import {
  Users,
  Award,
  Target,
  Heart,
  ArrowRight,
  Globe,
  Code,
  Lightbulb,
  Shield,
  TrendingUp,
  Clock,
  Coffee,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description:
      'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description:
      'Your success is our priority. We build lasting partnerships through transparent communication and exceptional service.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'We maintain the highest standards in code quality, security, and performance across all our deliverables.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description:
      "We invest in our team's growth and stay ahead of industry trends to deliver future-ready solutions.",
    color: 'from-purple-500 to-pink-500',
  },
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: '15+ years in enterprise software development. Former Principal Engineer at Microsoft.',
    avatar: '/team/alex.jpg',
    skills: ['Leadership', 'Strategy', 'Enterprise Architecture'],
  },
  {
    name: 'Sarah Chen',
    role: 'CTO & Co-founder',
    bio: 'Full-stack expert with deep AI/ML knowledge. Ex-Google Senior Software Engineer.',
    avatar: '/team/sarah.jpg',
    skills: ['AI/ML', 'Cloud Architecture', 'DevOps'],
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Design',
    bio: 'Award-winning UX designer with 12+ years creating user-centered digital experiences.',
    avatar: '/team/michael.jpg',
    skills: ['UX Design', 'Design Systems', 'User Research'],
  },
  {
    name: 'Emily Davis',
    role: 'VP of Engineering',
    bio: 'Scalable systems architect with expertise in microservices and distributed computing.',
    avatar: '/team/emily.jpg',
    skills: ['System Architecture', 'Microservices', 'Performance'],
  },
];

const milestones = [
  {
    year: '2018',
    event: 'Company Founded',
    description: 'Started with a vision to democratize enterprise technology',
  },
  {
    year: '2019',
    event: 'First Enterprise Client',
    description: 'Delivered our first major enterprise solution',
  },
  {
    year: '2020',
    event: 'Remote-First Transition',
    description: 'Successfully transitioned to a fully remote team',
  },
  {
    year: '2021',
    event: '100+ Projects Milestone',
    description: 'Crossed 100 successful project deliveries',
  },
  {
    year: '2022',
    event: 'AI/ML Division Launch',
    description: 'Expanded into artificial intelligence and machine learning',
  },
  {
    year: '2023',
    event: 'International Expansion',
    description: 'Opened offices in 3 new countries',
  },
  {
    year: '2024',
    event: '500+ Projects & Growing',
    description: 'Reached 500+ projects with 99% client satisfaction',
  },
];

const stats = [
  { icon: Code, value: '500+', label: 'Projects Delivered' },
  { icon: Users, value: '150+', label: 'Happy Clients' },
  { icon: Globe, value: '25+', label: 'Countries Served' },
  { icon: Award, value: '15+', label: 'Industry Awards' },
  { icon: Coffee, value: '50+', label: 'Team Members' },
  { icon: Clock, value: '99%', label: 'On-Time Delivery' },
];

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-tc-primary/10 px-4 py-2">
            <Heart className="h-5 w-5 text-tc-primary" />
            <span className="text-sm font-semibold text-tc-primary">
              About Techcreants
            </span>
          </div>

          <h2 className="mb-6 font-heading text-4xl font-bold text-tc-text md:text-5xl">
            Building Tomorrow's Technology Today
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Founded in 2018, Techcreants is a forward-thinking technology
            company dedicated to transforming businesses through innovative
            software solutions and cutting-edge digital experiences.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-24 grid gap-8 lg:grid-cols-2"
        >
          <div className="rounded-2xl bg-gradient-to-br from-tc-primary/5 to-tc-secondary/5 p-8">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-tc-primary text-white">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-tc-text">
              Our Mission
            </h3>
            <p className="leading-relaxed text-gray-600">
              To empower businesses of all sizes with innovative technology
              solutions that drive growth, enhance efficiency, and create
              competitive advantages in the digital marketplace. We believe
              technology should be accessible, reliable, and transformative.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-tc-secondary/5 to-tc-accent/5 p-8">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-tc-secondary text-white">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-tc-text">Our Vision</h3>
            <p className="leading-relaxed text-gray-600">
              To become the leading global technology partner for businesses
              seeking digital transformation. We envision a future where every
              organization, regardless of size, has access to enterprise-grade
              technology solutions that fuel innovation and success.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-24"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-tc-text">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="group text-center"
              >
                <div
                  className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${value.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <value.icon className="h-8 w-8" />
                </div>
                <h4 className="mb-3 text-lg font-bold text-tc-text">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-24"
        >
          <div className="rounded-3xl bg-gradient-to-r from-tc-primary via-tc-secondary to-tc-accent p-8 text-white">
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-3xl font-bold">Our Impact in Numbers</h3>
              <p className="text-lg text-white/90">
                Measurable success across all dimensions
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <stat.icon className="mx-auto mb-3 h-8 w-8" />
                  <div className="mb-2 text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-24"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-tc-text">
              Meet Our Leadership
            </h3>
            <p className="text-lg text-gray-600">
              Experienced leaders driving innovation and excellence
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                className="group text-center"
              >
                <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-tc-primary to-tc-secondary text-white">
                    <Users className="h-12 w-12" />
                  </div>
                </div>
                <h4 className="mb-2 text-lg font-bold text-tc-text">
                  {member.name}
                </h4>
                <p className="mb-3 text-sm font-medium text-tc-primary">
                  {member.role}
                </p>
                <p className="mb-4 text-sm text-gray-600">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-tc-text">
              Our Journey
            </h3>
            <p className="text-lg text-gray-600">
              Key milestones in our growth story
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-tc-primary to-tc-accent md:left-1/2"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={
                  inView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
                }
                transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                className={`relative mb-8 flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-0 h-4 w-4 rounded-full bg-tc-primary md:left-1/2 md:-translate-x-1/2"></div>
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                >
                  <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-lg">
                    <div className="mb-2 text-sm font-bold text-tc-primary">
                      {milestone.year}
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-tc-text">
                      {milestone.event}
                    </h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-tc-text">
              Ready to Build Something Amazing Together?
            </h3>
            <p className="mb-6 text-gray-600">
              Join hundreds of satisfied clients who trust Techcreants to
              deliver exceptional technology solutions.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="gradient" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Download Company Profile
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
