'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks';
import {
  AlertCircle,
  TrendingDown,
  Clock,
  DollarSign,
  Users,
  Shield,
  CheckCircle2,
  ArrowRight,
  Zap,
  Target,
  BarChart,
  Lightbulb,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const problems = [
  {
    icon: TrendingDown,
    title: 'Inefficient Operations',
    description:
      'Manual processes and outdated systems drain productivity and increase operational costs.',
    impact: '40% productivity loss',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Clock,
    title: 'Time-to-Market Delays',
    description:
      'Lengthy development cycles and poor project management slow down product launches.',
    impact: '6+ months delays',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: DollarSign,
    title: 'Rising Operational Costs',
    description:
      'Legacy infrastructure and fragmented tools lead to unnecessary expenses and waste.',
    impact: '60% cost increase',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Users,
    title: 'Poor Customer Experience',
    description:
      'Disconnected systems result in inconsistent service and reduced customer satisfaction.',
    impact: '30% churn rate',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Shield,
    title: 'Security Vulnerabilities',
    description:
      'Outdated security measures expose businesses to cyber threats and compliance issues.',
    impact: '250% risk increase',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
];

const solutions = [
  {
    icon: Zap,
    title: 'Process Automation',
    description:
      'Streamline workflows with intelligent automation that reduces manual work by 80%.',
    benefits: [
      'Automated workflows',
      'Error reduction',
      'Real-time monitoring',
    ],
    improvement: '80% efficiency gain',
    color: 'text-tc-primary',
    gradient: 'from-tc-primary to-tc-secondary',
  },
  {
    icon: Rocket,
    title: 'Rapid Development',
    description:
      'Accelerate product delivery with agile methodologies and cutting-edge development practices.',
    benefits: ['Agile methodology', 'CI/CD pipelines', 'Faster deployments'],
    improvement: '60% faster delivery',
    color: 'text-tc-secondary',
    gradient: 'from-tc-secondary to-tc-accent',
  },
  {
    icon: BarChart,
    title: 'Cost Optimization',
    description:
      'Reduce operational expenses through smart resource allocation and cloud optimization.',
    benefits: ['Resource optimization', 'Cloud efficiency', 'Smart scaling'],
    improvement: '50% cost reduction',
    color: 'text-green-500',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Target,
    title: 'Enhanced UX/UI',
    description:
      'Create exceptional user experiences that drive engagement and customer loyalty.',
    benefits: [
      'User-centered design',
      'Responsive interfaces',
      'Accessibility',
    ],
    improvement: '40% satisfaction boost',
    color: 'text-pink-500',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Implement robust security measures that protect against modern cyber threats.',
    benefits: ['Advanced encryption', 'Compliance ready', 'Threat monitoring'],
    improvement: '99.9% security score',
    color: 'text-indigo-500',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

const stats = [
  { value: '95%', label: 'Problem Resolution Rate' },
  { value: '3x', label: 'ROI Improvement' },
  { value: '50+', label: 'Industries Served' },
  { value: '24/7', label: 'Support Coverage' },
];

export function ProblemSolution() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="section-padding bg-gradient-to-br from-gray-50 to-white"
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
            <Lightbulb className="h-5 w-5 text-tc-primary" />
            <span className="text-sm font-semibold text-tc-primary">
              Problem & Solution
            </span>
          </div>

          <h2 className="mb-6 font-heading text-4xl font-bold text-tc-text md:text-5xl">
            Transforming Business Challenges into Growth Opportunities
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We understand the critical challenges facing modern businesses and
            provide innovative technology solutions that drive measurable
            results and sustainable growth.
          </p>
        </motion.div>

        {/* Problems Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-24"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-tc-text">
              Common Business Challenges
            </h3>
            <p className="text-lg text-gray-600">
              Identifying the pain points that hold businesses back from
              achieving their full potential
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${problem.bgColor}`}
                >
                  <problem.icon className={`h-6 w-6 ${problem.color}`} />
                </div>

                <h4 className="mb-3 text-xl font-semibold text-tc-text">
                  {problem.title}
                </h4>

                <p className="mb-4 text-gray-600">{problem.description}</p>

                <div className="flex items-center justify-between">
                  <div
                    className={`rounded-full px-3 py-1 text-sm font-medium ${problem.bgColor} ${problem.color}`}
                  >
                    {problem.impact}
                  </div>
                  <AlertCircle
                    className={`h-5 w-5 ${problem.color} opacity-60`}
                  />
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transition Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-24 flex justify-center"
        >
          <div className="rounded-full bg-gradient-to-r from-tc-primary to-tc-secondary p-4 shadow-lg">
            <ArrowRight className="h-8 w-8 text-white" />
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-24"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-tc-text">
              Our Innovative Solutions
            </h3>
            <p className="text-lg text-gray-600">
              Cutting-edge technology solutions designed to address your
              specific business challenges
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={
                  inView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
                }
                transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />

                <div className="relative">
                  <div className="mb-6 flex items-center space-x-4">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${solution.gradient} text-white shadow-lg`}
                    >
                      <solution.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-tc-text">
                        {solution.title}
                      </h4>
                      <div className={`text-sm font-medium ${solution.color}`}>
                        {solution.improvement}
                      </div>
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed text-gray-600">
                    {solution.description}
                  </p>

                  <div className="space-y-3">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle2 className={`h-5 w-5 ${solution.color}`} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-20"
        >
          <div className="rounded-3xl bg-gradient-to-r from-tc-primary via-tc-secondary to-tc-accent p-8 text-white">
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-3xl font-bold">
                Proven Results That Speak for Themselves
              </h3>
              <p className="text-lg text-white/90">
                Our solutions deliver measurable impact across all business
                metrics
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
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="mb-2 text-4xl font-bold">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold text-tc-text">
              Ready to Transform Your Business?
            </h3>
            <p className="mb-6 text-gray-600">
              Let's discuss how our solutions can address your specific
              challenges and drive measurable growth for your organization.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="gradient" className="group">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Download Case Study
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
