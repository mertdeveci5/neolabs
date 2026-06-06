export type CompanyNewsItem = {
  date: string
  id: string
  link: string
  markdown?: string
  snippet: string
  source: string
  title: string
}

export const newsFetchedAt = "2026-06-06T15:21:18.216816+00:00"

export const companyNews: Record<string, CompanyNewsItem[]> = {
  "thinking-machines-lab": [
    {
      "id": "thinking-machines-lab-1",
      "title": "Interaction Models: A Scalable Approach to Human-AI Collaboration",
      "link": "https://thinkingmachines.ai/blog/interaction-models/",
      "source": "Thinking Machines Lab",
      "date": "4 weeks ago",
      "snippet": "Today, we're announcing a research preview of interaction models: models that handle interaction natively rather than through external..."
    },
    {
      "id": "thinking-machines-lab-2",
      "title": "Announcing Tinker",
      "link": "https://thinkingmachines.ai/news/announcing-tinker/",
      "source": "Thinking Machines Lab",
      "date": "Oct 1, 2025",
      "snippet": "Today, we are launching Tinker, a flexible API for fine-tuning language models. It empowers researchers and hackers to experiment with..."
    },
    {
      "id": "thinking-machines-lab-3",
      "title": "Tinker: Announcing Research and Teaching Grants",
      "link": "https://thinkingmachines.ai/news/tinker-research-and-teaching-grants/",
      "source": "Thinking Machines Lab",
      "date": "Oct 29, 2025",
      "snippet": "We launched Tinker nearly one month ago. Since then, researchers across academia and non-profits have been using Tinker to train custom..."
    },
    {
      "id": "thinking-machines-lab-4",
      "title": "Tinker: Call for Community Projects",
      "link": "https://thinkingmachines.ai/news/call-for-community-projects/",
      "source": "Thinking Machines Lab",
      "date": "Nov 7, 2025",
      "snippet": "We launched Tinker to enable builders and researchers to train models their own way, whether they're conducting studies or customizing..."
    },
    {
      "id": "thinking-machines-lab-5",
      "title": "Tinker is a training API for builders",
      "link": "https://thinkingmachines.ai/tinker/",
      "source": "Thinking Machines Lab",
      "date": "Oct 1, 2025",
      "snippet": "Tinker is a training API for researchers and developers."
    }
  ],
  "ssi-safe-superintelligence": [
    {
      "id": "ssi-safe-superintelligence-1",
      "title": "The 10 Biggest Rounds Of September: Safe Superintelligence’s $1B Raise Reigns Supreme",
      "link": "https://news.crunchbase.com/venture/biggest-rounds-september-2024-safe-superintelligence-candid-therapeutics/",
      "source": "Crunchbase News",
      "date": "Oct 1, 2024",
      "snippet": "The 10 Biggest Rounds Of September: Safe Superintelligence's $1B Raise Reigns Supreme. Chris Metinko. October 1, 2024."
    }
  ],
  "skild-ai": [
    {
      "id": "skild-ai-1",
      "title": "Announcing our $300M Series A Funding",
      "link": "https://www.skild.ai/blogs/announcing-our-300m-series-a",
      "source": "Skild.ai",
      "date": "Jul 9, 2024",
      "snippet": "Skild AI raises $300M Series A led by Lightspeed, Coatue, SoftBank, and Jeff Bezos to build the world's first general-purpose robotic..."
    },
    {
      "id": "skild-ai-2",
      "title": "Building the general-purpose robotic brain",
      "link": "https://www.skild.ai/blogs/building-the-general-purpose-robotic-brain",
      "source": "Skild.ai",
      "date": "Jul 29, 2025",
      "snippet": "Discover how Skild AI is developing breakthrough foundation models for general-purpose robotics, enabling robots to adapt and perform across..."
    },
    {
      "id": "skild-ai-3",
      "title": "Robotics startup Skild AI raises $1.4B led by SoftBank Group",
      "link": "https://technical.ly/entrepreneurship/skild-ai-1-4-billion-raise/",
      "source": "Technical.ly",
      "date": "Jan 14, 2026",
      "snippet": "The East Liberty-based AI robotics startup Skild AI has raised $1.4 billion in fresh funding, boosting the company's valuation to over $14..."
    }
  ],
  "poolside": [
    {
      "id": "poolside-1",
      "title": "Laguna XS.2 and M.1: A Deeper Dive",
      "link": "https://poolside.ai/blog/laguna-a-deeper-dive",
      "source": "Poolside",
      "date": "1 month ago",
      "snippet": "We've released the first two models in the Laguna family, Laguna M.1 and Laguna XS.2, alongside the runtime we use to train and operate..."
    },
    {
      "id": "poolside-2",
      "title": "Introducing Laguna XS.2 and Laguna M.1",
      "link": "https://poolside.ai/blog/introducing-laguna-xs2-m1",
      "source": "Poolside",
      "date": "1 month ago",
      "snippet": "We're releasing two foundation models and two products into preview today."
    },
    {
      "id": "poolside-3",
      "title": "The hidden engineering behind foundation model building",
      "link": "https://poolside.ai/blog/introducing-the-model-factory",
      "source": "Poolside",
      "date": "Jul 17, 2025",
      "snippet": "TL;DR: Traditional foundation model training approaches require substantial manual interaction, little signal for improvement,..."
    },
    {
      "id": "poolside-4",
      "title": "The carrier and the beacon",
      "link": "https://poolside.ai/blog/the-carrier-and-the-beacon",
      "source": "Poolside",
      "date": "Aug 14, 2025",
      "snippet": "Running inference and evaluations inside the Model Factory. TL;DR: We present the details of how we run inference and evaluations at..."
    }
  ],
  "reflection-ai": [
    {
      "id": "reflection-ai-1",
      "title": "A Path to Superintelligence",
      "link": "https://reflection.ai/blog/reflection-a-path-to-superintelligence",
      "source": "Reflection AI",
      "date": "Mar 7, 2025",
      "snippet": "More than a decade ago, our co-founder Ioannis joined DeepMind as a founding engineer where he helped create AlphaGo, the first system to..."
    },
    {
      "id": "reflection-ai-2",
      "title": "Nvidia-backed ‘open’ AI start-up courts investors at $20bn-plus valuation",
      "link": "https://www.ft.com/content/07073c8f-7176-471c-ac69-ef1458845fb2?syn-25a6b1a6=1",
      "source": "Financial Times",
      "date": "Mar 2, 2026",
      "snippet": "Reflection AI's new funding talks come as Trump administration seeks US rivals to China's DeepSeek."
    },
    {
      "id": "reflection-ai-3",
      "title": "Reflection AI raises $2B to be America’s open frontier AI lab, challenging DeepSeek",
      "link": "https://techcrunch.com/2025/10/09/reflection-raises-2b-to-be-americas-open-frontier-ai-lab-challenging-deepseek/",
      "source": "TechCrunch",
      "date": "Oct 9, 2025",
      "snippet": "Reflection AI, a startup founded just last year by two former Google DeepMind researchers, has raised $2 billion at an $8 billion valuation,..."
    }
  ],
  "project-prometheus": [
    {
      "id": "project-prometheus-1",
      "title": "Jeff Bezos' secretive AI startup is set to be valued at around $38 billion after raising a $10 billion mega round",
      "link": "https://www.businessinsider.com/jeff-bezos-project-prometheus-valued-at-38-billion-2026-4",
      "source": "Business Insider",
      "date": "1 month ago",
      "snippet": "Project Prometheus is raising around $10 billion in fresh funding at a post-money valuation of around $38 billion."
    },
    {
      "id": "project-prometheus-2",
      "title": "Jeff Bezos Creates A.I. Start-Up Where He Will Be Co-Chief Executive",
      "link": "https://www.nytimes.com/2025/11/17/technology/bezos-project-prometheus.html",
      "source": "The New York Times",
      "date": "Nov 17, 2025",
      "snippet": "Called Project Prometheus, the company is focusing on artificial intelligence for the engineering and manufacturing of computers,..."
    },
    {
      "id": "project-prometheus-3",
      "title": "Jeff Bezos’s $30bn start-up seeks tens of billions to buy industrial companies disrupted by AI",
      "link": "https://www.ft.com/content/7b1bdc9d-c857-4ec9-91b4-fb4f6dd2e43b?syn-25a6b1a6=1",
      "source": "Financial Times",
      "date": "Feb 26, 2026",
      "snippet": "Project Prometheus in new talks with Abu Dhabi and JPMorgan over vehicle to buy up businesses disrupted by the technology."
    }
  ],
  "physical-intelligence": [
    {
      "id": "physical-intelligence-1",
      "title": "A peek inside Physical Intelligence, the startup building Silicon Valley's buzziest robot brains",
      "link": "https://techcrunch.com/2026/01/30/physical-intelligence-stripe-veteran-lachy-grooms-latest-bet-is-building-silicon-valleys-buzziest-robot-brains/",
      "source": "TechCrunch",
      "date": "Jan 30, 2026",
      "snippet": "From the street, the only indication I've found Physical Intelligence's headquarters in San Francisco is a pi symbol that's a slightly..."
    }
  ],
  "unconventional-ai": [
    {
      "id": "unconventional-ai-1",
      "title": "Bezos-backed Unconventional AI aims to make datacenter power problems go away",
      "link": "https://www.theregister.com/special-features/2025/12/08/bezos-backed-unconventional-ai-addresses-datacenter-power/2006862",
      "source": "The Register",
      "date": "Dec 8, 2025",
      "snippet": "Interview: Startup wagers the path to sustainable AI might be found in nature's most amazing design - the brain."
    }
  ],
  "humansand": [
    {
      "id": "humansand-1",
      "title": "Humans& Raises Huge $480M Seed Round At $4.48B Valuation For ‘Human-Centric AI Lab’",
      "link": "https://news.crunchbase.com/ai/humans-raises-huge-seed-round-unicorn-valuation/",
      "source": "Crunchbase News",
      "date": "Jan 20, 2026",
      "snippet": "Humans&, a new company founded by top researchers from Google, Anthropic, xAI, OpenAI and Meta, among others, announced Tuesday that it has..."
    },
    {
      "id": "humansand-2",
      "title": "An A.I. Start-Up Says It Wants to Empower Workers, Not Replace Them",
      "link": "https://www.nytimes.com/2026/01/20/technology/humans-ai-anthropic-xai.html",
      "source": "The New York Times",
      "date": "Jan 20, 2026",
      "snippet": "Founded by researchers from Anthropic, Google and xAI, the new company, Humans&, is already valued at $4.48 billion."
    },
    {
      "id": "humansand-3",
      "title": "AI startup Humans& raises $480 million at $4.5 billion valuation in seed round",
      "link": "https://www.reuters.com/business/ai-startup-humans-raises-480-million-45-billion-valuation-seed-round-2026-01-20/",
      "source": "Reuters",
      "date": "Jan 20, 2026",
      "snippet": "AI startup Humans&, founded by former OpenAI, Alphabet ​and xAI researchers, has raised $480 million in a seed financing ‌round,..."
    },
    {
      "id": "humansand-4",
      "title": "Humans&, a 'human-centric' AI startup founded by Anthropic, xAI, Google alums, raised $480M seed round",
      "link": "https://techcrunch.com/2026/01/20/humans-a-human-centric-ai-startup-founded-by-anthropic-xai-google-alums-raised-480m-seed-round/",
      "source": "TechCrunch",
      "date": "Jan 20, 2026",
      "snippet": "Humans&, a startup with a philosophy that AI should empower people rather than replace them, has raised $480 million in seed funding at a..."
    }
  ],
  "inflection-ai": [
    {
      "id": "inflection-ai-1",
      "title": "Bill Gates, along with Eric Schmidt and Nvidia, just minted another A.I. unicorn in a massive $1.3 billion funding round",
      "link": "https://fortune.com/2023/06/29/bill-gates-ai-unicorn-1-3-billion-funding-eric-schmidt-nvidia-inflection/",
      "source": "Fortune",
      "date": "Jun 29, 2023",
      "snippet": "San Francisco–based AI startup, Inflection AI, just raised $1.3 billion in a new round of funding from the likes of Microsoft, Nvidia, and former Google CEO..."
    }
  ],
  "isomorphic-labs": [
    {
      "id": "isomorphic-labs-1",
      "title": "Isomorphic Labs has grand ambitions to 'solve all diseases' with AI. Now, it's gearing up for its first human trials",
      "link": "https://fortune.com/2025/07/06/deepmind-isomorphic-labs-cure-all-diseases-ai-now-first-human-trials/",
      "source": "Fortune",
      "date": "Jul 6, 2025",
      "snippet": "Alphabet's secretive drug discovery arm, Isomorphic Labs, is getting ready to start testing its AI-designed drugs in humans."
    }
  ],
  "ami-labs": [
    {
      "id": "ami-labs-1",
      "title": "Former Meta A.I. Chief’s Start-Up Is Valued at $3.5 Billion",
      "link": "https://www.nytimes.com/2026/03/10/technology/ami-labs-yann-lecun-funding.html",
      "source": "The New York Times",
      "date": "Mar 10, 2026",
      "snippet": "Advanced Machine Intelligence Labs, founded by Yann LeCun and other ex-Meta researchers, has raised more than $1 billion from investors."
    },
    {
      "id": "ami-labs-2",
      "title": "Yann LeCun’s AMI Labs raises $1.03B to build world models",
      "link": "https://techcrunch.com/2026/03/09/yann-lecuns-ami-labs-raises-1-03-billion-to-build-world-models/",
      "source": "TechCrunch",
      "date": "Mar 9, 2026",
      "snippet": "My prediction is that 'world models' will be the next buzzword,” AMI Labs CEO Alexandre LeBrun told TechCrunch."
    },
    {
      "id": "ami-labs-3",
      "title": "Yann LeCun's startup has a new CEO — and $1 billion",
      "link": "https://www.businessinsider.com/yann-lecun-ai-startup-new-ceo-billion-ami-labs-2026-3",
      "source": "Business Insider",
      "date": "Mar 10, 2026",
      "snippet": "Yann LeCun's AI startup AMI Labs raised a $1.03 billion seed round and named entrepreneur Alex LeBrun as CEO."
    },
    {
      "id": "ami-labs-4",
      "title": "Yann LeCun raising €500m at €3bn valuation for new AI startup",
      "link": "https://sifted.eu/articles/yann-lecun-ami-labs-3bn-valuation",
      "source": "Sifted",
      "date": "Dec 18, 2025",
      "snippet": "The outgoing Meta exec announced last month he was launching a new project to build “world models”"
    },
    {
      "id": "ami-labs-5",
      "title": "AI whiz Yann LeCun is already targeting a $3.5 billion valuation for his new startup—and it hasn’t even launched yet",
      "link": "https://fortune.com/2025/12/19/yann-lecun-ami-labs-ai-startup-valuation-meta-departure/",
      "source": "Fortune",
      "date": "Dec 19, 2025",
      "snippet": "The legendary AI researcher announced his departure from Meta, Mark Zuckerberg's social media empire, just one month ago."
    }
  ],
  "decart": [
    {
      "id": "decart-1",
      "title": "Exclusive: Decart raises $100 million at a $3.1 billion valuation, chasing the future of real-time creative AI",
      "link": "https://fortune.com/2025/08/07/exclusive-decart-raises-100-million-at-a-3-1-billion-valuation-chasing-the-future-of-real-time-creative-ai/",
      "source": "Fortune",
      "date": "Aug 7, 2025",
      "snippet": "Decart has closed a $100 million Series B, valuing the company at $3.1 billion, Fortune has exclusively learned."
    }
  ],
  "xaira-therapeutics": [
    {
      "id": "xaira-therapeutics-1",
      "title": "Xaira, an AI drug discovery startup, launches with a massive $1B, says it's 'ready' to start developing drugs",
      "link": "https://techcrunch.com/2024/04/24/xaira-an-ai-drug-discovery-startup-launches-with-a-massive-1b-says-its-ready-to-start-developing-drugs/",
      "source": "TechCrunch",
      "date": "Apr 24, 2024",
      "snippet": "Advances in generative AI have taken the tech world by storm. Biotech investors are making a big bet that similar computational methods..."
    },
    {
      "id": "xaira-therapeutics-2",
      "title": "Xaira Therapeutics $1 billion funding round shows the excitement about AI drug discovery",
      "link": "https://fortune.com/2024/04/25/ai-for-drug-discovery-xaira-therapeutics/",
      "source": "Fortune",
      "date": "Apr 25, 2024",
      "snippet": "The pursuit to use AI to discover new life-saving drugs got a big boost this week when a new company, Xaira Therapeutics, emerged from..."
    },
    {
      "id": "xaira-therapeutics-3",
      "title": "Xaira Therapeutics Launches to Deliver Transformative Medicines by Advancing and Harnessing AI for Drug Discovery and Development",
      "link": "https://www.businesswire.com/news/home/20240423707240/en/Xaira-Therapeutics-Launches-to-Deliver-Transformative-Medicines-by-Advancing-and-Harnessing-AI-for-Drug-Discovery-and-Development",
      "source": "Business Wire",
      "date": "Apr 23, 2024",
      "snippet": "Xaira Therapeutics launches to deliver transformative medicines by advancing and harnessing AI for drug discovery and development."
    }
  ],
  "sakana-ai": [
    {
      "id": "sakana-ai-1",
      "title": "The AI Scientist: Towards Fully Automated AI Research, Now Published in Nature",
      "link": "https://sakana.ai/ai-scientist-nature/",
      "source": "Sakana AI",
      "date": "Mar 26, 2026",
      "snippet": "When we first introduced The AI Scientist in our initial preprint, we shared an ambitious vision: an agent powered by foundation models..."
    },
    {
      "id": "sakana-ai-2",
      "title": "Population-based Model Merging via Quality Diversity",
      "link": "https://sakana.ai/cycleqd/",
      "source": "Sakana AI",
      "date": "Dec 3, 2024",
      "snippet": "This is the first in a series of blog posts presenting the results of Sakana AI's research projects that were supported by the Japanese..."
    },
    {
      "id": "sakana-ai-3",
      "title": "We raised $30M to develop nature-inspired AI in Japan",
      "link": "https://sakana.ai/seed-round/",
      "source": "Sakana AI",
      "date": "Jan 16, 2024",
      "snippet": "Sakana AI is a new AI research company based in Tokyo, Japan. Our founding team have proven track records of developing breakthroughs in AI."
    },
    {
      "id": "sakana-ai-4",
      "title": "Announcing Our Series A",
      "link": "https://sakana.ai/series-a/",
      "source": "Sakana AI",
      "date": "Sep 4, 2024",
      "snippet": "Sakana AI is a new AI R&D company based in Tokyo, Japan. Our team has proven track records of developing breakthroughs in AI."
    },
    {
      "id": "sakana-ai-5",
      "title": "The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search",
      "link": "https://pub.sakana.ai/ai-scientist-v2/paper/paper.pdf",
      "source": "Sakana AI",
      "date": "Apr 8, 2025",
      "snippet": "AI is increasingly playing a pivotal role in transforming how scientific discoveries are made. We introduce. The AI Scientist-v2,..."
    }
  ],
  "general-intuition": [
    {
      "id": "general-intuition-1",
      "title": "General Intuition lands $134M seed to teach agents spatial reasoning using video game clips",
      "link": "https://techcrunch.com/2025/10/16/general-intuition-lands-134m-seed-to-teach-agents-spatial-reasoning-using-video-game-clips/",
      "source": "TechCrunch",
      "date": "Oct 16, 2025",
      "snippet": "General Intuition's next milestone is twofold: generating new simulated worlds for training other agents and autonomously navigating..."
    }
  ],
  "liquid-ai": [
    {
      "id": "liquid-ai-1",
      "title": "Introducing LFM2.5: The Next Generation of On-Device AI",
      "link": "https://www.liquid.ai/blog/introducing-lfm2-5-the-next-generation-of-on-device-ai",
      "source": "Liquid AI",
      "date": "Jan 5, 2026",
      "snippet": "Today, we're excited to announce the LFM2.5-1.2B model family, our most capable release yet for edge AI deployment. It builds on the LFM2..."
    },
    {
      "id": "liquid-ai-2",
      "title": "Liquid AI Launches LEAP and Liquid Apollo: A New Era for Edge AI Deployment Begins",
      "link": "https://www.liquid.ai/press/liquid-ai-launches-leap-and-apollo-a-new-era-for-edge-ai-deployment-begins",
      "source": "Liquid AI",
      "date": "Jul 15, 2025",
      "snippet": "New developer platform and consumer app showcase the power of reliable and efficient generative AI models deployed on local edge devices,..."
    },
    {
      "id": "liquid-ai-3",
      "title": "Liquid AI Launches LEAP and Liquid Apollo: The Easiest Way to Build with On-Device AI",
      "link": "https://www.liquid.ai/blog/liquid-ai-launches-leap-and-apollo-bringing-edge-ai-to-every-developer",
      "source": "Liquid AI",
      "date": "Jul 15, 2025",
      "snippet": "Today marks a pivotal milestone in the evolution of edge AI. Liquid AI is thrilled to announce LEAP v0, our first developer-ready platform..."
    },
    {
      "id": "liquid-ai-4",
      "title": "Liquid AI Releases World’s Fastest and Best-Performing Open-Source Small Foundation Models",
      "link": "https://www.liquid.ai/press/liquid-ai-releases-worlds-fastest-and-best-performing-open-source-small-foundation-models",
      "source": "Liquid AI",
      "date": "Jul 10, 2025",
      "snippet": "Next-generation edge models outperform top global competitors; now available open source on Hugging Face. CAMBRIDGE, Mass. — Liquid AI..."
    },
    {
      "id": "liquid-ai-5",
      "title": "Launch of Collaboration with Liquid AI to Develop Edge AI Solution",
      "link": "https://www.liquid.ai/blog/launch-of-collaboration-with-liquid-ai-to-develop-edge-ai-solution",
      "source": "Liquid AI",
      "date": "Feb 27, 2024",
      "snippet": "The collaboration aims to develop edge AI solutions that process large volumes of data in real time at the edge by utilizing Liquid AI's machine learning..."
    }
  ],
  "h-the-h-company": [],
  "magic": [
    {
      "id": "magic-1",
      "title": "Magic’s $23M Series A and a note on finding meaning in an automated world — Magic",
      "link": "https://magic.dev/blog/series-a",
      "source": "magic.dev",
      "date": "Feb 6, 2023",
      "snippet": "Everything we do at Magic comes down to a singular goal: build aligned and complete AI to accelerate humanity's progress on the world's most challenging..."
    },
    {
      "id": "magic-2",
      "title": "100M Token Context Windows",
      "link": "https://magic.dev/blog/100m-token-context-windows",
      "source": "magic.dev",
      "date": "Aug 29, 2024",
      "snippet": "Research update on ultra-long context models, our partnership with Google Cloud, and new funding."
    }
  ],
  "periodic-labs": [
    {
      "id": "periodic-labs-1",
      "title": "Top A.I. Researchers Leave OpenAI, Google and Meta for New Start-Up",
      "link": "https://www.nytimes.com/2025/09/30/technology/ai-meta-google-openai-periodic.html",
      "source": "The New York Times",
      "date": "Sep 30, 2025",
      "snippet": "Founded by a co-creator of ChatGPT, Periodic Labs aims to build artificial intelligence that can accelerate discoveries in physics,..."
    },
    {
      "id": "periodic-labs-2",
      "title": "Former OpenAI and DeepMind researchers raise whopping $300M seed to automate science",
      "link": "https://techcrunch.com/2025/09/30/former-openai-and-deepmind-researchers-raise-whopping-300m-seed-to-automate-science/",
      "source": "TechCrunch",
      "date": "Sep 30, 2025",
      "snippet": "Periodic Labs has raised from a tech industry who's who, including Andreessen Horowitz, Nvidia, Elad Gil, Jeff Dean, Eric Schmidt, and Jeff..."
    }
  ],
  "harmonic": [
    {
      "id": "harmonic-1",
      "title": "IMO Gold",
      "link": "https://harmonic.fun/news/imo-gold/",
      "source": "Harmonic Fun",
      "date": "Apr 8, 2026",
      "snippet": "Toggle navigation. HOMENEWSABOUTCAREERS Try Aristotle · HOMENEWSABOUTCAREERS Try Aristotle. Research✦Oct 2, 2025. How Aristotle Achieved its IMO Gold..."
    },
    {
      "id": "harmonic-2",
      "title": "Harmonic Announces Mathematician Sponsorships to Accelerate Mathematical Superintelligence",
      "link": "https://harmonic.fun/news/mathematician-sponsorships/",
      "source": "Harmonic Fun",
      "date": "Jan 22, 2026",
      "snippet": "Recognizing the potential for mathematicians to accelerate the advent of Mathematical Superintelligence (MSI), Harmonic is excited to..."
    },
    {
      "id": "harmonic-3",
      "title": "Lean Fro Donation",
      "link": "https://harmonic.fun/news/lean-fro-donation/",
      "source": "Harmonic Fun",
      "date": "Feb 11, 2026",
      "snippet": "Harmonic is pioneering Mathematical Superintelligence (MSI) to ensure that AI is accurate, reliable, and broadly useful."
    },
    {
      "id": "harmonic-4",
      "title": "Verina Benchmark",
      "link": "https://harmonic.fun/news/verina-benchmark/",
      "source": "Harmonic Fun",
      "date": "Dec 3, 2025",
      "snippet": "Since Harmonic's inception, our charter has been to forge the world's most advanced mathematical reasoning engine. We have made significant..."
    },
    {
      "id": "harmonic-5",
      "title": "Harmonic Builds Momentum Towards Mathematical Superintelligence with $120 Million Series C",
      "link": "https://www.businesswire.com/news/home/20251125727962/en/Harmonic-Builds-Momentum-Towards-Mathematical-Superintelligence-with-%24120-Million-Series-C",
      "source": "Business Wire",
      "date": "Nov 25, 2025",
      "snippet": "Harmonic, the artificial intelligence lab leading the development of Mathematical Superintelligence (MSI), achieves unicorn status with the..."
    }
  ],
  "ai21-labs": [
    {
      "id": "ai21-labs-1",
      "title": "Reaching SOTA Performance Without Breaking the Bank",
      "link": "https://www.ai21.com/blog/maestro-deep-research-agents/",
      "source": "AI21",
      "date": "1 month ago",
      "snippet": "Every AI team eventually hits the same wall. The agent works. The demo impressed stakeholders. Then comes the hard question:."
    },
    {
      "id": "ai21-labs-2",
      "title": "Announcing AI21 Studio and Jurassic-1 language models",
      "link": "https://www.ai21.com/blog/announcing-ai21-studio-and-jurassic-1/",
      "source": "AI21",
      "date": "Aug 4, 2021",
      "snippet": "AI21 Labs' new developer platform offers instant access to our 178B-parameter language model, to help you build sophisticated text-based AI..."
    },
    {
      "id": "ai21-labs-4",
      "title": "Report: Nvidia in advanced talks to buy Israel’s AI21 Labs for up to $3 billion",
      "link": "https://www.timesofisrael.com/report-nvidia-in-advanced-talks-to-buy-israels-ai21-labs-for-up-to-3-billion/",
      "source": "The Times of Israel",
      "date": "Dec 30, 2025",
      "snippet": "Potential deal would come shortly after AI chip giant announced 'second home' in Kiryat Tivon, and following banner year for Israeli tech..."
    }
  ],
  "lila-sciences": [
    {
      "id": "lila-sciences-1",
      "title": "Welcoming New Partners in Our Mission to Build Scientific Superintelligence",
      "link": "https://www.lila.ai/news/series-a-235-million",
      "source": "Lila Sciences",
      "date": "Sep 15, 2025",
      "snippet": "Lila Sciences announced a major Series A milestone, raising $235M to advance its mission of building scientific superintelligence."
    },
    {
      "id": "lila-sciences-2",
      "title": "Announcing Lila’s $350M Series A and Incredible Partners on Our Mission",
      "link": "https://www.lila.ai/news/announcing-the-close-of-our-series-a",
      "source": "Lila Sciences",
      "date": "Oct 10, 2025",
      "snippet": "Lila Sciences closed a $350M Series A, bringing total funding to $550M, to scale its AI Science Factories and deploy its scientific..."
    },
    {
      "id": "lila-sciences-3",
      "title": "The Quest for A.I. ‘Scientific Superintelligence’ (Published 2025)",
      "link": "https://www.nytimes.com/2025/03/10/technology/ai-science-lab-lila.html",
      "source": "The New York Times",
      "date": "Mar 10, 2025",
      "snippet": "An ambitious start-up embodies new optimism that artificial intelligence can turbocharge scientific discovery."
    },
    {
      "id": "lila-sciences-4",
      "title": "Flagship Pioneering Unveils Lila Sciences to Build Superintelligence in Science",
      "link": "https://www.prnewswire.com/news-releases/flagship-pioneering-unveils-lila-sciences-to-build-superintelligence-in-science-302397198.html",
      "source": "PR Newswire",
      "date": "Mar 10, 2025",
      "snippet": "PRNewswire/ -- Flagship Pioneering, the bioplatform innovation company, today unveiled Lila Sciences, a company building the world's first..."
    }
  ],
  "chai-discovery": [
    {
      "id": "chai-discovery-1",
      "title": "Why Pfizer And Eli Lilly Are Betting On This $1.3 Billion AI Drug Discovery Startup",
      "link": "https://www.forbes.com/sites/amyfeldman/2026/06/04/why-pfizer-and-eli-lilly-are-betting-on-this-13-billion-ai-drug-discovery-startup/",
      "source": "Forbes",
      "date": "2 days ago",
      "snippet": "Chai Discovery is working with major drugmakers to use its latest antibody AI model to find new therapies. Now it's in talks to raise $400..."
    }
  ],
  "flapping-airplanes": [
    {
      "id": "flapping-airplanes-1",
      "title": "Flapping Airplanes and the promise of research-driven AI",
      "link": "https://techcrunch.com/2026/01/29/flapping-airplanes-and-the-promise-of-research-driven-ai/",
      "source": "TechCrunch",
      "date": "Jan 29, 2026",
      "snippet": "A new AI lab called Flapping Airplanes launched on Wednesday, with $180 million in seed funding from Google Ventures, Sequoia, and Index."
    },
    {
      "id": "flapping-airplanes-2",
      "title": "These Billion-Dollar AI Startups Have No Products, No Revenue and Eager Investors",
      "link": "https://www.wsj.com/tech/ai/these-billion-dollar-ai-startups-have-no-products-no-revenue-and-eager-investors-97c0a9ba",
      "source": "WSJ",
      "date": "Jan 27, 2026",
      "snippet": "Flapping Airplanes is one of a wave of new startup research labs drawing intense interest from investors, the latest chapter in the AI race."
    },
    {
      "id": "flapping-airplanes-3",
      "title": "Flapping Airplanes on the future of AI: ‘We want to try really radically different things’",
      "link": "https://techcrunch.com/2026/02/16/flapping-airplanes-on-the-future-of-ai-we-want-to-try-really-radically-different-things/",
      "source": "TechCrunch",
      "date": "Feb 16, 2026",
      "snippet": "There's been a bunch of exciting research-focused AI labs popping up in recent months, and Flapping Airplanes is one of the most interesting..."
    }
  ],
  "recursive": [
    {
      "id": "recursive-1",
      "title": "Notable Researchers Join $4 Billion Effort to Build Self-Improving A.I.",
      "link": "https://www.nytimes.com/2026/05/13/technology/recursive-superintelligence-funding-ai.html",
      "source": "The New York Times",
      "date": "3 weeks ago",
      "snippet": "Recursive Superintelligence, founded by former Google, Meta and OpenAI researchers, is part of a growing effort to automate the creation of..."
    },
    {
      "id": "recursive-2",
      "title": "Months-old start-up Recursive Superintelligence raises $500mn for self-teaching AI",
      "link": "https://www.ft.com/content/a92bf04b-bbac-400f-9554-5b1c70957ad4?syn-25a6b1a6=1",
      "source": "Financial Times",
      "date": "1 month ago",
      "snippet": "Group founded by former engineers at DeepMind and OpenAI secures $4bn valuation in deal with Google's venture arm and Nvidia."
    },
    {
      "id": "recursive-4",
      "title": "SUI Group Co-Leads $15 Million Funding Round for AI Trading Lab Nof1, Makes Strategic Investment in Recursive Superintelligence",
      "link": "https://www.businesswire.com/news/home/20260515505589/en/SUI-Group-Co-Leads-%2415-Million-Funding-Round-for-AI-Trading-Lab-Nof1-Makes-Strategic-Investment-in-Recursive-Superintelligence",
      "source": "Business Wire",
      "date": "3 weeks ago",
      "snippet": "Investments Reflect Growing Link Between Sui's Blockchain and Ecosystem, and Agentic Finance and Artificial Intelligence. WAYZATA, Minn."
    }
  ],
  "world-labs": [
    {
      "id": "world-labs-1",
      "title": "Scaling Robotic Simulation with Marble",
      "link": "https://www.worldlabs.ai/case-studies/1-robotics",
      "source": "World Labs",
      "date": "Nov 12, 2025",
      "snippet": "How researchers are using Marble's generative worlds to accelerate robot training, testing, and real-to-sim transfer."
    },
    {
      "id": "world-labs-2",
      "title": "Announcing the World API",
      "link": "https://www.worldlabs.ai/blog/announcing-the-world-api",
      "source": "World Labs",
      "date": "Jan 21, 2026",
      "snippet": "Today, we're launching the World API — a public interface for generating explorable 3D worlds using World Labs' multimodal world model,..."
    },
    {
      "id": "world-labs-3",
      "title": "RTFM: A Real-Time Frame Model",
      "link": "https://www.worldlabs.ai/blog/rtfm",
      "source": "World Labs",
      "date": "Oct 16, 2025",
      "snippet": "A research preview of RTFM, a new generative world model that generates video in real-time as you interact with it."
    },
    {
      "id": "world-labs-4",
      "title": "Marble: A Multimodal World Model",
      "link": "https://www.worldlabs.ai/blog/marble-world-model",
      "source": "World Labs",
      "date": "Nov 12, 2025",
      "snippet": "Spatial intelligence is the next frontier in AI, demanding powerful world models to realize its full potential."
    },
    {
      "id": "world-labs-5",
      "title": "Streaming 3DGS worlds on the web",
      "link": "https://www.worldlabs.ai/blog/spark-2.0",
      "source": "World Labs",
      "date": "1 month ago",
      "snippet": "A technical deep dive into Spark 2.0's streamable, Level-of-Detail system for 3D Gaussian Splatting."
    }
  ],
  "evolutionaryscale": [
    {
      "id": "evolutionaryscale-1",
      "title": "ESM3: Simulating 500 million years of evolution with a language model",
      "link": "https://www.evolutionaryscale.ai/blog/esm3-release",
      "source": "EvolutionaryScale",
      "date": "Jun 25, 2024",
      "snippet": "ESM3 is a tool for scientists. Our API and open model allow scientists to explore the frontiers of protein design and synthetic biology."
    },
    {
      "id": "evolutionaryscale-2",
      "title": "ESM Cambrian: Revealing the mysteries of proteins with unsupervised learning",
      "link": "https://www.evolutionaryscale.ai/blog/esm-cambrian",
      "source": "EvolutionaryScale",
      "date": "Dec 4, 2024",
      "snippet": "A next generation language model trained on protein sequences at the scale of life on Earth. ESM C models define a new state of the art for protein..."
    },
    {
      "id": "evolutionaryscale-3",
      "title": "Meta AI Mafia strikes again: EvolutionaryScale secures $142 million seed investment round",
      "link": "https://fortune.com/2024/06/25/meta-ai-mafia-evolutionaryscale-llm-biology-seed-round-142-million/",
      "source": "Fortune",
      "date": "Jun 25, 2024",
      "snippet": "EvolutionaryScale, based in New York and San Francisco, announced it has raised over $142 million in seed funding, led by Nat Friedman and Daniel Gross, and..."
    },
    {
      "id": "evolutionaryscale-4",
      "title": "Ex-Meta Researchers Have Raised $40 Million From Lux Capital For An AI Biotech Startup",
      "link": "https://www.forbes.com/sites/kenrickcai/2023/08/25/evolutionaryscale-ai-biotech-startup-meta-researchers-funding/",
      "source": "Forbes",
      "date": "Aug 25, 2023",
      "snippet": "Alex Rives, the research lead of Meta's former AI protein team, is interim CEO for new startup EvolutionaryScale, which is developing..."
    },
    {
      "id": "evolutionaryscale-5",
      "title": "EvolutionaryScale Launches with ESM3: A Milestone AI Model for Biology",
      "link": "https://www.businesswire.com/news/home/20240625717839/en/EvolutionaryScale-Launches-with-ESM3-A-Milestone-AI-Model-for-Biology",
      "source": "Business Wire",
      "date": "Jun 25, 2024",
      "snippet": "EvolutionaryScale, a frontier AI research lab for biology, launched today with ESM3, a milestone AI model capable of generating novel..."
    }
  ],
  "aai": [],
  "kyutai": [
    {
      "id": "kyutai-1",
      "title": "Hello Kyutai!",
      "link": "https://kyutai.org/blog/2023-11-17-hello-kyutai",
      "source": "Kyutai.org",
      "date": "Nov 16, 2023",
      "snippet": "Today, we are six AI researchers jumping on stage, at Station F, to announce the start of a brand new scientific adventure named Kyutai..."
    },
    {
      "id": "kyutai-2",
      "title": "PRESS RELEASE/ PARIS, NOVEMBER 17, 2023",
      "link": "https://kyutai.org/CP_Kyutai_AI_EN.pdf",
      "source": "Kyutai.org",
      "date": "Nov 17, 2023",
      "snippet": "Kyutai is a non-profit laboratory entirely dedi- cated to open research in artificial intelligence. (AI). Its objective is to tackle the..."
    },
    {
      "id": "kyutai-3",
      "title": "Introducing KE:SAI",
      "link": "https://kyutai.org/blog/2026-05-20-kesai-launch",
      "source": "Kyutai.org",
      "date": "2 weeks ago",
      "snippet": "Today, we are announcing the launch of KE:SAI (Kyutai ELLIS Scalable Autonomous Intelligence), a new open-science research laboratory..."
    },
    {
      "id": "kyutai-4",
      "title": "Kyutai unveils today the very first voice-enabled AI openly accessible to all",
      "link": "https://kyutai.org/cp_moshi.pdf",
      "source": "Kyutai.org",
      "date": "Jul 3, 2024",
      "snippet": "The team publicly unveiled its experimental prototype today in Paris. At the end of the presentation, the participants – researchers,..."
    },
    {
      "id": "kyutai-5",
      "title": "arXiv:2410.00037v2 [eess.AS] 2 Oct 2024",
      "link": "https://kyutai.org/Moshi.pdf",
      "source": "Kyutai.org",
      "date": "Sep 18, 2024",
      "snippet": "Abstract. We introduce Moshi, a speech-text foundation model and full-duplex spoken dialogue frame- work. Current systems for spoken dialogue rely on..."
    }
  ],
  "goodfire": [
    {
      "id": "goodfire-1",
      "title": "Painting With Concepts Using Diffusion Model Latents",
      "link": "https://www.goodfire.ai/research/painting-with-concepts",
      "source": "Goodfire AI",
      "date": "May 27, 2025",
      "snippet": "Mechanistic interpretability techniques unlock new and powerful ways of interacting with generative models. By reverse engineering an image..."
    },
    {
      "id": "goodfire-2",
      "title": "Announcing Our $50M Series A to Advance AI Interpretability Research",
      "link": "https://www.goodfire.ai/blog/announcing-our-50m-series-a",
      "source": "Goodfire AI",
      "date": "Apr 17, 2025",
      "snippet": "Today, we're excited to announce a $50 million Series A funding round led by Menlo Ventures with participation from Lightspeed Venture..."
    }
  ],
  "imbue": [
    {
      "id": "imbue-1",
      "title": "Sculptor: the missing UI for parallel coding agents",
      "link": "https://imbue.com/blog/sculptor-announce",
      "source": "Imbue",
      "date": "1 month ago",
      "snippet": "We rebuilt Sculptor from the ground up, thanks to your feedback. Now you can run multiple coding agents in safe containers and instantly see..."
    },
    {
      "id": "imbue-2",
      "title": "A case study in testing with 100+ of Claude agents in parallel",
      "link": "https://imbue.com/blog/mngr_part_2",
      "source": "Imbue",
      "date": "1 month ago",
      "snippet": "In our previous blog post, we introduced mngr and how you can use it to usefully launch hundreds of parallel agents."
    },
    {
      "id": "imbue-3",
      "title": "From bare metal to a 70B model: infrastructure set-up and scripts",
      "link": "https://imbue.com/blog/70b-infrastructure",
      "source": "Imbue",
      "date": "1 month ago",
      "snippet": "We would like to thank Voltage Park, Dell, H5, and NVIDIA for their invaluable partnership and help with setting up our cluster."
    },
    {
      "id": "imbue-4",
      "title": "A Healthy Ecosystem for AI Agents: Introducing the AFI",
      "link": "https://imbue.com/blog/a-healthy-ecosystem-for-ai-agents-introducing-the-afi",
      "source": "Imbue",
      "date": "1 month ago",
      "snippet": "At Imbue, we believe that AI agents will radically reshape society in the coming decades. In this future, a healthy ecosystem of open agents..."
    },
    {
      "id": "imbue-5",
      "title": "Sculptor: Catch and fix issues as you code",
      "link": "https://imbue.com/blog/sculptor",
      "source": "Imbue",
      "date": "1 month ago",
      "snippet": "Sculptor is a coding agent environment that applies engineering discipline to catch issues, write tests, and improve your code—all while you..."
    }
  ],
  "reka": [
    {
      "id": "reka-1",
      "title": "Reka Research: Knowledge Made Accessible",
      "link": "https://reka.ai/news/reka-research-knowledge-made-accessible",
      "source": "Reka AI",
      "date": "Jul 10, 2025",
      "snippet": "Meet Reka Research, an agentic AI system that browses the web and private documents to answer complex questions with grounded synthesis."
    },
    {
      "id": "reka-2",
      "title": "Reka Secures $110 Million to Accelerate Adoption of Its Multimodal AI Platforms",
      "link": "https://reka.ai/news/reka-secures-110-million-to-accelerate-adoption-of-its-multimodal-ai-platforms",
      "source": "Reka AI",
      "date": "Jul 22, 2025",
      "snippet": "Reka, a leader in multimodal AI research and product development, announced it has secured a $110 million investment."
    },
    {
      "id": "reka-3",
      "title": "Reka Core: Our Frontier Class Multimodal Language Model",
      "link": "https://reka.ai/news/reka-core-our-frontier-class-multimodal-language-model",
      "source": "Reka AI",
      "date": "Apr 15, 2024",
      "snippet": "We are excited to introduce our largest and most capable model yet, Reka Core. It is a frontier-class multimodal language model on par with leading models in..."
    },
    {
      "id": "reka-4",
      "title": "Announcing the Latest Addition to Our Leading Multimodal Models – Reka Core",
      "link": "https://publications.reka.ai/reka-core-press-release.pdf",
      "source": "Reka AI",
      "date": "Apr 15, 2024",
      "snippet": "Global / San Francisco, CA. April 15, 2024 – Today, Reka is excited to announce the launch of. Reka Core (“Core”), our largest and most..."
    },
    {
      "id": "reka-5",
      "title": "Reka Vision: Intelligence Made Visible",
      "link": "https://reka.ai/news/reka-vision-intelligence-made-visible",
      "source": "Reka AI",
      "date": "Jul 8, 2025",
      "snippet": "We are thrilled to launch Reka Vision, our platform designed for visual understanding and search. In today's data-rich environment,..."
    }
  ],
  "essential-ai": [
    {
      "id": "essential-ai-1",
      "title": "Essential AI emerges from stealth with backing from Google, Nvidia and AMD",
      "link": "https://venturebeat.com/ai/essential-ai-emerges-from-stealth-with-backing-from-google-nvidia-and-amd",
      "source": "VentureBeat",
      "date": "Dec 12, 2023",
      "snippet": "Essential AI says the products would make data analysts 10x faster and give business users the ability to become data-driven..."
    }
  ],
  "zyphra": [
    {
      "id": "zyphra-1",
      "title": "Introducing Zyphra Cloud",
      "link": "https://www.zyphra.com/our-work/zyphra-and-amd-partner-to-power-zyphra-cloud-on-amd-instinct-mi355x-gpus",
      "source": "Zyphra",
      "date": "1 month ago",
      "snippet": "Zyphra Cloud launches with Zyphra Inference, a serverless inference service providing access to frontier open-weight models including..."
    },
    {
      "id": "zyphra-2",
      "title": "Building Zyda 2",
      "link": "https://www.zyphra.com/our-work/building-zyda-2",
      "source": "Zyphra",
      "date": "Oct 15, 2024",
      "snippet": "Zyphra is excited to release Zyda2, a 5-trillion token dataset composed of filtered and cross-deduplicated DCLM, FineWeb-Edu, Zyda-1,..."
    },
    {
      "id": "zyphra-3",
      "title": "The Zyphra Training Cookbook",
      "link": "https://www.zyphra.com/post/the-zyphra-training-cookbook",
      "source": "Zyphra",
      "date": "Aug 26, 2024",
      "snippet": "Training hybrid models is hard, and papers tend to gloss over the practical engineering work that goes into building good ones."
    },
    {
      "id": "zyphra-4",
      "title": "Reaching 1B Context Length With Rag",
      "link": "https://www.zyphra.com/post/reaching-1b-context-length-with-rag",
      "source": "Zyphra",
      "date": "Oct 21, 2024",
      "snippet": "We demonstrate a retrieval system extending any off-the-shelf LLM to 1B (billion) context on a standard CPU during inference time."
    },
    {
      "id": "zyphra-5",
      "title": "Understanding Graph Based Rag And Multi Hop Question Answering",
      "link": "https://www.zyphra.com/post/understanding-graph-based-rag-and-multi-hop-question-answering",
      "source": "Zyphra",
      "date": "Aug 22, 2024",
      "snippet": "This blog post discusses the relation between multi-hop question-answering and retrieval from graph-based databases."
    }
  ],
  "nous-research": [
    {
      "id": "nous-research-1",
      "title": "Democratizing AI: The Psyche Network Architecture",
      "link": "https://nousresearch.com/nous-psyche/",
      "source": "nous research",
      "date": "May 14, 2025",
      "snippet": "Psyche is an open infrastructure that democratizes AI development by decentralizing training across underutilized hardware."
    }
  ],
  "simile": [
    {
      "id": "simile-1",
      "title": "Can AI Replace Humans for Market Research?",
      "link": "https://www.wsj.com/cio-journal/can-ai-replace-humans-for-market-research-4f818890",
      "source": "WSJ",
      "date": "Mar 6, 2026",
      "snippet": "AI startup Simile offers 'agentic twins' modeled on real people to provide answers for polling and market research."
    },
    {
      "id": "simile-2",
      "title": "AI Startup Nabs $100 Million to Help Firms Predict Human Behavior",
      "link": "https://www.bloomberg.com/news/articles/2026-02-12/ai-startup-nabs-100-million-to-help-firms-predict-human-behavior",
      "source": "Bloomberg.com",
      "date": "Feb 12, 2026",
      "snippet": "Artificial intelligence startup Simile has raised $100 million in new funding to build a model designed to predict human behavior,..."
    }
  ],
  "isara": [
    {
      "id": "isara-1",
      "title": "Exclusive | OpenAI Backs New AI Startup Seeking Bot Army Breakthroughs",
      "link": "https://www.wsj.com/tech/ai/openai-backs-new-ai-startup-seeking-bot-army-breakthroughs-a0b1fedc",
      "source": "WSJ",
      "date": "Mar 25, 2026",
      "snippet": "Isara, founded by a pair of 23-year-old researchers, aims to build software that can coordinate the work of thousands of 'agents'"
    }
  ],
  "moonvalley": [
    {
      "id": "moonvalley-1",
      "title": "AI video startup Moonvalley raised a fresh $43M, SEC filing shows",
      "link": "https://techcrunch.com/2025/04/07/ai-video-startup-moonvalley-raised-a-fresh-43m-sec-filing-shows/",
      "source": "TechCrunch",
      "date": "Apr 7, 2025",
      "snippet": "Los Angeles-based startup Moonvalley, which is developing AI tools for video creation, has raised a fresh $43 million in venture capital, according to an SEC..."
    },
    {
      "id": "moonvalley-2",
      "title": "Moonvalley launches an AI video generator built for moviemaking",
      "link": "https://www.fastcompany.com/91296309/moonvalley-launches-an-ai-video-generator-built-for-moviemaking",
      "source": "Fast Company",
      "date": "Mar 12, 2025",
      "snippet": "A well-funded AI lab with a deep bench of research talent is releasing a powerful new model that generates high-definition video for the..."
    },
    {
      "id": "moonvalley-3",
      "title": "Moonvalley Raises Additional $84 Million to Scale Ambitious Vision for Licensed AI Video Model",
      "link": "https://www.businesswire.com/news/home/20250714518340/en/Moonvalley-Raises-Additional-%2484-Million-to-Scale-Ambitious-Vision-for-Licensed-AI-Video-Model",
      "source": "Business Wire",
      "date": "Jul 14, 2025",
      "snippet": "Moonvalley, the AI research company building foundational AI video models and tools trained exclusively on licensed content, today announced..."
    },
    {
      "id": "moonvalley-4",
      "title": "Moonvalley Releases First Fully-Licensed AI Video Model for Professional Production",
      "link": "https://www.businesswire.com/news/home/20250708099256/en/Moonvalley-Releases-First-Fully-Licensed-AI-Video-Model-for-Professional-Production",
      "source": "Business Wire",
      "date": "Jul 8, 2025",
      "snippet": "Today, leading AI research company Moonvalley announced general availability of Marey, its foundational AI video model that provides..."
    }
  ],
  "hark": [],
  "ndea": [],
  "inception-labs": [
    {
      "id": "inception-labs-1",
      "title": "The Next Step for dLLMs: Scaling up Mercury",
      "link": "https://www.inceptionlabs.ai/blog/mercury-refreshed",
      "source": "Inception Labs . AI",
      "date": "Nov 6, 2025",
      "snippet": "We started Inception to build the world's fastest, most efficient AI models. In February 2025, we launched our first model, Mercury, which is the first..."
    },
    {
      "id": "inception-labs-2",
      "title": "Mercury Diffusion LLM Now Available on Azure AI Foundry",
      "link": "https://www.inceptionlabs.ai/blog/mercury-azure-foundry",
      "source": "Inception Labs . AI",
      "date": "Nov 19, 2025",
      "snippet": "Today, we're thrilled to announce that Mercury is available on Azure AI Foundry, bringing the first commercial-scale diffusion large language model (dLLM)..."
    },
    {
      "id": "inception-labs-3",
      "title": "Introducing Mercury 2",
      "link": "https://www.inceptionlabs.ai/blog/introducing-mercury-2",
      "source": "Inception Labs . AI",
      "date": "Feb 24, 2026",
      "snippet": "Today, we're introducing Mercury 2 — the world's fastest reasoning language model, built to make production AI feel instant."
    },
    {
      "id": "inception-labs-4",
      "title": "Introducing Mercury Edit 2",
      "link": "https://www.inceptionlabs.ai/blog/introducing-mercury-edit-2",
      "source": "Inception Labs . AI",
      "date": "Apr 1, 2026",
      "snippet": "Today we're introducing Mercury Edit 2: a purpose-built diffusion LLM (dLLM) for the most latency-sensitive component of modern development workflows:..."
    }
  ],
  "adaption-labs": [
    {
      "id": "adaption-labs-1",
      "title": "AutoScientist: Automating the Science of Model Training",
      "link": "https://adaptionlabs.ai/blog/autoscientist",
      "source": "adaptionlabs.ai",
      "date": "3 weeks ago",
      "snippet": "Less than a thousand people in the world know how to shape a frontier model. They sit inside a handful of labs, working on proprietary..."
    },
    {
      "id": "adaption-labs-2",
      "title": "Introducing Adaption for Startups: AI That's Yours to Shape",
      "link": "https://adaptionlabs.ai/blog/adaption-for-startups",
      "source": "adaptionlabs.ai",
      "date": "Mar 31, 2026",
      "snippet": "The best startups don't just move fast. They build systems that get smarter over time. In a world where nearly every company is reaching for..."
    },
    {
      "id": "adaption-labs-3",
      "title": "Expand Your World: Multilingual AI Training Across 242 Languages | Adaption",
      "link": "https://adaptionlabs.ai/blog/expand-your-world",
      "source": "adaptionlabs.ai",
      "date": "1 month ago",
      "snippet": "Expand Your World is a feature of Adaptive Data that scales any dataset across 242 languages and localizations. Start from 10 examples and..."
    },
    {
      "id": "adaption-labs-4",
      "title": "Former Cohere execs Sara Hooker and Sudip Roy secure $50 million seed round for their new startup Adaption Labs",
      "link": "https://fortune.com/2026/02/04/adaption-labs-50-million-seed-funding-emergence-captial-sara-hooker-sudip-roy-ai-models-that-learn-on-the-fly/",
      "source": "Fortune",
      "date": "Feb 4, 2026",
      "snippet": "Sara Hooker, an AI researcher and advocate for cheaper AI systems that use less computing power, is hanging her own shingle."
    }
  ],
  "elorian": [
    {
      "id": "elorian-1",
      "title": "Former DeepMind Researchers Bet on Visual AI With New Startup",
      "link": "https://www.bloomberg.com/news/articles/2026-04-09/ex-google-deepmind-researchers-debut-startup-called-elorian-focused-on-visual-ai",
      "source": "Bloomberg.com",
      "date": "Apr 9, 2026",
      "snippet": "Former Google DeepMind researcher Andrew Dai believes that the artificial intelligence models at big labs have the intelligence of a..."
    }
  ],
  "genesis-ai": [
    {
      "id": "genesis-ai-1",
      "title": "The Role of Simulation in Scalable Robotics, Genesis World 1.0, and the Path Forward",
      "link": "https://www.genesis.ai/blog/the-role-of-simulation-in-scalable-robotics-genesis-world-10-and-the-path-forward",
      "source": "genesis.ai",
      "date": "1 week ago",
      "snippet": "We are a new generation of robotics builders, united by a shared mission to push the boundaries of physical AI."
    },
    {
      "id": "genesis-ai-2",
      "title": "Khosla-backed robotics startup Genesis AI has gone full stack, demo shows",
      "link": "https://techcrunch.com/2026/05/06/khosla-backed-robotics-startup-genesis-ai-has-gone-full-stack-demo-shows/",
      "source": "TechCrunch",
      "date": "1 month ago",
      "snippet": "Genesis AI, a startup that raised a $105 million seed round to build foundational AI for robotics, has unveiled its first model, GENE-26.5,..."
    },
    {
      "id": "genesis-ai-3",
      "title": "Exclusive: Ex-Mistral employee closes $85m round for AI and robotics startup",
      "link": "https://sifted.eu/articles/exclusive-genesis-robotics-85m-round",
      "source": "Sifted",
      "date": "Jun 26, 2025",
      "snippet": "Theophile Gervet and Zhou Xian launched Genesis Robotics just six months ago."
    },
    {
      "id": "genesis-ai-4",
      "title": "Genesis AI launches with $105M seed funding from Eclipse, Khosla to build AI models for robots",
      "link": "https://techcrunch.com/2025/07/01/genesis-ai-launches-with-105m-seed-funding-from-eclipse-khosla-to-build-ai-models-for-robots/",
      "source": "TechCrunch",
      "date": "Jul 1, 2025",
      "snippet": "Genesis AI, which aims to build a foundational model for powering all kinds of robots, has emerged from stealth with $105M in seed funding."
    }
  ],
  "cuspai": [
    {
      "id": "cuspai-1",
      "title": "CuspAI, startup building AI models for chemistry, raises $100 million Series A at $520 million valuation",
      "link": "https://fortune.com/2025/09/10/cuspai-raises-100-million-in-new-venture-capital-funding-ai-for-chemistry/",
      "source": "Fortune",
      "date": "Sep 10, 2025",
      "snippet": "NEA and Temasek are leading the investment into CuspAI, with Nvidia's NVentures, Samsung, and Hyundai also participating."
    },
    {
      "id": "cuspai-2",
      "title": "CuspAI tops Sifted’s ranking of 100 standout AI startups in Europe",
      "link": "https://sifted.eu/articles/cuspai-tops-sifted-ai-ranking",
      "source": "Sifted",
      "date": "Oct 29, 2025",
      "snippet": "Cambridge-based CuspAI, which aims to accelerate the design process of new materials using AI, has topped the first Sifted AI 100 — a..."
    }
  ],
  "poetiq": [
    {
      "id": "poetiq-1",
      "title": "Poetiq Raises $45.8M for AI Meta-System, Surpasses Top LLMs on Industry Benchmark",
      "link": "https://www.prnewswire.com/news-releases/poetiq-raises-45-8m-for-ai-meta-system-surpasses-top-llms-on-industry-benchmark-302674571.html",
      "source": "PR Newswire",
      "date": "Jan 29, 2026",
      "snippet": "PRNewswire/ -- Poetiq, developer of an AI meta-system that makes LLMs work better, announced today that it raised $45.8 million in Seed..."
    }
  ],
  "axiom-math": [
    {
      "id": "axiom-math-1",
      "title": "A.I. Writes Buggy Code. A Silicon Valley Start-Up Wants to Fix It.",
      "link": "https://www.nytimes.com/2026/03/12/technology/axiom-ai-code-funding.html",
      "source": "The New York Times",
      "date": "Mar 12, 2026",
      "snippet": "Valued at $1.6 billion, a tiny start-up called Axiom is building A.I. systems that can check for mistakes. Axiom Math's founder and chief..."
    },
    {
      "id": "axiom-math-2",
      "title": "How a 24-year-old Stanford Ph.D. dropout hired some of Meta's brightest minds to join her AI math startup",
      "link": "https://www.businessinsider.com/axiom-math-stanford-dropout-meta-ai-researchers-startup-2025-12",
      "source": "Business Insider",
      "date": "Dec 6, 2025",
      "snippet": "24-year-old Axiom Math founder Carina Hong wooed top Meta researchers in a competitive AI talent market."
    },
    {
      "id": "axiom-math-3",
      "title": "Former Meta Researchers Are Building An AI Math Whiz",
      "link": "https://www.forbes.com/sites/rashishrivastava/2025/09/30/meet-the-stanford-dropout-building-an-ai-to-solve-maths-hardest-problems-and-create-harder-ones/",
      "source": "Forbes",
      "date": "Sep 30, 2025",
      "snippet": "Axiom Math, which has recruited top talent from Meta, has raised $64 million in seed funding to build an AI math whiz."
    }
  ],
  "ineffable-intelligence": [
    {
      "id": "ineffable-intelligence-1",
      "title": "NVIDIA, Ineffable Intelligence Team Up to Build the Future of Reinforcement Learning Infrastructure",
      "link": "https://www.ineffable.ai/blog/nvidia-ineffable-intelligence-team-up-to-build-the-future-of-reinforcement-learning-infrastructure",
      "source": "ineffable.ai",
      "date": "3 weeks ago",
      "snippet": "Reinforcement-learning agents — AI systems that learn by trial and error — can convert computation into new knowledge."
    },
    {
      "id": "ineffable-intelligence-2",
      "title": "Former Google DeepMind researcher's AI startup raises record $1.1 billion seed funding to pursue superintelligence",
      "link": "https://www.cnbc.com/2026/04/27/deepmind-ineffable-intelligence-record-seed-funding-nvidia-google.html",
      "source": "CNBC",
      "date": "1 month ago",
      "snippet": "A former Google DeepMind researcher announced on Monday a record $1.1 billion for his new AI lab. Ineffable Intelligence garnered backing..."
    },
    {
      "id": "ineffable-intelligence-3",
      "title": "DeepMind’s David Silver just raised $1.1B to build an AI that learns without human data",
      "link": "https://techcrunch.com/2026/04/27/deepminds-david-silver-just-raised-1-1b-to-build-an-ai-that-learns-without-human-data/",
      "source": "TechCrunch",
      "date": "1 month ago",
      "snippet": "Ineffable Intelligence, a British AI lab founded a mere few months ago by former DeepMind researcher David Silver, has raised $1.1 billion..."
    }
  ],
  "cursive": [],
  "inherent": []
}
