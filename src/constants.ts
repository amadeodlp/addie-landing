export const LINKS = {
  FREE_TRIAL: 'https://addie.lemonsqueezy.com/checkout/free-trial', // replace with real URL
  BUY: 'https://addie.lemonsqueezy.com/checkout/buy/addie-v1',      // replace with real URL
  GITHUB: 'https://github.com/yourusername/addie',
}

export const PRICING = {
  amount: 20,
  currency: 'USD',
  model: 'one-time',
  trial_uses: 10,
  version: '1.0',
}

export const FEATURES = [
  {
    id: 'natural-language',
    title: 'Talk to your session',
    description: 'Say "the kick sounds muddy below 200Hz" and Addie finds the right EQ band and adjusts it. No menus, no clicking.',
    tag: 'NLP control',
  },
  {
    id: 'device-params',
    title: 'Deep device access',
    description: 'Full control over all native Ableton devices. Third-party plugins work when exposed via Configure mode — most effects yes, most instruments no.',
    tag: 'Deep integration',
  },
  {
    id: 'composition',
    title: 'Drum patterns & melodies',
    description: 'Generate MIDI clips from description. "Punchy trap hi-hat pattern at 140 BPM with ghost notes." Written directly into your session.',
    tag: 'MIDI generation',
  },
  {
    id: 'mix-analysis',
    title: 'Mix diagnosis',
    description: 'Addie reads your entire session — EQ curves, compression ratios, routing, sends — and tells you what\'s masking what, what\'s missing, what\'s clipping.',
    tag: 'Session analysis',
  },
  {
    id: 'action-confirm',
    title: 'You stay in control',
    description: 'Addie proposes every action before executing. Review the plan, confirm, or reject. No surprise changes. You\'re the producer.',
    tag: 'Human-first',
  },
  {
    id: 'local-first',
    title: 'Your LLM, your rules',
    description: 'You bring your own API key — OpenAI, Anthropic, DeepSeek, or a local model. Addie never sees your data. What goes to the LLM is your choice, not ours.',
    tag: 'BYOK',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Download & install',
    description: 'Download the Addie app for Mac or Windows and run it. Then Addie copies its control surface into Ableton\'s MIDI Remote Scripts folder automatically. One click in Preferences to enable. Done in 2 minutes.',
  },
  {
    step: '02',
    title: 'Open your session',
    description: 'Addie reads your full session — tracks, devices, parameters, clip layout — and holds it all in context.',
  },
  {
    step: '03',
    title: 'Talk to it',
    description: 'Type what you hear. "The bass is fighting the kick." "Add a limiter to the master." "Write a 4-bar drum loop with swing."',
  },
  {
    step: '04',
    title: 'Review & confirm',
    description: 'Addie shows you exactly what it\'s going to do. You say yes. It executes. You keep making music.',
  },
]

export const TESTIMONIALS = [
  {
    quote: "I've been making music for 15 years. This doesn't replace what I do — it removes the stupid friction that slows me down.",
    author: 'Beta tester, electronic producer',
    detail: 'Berlin',
  },
  {
    quote: "Asked it to fix the low-end clash between kick and bass. It found the frequency overlap and fixed it. I'd been trying to sort that by ear for an hour.",
    author: 'Beta tester, self-producing musician',
    detail: 'Los Angeles',
  },
  {
    quote: "I make music. I don't want to learn mixing. Addie handles the stuff I'd otherwise spend hours googling.",
    author: 'Beta tester, singer-songwriter',
    detail: 'Buenos Aires',
  },
]
