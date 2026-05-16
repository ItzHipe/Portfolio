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
    'AI-assisted crop disease detection: farmers upload leaf images, a vision model returns a diagnosis with confidence, and results are stored through a FastAPI backend for Flutter and web clients.',
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
    github: 'https://github.com',
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
    highlights: [
      'Sensor integration for soil and environmental readings',
      'Real-time monitoring with alert rules',
      'Disease detection hooks and recommendation concepts',
    ],
    tags: ['Raspberry Pi', 'Python', 'IoT Sensors', 'Monitoring'],
    status: 'Competition',
    featured: true,
    size: 'large',
    links: { github: 'https://github.com', demo: null },
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
    highlights: [
      'Command-driven terminal with rich outputs',
      'Design tokens and accessible dark-first UI',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live',
    featured: false,
    size: 'default',
    links: { github: 'https://github.com', demo: null },
    thumbnail: {
      gradient: 'from-accent-purple/20 via-elevated to-accent-cyan/10',
      label: 'Portfolio',
    },
  },
  {
    id: 'ai-experiments',
    title: 'Automation & AI Experiments',
    category: 'Prototypes · Tooling',
    description:
      'Smaller builds: scripting automation, frontend spikes, API sketches, and ML experiments that inform larger projects like FarmLens and CropSense.',
    highlights: [
      'Rapid API and UI prototypes',
      'Automation scripts and developer tooling trials',
    ],
    tags: ['Python', 'JavaScript', 'Docker', 'Git'],
    status: 'Ongoing',
    featured: false,
    size: 'default',
    links: { github: 'https://github.com', demo: null },
    thumbnail: {
      gradient: 'from-primary/15 via-elevated to-void',
      label: 'Experiments',
    },
  },
]
