'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Globe,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Calendar,
  Users,
  Zap,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email anytime',
    contact: 'hello@techcreants.com',
    action: 'mailto:hello@techcreants.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 6pm EST',
    contact: '+1 (555) 123-4567',
    action: 'tel:+15551234567',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our team instantly',
    contact: 'Start conversation',
    action: '#chat',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Calendar,
    title: 'Schedule Meeting',
    description: 'Book a free consultation',
    contact: 'Choose your time',
    action: '#calendar',
    color: 'from-orange-500 to-red-500',
  },
];

const offices = [
  {
    city: 'San Francisco',
    country: 'USA',
    address: '123 Innovation Drive, Suite 100',
    timezone: 'PST (UTC-8)',
    phone: '+1 (555) 123-4567',
    email: 'sf@techcreants.com',
  },
  {
    city: 'London',
    country: 'UK',
    address: '456 Tech Street, Floor 5',
    timezone: 'GMT (UTC+0)',
    phone: '+44 20 7123 4567',
    email: 'london@techcreants.com',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '789 Digital Avenue, Level 12',
    timezone: 'SGT (UTC+8)',
    phone: '+65 6123 4567',
    email: 'sg@techcreants.com',
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Globe, href: '#', label: 'Blog' },
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope and complexity. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer:
      'Yes! We provide comprehensive support packages including bug fixes, security updates, performance monitoring, and feature enhancements to keep your solution running smoothly.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We work with modern technologies including React, Next.js, Node.js, Python, AWS, Azure, and more. We choose the best tech stack based on your specific requirements and goals.',
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Absolutely! We excel at collaborating with in-house teams and can integrate seamlessly into your existing workflows, tools, and processes.',
  },
];

export function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
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
            <MessageSquare className="h-5 w-5 text-tc-primary" />
            <span className="text-sm font-semibold text-tc-primary">
              Get In Touch
            </span>
          </div>

          <h2 className="mb-6 font-heading text-4xl font-bold text-tc-text md:text-5xl">
            Let's Start Your Digital Transformation
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Ready to take your business to the next level? Get in touch with our
            team of experts and let's discuss how we can help you achieve your
            technology goals.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${method.color} text-white transition-transform duration-300 group-hover:scale-110`}
              >
                <method.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-tc-text">
                {method.title}
              </h3>
              <p className="mb-3 text-sm text-gray-600">{method.description}</p>
              <p className="text-sm font-semibold text-tc-primary transition-colors group-hover:text-tc-secondary">
                {method.contact}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-tc-text">
                Send us a Message
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-tc-text">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-tc-text placeholder-gray-500 focus:border-tc-primary focus:outline-none focus:ring-2 focus:ring-tc-primary/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-tc-text">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-tc-text placeholder-gray-500 focus:border-tc-primary focus:outline-none focus:ring-2 focus:ring-tc-primary/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-tc-text">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-tc-text placeholder-gray-500 focus:border-tc-primary focus:outline-none focus:ring-2 focus:ring-tc-primary/20"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-tc-text">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-tc-text placeholder-gray-500 focus:border-tc-primary focus:outline-none focus:ring-2 focus:ring-tc-primary/20"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-tc-text">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-tc-text focus:border-tc-primary focus:outline-none focus:ring-2 focus:ring-tc-primary/20"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">
                          Mobile App Development
                        </option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="data-analytics">
                          Data Analytics & AI
                        </option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="consulting">
                          Technology Consulting
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-tc-text">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-tc-text focus:border-tc-primary focus:outline-none focus:ring-2 focus:ring-tc-primary/20"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10K</option>
                        <option value="10k-25k">$10K - $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="over-100k">Over $100K</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-tc-text">
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-tc-text placeholder-gray-500 focus:border-tc-primary focus:outline-none focus:ring-2 focus:ring-tc-primary/20"
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      'Sending Message...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-500" />
                  <h4 className="mb-2 text-xl font-bold text-tc-text">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Contact Information & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Office Locations */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold text-tc-text">
                Our Global Offices
              </h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="mb-2 flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-tc-primary" />
                      <h4 className="font-semibold text-tc-text">
                        {office.city}, {office.country}
                      </h4>
                    </div>
                    <p className="mb-2 text-sm text-gray-600">
                      {office.address}
                    </p>
                    <div className="grid gap-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{office.timezone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold text-tc-text">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <h4 className="mb-2 font-semibold text-tc-text">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold text-tc-text">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-tc-primary hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-tc-primary/5 to-tc-secondary/5 p-8">
            <h3 className="mb-4 text-2xl font-bold text-tc-text">
              Prefer to Schedule a Call?
            </h3>
            <p className="mb-6 text-gray-600">
              Book a free 30-minute consultation with our experts to discuss
              your project requirements.
            </p>
            <Button size="lg" variant="gradient" className="group">
              Schedule Free Consultation
              <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
