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
    links: { github: null, demo: null },
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
    links: { github: 'https://github.com/ItzHipe/CropSense', demo: null },
  },
  raftaar: {
    id: 'raftaar',
    name: 'Raftaar',
    tagline: 'Company website frontend',
    category: 'Frontend · React · JavaScript',
    status: 'Completed',
    description:
      'Built and refined the company website in React. Implemented responsive layouts and improved site behavior on desktop and mobile.',
    stack: ['React', 'JavaScript', 'Tailwind CSS'],
    metrics: [
      { label: 'Role', value: 'Freelance Frontend' },
      { label: 'Focus', value: 'Responsive UI' },
    ],
    links: { github: 'https://github.com/ItzHipe/Raftaar', demo: 'https://raftaar.win' },
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
    links: { github: 'https://github.com/ItzHipe/Portfolio', demo: null },
  },
}
