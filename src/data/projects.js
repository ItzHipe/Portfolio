export const projectsContent = {
  tagline: 'Selected work',
  title: 'Projects',
  subtitle:
    'Systems built for coursework, competitions, and real clients — with clear technical scope and working demos where possible.',
}

export const flagshipProject = {
  id: 'farmlens',
  title: 'FarmLens',
  category: 'AI · Computer Vision · AgriTech',
  description:
    'AI-powered crop disease detection platform where farmers upload leaf images and receive real-time diagnoses with confidence scoring through a FastAPI inference pipeline.',
    image: null,
    architecture:
    'Flutter/mobile and web clients → FastAPI inference service → SQL records for predictions. Image preprocessing and model inference run server-side with structured response payloads.',
  challenges: [
    'Balancing model accuracy with inference time on consumer hardware',
    'Designing a clear upload → result flow for non-technical users',
    'Keeping prediction history consistent across API and database layers',
  ],
  highlights: [
    'Leaf image classification with confidence scores',
    'Structured prediction records and API integration',
    'Real-time image processing pipeline',
    'Cloud-ready FastAPI service architecture',
  ],
  tags: ['Python', 'FastAPI', 'Flutter', 'Node.js', 'SQL', 'Computer Vision', 'ML'],
  status: 'Active',
  featured: true,
  links: {
    github: null,
    demo: null,
  },
  prediction: {
    disease: 'Tomato — Early Blight',
    confidence: 91.4,
    health: 'Treatment recommended · logged to history',
  },
}

export const projects = [
  {
    id: 'cropsense',
    title: 'CropSense',
    category: 'IoT · Smart Farming',
    description:
      'IoT monitoring stack on Raspberry Pi: environmental sensors feed real-time data, alerts fire on thresholds, and disease signals tie into recommendation logic. Winner at PCU Ideathon 2.0 (2025).',
    image: '/images/projects/cropsense-dashboard.webp',
      highlights: [
      'Sensor integration for soil and environmental readings',
      'Real-time monitoring with alert rules',
      'Disease detection hooks and recommendation concepts',
    ],
    tags: ['Raspberry Pi', 'Python', 'IoT Sensors', 'Monitoring'],
    status: 'Competition',
    featured: true,
    size: 'large',
    links: { github: 'https://github.com/ItzHipe/CropSense', demo: null },
    thumbnail: {
      gradient: 'from-accent-teal/25 via-elevated to-accent-cyan/15',
      label: 'CropSense',
    },
  },
  {
    id: 'portfolio-website',
    title: 'Developer Portfolio',
    category: 'Frontend · Interaction Design',
    description:
      'This site: interactive terminal, cinematic motion system, glass UI, and responsive React architecture tuned for performance on mid-range devices.',
    image: '/images/projects/portfolio-home.webp',
      highlights: [
      'Command-driven terminal with rich outputs',
      'Design tokens and accessible dark-first UI',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live',
    featured: false,
    size: 'default',
    links: { github: 'https://github.com/ItzHipe/Portfolio', demo: null },
    thumbnail: {
      gradient: 'from-accent-purple/20 via-elevated to-accent-cyan/10',
      label: 'Portfolio',
    },
  },
  {
    id: 'raftaar',
    title: 'Raftaar',
    category: 'Frontend Development',
    image: '/images/projects/raftaar.png',
    description:
      'Built and refined the company website in React and JavaScript. Implemented responsive layouts, collaborated on UI details with the team, and improved how the site behaves on desktop and mobile.',
    highlights: [
      'Responsive React layouts',
      'Team UI collaboration',
      'Desktop & mobile optimization',
    ],
    tags: ['React', 'JavaScript', 'Frontend', 'Tailwind CSS'],
    status: 'Completed',
    featured: false,
    size: 'default',
    links: { github: 'https://github.com/ItzHipe/Raftaar', demo: 'https://raftaar.win' },
    thumbnail: {
      gradient: 'from-accent-cyan/20 via-elevated to-primary/10',
      label: 'Raftaar',
    },
  },
]
