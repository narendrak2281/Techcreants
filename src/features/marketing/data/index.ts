// Static data for marketing sections
export const companyStats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Years Experience', value: '8+' },
  { label: 'Team Members', value: '50+' },
];

export const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'Django',
  'AWS',
  'Docker',
  'Kubernetes',
  'PostgreSQL',
  'MongoDB',
  'Redis',
];

export const clientLogos = [
  { name: 'TechCorp', logo: '/clients/techcorp.svg' },
  { name: 'StartupX', logo: '/clients/startupx.svg' },
  { name: 'Enterprise Inc', logo: '/clients/enterprise.svg' },
  { name: 'InnovateLab', logo: '/clients/innovate.svg' },
];

export const testimonials = [
  {
    id: '1',
    content:
      'Techcreants delivered an exceptional product that exceeded our expectations. Their technical expertise and project management were outstanding.',
    author: {
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechCorp',
      avatar: '/testimonials/sarah.jpg',
    },
    rating: 5,
    featured: true,
  },
  {
    id: '2',
    content:
      'Working with Techcreants was a game-changer for our startup. They helped us build a scalable platform that grew with our business.',
    author: {
      name: 'Michael Chen',
      position: 'Founder',
      company: 'StartupX',
      avatar: '/testimonials/michael.jpg',
    },
    rating: 5,
    featured: true,
  },
  {
    id: '3',
    content:
      'The team at Techcreants is incredibly professional and delivers high-quality work on time. Highly recommended!',
    author: {
      name: 'Emily Rodriguez',
      position: 'Product Manager',
      company: 'Enterprise Inc',
      avatar: '/testimonials/emily.jpg',
    },
    rating: 5,
    featured: false,
  },
];

export const faqs = [
  {
    question: 'What types of projects do you work on?',
    answer:
      'We work on a wide range of projects including web applications, mobile apps, custom software solutions, and enterprise systems. Our expertise spans from startups to large enterprise implementations.',
  },
  {
    question: 'How do you ensure project quality?',
    answer:
      'We follow industry best practices including code reviews, automated testing, continuous integration, and regular client communication. Our team consists of senior developers with extensive experience.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on complexity and scope. Simple websites can be completed in 2-4 weeks, while complex applications may take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes, we offer comprehensive support and maintenance packages to ensure your application remains secure, updated, and performing optimally. This includes bug fixes, security updates, and feature enhancements.',
  },
  {
    question: 'How do you handle project communication?',
    answer:
      'We believe in transparent communication throughout the project lifecycle. We provide regular updates, use project management tools, and schedule weekly check-ins to ensure everyone is aligned.',
  },
];

export const serviceCategories = [
  {
    name: 'Web Development',
    description:
      'Modern, responsive web applications built with cutting-edge technologies',
    icon: '🌐',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android',
    icon: '📱',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    name: 'Backend Development',
    description: 'Scalable server-side solutions and API development',
    icon: '⚙️',
    technologies: ['Node.js', 'Python', 'Django', 'PostgreSQL'],
  },
  {
    name: 'Cloud & DevOps',
    description: 'Cloud infrastructure setup and deployment automation',
    icon: '☁️',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
];
