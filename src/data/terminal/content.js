import { siteConfig } from '@/data/site'

export const whoamiContent = {
  name: siteConfig.name,
  role: 'Frontend Engineer · AI Systems · IoT',
  location: `${siteConfig.location} · open to remote`,
  focus: ['React / Next.js', 'FastAPI / Python', 'Raspberry Pi / sensors'],
}

export const aboutContent = {
  summary:
    'B.Tech CSE @ Pimpri Chinchwad University (2027, CGPA 8.15). I build FarmLens (AI crop disease detection), CropSense (IoT farming), and modern React interfaces.',
  highlights: [
    'Product-minded frontend with full-stack and ML integration experience',
    'Competition-tested agri-tech systems (Ideathon, NIRMAN)',
    'Freelance React delivery for Raftaar (2025)',
  ],
}

export const stackRows = [
  { layer: 'Frontend', tools: 'React, Next.js, JavaScript, Tailwind CSS' },
  { layer: 'Backend', tools: 'FastAPI, Flask, Node.js, REST' },
  { layer: 'AI / ML', tools: 'Python, computer vision, classification pipelines' },
  { layer: 'IoT', tools: 'Raspberry Pi, sensors, real-time monitoring' },
  { layer: 'Data', tools: 'MySQL, MongoDB, SQL' },
  { layer: 'Tools', tools: 'Git, Docker, C++, Java' },
]

export const skillsGroups = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'Backend & APIs',
    skills: ['FastAPI', 'Flask', 'Node.js', 'REST'],
  },
  {
    label: 'AI / ML',
    skills: ['Computer Vision', 'Image Classification', 'ML Pipelines'],
  },
  {
    label: 'IoT',
    skills: ['Raspberry Pi', 'Sensors', 'Monitoring', 'Python'],
  },
  {
    label: 'Data & Tools',
    skills: ['MySQL', 'MongoDB', 'Git', 'Docker'],
  },
]

export const projectsList = [
  { id: 'farmlens', name: 'FarmLens', status: 'Active', cmd: 'project farmlens' },
  { id: 'cropsense', name: 'CropSense', status: 'IoT', cmd: 'project cropsense' },
  { id: 'portfolio', name: 'Portfolio', status: 'Live', cmd: 'project portfolio' },
  { id: 'experiments', name: 'AI Experiments', status: 'Lab', cmd: 'project experiments' },
]

export const experienceTimeline = [
  {
    role: 'Freelance Frontend Developer',
    org: 'Raftaar',
    period: 'Jan 2025 – Feb 2025',
    detail:
      'React company website — responsive layouts, UI implementation, mobile/desktop polish.',
  },
  {
    role: 'B.Tech CSE',
    org: 'Pimpri Chinchwad University',
    period: 'Expected 2027',
    detail: 'CGPA 8.15 · Pune, Maharashtra',
  },
]

export const achievements = [
  {
    title: 'Ideathon 2.0 Winner (2025)',
    metric: 'CropSense @ PCU',
  },
  {
    title: 'Ideathon 1.0 Runner-up (2024)',
    metric: 'PCU',
  },
  {
    title: 'NIRMAN Finalist (2025)',
    metric: 'Amity University',
  },
]

export const contactInfo = {
  email: siteConfig.email,
  response: 'Usually within 1–2 days',
  openTo: ['Internships', 'Junior frontend', 'Collaboration'],
}
