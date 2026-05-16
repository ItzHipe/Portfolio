/** Terminal payloads for `project <name>` */

export const terminalProjects = {
  farmlens: {
    id: 'farmlens',
    name: 'FarmLens',
    tagline: 'AI crop disease detection platform',
    category: 'AI · Computer Vision · FastAPI',
    status: 'Active',
    description:
      'Upload leaf imagery → vision model classifies disease → confidence + structured record stored via FastAPI for Flutter/web clients.',
    stack: ['Python', 'FastAPI', 'Flutter', 'Node.js', 'SQL', 'OpenCV', 'ML'],
    metrics: [
      { label: 'Pipeline', value: 'Upload → infer → store' },
      { label: 'Output', value: 'Confidence score' },
      { label: 'Clients', value: 'Flutter + API' },
    ],
    aiNote:
      'Architecture: mobile/web → FastAPI inference → SQL prediction history. Focus on practical field use, not demo-only accuracy claims.',
    links: { github: 'https://github.com', demo: null },
  },
  cropsense: {
    id: 'cropsense',
    name: 'CropSense',
    tagline: 'IoT smart farming system',
    category: 'Raspberry Pi · Sensors · Python',
    status: 'Competition',
    description:
      'Environmental sensors on Raspberry Pi, real-time crop monitoring, threshold alerts, and disease/recommendation logic. Winner — PCU Ideathon 2.0, 2025.',
    stack: ['Raspberry Pi', 'Python', 'IoT Sensors', 'Monitoring'],
    metrics: [
      { label: 'Hardware', value: 'RPi + sensors' },
      { label: 'Data', value: 'Real-time streams' },
      { label: 'Award', value: 'Ideathon 2.0' },
    ],
    links: { github: 'https://github.com', demo: null },
  },
  experiments: {
    id: 'experiments',
    name: 'Automation & AI Experiments',
    tagline: 'Prototypes and tooling',
    category: 'Scripts · APIs · UI spikes',
    status: 'Ongoing',
    description:
      'Smaller automation scripts, ML trials, and frontend experiments that feed into FarmLens and CropSense.',
    stack: ['Python', 'JavaScript', 'Docker', 'Git'],
    metrics: [
      { label: 'Focus', value: 'Rapid iteration' },
    ],
    links: { github: 'https://github.com', demo: null },
  },
  portfolio: {
    id: 'portfolio',
    name: 'Developer Portfolio',
    tagline: 'This site',
    category: 'Next.js · Interaction design',
    status: 'Live',
    description:
      'Interactive terminal, motion system, glass UI, performance-tuned React — built to demonstrate frontend craft.',
    stack: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    metrics: [
      { label: 'Terminal', value: 'Full command shell' },
      { label: 'Perf', value: 'Lazy sections' },
    ],
    links: { github: 'https://github.com', demo: null },
  },
}
