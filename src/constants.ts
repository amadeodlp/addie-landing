export const LINKS = {
  DOWNLOAD_MAC: 'https://github.com/amadeodlp/addie/releases/latest/download/Addie.dmg',
  DOWNLOAD_WIN: 'https://github.com/amadeodlp/addie/releases/latest/download/Addie.Setup.exe',
  DOWNLOAD_PAGE: '/download',
  GITHUB:        'https://github.com/amadeodlp/addie',
  SPONSORS:      'https://github.com/sponsors/amadeodlp',
  RELEASES:      'https://github.com/amadeodlp/addie/releases/latest',
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
    description: 'Full control over all native Ableton devices — EQ Eight, compressors, reverbs, delays, limiters, Wavetable, Drift, and more.',
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
    description: 'You bring your own API key — OpenAI, Anthropic, DeepSeek, or a local model via Ollama. Addie never sees your data. What goes to the LLM is your choice, not ours.',
    tag: 'BYOK',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Download & install',
    description: 'Download the Addie app for Mac or Windows and run it. Addie copies its control surface into Ableton\'s MIDI Remote Scripts folder automatically. One click in Preferences to enable. Done in 2 minutes.',
  },
  {
    step: '02',
    title: 'Paste your API key',
    description: 'Grab a key from OpenAI, Anthropic, DeepSeek, or any compatible provider — or point it at a local Ollama model for zero cost. Addie never stores or transmits your key.',
  },
  {
    step: '03',
    title: 'Open your session',
    description: 'Addie reads your full session — tracks, devices, parameters, clip layout — and holds it all in context before you type a word.',
  },
  {
    step: '04',
    title: 'Talk to it',
    description: 'Type what you hear. "The bass is fighting the kick." "Add a limiter to the master." "Write a 4-bar drum loop with swing." Addie shows you what it\'s going to do, you confirm, it executes.',
  },
]

export const TESTIMONIALS = [
  {
    quote: "I've been making music for 15 years. This doesn't replace what I do — it removes the stupid friction that slows me down.",
    author: 'Electronic producer',
    detail: 'Berlin',
  },
  {
    quote: "Asked it to fix the low-end clash between kick and bass. It found the frequency overlap and fixed it. I'd been trying to sort that by ear for an hour.",
    author: 'Self-producing musician',
    detail: 'Los Angeles',
  },
  {
    quote: "I make music. I don't want to learn mixing. Addie handles the stuff I'd otherwise spend hours googling.",
    author: 'Singer-songwriter',
    detail: 'Buenos Aires',
  },
]
