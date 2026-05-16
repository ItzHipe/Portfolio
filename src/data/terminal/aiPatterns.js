export function matchAiQuery(query) {
  const q = query.toLowerCase().trim()
  if (!q) return null

  if (/farmlens|farm\s*lens|disease|leaf|vision|classification/.test(q)) {
    return {
      answer:
        'FarmLens is an AI crop disease platform: leaf uploads go through a vision model, FastAPI returns classification + confidence, and results are stored for Flutter/web clients.',
      rich: { type: 'project-hint', projectId: 'farmlens' },
    }
  }

  if (/cropsense|crop\s*sense|iot|sensor|raspberry|ideathon/.test(q)) {
    return {
      answer:
        'CropSense is an IoT smart farming system on Raspberry Pi — environmental sensors, real-time monitoring, alerts, and agri recommendations. Winner at PCU Ideathon 2.0 (2025).',
      rich: { type: 'project-hint', projectId: 'cropsense' },
    }
  }

  if (/stack|technolog|skills|tools/.test(q)) {
    return {
      answer:
        'Jay uses React/Next.js, JavaScript, Tailwind, Python, FastAPI, Flask, Node.js, MySQL/MongoDB, Raspberry Pi, Git, and Docker — with focus on AI pipelines and IoT monitoring.',
      rich: { type: 'skills-hint' },
    }
  }

  if (/jay|who|about|student|pune|pcu/.test(q)) {
    return {
      answer:
        'Jay Patil — frontend engineer and AI/IoT builder from Pune. B.Tech CSE @ Pimpri Chinchwad University (2027, CGPA 8.15).',
    }
  }

  if (/experience|raftaar|freelance|job|intern/.test(q)) {
    return {
      answer:
        'Freelance frontend at Raftaar (Jan–Feb 2025): React company site, responsive UI, mobile polish. Type `experience` for details.',
    }
  }

  if (/achieve|award|ideathon|nirman/.test(q)) {
    return {
      answer:
        'Ideathon 2.0 winner (2025) for CropSense, Ideathon 1.0 runner-up (2024), NIRMAN 2025 finalist. Type `achievements`.',
    }
  }

  if (/contact|email|hire/.test(q)) {
    return {
      answer: 'hello@jaypatil.dev — open to internships and junior frontend roles. Type `contact`.',
    }
  }

  return {
    answer:
      'Try: ask "what is FarmLens" · ask "tell me about CropSense" · or type `projects` / `help`.',
  }
}
