export type CompanyNewsItem = {
  date: string
  id: string
  link: string
  snippet: string
  source: string
  title: string
}

export type LabProfile = {
  description: string
  id: string
  linkedinUrl: string
  name: string
  timeline: readonly CompanyNewsItem[]
  websiteUrl: string
}

export const labs: readonly LabProfile[] = [
  {
    "description": "Thinking Machines Lab is an artificial intelligence research and product company. We're building a future where everyone has access to the knowledge and tools to make AI work for their unique needs and goals. While AI capabilities have advanced dramatically, key gaps remain.",
    "id": "thinking-machines-lab",
    "linkedinUrl": "https://www.linkedin.com/company/thinkingmachinesai/",
    "name": "Thinking Machines Lab",
    "timeline": [
      {
        "date": "2026-05-11",
        "id": "thinking-machines-lab-1",
        "link": "https://thinkingmachines.ai/blog/interaction-models/",
        "snippet": "Today, we're announcing a research preview of interaction models: models that handle interaction natively rather than through external...",
        "source": "Thinking Machines Lab",
        "title": "Interaction Models: A Scalable Approach to Human-AI Collaboration"
      },
      {
        "date": "2025-11-07",
        "id": "thinking-machines-lab-2",
        "link": "https://thinkingmachines.ai/news/call-for-community-projects/",
        "snippet": "We launched Tinker to enable builders and researchers to train models their own way, whether they're conducting studies or customizing...",
        "source": "Thinking Machines Lab",
        "title": "Tinker: Call for Community Projects"
      },
      {
        "date": "2025-10-29",
        "id": "thinking-machines-lab-3",
        "link": "https://thinkingmachines.ai/news/tinker-research-and-teaching-grants/",
        "snippet": "We launched Tinker nearly one month ago. Since then, researchers across academia and non-profits have been using Tinker to train custom...",
        "source": "Thinking Machines Lab",
        "title": "Tinker: Announcing Research and Teaching Grants"
      },
      {
        "date": "2025-10-01",
        "id": "thinking-machines-lab-4",
        "link": "https://thinkingmachines.ai/news/announcing-tinker/",
        "snippet": "Today, we are launching Tinker, a flexible API for fine-tuning language models. It empowers researchers and hackers to experiment with...",
        "source": "Thinking Machines Lab",
        "title": "Announcing Tinker"
      },
      {
        "date": "2025-10-01",
        "id": "thinking-machines-lab-5",
        "link": "https://thinkingmachines.ai/tinker/",
        "snippet": "Tinker is a training API for researchers and developers.",
        "source": "Thinking Machines Lab",
        "title": "Tinker is a training API for builders"
      }
    ],
    "websiteUrl": "https://thinkingmachines.ai/"
  },
  {
    "description": "The world's first straight-shot SSI lab, with one goal and one product: a safe superintelligence.",
    "id": "ssi-safe-superintelligence",
    "linkedinUrl": "https://www.linkedin.com/company/ssi-ai",
    "name": "SSI (Safe Superintelligence)",
    "timeline": [
      {
        "date": "2025-07-04",
        "id": "ssi-safe-superintelligence-1",
        "link": "https://www.calcalistech.com/ctechnews/article/4oj53t7pf",
        "snippet": "Co-founder Daniel Gross leaves the $32 billion startup while Meta gains a stake in his venture arm.",
        "source": "CTech",
        "title": "\"I expect miracles\": Gross hails Safe Superintelligence's future as he joins Meta"
      },
      {
        "date": "2024-10-01",
        "id": "ssi-safe-superintelligence-2",
        "link": "https://news.crunchbase.com/venture/biggest-rounds-september-2024-safe-superintelligence-candid-therapeutics/",
        "snippet": "The 10 Biggest Rounds Of September: Safe Superintelligence's $1B Raise Reigns Supreme. Chris Metinko. October 1, 2024.",
        "source": "Crunchbase News",
        "title": "The 10 Biggest Rounds Of September: Safe Superintelligence's $1B Raise Reigns Supreme"
      }
    ],
    "websiteUrl": "https://ssi.inc/"
  },
  {
    "description": "Building general purpose robotic intelligence",
    "id": "skild-ai",
    "linkedinUrl": "https://www.linkedin.com/company/skild-ai/",
    "name": "Skild AI",
    "timeline": [
      {
        "date": "2026-01-14",
        "id": "skild-ai-1",
        "link": "https://technical.ly/entrepreneurship/skild-ai-1-4-billion-raise/",
        "snippet": "The East Liberty-based AI robotics startup Skild AI has raised $1.4 billion in fresh funding, boosting the company's valuation to over $14...",
        "source": "Technical.ly",
        "title": "Robotics startup Skild AI raises $1.4B led by SoftBank Group"
      },
      {
        "date": "2025-07-29",
        "id": "skild-ai-2",
        "link": "https://www.skild.ai/blogs/building-the-general-purpose-robotic-brain",
        "snippet": "Discover how Skild AI is developing breakthrough foundation models for general-purpose robotics, enabling robots to adapt and perform across...",
        "source": "Skild.ai",
        "title": "Building the general-purpose robotic brain"
      },
      {
        "date": "2024-07-09",
        "id": "skild-ai-3",
        "link": "https://www.skild.ai/blogs/announcing-our-300m-series-a",
        "snippet": "Skild AI raises $300M Series A led by Lightspeed, Coatue, SoftBank, and Jeff Bezos to build the world's first general-purpose robotic...",
        "source": "Skild.ai",
        "title": "Announcing our $300M Series A Funding"
      }
    ],
    "websiteUrl": "https://www.skild.ai/"
  },
  {
    "description": "Poolside is a foundation model company bringing intelligence to everywhere work gets done. Our mission is to drive abundance for humanity by creating artificial general intelligence.",
    "id": "poolside",
    "linkedinUrl": "https://www.linkedin.com/company/poolsideai",
    "name": "Poolside",
    "timeline": [
      {
        "date": "2026-04-28",
        "id": "poolside-1",
        "link": "https://poolside.ai/blog/laguna-a-deeper-dive",
        "snippet": "We've released the first two models in the Laguna family, Laguna M.1 and Laguna XS.2, alongside the runtime we use to train and operate...",
        "source": "Poolside",
        "title": "Laguna XS.2 and M.1: A Deeper Dive"
      },
      {
        "date": "2026-04-28",
        "id": "poolside-2",
        "link": "https://poolside.ai/blog/introducing-laguna-xs2-m1",
        "snippet": "We're releasing two foundation models and two products into preview today.",
        "source": "Poolside",
        "title": "Introducing Laguna XS.2 and Laguna M.1"
      },
      {
        "date": "2025-08-14",
        "id": "poolside-3",
        "link": "https://poolside.ai/blog/the-carrier-and-the-beacon",
        "snippet": "Running inference and evaluations inside the Model Factory. TL;DR: We present the details of how we run inference and evaluations at...",
        "source": "Poolside",
        "title": "The carrier and the beacon"
      },
      {
        "date": "2025-07-17",
        "id": "poolside-4",
        "link": "https://poolside.ai/blog/introducing-the-model-factory",
        "snippet": "TL;DR: Traditional foundation model training approaches require substantial manual interaction, little signal for improvement,...",
        "source": "Poolside",
        "title": "The hidden engineering behind foundation model building"
      }
    ],
    "websiteUrl": "https://www.poolside.ai/"
  },
  {
    "description": "Building frontier open intelligence.",
    "id": "reflection-ai",
    "linkedinUrl": "https://www.linkedin.com/company/reflectionai/",
    "name": "Reflection AI",
    "timeline": [
      {
        "date": "2026-03-26",
        "id": "reflection-ai-1",
        "link": "https://www.reuters.com/business/nvidia-backed-reflection-ai-eyes-25-billion-valuation-wsj-reports-2026-03-26/",
        "snippet": "Reflection AI is in talks to raise $2.5 billion at a $25 billion valuation, according to a Wall Street Journal report cited by Reuters.",
        "source": "Reuters",
        "title": "Nvidia-backed Reflection AI eyes $25 billion valuation, WSJ reports"
      },
      {
        "date": "2026-03-02",
        "id": "reflection-ai-2",
        "link": "https://www.ft.com/content/07073c8f-7176-471c-ac69-ef1458845fb2?syn-25a6b1a6=1",
        "snippet": "Reflection AI's new funding talks come as Trump administration seeks US rivals to China's DeepSeek.",
        "source": "Financial Times",
        "title": "Nvidia-backed 'open' AI start-up courts investors at $20bn-plus valuation"
      },
      {
        "date": "2025-10-09",
        "id": "reflection-ai-3",
        "link": "https://techcrunch.com/2025/10/09/reflection-raises-2b-to-be-americas-open-frontier-ai-lab-challenging-deepseek/",
        "snippet": "Reflection AI, a startup founded just last year by two former Google DeepMind researchers, has raised $2 billion at an $8 billion valuation,...",
        "source": "TechCrunch",
        "title": "Reflection AI raises $2B to be America's open frontier AI lab, challenging DeepSeek"
      },
      {
        "date": "2025-03-07",
        "id": "reflection-ai-4",
        "link": "https://reflection.ai/blog/reflection-a-path-to-superintelligence",
        "snippet": "More than a decade ago, our co-founder Ioannis joined DeepMind as a founding engineer where he helped create AlphaGo, the first system to...",
        "source": "Reflection AI",
        "title": "A Path to Superintelligence"
      }
    ],
    "websiteUrl": "https://reflection.ai/"
  },
  {
    "description": "Project Prometheus is a stealth AI startup focused on applying AI to engineering and manufacturing in the physical economy.",
    "id": "project-prometheus",
    "linkedinUrl": "https://www.linkedin.com/company/prometheus",
    "name": "Project Prometheus",
    "timeline": [
      {
        "date": "2026-04-21",
        "id": "project-prometheus-1",
        "link": "https://www.businessinsider.com/jeff-bezos-project-prometheus-valued-at-38-billion-2026-4",
        "snippet": "Project Prometheus is raising around $10 billion in fresh funding at a post-money valuation of around $38 billion.",
        "source": "Business Insider",
        "title": "Jeff Bezos' secretive AI startup is set to be valued at around $38 billion after raising a $10 billion mega round"
      },
      {
        "date": "2026-02-26",
        "id": "project-prometheus-2",
        "link": "https://www.ft.com/content/7b1bdc9d-c857-4ec9-91b4-fb4f6dd2e43b?syn-25a6b1a6=1",
        "snippet": "Project Prometheus in new talks with Abu Dhabi and JPMorgan over vehicle to buy up businesses disrupted by the technology.",
        "source": "Financial Times",
        "title": "Jeff Bezos's $30bn start-up seeks tens of billions to buy industrial companies disrupted by AI"
      },
      {
        "date": "2025-11-17",
        "id": "project-prometheus-3",
        "link": "https://www.nytimes.com/2025/11/17/technology/bezos-project-prometheus.html",
        "snippet": "Called Project Prometheus, the company is focusing on artificial intelligence for the engineering and manufacturing of computers,...",
        "source": "The New York Times",
        "title": "Jeff Bezos Creates A.I. Start-Up Where He Will Be Co-Chief Executive"
      }
    ],
    "websiteUrl": ""
  },
  {
    "description": "Physical Intelligence is bringing general-purpose AI into the physical world.",
    "id": "physical-intelligence",
    "linkedinUrl": "https://www.linkedin.com/company/physical-intelligence",
    "name": "Physical Intelligence",
    "timeline": [
      {
        "date": "2026-01-30",
        "id": "physical-intelligence-1",
        "link": "https://techcrunch.com/2026/01/30/physical-intelligence-stripe-veteran-lachy-grooms-latest-bet-is-building-silicon-valleys-buzziest-robot-brains/",
        "snippet": "From the street, the only indication I've found Physical Intelligence's headquarters in San Francisco is a pi symbol that's a slightly...",
        "source": "TechCrunch",
        "title": "A peek inside Physical Intelligence, the startup building Silicon Valley's buzziest robot brains"
      }
    ],
    "websiteUrl": "https://www.pi.website/"
  },
  {
    "description": "Unconventional AI is rethinking the foundations of compute to bring biology-scale energy efficiency to AI.",
    "id": "unconventional-ai",
    "linkedinUrl": "https://www.linkedin.com/company/unconvai",
    "name": "Unconventional AI",
    "timeline": [
      {
        "date": "2025-12-08",
        "id": "unconventional-ai-1",
        "link": "https://www.theregister.com/special-features/2025/12/08/bezos-backed-unconventional-ai-addresses-datacenter-power/2006862",
        "snippet": "The neuromorphic AI startup discussed using brain-inspired systems as a path toward more efficient AI infrastructure.",
        "source": "The Register",
        "title": "Bezos-backed Unconventional AI aims to make datacenter power problems go away"
      }
    ],
    "websiteUrl": "https://unconv.ai/"
  },
  {
    "description": "humans& is a human-centric frontier AI lab focused on AI that strengthens people, organizations, and communities.",
    "id": "humansand",
    "linkedinUrl": "https://www.linkedin.com/company/humansand",
    "name": "Humans&",
    "timeline": [
      {
        "date": "2026-01-20",
        "id": "humansand-1",
        "link": "https://news.crunchbase.com/ai/humans-raises-huge-seed-round-unicorn-valuation/",
        "snippet": "Humans&, a new company founded by top researchers from Google, Anthropic, xAI, OpenAI and Meta, among others, announced Tuesday that it has...",
        "source": "Crunchbase News",
        "title": "Humans& Raises Huge $480M Seed Round At $4.48B Valuation For 'Human-Centric AI Lab'"
      },
      {
        "date": "2026-01-20",
        "id": "humansand-2",
        "link": "https://www.nytimes.com/2026/01/20/technology/humans-ai-anthropic-xai.html",
        "snippet": "Founded by researchers from Anthropic, Google and xAI, the new company, Humans&, is already valued at $4.48 billion.",
        "source": "The New York Times",
        "title": "An A.I. Start-Up Says It Wants to Empower Workers, Not Replace Them"
      },
      {
        "date": "2026-01-20",
        "id": "humansand-3",
        "link": "https://www.reuters.com/business/ai-startup-humans-raises-480-million-45-billion-valuation-seed-round-2026-01-20/",
        "snippet": "AI startup Humans&, founded by former OpenAI, Alphabet and xAI researchers, has raised $480 million in a seed financing round,...",
        "source": "Reuters",
        "title": "AI startup Humans& raises $480 million at $4.5 billion valuation in seed round"
      },
      {
        "date": "2026-01-20",
        "id": "humansand-4",
        "link": "https://techcrunch.com/2026/01/20/humans-a-human-centric-ai-startup-founded-by-anthropic-xai-google-alums-raised-480m-seed-round/",
        "snippet": "Humans&, a startup with a philosophy that AI should empower people rather than replace them, has raised $480 million in seed funding at a...",
        "source": "TechCrunch",
        "title": "Humans&, a 'human-centric' AI startup founded by Anthropic, xAI, Google alums, raised $480M seed round"
      }
    ],
    "websiteUrl": "https://humansand.ai/"
  },
  {
    "description": "Inflection AI builds human-centered, emotionally intelligent AI for more natural interactions between people and machines.",
    "id": "inflection-ai",
    "linkedinUrl": "https://www.linkedin.com/company/inflectionai",
    "name": "Inflection AI",
    "timeline": [
      {
        "date": "2024-03-21",
        "id": "inflection-ai-1",
        "link": "https://www.reuters.com/technology/microsoft-agreed-pay-inflection-650-mln-while-hiring-its-staff-information-2024-03-21/",
        "snippet": "Microsoft agreed to pay Inflection about $650 million to license its models while hiring most of the startup's staff, including its co-founders.",
        "source": "Reuters",
        "title": "Microsoft agreed to pay Inflection $650 million while hiring its staff, Information reports"
      },
      {
        "date": "2023-06-29",
        "id": "inflection-ai-2",
        "link": "https://fortune.com/2023/06/29/bill-gates-ai-unicorn-1-3-billion-funding-eric-schmidt-nvidia-inflection/",
        "snippet": "San Francisco-based AI startup, Inflection AI, just raised $1.3 billion in a new round of funding from the likes of Microsoft, Nvidia, and former Google CEO...",
        "source": "Fortune",
        "title": "Bill Gates, along with Eric Schmidt and Nvidia, just minted another A.I. unicorn in a massive $1.3 billion funding round"
      }
    ],
    "websiteUrl": "https://inflection.ai/"
  },
  {
    "description": "Isomorphic Labs is building a future where frontier AI can help to unlock deeper scientific insights, faster breakthroughs, and life-changing medicines.",
    "id": "isomorphic-labs",
    "linkedinUrl": "https://www.linkedin.com/company/isomorphic-labs",
    "name": "Isomorphic Labs",
    "timeline": [
      {
        "date": "2026-05-12",
        "id": "isomorphic-labs-1",
        "link": "https://www.isomorphiclabs.com/articles/isomorphic-labs-announces-series-b-investment-round",
        "snippet": "Isomorphic Labs announced a $2.1 billion Series B led by Thrive Capital, with participation from Alphabet, GV, MGX, Temasek and others.",
        "source": "Isomorphic Labs",
        "title": "Isomorphic Labs announces Series B investment round"
      },
      {
        "date": "2025-07-06",
        "id": "isomorphic-labs-2",
        "link": "https://fortune.com/2025/07/06/deepmind-isomorphic-labs-cure-all-diseases-ai-now-first-human-trials/",
        "snippet": "Alphabet's secretive drug discovery arm, Isomorphic Labs, is getting ready to start testing its AI-designed drugs in humans.",
        "source": "Fortune",
        "title": "Isomorphic Labs has grand ambitions to 'solve all diseases' with AI. Now, it's gearing up for its first human trials"
      }
    ],
    "websiteUrl": "https://www.isomorphiclabs.com/"
  },
  {
    "description": "AMI - Advanced Machine Intelligence - builds world-model-based AI that understands the real world. We develop safe, controllable intelligent systems for industry, robotics, healthcare, and beyond.",
    "id": "ami-labs",
    "linkedinUrl": "https://www.linkedin.com/company/amilabs-xyz/",
    "name": "AMI Labs",
    "timeline": [
      {
        "date": "2026-03-10",
        "id": "ami-labs-1",
        "link": "https://www.nytimes.com/2026/03/10/technology/ami-labs-yann-lecun-funding.html",
        "snippet": "Advanced Machine Intelligence Labs, founded by Yann LeCun and other ex-Meta researchers, has raised more than $1 billion from investors.",
        "source": "The New York Times",
        "title": "Former Meta A.I. Chief's Start-Up Is Valued at $3.5 Billion"
      },
      {
        "date": "2026-03-10",
        "id": "ami-labs-2",
        "link": "https://www.businessinsider.com/yann-lecun-ai-startup-new-ceo-billion-ami-labs-2026-3",
        "snippet": "Yann LeCun's AI startup AMI Labs raised a $1.03 billion seed round and named entrepreneur Alex LeBrun as CEO.",
        "source": "Business Insider",
        "title": "Yann LeCun's startup has a new CEO - and $1 billion"
      },
      {
        "date": "2026-03-09",
        "id": "ami-labs-3",
        "link": "https://techcrunch.com/2026/03/09/yann-lecuns-ami-labs-raises-1-03-billion-to-build-world-models/",
        "snippet": "My prediction is that 'world models' will be the next buzzword,\" AMI Labs CEO Alexandre LeBrun told TechCrunch.",
        "source": "TechCrunch",
        "title": "Yann LeCun's AMI Labs raises $1.03B to build world models"
      },
      {
        "date": "2025-12-19",
        "id": "ami-labs-4",
        "link": "https://fortune.com/2025/12/19/yann-lecun-ami-labs-ai-startup-valuation-meta-departure/",
        "snippet": "The legendary AI researcher announced his departure from Meta, Mark Zuckerberg's social media empire, just one month ago.",
        "source": "Fortune",
        "title": "AI whiz Yann LeCun is already targeting a $3.5 billion valuation for his new startup-and it hasn't even launched yet"
      },
      {
        "date": "2025-12-18",
        "id": "ami-labs-5",
        "link": "https://sifted.eu/articles/yann-lecun-ami-labs-3bn-valuation",
        "snippet": "The outgoing Meta exec announced last month he was launching a new project to build \"world models\"",
        "source": "Sifted",
        "title": "Yann LeCun raising EUR500m at EUR3bn valuation for new AI startup"
      }
    ],
    "websiteUrl": "https://amilabs.xyz/"
  },
  {
    "description": "Decart is a frontier AI lab building real-time world models - environments that respond instantly and run at millisecond latency with unprecedented efficiency.",
    "id": "decart",
    "linkedinUrl": "https://www.linkedin.com/company/decart-ai",
    "name": "Decart",
    "timeline": [
      {
        "date": "2026-05-19",
        "id": "decart-1",
        "link": "https://finance.yahoo.com/sectors/technology/articles/decart-secures-300m-funding-round-115603571.html",
        "snippet": "Decart secured a $300 million funding round as it continues building real-time generative AI systems for interactive media.",
        "source": "Yahoo Finance",
        "title": "Decart secures $300M funding round"
      },
      {
        "date": "2025-08-07",
        "id": "decart-2",
        "link": "https://fortune.com/2025/08/07/exclusive-decart-raises-100-million-at-a-3-1-billion-valuation-chasing-the-future-of-real-time-creative-ai/",
        "snippet": "Decart has closed a $100 million Series B, valuing the company at $3.1 billion, Fortune has exclusively learned.",
        "source": "Fortune",
        "title": "Exclusive: Decart raises $100 million at a $3.1 billion valuation, chasing the future of real-time creative AI"
      }
    ],
    "websiteUrl": "https://decart.ai/"
  },
  {
    "description": "We're pioneering the discovery and development of life-changing medicines through the transformative power of artificial intelligence.",
    "id": "xaira-therapeutics",
    "linkedinUrl": "https://www.linkedin.com/company/xaira-therapeutics",
    "name": "Xaira Therapeutics",
    "timeline": [
      {
        "date": "2024-04-25",
        "id": "xaira-therapeutics-1",
        "link": "https://fortune.com/2024/04/25/ai-for-drug-discovery-xaira-therapeutics/",
        "snippet": "The pursuit to use AI to discover new life-saving drugs got a big boost this week when a new company, Xaira Therapeutics, emerged from...",
        "source": "Fortune",
        "title": "Xaira Therapeutics $1 billion funding round shows the excitement about AI drug discovery"
      },
      {
        "date": "2024-04-24",
        "id": "xaira-therapeutics-2",
        "link": "https://techcrunch.com/2024/04/24/xaira-an-ai-drug-discovery-startup-launches-with-a-massive-1b-says-its-ready-to-start-developing-drugs/",
        "snippet": "Advances in generative AI have taken the tech world by storm. Biotech investors are making a big bet that similar computational methods...",
        "source": "TechCrunch",
        "title": "Xaira, an AI drug discovery startup, launches with a massive $1B, says it's 'ready' to start developing drugs"
      },
      {
        "date": "2024-04-23",
        "id": "xaira-therapeutics-3",
        "link": "https://www.businesswire.com/news/home/20240423707240/en/Xaira-Therapeutics-Launches-to-Deliver-Transformative-Medicines-by-Advancing-and-Harnessing-AI-for-Drug-Discovery-and-Development",
        "snippet": "Xaira Therapeutics launches to deliver transformative medicines by advancing and harnessing AI for drug discovery and development.",
        "source": "Business Wire",
        "title": "Xaira Therapeutics Launches to Deliver Transformative Medicines by Advancing and Harnessing AI for Drug Discovery and Development"
      }
    ],
    "websiteUrl": "https://www.xaira.com/"
  },
  {
    "description": "We are building a world class AI research lab in Tokyo, Japan. We are creating a new kind of foundation model based on nature-inspired intelligence.",
    "id": "sakana-ai",
    "linkedinUrl": "https://www.linkedin.com/company/sakana-ai/",
    "name": "Sakana AI",
    "timeline": [
      {
        "date": "2026-03-26",
        "id": "sakana-ai-1",
        "link": "https://sakana.ai/ai-scientist-nature/",
        "snippet": "When we first introduced The AI Scientist in our initial preprint, we shared an ambitious vision: an agent powered by foundation models...",
        "source": "Sakana AI",
        "title": "The AI Scientist: Towards Fully Automated AI Research, Now Published in Nature"
      },
      {
        "date": "2025-04-08",
        "id": "sakana-ai-2",
        "link": "https://pub.sakana.ai/ai-scientist-v2/paper/paper.pdf",
        "snippet": "AI is increasingly playing a pivotal role in transforming how scientific discoveries are made. We introduce. The AI Scientist-v2,...",
        "source": "Sakana AI",
        "title": "The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search"
      },
      {
        "date": "2024-12-03",
        "id": "sakana-ai-3",
        "link": "https://sakana.ai/cycleqd/",
        "snippet": "This is the first in a series of blog posts presenting the results of Sakana AI's research projects that were supported by the Japanese...",
        "source": "Sakana AI",
        "title": "Population-based Model Merging via Quality Diversity"
      },
      {
        "date": "2024-09-04",
        "id": "sakana-ai-4",
        "link": "https://sakana.ai/series-a/",
        "snippet": "Sakana AI is a new AI R&D company based in Tokyo, Japan. Our team has proven track records of developing breakthroughs in AI.",
        "source": "Sakana AI",
        "title": "Announcing Our Series A"
      },
      {
        "date": "2024-01-16",
        "id": "sakana-ai-5",
        "link": "https://sakana.ai/seed-round/",
        "snippet": "Sakana AI is a new AI research company based in Tokyo, Japan. Our founding team have proven track records of developing breakthroughs in AI.",
        "source": "Sakana AI",
        "title": "We raised $30M to develop nature-inspired AI in Japan"
      }
    ],
    "websiteUrl": "https://sakana.ai/"
  },
  {
    "description": "We build foundation models for environments that require deep spatial and temporal reasoning.",
    "id": "general-intuition",
    "linkedinUrl": "https://www.linkedin.com/company/generalintuition",
    "name": "General Intuition",
    "timeline": [
      {
        "date": "2025-10-16",
        "id": "general-intuition-1",
        "link": "https://techcrunch.com/2025/10/16/general-intuition-lands-134m-seed-to-teach-agents-spatial-reasoning-using-video-game-clips/",
        "snippet": "General Intuition's next milestone is twofold: generating new simulated worlds for training other agents and autonomously navigating...",
        "source": "TechCrunch",
        "title": "General Intuition lands $134M seed to teach agents spatial reasoning using video game clips"
      }
    ],
    "websiteUrl": "https://www.generalintuition.com/"
  },
  {
    "description": "Our ultra-efficient multimodal models are turning the promise of an AI-powered world into reality. Optimized for CPUs, GPUs, and NPUs, they enable privacy-, low-latency, and security-critical applications everywhere, not just the cloud.",
    "id": "liquid-ai",
    "linkedinUrl": "https://www.linkedin.com/company/liquid-ai-inc",
    "name": "Liquid AI",
    "timeline": [
      {
        "date": "2026-01-05",
        "id": "liquid-ai-1",
        "link": "https://www.liquid.ai/blog/introducing-lfm2-5-the-next-generation-of-on-device-ai",
        "snippet": "Today, we're excited to announce the LFM2.5-1.2B model family, our most capable release yet for edge AI deployment. It builds on the LFM2...",
        "source": "Liquid AI",
        "title": "Introducing LFM2.5: The Next Generation of On-Device AI"
      },
      {
        "date": "2025-07-15",
        "id": "liquid-ai-2",
        "link": "https://www.liquid.ai/press/liquid-ai-launches-leap-and-apollo-a-new-era-for-edge-ai-deployment-begins",
        "snippet": "New developer platform and consumer app showcase the power of reliable and efficient generative AI models deployed on local edge devices,...",
        "source": "Liquid AI",
        "title": "Liquid AI Launches LEAP and Liquid Apollo: A New Era for Edge AI Deployment Begins"
      },
      {
        "date": "2025-07-15",
        "id": "liquid-ai-3",
        "link": "https://www.liquid.ai/blog/liquid-ai-launches-leap-and-apollo-bringing-edge-ai-to-every-developer",
        "snippet": "Today marks a pivotal milestone in the evolution of edge AI. Liquid AI is thrilled to announce LEAP v0, our first developer-ready platform...",
        "source": "Liquid AI",
        "title": "Liquid AI Launches LEAP and Liquid Apollo: The Easiest Way to Build with On-Device AI"
      },
      {
        "date": "2025-07-10",
        "id": "liquid-ai-4",
        "link": "https://www.liquid.ai/press/liquid-ai-releases-worlds-fastest-and-best-performing-open-source-small-foundation-models",
        "snippet": "Next-generation edge models outperform top global competitors; now available open source on Hugging Face. CAMBRIDGE, Mass. - Liquid AI...",
        "source": "Liquid AI",
        "title": "Liquid AI Releases World's Fastest and Best-Performing Open-Source Small Foundation Models"
      },
      {
        "date": "2024-02-27",
        "id": "liquid-ai-5",
        "link": "https://www.liquid.ai/blog/launch-of-collaboration-with-liquid-ai-to-develop-edge-ai-solution",
        "snippet": "The collaboration aims to develop edge AI solutions that process large volumes of data in real time at the edge by utilizing Liquid AI's machine learning...",
        "source": "Liquid AI",
        "title": "Launch of Collaboration with Liquid AI to Develop Edge AI Solution"
      }
    ],
    "websiteUrl": "https://www.liquid.ai/"
  },
  {
    "description": "H Company builds models, agents, and products that automate tasks and simplify complex work. We empower people and enterprises to move faster, think bigger, and do more of what matters.",
    "id": "h-the-h-company",
    "linkedinUrl": "https://www.linkedin.com/company/h-company-ai",
    "name": "H (The H Company)",
    "timeline": [
      {
        "date": "2026-05-14",
        "id": "h-the-h-company-1",
        "link": "https://sifted.eu/articles/laurent-sifre-steps-down-cto-h-company",
        "snippet": "Laurent Sifre stepped away from operating duties as CTO and moved into a head of scientific council role at H Company.",
        "source": "Sifted",
        "title": "H Company cofounder steps down as CTO"
      },
      {
        "date": "2025-07-09",
        "id": "h-the-h-company-2",
        "link": "https://www.semafor.com/article/07/09/2025/after-founders-flee-hs-new-ceo-wants-to-steady-the-ship-and-scale-like-palantir",
        "snippet": "New CEO Gautier Cloix spoke about stabilizing H Company after founder departures and scaling the company with a Palantir-like operating model.",
        "source": "Semafor",
        "title": "After founders flee H's new CEO wants to steady the ship and scale like Palantir"
      }
    ],
    "websiteUrl": "https://hcompany.ai/"
  },
  {
    "description": "Magic is an AI company that is working toward building safe AGI to accelerate humanity's progress on the world's most important problems.",
    "id": "magic",
    "linkedinUrl": "https://www.linkedin.com/company/magicailabs",
    "name": "Magic",
    "timeline": [
      {
        "date": "2024-08-29",
        "id": "magic-1",
        "link": "https://magic.dev/blog/100m-token-context-windows",
        "snippet": "Research update on ultra-long context models, our partnership with Google Cloud, and new funding.",
        "source": "magic.dev",
        "title": "100M Token Context Windows"
      },
      {
        "date": "2023-02-06",
        "id": "magic-2",
        "link": "https://magic.dev/blog/series-a",
        "snippet": "Everything we do at Magic comes down to a singular goal: build aligned and complete AI to accelerate humanity's progress on the world's most challenging...",
        "source": "magic.dev",
        "title": "Magic's $23M Series A and a note on finding meaning in an automated world - Magic"
      }
    ],
    "websiteUrl": "https://magic.dev/"
  },
  {
    "description": "Periodic Labs is building AI scientists and autonomous laboratories to accelerate discovery in the physical sciences.",
    "id": "periodic-labs",
    "linkedinUrl": "https://www.linkedin.com/company/periodic-labs",
    "name": "Periodic Labs",
    "timeline": [
      {
        "date": "2025-09-30",
        "id": "periodic-labs-1",
        "link": "https://www.nytimes.com/2025/09/30/technology/ai-meta-google-openai-periodic.html",
        "snippet": "Founded by a co-creator of ChatGPT, Periodic Labs aims to build artificial intelligence that can accelerate discoveries in physics,...",
        "source": "The New York Times",
        "title": "Top A.I. Researchers Leave OpenAI, Google and Meta for New Start-Up"
      },
      {
        "date": "2025-09-30",
        "id": "periodic-labs-2",
        "link": "https://techcrunch.com/2025/09/30/former-openai-and-deepmind-researchers-raise-whopping-300m-seed-to-automate-science/",
        "snippet": "Periodic Labs has raised from a tech industry who's who, including Andreessen Horowitz, Nvidia, Elad Gil, Jeff Dean, Eric Schmidt, and Jeff...",
        "source": "TechCrunch",
        "title": "Former OpenAI and DeepMind researchers raise whopping $300M seed to automate science"
      }
    ],
    "websiteUrl": "https://periodic.com/"
  },
  {
    "description": "Mathematical Superintelligence",
    "id": "harmonic",
    "linkedinUrl": "https://www.linkedin.com/company/harmonicmath",
    "name": "Harmonic",
    "timeline": [
      {
        "date": "2026-04-08",
        "id": "harmonic-1",
        "link": "https://harmonic.fun/news/imo-gold/",
        "snippet": "Toggle navigation. HOMENEWSABOUTCAREERS Try Aristotle HOMENEWSABOUTCAREERS Try Aristotle. ResearchOct 2, 2025. How Aristotle Achieved its IMO Gold...",
        "source": "Harmonic Fun",
        "title": "IMO Gold"
      },
      {
        "date": "2026-02-11",
        "id": "harmonic-2",
        "link": "https://harmonic.fun/news/lean-fro-donation/",
        "snippet": "Harmonic is pioneering Mathematical Superintelligence (MSI) to ensure that AI is accurate, reliable, and broadly useful.",
        "source": "Harmonic Fun",
        "title": "Lean Fro Donation"
      },
      {
        "date": "2026-01-22",
        "id": "harmonic-3",
        "link": "https://harmonic.fun/news/mathematician-sponsorships/",
        "snippet": "Recognizing the potential for mathematicians to accelerate the advent of Mathematical Superintelligence (MSI), Harmonic is excited to...",
        "source": "Harmonic Fun",
        "title": "Harmonic Announces Mathematician Sponsorships to Accelerate Mathematical Superintelligence"
      },
      {
        "date": "2025-12-03",
        "id": "harmonic-4",
        "link": "https://harmonic.fun/news/verina-benchmark/",
        "snippet": "Since Harmonic's inception, our charter has been to forge the world's most advanced mathematical reasoning engine. We have made significant...",
        "source": "Harmonic Fun",
        "title": "Verina Benchmark"
      },
      {
        "date": "2025-11-25",
        "id": "harmonic-5",
        "link": "https://www.businesswire.com/news/home/20251125727962/en/Harmonic-Builds-Momentum-Towards-Mathematical-Superintelligence-with-%24120-Million-Series-C",
        "snippet": "Harmonic, the artificial intelligence lab leading the development of Mathematical Superintelligence (MSI), achieves unicorn status with the...",
        "source": "Business Wire",
        "title": "Harmonic Builds Momentum Towards Mathematical Superintelligence with $120 Million Series C"
      }
    ],
    "websiteUrl": "https://www.harmonic.fun/"
  },
  {
    "description": "AI21 builds Foundation Models and AI Systems for the enterprise. Power your most critical enterprise workflows with accurate, reliable, and scalable AI.",
    "id": "ai21-labs",
    "linkedinUrl": "https://www.linkedin.com/company/ai21",
    "name": "AI21 Labs",
    "timeline": [
      {
        "date": "2026-04-28",
        "id": "ai21-labs-1",
        "link": "https://www.ai21.com/blog/maestro-deep-research-agents/",
        "snippet": "Every AI team eventually hits the same wall. The agent works. The demo impressed stakeholders. Then comes the hard question:.",
        "source": "AI21",
        "title": "Reaching SOTA Performance Without Breaking the Bank"
      },
      {
        "date": "2025-12-30",
        "id": "ai21-labs-2",
        "link": "https://www.timesofisrael.com/report-nvidia-in-advanced-talks-to-buy-israels-ai21-labs-for-up-to-3-billion/",
        "snippet": "Potential deal would come shortly after AI chip giant announced 'second home' in Kiryat Tivon, and following banner year for Israeli tech...",
        "source": "The Times of Israel",
        "title": "Report: Nvidia in advanced talks to buy Israel's AI21 Labs for up to $3 billion"
      },
      {
        "date": "2021-08-04",
        "id": "ai21-labs-3",
        "link": "https://www.ai21.com/blog/announcing-ai21-studio-and-jurassic-1/",
        "snippet": "AI21 Labs' new developer platform offers instant access to our 178B-parameter language model, to help you build sophisticated text-based AI...",
        "source": "AI21",
        "title": "Announcing AI21 Studio and Jurassic-1 language models"
      }
    ],
    "websiteUrl": "https://www.ai21.com/"
  },
  {
    "description": "LILA has created the world's first Operating System for Science powered by Scientific SuperintelligenceTM",
    "id": "lila-sciences",
    "linkedinUrl": "https://www.linkedin.com/company/lila-sciences",
    "name": "Lila Sciences",
    "timeline": [
      {
        "date": "2025-10-10",
        "id": "lila-sciences-1",
        "link": "https://www.lila.ai/news/announcing-the-close-of-our-series-a",
        "snippet": "Lila Sciences closed a $350M Series A, bringing total funding to $550M, to scale its AI Science Factories and deploy its scientific...",
        "source": "Lila Sciences",
        "title": "Announcing Lila's $350M Series A and Incredible Partners on Our Mission"
      },
      {
        "date": "2025-09-15",
        "id": "lila-sciences-2",
        "link": "https://www.lila.ai/news/series-a-235-million",
        "snippet": "Lila Sciences announced a major Series A milestone, raising $235M to advance its mission of building scientific superintelligence.",
        "source": "Lila Sciences",
        "title": "Welcoming New Partners in Our Mission to Build Scientific Superintelligence"
      },
      {
        "date": "2025-03-10",
        "id": "lila-sciences-3",
        "link": "https://www.nytimes.com/2025/03/10/technology/ai-science-lab-lila.html",
        "snippet": "An ambitious start-up embodies new optimism that artificial intelligence can turbocharge scientific discovery.",
        "source": "The New York Times",
        "title": "The Quest for A.I. 'Scientific Superintelligence' (Published 2025)"
      },
      {
        "date": "2025-03-10",
        "id": "lila-sciences-4",
        "link": "https://www.prnewswire.com/news-releases/flagship-pioneering-unveils-lila-sciences-to-build-superintelligence-in-science-302397198.html",
        "snippet": "PRNewswire/ -- Flagship Pioneering, the bioplatform innovation company, today unveiled Lila Sciences, a company building the world's first...",
        "source": "PR Newswire",
        "title": "Flagship Pioneering Unveils Lila Sciences to Build Superintelligence in Science"
      }
    ],
    "websiteUrl": "https://www.lila.ai/"
  },
  {
    "description": "Building frontier artificial intelligence to predict and reprogram the interactions between biochemical molecules.",
    "id": "chai-discovery",
    "linkedinUrl": "https://www.linkedin.com/company/chaidiscovery",
    "name": "Chai Discovery",
    "timeline": [
      {
        "date": "2026-06-04",
        "id": "chai-discovery-1",
        "link": "https://www.forbes.com/sites/amyfeldman/2026/06/04/why-pfizer-and-eli-lilly-are-betting-on-this-13-billion-ai-drug-discovery-startup/",
        "snippet": "Chai Discovery is working with major drugmakers to use its latest antibody AI model to find new therapies. Now it's in talks to raise $400...",
        "source": "Forbes",
        "title": "Why Pfizer And Eli Lilly Are Betting On This $1.3 Billion AI Drug Discovery Startup"
      }
    ],
    "websiteUrl": "https://www.chaidiscovery.com/"
  },
  {
    "description": "Flapping Airplanes is a frontier data efficiency lab that is currently in stealth.",
    "id": "flapping-airplanes",
    "linkedinUrl": "https://www.linkedin.com/company/flapping-airplanes",
    "name": "Flapping Airplanes",
    "timeline": [
      {
        "date": "2026-02-16",
        "id": "flapping-airplanes-1",
        "link": "https://techcrunch.com/2026/02/16/flapping-airplanes-on-the-future-of-ai-we-want-to-try-really-radically-different-things/",
        "snippet": "There's been a bunch of exciting research-focused AI labs popping up in recent months, and Flapping Airplanes is one of the most interesting...",
        "source": "TechCrunch",
        "title": "Flapping Airplanes on the future of AI: 'We want to try really radically different things'"
      },
      {
        "date": "2026-01-29",
        "id": "flapping-airplanes-2",
        "link": "https://techcrunch.com/2026/01/29/flapping-airplanes-and-the-promise-of-research-driven-ai/",
        "snippet": "A new AI lab called Flapping Airplanes launched on Wednesday, with $180 million in seed funding from Google Ventures, Sequoia, and Index.",
        "source": "TechCrunch",
        "title": "Flapping Airplanes and the promise of research-driven AI"
      },
      {
        "date": "2026-01-27",
        "id": "flapping-airplanes-3",
        "link": "https://www.wsj.com/tech/ai/these-billion-dollar-ai-startups-have-no-products-no-revenue-and-eager-investors-97c0a9ba",
        "snippet": "Flapping Airplanes is one of a wave of new startup research labs drawing intense interest from investors, the latest chapter in the AI race.",
        "source": "WSJ",
        "title": "These Billion-Dollar AI Startups Have No Products, No Revenue and Eager Investors"
      }
    ],
    "websiteUrl": "https://flappingairplanes.com/"
  },
  {
    "description": "Recursive self-improving superintelligence to automate knowledge discovery.",
    "id": "recursive",
    "linkedinUrl": "https://www.linkedin.com/company/recursive-si",
    "name": "Recursive",
    "timeline": [
      {
        "date": "2026-05-15",
        "id": "recursive-1",
        "link": "https://www.businesswire.com/news/home/20260515505589/en/SUI-Group-Co-Leads-%2415-Million-Funding-Round-for-AI-Trading-Lab-Nof1-Makes-Strategic-Investment-in-Recursive-Superintelligence",
        "snippet": "Investments Reflect Growing Link Between Sui's Blockchain and Ecosystem, and Agentic Finance and Artificial Intelligence. WAYZATA, Minn.",
        "source": "Business Wire",
        "title": "SUI Group Co-Leads $15 Million Funding Round for AI Trading Lab Nof1, Makes Strategic Investment in Recursive Superintelligence"
      },
      {
        "date": "2026-05-13",
        "id": "recursive-2",
        "link": "https://www.nytimes.com/2026/05/13/technology/recursive-superintelligence-funding-ai.html",
        "snippet": "Recursive Superintelligence, founded by former Google, Meta and OpenAI researchers, is part of a growing effort to automate the creation of...",
        "source": "The New York Times",
        "title": "Notable Researchers Join $4 Billion Effort to Build Self-Improving A.I."
      },
      {
        "date": "2026-04-17",
        "id": "recursive-3",
        "link": "https://www.ft.com/content/a92bf04b-bbac-400f-9554-5b1c70957ad4?syn-25a6b1a6=1",
        "snippet": "Group founded by former engineers at DeepMind and OpenAI secures $4bn valuation in deal with Google's venture arm and Nvidia.",
        "source": "Financial Times",
        "title": "Months-old start-up Recursive Superintelligence raises $500mn for self-teaching AI"
      }
    ],
    "websiteUrl": "https://www.recursive.com/"
  },
  {
    "description": "World Labs is a spatial intelligence company, building frontier models that can perceive, generate, and interact with the 3D world.",
    "id": "world-labs",
    "linkedinUrl": "https://www.linkedin.com/company/world-labs",
    "name": "World Labs",
    "timeline": [
      {
        "date": "2026-04-14",
        "id": "world-labs-1",
        "link": "https://www.worldlabs.ai/blog/spark-2.0",
        "snippet": "A technical deep dive into Spark 2.0's streamable, Level-of-Detail system for 3D Gaussian Splatting.",
        "source": "World Labs",
        "title": "Streaming 3DGS worlds on the web"
      },
      {
        "date": "2026-01-21",
        "id": "world-labs-2",
        "link": "https://www.worldlabs.ai/blog/announcing-the-world-api",
        "snippet": "Today, we're launching the World API - a public interface for generating explorable 3D worlds using World Labs' multimodal world model,...",
        "source": "World Labs",
        "title": "Announcing the World API"
      },
      {
        "date": "2025-11-12",
        "id": "world-labs-3",
        "link": "https://www.worldlabs.ai/case-studies/1-robotics",
        "snippet": "How researchers are using Marble's generative worlds to accelerate robot training, testing, and real-to-sim transfer.",
        "source": "World Labs",
        "title": "Scaling Robotic Simulation with Marble"
      },
      {
        "date": "2025-11-12",
        "id": "world-labs-4",
        "link": "https://www.worldlabs.ai/blog/marble-world-model",
        "snippet": "Spatial intelligence is the next frontier in AI, demanding powerful world models to realize its full potential.",
        "source": "World Labs",
        "title": "Marble: A Multimodal World Model"
      },
      {
        "date": "2025-10-16",
        "id": "world-labs-5",
        "link": "https://www.worldlabs.ai/blog/rtfm",
        "snippet": "A research preview of RTFM, a new generative world model that generates video in real-time as you interact with it.",
        "source": "World Labs",
        "title": "RTFM: A Real-Time Frame Model"
      }
    ],
    "websiteUrl": "https://www.worldlabs.ai/"
  },
  {
    "description": "ESM3. Enabling scientists to understand, imagine, and create proteins.",
    "id": "evolutionaryscale",
    "linkedinUrl": "https://www.linkedin.com/company/evolutionaryscale",
    "name": "EvolutionaryScale",
    "timeline": [
      {
        "date": "2024-12-04",
        "id": "evolutionaryscale-1",
        "link": "https://www.evolutionaryscale.ai/blog/esm-cambrian",
        "snippet": "A next generation language model trained on protein sequences at the scale of life on Earth. ESM C models define a new state of the art for protein...",
        "source": "EvolutionaryScale",
        "title": "ESM Cambrian: Revealing the mysteries of proteins with unsupervised learning"
      },
      {
        "date": "2024-06-25",
        "id": "evolutionaryscale-2",
        "link": "https://www.evolutionaryscale.ai/blog/esm3-release",
        "snippet": "ESM3 is a tool for scientists. Our API and open model allow scientists to explore the frontiers of protein design and synthetic biology.",
        "source": "EvolutionaryScale",
        "title": "ESM3: Simulating 500 million years of evolution with a language model"
      },
      {
        "date": "2024-06-25",
        "id": "evolutionaryscale-3",
        "link": "https://fortune.com/2024/06/25/meta-ai-mafia-evolutionaryscale-llm-biology-seed-round-142-million/",
        "snippet": "EvolutionaryScale, based in New York and San Francisco, announced it has raised over $142 million in seed funding, led by Nat Friedman and Daniel Gross, and...",
        "source": "Fortune",
        "title": "Meta AI Mafia strikes again: EvolutionaryScale secures $142 million seed investment round"
      },
      {
        "date": "2024-06-25",
        "id": "evolutionaryscale-4",
        "link": "https://www.businesswire.com/news/home/20240625717839/en/EvolutionaryScale-Launches-with-ESM3-A-Milestone-AI-Model-for-Biology",
        "snippet": "EvolutionaryScale, a frontier AI research lab for biology, launched today with ESM3, a milestone AI model capable of generating novel...",
        "source": "Business Wire",
        "title": "EvolutionaryScale Launches with ESM3: A Milestone AI Model for Biology"
      },
      {
        "date": "2023-08-25",
        "id": "evolutionaryscale-5",
        "link": "https://www.forbes.com/sites/kenrickcai/2023/08/25/evolutionaryscale-ai-biotech-startup-meta-researchers-funding/",
        "snippet": "Alex Rives, the research lead of Meta's former AI protein team, is interim CEO for new startup EvolutionaryScale, which is developing...",
        "source": "Forbes",
        "title": "Ex-Meta Researchers Have Raised $40 Million From Lux Capital For An AI Biotech Startup"
      }
    ],
    "websiteUrl": "https://www.evolutionaryscale.ai/"
  },
  {
    "description": "Progressing humanity by scaling expert intelligence. WarpSpeed surpasses expert-written kernels, making NVIDIA's best GPU code even faster.",
    "id": "doubleai",
    "linkedinUrl": "https://www.linkedin.com/company/doubleai/",
    "name": "doubleAI",
    "timeline": [
      {
        "date": "2026-05-23",
        "id": "doubleai-1",
        "link": "https://www.doubleai.com/research/warpspeed-approaches-speed-of-light-on-blackwell",
        "snippet": "doubleAI reported that WarpSpeed beat NVIDIA optimized PyTorch baselines on 90% of SOL-ExecBench Blackwell kernels after a single day of search.",
        "source": "doubleAI",
        "title": "WarpSpeed approaches Speed of Light on Blackwell"
      },
      {
        "date": "2026-03-02",
        "id": "doubleai-2",
        "link": "https://finance.yahoo.com/news/doubleai-warpspeed-beats-decade-expert-151100064.html",
        "snippet": "doubleAI announced WarpSpeed, described the system as Artificial Expert Intelligence, and disclosed a $200 million Series A co-led by Lightspeed and Bessemer.",
        "source": "Yahoo Finance",
        "title": "doubleAI announces WarpSpeed and $200M Series A"
      }
    ],
    "websiteUrl": "https://www.doubleai.com/"
  },
  {
    "description": "Our mission is to build and democratize artificial general intelligence through open science.",
    "id": "kyutai",
    "linkedinUrl": "https://www.linkedin.com/company/kyutai-labs/",
    "name": "Kyutai",
    "timeline": [
      {
        "date": "2026-05-20",
        "id": "kyutai-1",
        "link": "https://kyutai.org/blog/2026-05-20-kesai-launch",
        "snippet": "Today, we are announcing the launch of KE:SAI (Kyutai ELLIS Scalable Autonomous Intelligence), a new open-science research laboratory...",
        "source": "Kyutai.org",
        "title": "Introducing KE:SAI"
      },
      {
        "date": "2024-09-18",
        "id": "kyutai-2",
        "link": "https://kyutai.org/Moshi.pdf",
        "snippet": "Abstract. We introduce Moshi, a speech-text foundation model and full-duplex spoken dialogue frame- work. Current systems for spoken dialogue rely on...",
        "source": "Kyutai.org",
        "title": "arXiv:2410.00037v2 [eess.AS] 2 Oct 2024"
      },
      {
        "date": "2024-07-03",
        "id": "kyutai-3",
        "link": "https://kyutai.org/cp_moshi.pdf",
        "snippet": "The team publicly unveiled its experimental prototype today in Paris. At the end of the presentation, the participants - researchers,...",
        "source": "Kyutai.org",
        "title": "Kyutai unveils today the very first voice-enabled AI openly accessible to all"
      },
      {
        "date": "2023-11-17",
        "id": "kyutai-4",
        "link": "https://kyutai.org/CP_Kyutai_AI_EN.pdf",
        "snippet": "Kyutai is a non-profit laboratory entirely dedi- cated to open research in artificial intelligence. (AI). Its objective is to tackle the...",
        "source": "Kyutai.org",
        "title": "PRESS RELEASE/ PARIS, NOVEMBER 17, 2023"
      },
      {
        "date": "2023-11-16",
        "id": "kyutai-5",
        "link": "https://kyutai.org/blog/2023-11-17-hello-kyutai",
        "snippet": "Today, we are six AI researchers jumping on stage, at Station F, to announce the start of a brand new scientific adventure named Kyutai...",
        "source": "Kyutai.org",
        "title": "Hello Kyutai!"
      }
    ],
    "websiteUrl": "https://kyutai.org/"
  },
  {
    "description": "Goodfire is an AI interpretability research lab focused on understanding and intentionally designing advanced AI systems.",
    "id": "goodfire",
    "linkedinUrl": "https://www.linkedin.com/company/goodfire-ai/",
    "name": "Goodfire",
    "timeline": [
      {
        "date": "2025-05-27",
        "id": "goodfire-1",
        "link": "https://www.goodfire.ai/research/painting-with-concepts",
        "snippet": "Mechanistic interpretability techniques unlock new and powerful ways of interacting with generative models. By reverse engineering an image...",
        "source": "Goodfire AI",
        "title": "Painting With Concepts Using Diffusion Model Latents"
      },
      {
        "date": "2025-04-17",
        "id": "goodfire-2",
        "link": "https://www.goodfire.ai/blog/announcing-our-50m-series-a",
        "snippet": "Today, we're excited to announce a $50 million Series A funding round led by Menlo Ventures with participation from Lightspeed Venture...",
        "source": "Goodfire AI",
        "title": "Announcing Our $50M Series A to Advance AI Interpretability Research"
      }
    ],
    "websiteUrl": "https://www.goodfire.ai/"
  },
  {
    "description": "Imbue builds AI to help people think, create, and build. We share our tools openly because we believe progress in AI should be collaborative and developer-driven",
    "id": "imbue",
    "linkedinUrl": "https://www.linkedin.com/company/imbue-ai",
    "name": "Imbue",
    "timeline": [
      {
        "date": "2026-04-03",
        "id": "imbue-1",
        "link": "https://imbue.com/blog/mngr_part_2",
        "snippet": "In our previous blog post, we introduced mngr and how you can use it to usefully launch hundreds of parallel agents.",
        "source": "Imbue",
        "title": "A case study in testing with 100+ of Claude agents in parallel"
      },
      {
        "date": "2025-11-07",
        "id": "imbue-2",
        "link": "https://imbue.com/blog/a-healthy-ecosystem-for-ai-agents-introducing-the-afi",
        "snippet": "At Imbue, we believe that AI agents will radically reshape society in the coming decades. In this future, a healthy ecosystem of open agents...",
        "source": "Imbue",
        "title": "A Healthy Ecosystem for AI Agents: Introducing the AFI"
      },
      {
        "date": "2025-09-26",
        "id": "imbue-3",
        "link": "https://imbue.com/blog/sculptor-announce",
        "snippet": "We rebuilt Sculptor from the ground up, thanks to your feedback. Now you can run multiple coding agents in safe containers and instantly see...",
        "source": "Imbue",
        "title": "Sculptor: the missing UI for parallel coding agents"
      },
      {
        "date": "2025-04-08",
        "id": "imbue-4",
        "link": "https://imbue.com/blog/sculptor",
        "snippet": "Sculptor is a coding agent environment that applies engineering discipline to catch issues, write tests, and improve your code-all while you...",
        "source": "Imbue",
        "title": "Sculptor: Catch and fix issues as you code"
      },
      {
        "date": "2024-06-25",
        "id": "imbue-5",
        "link": "https://imbue.com/blog/70b-infrastructure",
        "snippet": "We would like to thank Voltage Park, Dell, H5, and NVIDIA for their invaluable partnership and help with setting up our cluster.",
        "source": "Imbue",
        "title": "From bare metal to a 70B model: infrastructure set-up and scripts"
      }
    ],
    "websiteUrl": "https://imbue.com/"
  },
  {
    "description": "Reka AI builds natively multimodal models (Spark, Edge, Flash, Core) for video, image, audio, and text. Used by enterprises in security, media, and defense.",
    "id": "reka",
    "linkedinUrl": "https://www.linkedin.com/company/reka-ai",
    "name": "Reka",
    "timeline": [
      {
        "date": "2025-07-22",
        "id": "reka-1",
        "link": "https://reka.ai/news/reka-secures-110-million-to-accelerate-adoption-of-its-multimodal-ai-platforms",
        "snippet": "Reka, a leader in multimodal AI research and product development, announced it has secured a $110 million investment.",
        "source": "Reka AI",
        "title": "Reka Secures $110 Million to Accelerate Adoption of Its Multimodal AI Platforms"
      },
      {
        "date": "2025-07-10",
        "id": "reka-2",
        "link": "https://reka.ai/news/reka-research-knowledge-made-accessible",
        "snippet": "Meet Reka Research, an agentic AI system that browses the web and private documents to answer complex questions with grounded synthesis.",
        "source": "Reka AI",
        "title": "Reka Research: Knowledge Made Accessible"
      },
      {
        "date": "2025-07-08",
        "id": "reka-3",
        "link": "https://reka.ai/news/reka-vision-intelligence-made-visible",
        "snippet": "We are thrilled to launch Reka Vision, our platform designed for visual understanding and search. In today's data-rich environment,...",
        "source": "Reka AI",
        "title": "Reka Vision: Intelligence Made Visible"
      },
      {
        "date": "2024-04-15",
        "id": "reka-4",
        "link": "https://reka.ai/news/reka-core-our-frontier-class-multimodal-language-model",
        "snippet": "We are excited to introduce our largest and most capable model yet, Reka Core. It is a frontier-class multimodal language model on par with leading models in...",
        "source": "Reka AI",
        "title": "Reka Core: Our Frontier Class Multimodal Language Model"
      },
      {
        "date": "2024-04-15",
        "id": "reka-5",
        "link": "https://publications.reka.ai/reka-core-press-release.pdf",
        "snippet": "Global / San Francisco, CA. April 15, 2024 - Today, Reka is excited to announce the launch of. Reka Core (\"Core\"), our largest and most...",
        "source": "Reka AI",
        "title": "Announcing the Latest Addition to Our Leading Multimodal Models - Reka Core"
      }
    ],
    "websiteUrl": "https://reka.ai/"
  },
  {
    "description": "Essential AI builds open-source models and tools to make frontier AI more accessible.",
    "id": "essential-ai",
    "linkedinUrl": "https://www.linkedin.com/company/essentialai",
    "name": "Essential AI",
    "timeline": [
      {
        "date": "2023-12-12",
        "id": "essential-ai-1",
        "link": "https://venturebeat.com/ai/essential-ai-emerges-from-stealth-with-backing-from-google-nvidia-and-amd",
        "snippet": "Essential AI says the products would make data analysts 10x faster and give business users the ability to become data-driven...",
        "source": "VentureBeat",
        "title": "Essential AI emerges from stealth with backing from Google, Nvidia and AMD"
      }
    ],
    "websiteUrl": "https://www.essential.ai/"
  },
  {
    "description": "The future of intelligence is open.",
    "id": "zyphra",
    "linkedinUrl": "https://www.linkedin.com/company/zyphra/",
    "name": "Zyphra",
    "timeline": [
      {
        "date": "2026-05-04",
        "id": "zyphra-1",
        "link": "https://www.zyphra.com/our-work/zyphra-and-amd-partner-to-power-zyphra-cloud-on-amd-instinct-mi355x-gpus",
        "snippet": "Zyphra Cloud launches with Zyphra Inference, a serverless inference service providing access to frontier open-weight models including...",
        "source": "Zyphra",
        "title": "Introducing Zyphra Cloud"
      },
      {
        "date": "2024-10-21",
        "id": "zyphra-2",
        "link": "https://www.zyphra.com/post/reaching-1b-context-length-with-rag",
        "snippet": "We demonstrate a retrieval system extending any off-the-shelf LLM to 1B (billion) context on a standard CPU during inference time.",
        "source": "Zyphra",
        "title": "Reaching 1B Context Length With Rag"
      },
      {
        "date": "2024-10-15",
        "id": "zyphra-3",
        "link": "https://www.zyphra.com/our-work/building-zyda-2",
        "snippet": "Zyphra is excited to release Zyda2, a 5-trillion token dataset composed of filtered and cross-deduplicated DCLM, FineWeb-Edu, Zyda-1,...",
        "source": "Zyphra",
        "title": "Building Zyda 2"
      },
      {
        "date": "2024-08-26",
        "id": "zyphra-4",
        "link": "https://www.zyphra.com/post/the-zyphra-training-cookbook",
        "snippet": "Training hybrid models is hard, and papers tend to gloss over the practical engineering work that goes into building good ones.",
        "source": "Zyphra",
        "title": "The Zyphra Training Cookbook"
      },
      {
        "date": "2024-08-22",
        "id": "zyphra-5",
        "link": "https://www.zyphra.com/post/understanding-graph-based-rag-and-multi-hop-question-answering",
        "snippet": "This blog post discusses the relation between multi-hop question-answering and retrieval from graph-based databases.",
        "source": "Zyphra",
        "title": "Understanding Graph Based Rag And Multi Hop Question Answering"
      }
    ],
    "websiteUrl": "https://www.zyphra.com/"
  },
  {
    "description": "Nous Research is a leader in the American open source AI movement, training world-class open source language models.",
    "id": "nous-research",
    "linkedinUrl": "https://www.linkedin.com/company/nousresearch/",
    "name": "Nous Research",
    "timeline": [
      {
        "date": "2025-05-14",
        "id": "nous-research-1",
        "link": "https://nousresearch.com/nous-psyche/",
        "snippet": "Psyche is an open infrastructure that democratizes AI development by decentralizing training across underutilized hardware.",
        "source": "nous research",
        "title": "Democratizing AI: The Psyche Network Architecture"
      }
    ],
    "websiteUrl": "https://nousresearch.com/"
  },
  {
    "description": "Simile is a simulation platform for human behavior.",
    "id": "simile",
    "linkedinUrl": "https://www.linkedin.com/company/simile-ai-inc/",
    "name": "Simile",
    "timeline": [
      {
        "date": "2026-03-06",
        "id": "simile-1",
        "link": "https://www.wsj.com/cio-journal/can-ai-replace-humans-for-market-research-4f818890",
        "snippet": "AI startup Simile offers 'agentic twins' modeled on real people to provide answers for polling and market research.",
        "source": "WSJ",
        "title": "Can AI Replace Humans for Market Research?"
      },
      {
        "date": "2026-02-12",
        "id": "simile-2",
        "link": "https://www.bloomberg.com/news/articles/2026-02-12/ai-startup-nabs-100-million-to-help-firms-predict-human-behavior",
        "snippet": "Artificial intelligence startup Simile has raised $100 million in new funding to build a model designed to predict human behavior,...",
        "source": "Bloomberg.com",
        "title": "AI Startup Nabs $100 Million to Help Firms Predict Human Behavior"
      }
    ],
    "websiteUrl": "https://simile.ai/"
  },
  {
    "description": "Isara uses AI to analyze your support conversations, providing real-time alerts, pattern recognition, and team performance insights. Increase CSAT, NPAS, customer satisfaction, reduce churn, and identify growth opportunities. Integrate with Intercom, Zendesk, Zohoo, Hubspot, Liveperson and more",
    "id": "isara",
    "linkedinUrl": "https://www.linkedin.com/company/isara-ai",
    "name": "Isara",
    "timeline": [
      {
        "date": "2026-03-25",
        "id": "isara-1",
        "link": "https://www.wsj.com/tech/ai/openai-backs-new-ai-startup-seeking-bot-army-breakthroughs-a0b1fedc",
        "snippet": "Isara, founded by a pair of 23-year-old researchers, aims to build software that can coordinate the work of thousands of 'agents'",
        "source": "WSJ",
        "title": "Exclusive | OpenAI Backs New AI Startup Seeking Bot Army Breakthroughs"
      }
    ],
    "websiteUrl": "https://www.isara.ai/"
  },
  {
    "description": "a research lab focused on pushing the frontiers of creativity through deep learning.",
    "id": "moonvalley",
    "linkedinUrl": "https://www.linkedin.com/company/moonvalley-ai/",
    "name": "Moonvalley",
    "timeline": [
      {
        "date": "2025-07-14",
        "id": "moonvalley-1",
        "link": "https://www.businesswire.com/news/home/20250714518340/en/Moonvalley-Raises-Additional-%2484-Million-to-Scale-Ambitious-Vision-for-Licensed-AI-Video-Model",
        "snippet": "Moonvalley, the AI research company building foundational AI video models and tools trained exclusively on licensed content, today announced...",
        "source": "Business Wire",
        "title": "Moonvalley Raises Additional $84 Million to Scale Ambitious Vision for Licensed AI Video Model"
      },
      {
        "date": "2025-07-08",
        "id": "moonvalley-2",
        "link": "https://www.businesswire.com/news/home/20250708099256/en/Moonvalley-Releases-First-Fully-Licensed-AI-Video-Model-for-Professional-Production",
        "snippet": "Today, leading AI research company Moonvalley announced general availability of Marey, its foundational AI video model that provides...",
        "source": "Business Wire",
        "title": "Moonvalley Releases First Fully-Licensed AI Video Model for Professional Production"
      },
      {
        "date": "2025-04-07",
        "id": "moonvalley-3",
        "link": "https://techcrunch.com/2025/04/07/ai-video-startup-moonvalley-raised-a-fresh-43m-sec-filing-shows/",
        "snippet": "Los Angeles-based startup Moonvalley, which is developing AI tools for video creation, has raised a fresh $43 million in venture capital, according to an SEC...",
        "source": "TechCrunch",
        "title": "AI video startup Moonvalley raised a fresh $43M, SEC filing shows"
      },
      {
        "date": "2025-03-12",
        "id": "moonvalley-4",
        "link": "https://www.fastcompany.com/91296309/moonvalley-launches-an-ai-video-generator-built-for-moviemaking",
        "snippet": "A well-funded AI lab with a deep bench of research talent is releasing a powerful new model that generates high-definition video for the...",
        "source": "Fast Company",
        "title": "Moonvalley launches an AI video generator built for moviemaking"
      }
    ],
    "websiteUrl": "https://www.moonvalley.com/"
  },
  {
    "description": "At Hark, we are building the most advanced personal intelligence in the world.",
    "id": "hark",
    "linkedinUrl": "https://www.linkedin.com/company/hark-ai",
    "name": "Hark",
    "timeline": [
      {
        "date": "2026-05-20",
        "id": "hark-1",
        "link": "https://hark.com/articles/hark-announces-usd700-million-fundraising-round",
        "snippet": "Hark announced more than $700 million in Series A funding at a $6 billion post-money valuation to build personal intelligence and AI-native hardware.",
        "source": "Hark",
        "title": "Hark announces $700M fundraising round"
      }
    ],
    "websiteUrl": "https://hark.com/"
  },
  {
    "description": "An intelligence science lab.",
    "id": "ndea",
    "linkedinUrl": "https://www.linkedin.com/company/ndea",
    "name": "Ndea",
    "timeline": [
      {
        "date": "2025-01-15",
        "id": "ndea-1",
        "link": "https://techcrunch.com/2025/01/15/ai-researcher-francois-chollet-founds-a-new-ai-lab-focused-on-agi/",
        "snippet": "TechCrunch reported that Francois Chollet and Mike Knoop launched Ndea as an AI research and science lab pursuing AGI through program synthesis.",
        "source": "TechCrunch",
        "title": "AI researcher Francois Chollet founds a new AI lab focused on AGI"
      }
    ],
    "websiteUrl": "https://ndea.com/"
  },
  {
    "description": "We are leveraging diffusion technology to develop a new generation of LLMs. Our dLLMs are much faster and more efficient than traditional auto-regressive LLMs. And diffusion models are more accurate, controllable, and performant on multimodal tasks.",
    "id": "inception-labs",
    "linkedinUrl": "https://www.linkedin.com/company/inception-labs-ai/",
    "name": "Inception Labs",
    "timeline": [
      {
        "date": "2026-04-01",
        "id": "inception-labs-1",
        "link": "https://www.inceptionlabs.ai/blog/introducing-mercury-edit-2",
        "snippet": "Today we're introducing Mercury Edit 2: a purpose-built diffusion LLM (dLLM) for the most latency-sensitive component of modern development workflows:...",
        "source": "Inception Labs . AI",
        "title": "Introducing Mercury Edit 2"
      },
      {
        "date": "2026-02-24",
        "id": "inception-labs-2",
        "link": "https://www.inceptionlabs.ai/blog/introducing-mercury-2",
        "snippet": "Today, we're introducing Mercury 2 - the world's fastest reasoning language model, built to make production AI feel instant.",
        "source": "Inception Labs . AI",
        "title": "Introducing Mercury 2"
      },
      {
        "date": "2025-11-19",
        "id": "inception-labs-3",
        "link": "https://www.inceptionlabs.ai/blog/mercury-azure-foundry",
        "snippet": "Today, we're thrilled to announce that Mercury is available on Azure AI Foundry, bringing the first commercial-scale diffusion large language model (dLLM)...",
        "source": "Inception Labs . AI",
        "title": "Mercury Diffusion LLM Now Available on Azure AI Foundry"
      },
      {
        "date": "2025-11-06",
        "id": "inception-labs-4",
        "link": "https://www.inceptionlabs.ai/blog/mercury-refreshed",
        "snippet": "We started Inception to build the world's fastest, most efficient AI models. In February 2025, we launched our first model, Mercury, which is the first...",
        "source": "Inception Labs . AI",
        "title": "The Next Step for dLLMs: Scaling up Mercury"
      }
    ],
    "websiteUrl": "https://www.inceptionlabs.ai/"
  },
  {
    "description": "Adaption is building adaptive intelligence that continually learns. Efficient, evolving AI for any industry or language.",
    "id": "adaption-labs",
    "linkedinUrl": "https://www.linkedin.com/company/adaption-labs",
    "name": "Adaption Labs",
    "timeline": [
      {
        "date": "2026-05-13",
        "id": "adaption-labs-1",
        "link": "https://adaptionlabs.ai/blog/autoscientist",
        "snippet": "Less than a thousand people in the world know how to shape a frontier model. They sit inside a handful of labs, working on proprietary...",
        "source": "adaptionlabs.ai",
        "title": "AutoScientist: Automating the Science of Model Training"
      },
      {
        "date": "2026-04-14",
        "id": "adaption-labs-2",
        "link": "https://adaptionlabs.ai/blog/expand-your-world",
        "snippet": "Expand Your World is a feature of Adaptive Data that scales any dataset across 242 languages and localizations. Start from 10 examples and...",
        "source": "adaptionlabs.ai",
        "title": "Expand Your World: Multilingual AI Training Across 242 Languages | Adaption"
      },
      {
        "date": "2026-03-31",
        "id": "adaption-labs-3",
        "link": "https://adaptionlabs.ai/blog/adaption-for-startups",
        "snippet": "The best startups don't just move fast. They build systems that get smarter over time. In a world where nearly every company is reaching for...",
        "source": "adaptionlabs.ai",
        "title": "Introducing Adaption for Startups: AI That's Yours to Shape"
      },
      {
        "date": "2026-02-04",
        "id": "adaption-labs-4",
        "link": "https://fortune.com/2026/02/04/adaption-labs-50-million-seed-funding-emergence-captial-sara-hooker-sudip-roy-ai-models-that-learn-on-the-fly/",
        "snippet": "Sara Hooker, an AI researcher and advocate for cheaper AI systems that use less computing power, is hanging her own shingle.",
        "source": "Fortune",
        "title": "Former Cohere execs Sara Hooker and Sudip Roy secure $50 million seed round for their new startup Adaption Labs"
      }
    ],
    "websiteUrl": "https://adaptionlabs.ai/"
  },
  {
    "description": "Elorian is building the foundation of visual reasoning, with models designed to reason directly through visual information.",
    "id": "elorian",
    "linkedinUrl": "https://www.linkedin.com/company/elorian-ai",
    "name": "Elorian",
    "timeline": [
      {
        "date": "2026-04-09",
        "id": "elorian-1",
        "link": "https://www.bloomberg.com/news/articles/2026-04-09/ex-google-deepmind-researchers-debut-startup-called-elorian-focused-on-visual-ai",
        "snippet": "Former Google DeepMind researcher Andrew Dai believes that the artificial intelligence models at big labs have the intelligence of a...",
        "source": "Bloomberg.com",
        "title": "Former DeepMind Researchers Bet on Visual AI With New Startup"
      }
    ],
    "websiteUrl": "https://elorian.ai/"
  },
  {
    "description": "We are a new generation of robotics builders, united by a shared mission to push the boundaries of physical AI.",
    "id": "genesis-ai",
    "linkedinUrl": "https://www.linkedin.com/company/gs-ai",
    "name": "Genesis AI",
    "timeline": [
      {
        "date": "2026-06-05",
        "id": "genesis-ai-1",
        "link": "https://www.genesis.ai/blog/the-role-of-simulation-in-scalable-robotics-genesis-world-10-and-the-path-forward",
        "snippet": "We are a new generation of robotics builders, united by a shared mission to push the boundaries of physical AI.",
        "source": "genesis.ai",
        "title": "The Role of Simulation in Scalable Robotics, Genesis World 1.0, and the Path Forward"
      },
      {
        "date": "2026-05-06",
        "id": "genesis-ai-2",
        "link": "https://techcrunch.com/2026/05/06/khosla-backed-robotics-startup-genesis-ai-has-gone-full-stack-demo-shows/",
        "snippet": "Genesis AI, a startup that raised a $105 million seed round to build foundational AI for robotics, has unveiled its first model, GENE-26.5,...",
        "source": "TechCrunch",
        "title": "Khosla-backed robotics startup Genesis AI has gone full stack, demo shows"
      },
      {
        "date": "2025-07-01",
        "id": "genesis-ai-3",
        "link": "https://techcrunch.com/2025/07/01/genesis-ai-launches-with-105m-seed-funding-from-eclipse-khosla-to-build-ai-models-for-robots/",
        "snippet": "Genesis AI, which aims to build a foundational model for powering all kinds of robots, has emerged from stealth with $105M in seed funding.",
        "source": "TechCrunch",
        "title": "Genesis AI launches with $105M seed funding from Eclipse, Khosla to build AI models for robots"
      },
      {
        "date": "2025-06-26",
        "id": "genesis-ai-4",
        "link": "https://sifted.eu/articles/exclusive-genesis-robotics-85m-round",
        "snippet": "Theophile Gervet and Zhou Xian launched Genesis Robotics just six months ago.",
        "source": "Sifted",
        "title": "Exclusive: Ex-Mistral employee closes $85m round for AI and robotics startup"
      }
    ],
    "websiteUrl": "https://www.genesis.ai/"
  },
  {
    "description": "CuspAI is a frontier AI company working on breakthrough materials, using AI to accelerate materials discovery for human progress.",
    "id": "cuspai",
    "linkedinUrl": "https://www.linkedin.com/company/cusp-ai",
    "name": "CuspAI",
    "timeline": [
      {
        "date": "2026-04-20",
        "id": "cuspai-1",
        "link": "https://sifted.eu/articles/cuspai-funding-round-unicorn-valuation",
        "snippet": "The AI materials startup was reported to be raising $200 million at a unicorn valuation, after prior backing from investors including NEA and Temasek.",
        "source": "Sifted",
        "title": "CuspAI raising $200m at unicorn valuation, reports say"
      },
      {
        "date": "2025-10-29",
        "id": "cuspai-2",
        "link": "https://sifted.eu/articles/cuspai-tops-sifted-ai-ranking",
        "snippet": "Cambridge-based CuspAI, which aims to accelerate the design process of new materials using AI, has topped the first Sifted AI 100 - a...",
        "source": "Sifted",
        "title": "CuspAI tops Sifted's ranking of 100 standout AI startups in Europe"
      },
      {
        "date": "2025-09-10",
        "id": "cuspai-3",
        "link": "https://fortune.com/2025/09/10/cuspai-raises-100-million-in-new-venture-capital-funding-ai-for-chemistry/",
        "snippet": "NEA and Temasek are leading the investment into CuspAI, with Nvidia's NVentures, Samsung, and Hyundai also participating.",
        "source": "Fortune",
        "title": "CuspAI, startup building AI models for chemistry, raises $100 million Series A at $520 million valuation"
      }
    ],
    "websiteUrl": "https://www.cusp.ai/"
  },
  {
    "description": "The fastest path to safe super intelligence. Paved with better reasoning.",
    "id": "poetiq",
    "linkedinUrl": "https://www.linkedin.com/company/poetiq",
    "name": "Poetiq",
    "timeline": [
      {
        "date": "2026-01-29",
        "id": "poetiq-1",
        "link": "https://www.prnewswire.com/news-releases/poetiq-raises-45-8m-for-ai-meta-system-surpasses-top-llms-on-industry-benchmark-302674571.html",
        "snippet": "PRNewswire/ -- Poetiq, developer of an AI meta-system that makes LLMs work better, announced today that it raised $45.8 million in Seed...",
        "source": "PR Newswire",
        "title": "Poetiq Raises $45.8M for AI Meta-System, Surpasses Top LLMs on Industry Benchmark"
      }
    ],
    "websiteUrl": "https://poetiq.ai/"
  },
  {
    "description": "The starting point for reasoning",
    "id": "axiom-math",
    "linkedinUrl": "https://www.linkedin.com/company/axiommath",
    "name": "Axiom Math",
    "timeline": [
      {
        "date": "2026-03-12",
        "id": "axiom-math-1",
        "link": "https://www.nytimes.com/2026/03/12/technology/axiom-ai-code-funding.html",
        "snippet": "Valued at $1.6 billion, a tiny start-up called Axiom is building A.I. systems that can check for mistakes. Axiom Math's founder and chief...",
        "source": "The New York Times",
        "title": "A.I. Writes Buggy Code. A Silicon Valley Start-Up Wants to Fix It."
      },
      {
        "date": "2025-12-06",
        "id": "axiom-math-2",
        "link": "https://www.businessinsider.com/axiom-math-stanford-dropout-meta-ai-researchers-startup-2025-12",
        "snippet": "24-year-old Axiom Math founder Carina Hong wooed top Meta researchers in a competitive AI talent market.",
        "source": "Business Insider",
        "title": "How a 24-year-old Stanford Ph.D. dropout hired some of Meta's brightest minds to join her AI math startup"
      },
      {
        "date": "2025-09-30",
        "id": "axiom-math-3",
        "link": "https://www.forbes.com/sites/rashishrivastava/2025/09/30/meet-the-stanford-dropout-building-an-ai-to-solve-maths-hardest-problems-and-create-harder-ones/",
        "snippet": "Axiom Math, which has recruited top talent from Meta, has raised $64 million in seed funding to build an AI math whiz.",
        "source": "Forbes",
        "title": "Former Meta Researchers Are Building An AI Math Whiz"
      }
    ],
    "websiteUrl": "https://axiommath.ai/"
  },
  {
    "description": "Ineffable Intelligence is an AI research company whose mission is to make first contact with superintelligence.",
    "id": "ineffable-intelligence",
    "linkedinUrl": "https://www.linkedin.com/company/ineffable-intelligence/",
    "name": "Ineffable Intelligence",
    "timeline": [
      {
        "date": "2026-05-13",
        "id": "ineffable-intelligence-1",
        "link": "https://www.ineffable.ai/blog/nvidia-ineffable-intelligence-team-up-to-build-the-future-of-reinforcement-learning-infrastructure",
        "snippet": "Reinforcement-learning agents - AI systems that learn by trial and error - can convert computation into new knowledge.",
        "source": "ineffable.ai",
        "title": "NVIDIA, Ineffable Intelligence Team Up to Build the Future of Reinforcement Learning Infrastructure"
      },
      {
        "date": "2026-04-27",
        "id": "ineffable-intelligence-2",
        "link": "https://www.cnbc.com/2026/04/27/deepmind-ineffable-intelligence-record-seed-funding-nvidia-google.html",
        "snippet": "A former Google DeepMind researcher announced on Monday a record $1.1 billion for his new AI lab. Ineffable Intelligence garnered backing...",
        "source": "CNBC",
        "title": "Former Google DeepMind researcher's AI startup raises record $1.1 billion seed funding to pursue superintelligence"
      },
      {
        "date": "2026-04-27",
        "id": "ineffable-intelligence-3",
        "link": "https://techcrunch.com/2026/04/27/deepminds-david-silver-just-raised-1-1b-to-build-an-ai-that-learns-without-human-data/",
        "snippet": "Ineffable Intelligence, a British AI lab founded a mere few months ago by former DeepMind researcher David Silver, has raised $1.1 billion...",
        "source": "TechCrunch",
        "title": "DeepMind's David Silver just raised $1.1B to build an AI that learns without human data"
      }
    ],
    "websiteUrl": "https://www.ineffable.ai/"
  },
  {
    "description": "Cursive describes its work as frontier intelligence for real-time generative systems.",
    "id": "cursive",
    "linkedinUrl": "https://www.linkedin.com/company/cursive-ai/",
    "name": "Cursive",
    "timeline": [],
    "websiteUrl": "https://www.cursive.ai/"
  },
  {
    "description": "Recursively self-improving to discover new knowledge.",
    "id": "inherent",
    "linkedinUrl": "https://www.linkedin.com/company/inherent-laboratories",
    "name": "Inherent",
    "timeline": [
      {
        "date": "2026-05-29",
        "id": "inherent-1",
        "link": "https://www.uktech.news/ai/london-based-ai-lab-inherent-emerges-from-stealth-with-40m-raise-20260529",
        "snippet": "Inherent, a London-based AI lab focused on reinventing the scientific method, emerged from stealth with a roughly $50 million raise.",
        "source": "UKTN",
        "title": "London-based AI lab Inherent emerges from stealth with GBP40m raise"
      }
    ],
    "websiteUrl": "https://inherentlabs.ai/"
  },
  {
    "description": "Specific Intelligence for Your Business",
    "id": "applied-compute",
    "linkedinUrl": "https://www.linkedin.com/company/appliedcompute",
    "name": "Applied Compute",
    "timeline": [
      {
        "date": "2026-04-08",
        "id": "applied-compute-1",
        "link": "https://appliedcompute.com/company/fundraise",
        "snippet": "Applied Compute announced $80 million in new financing at a $1.3 billion post-money valuation, bringing total funding to $160 million.",
        "source": "Applied Compute",
        "title": "Applied Compute raises $80M led by Kleiner Perkins"
      }
    ],
    "websiteUrl": "https://www.appliedcompute.com/"
  },
  {
    "description": "Core Automation is building an automated AI lab focused on systems that optimize and automate work, beginning with research itself.",
    "id": "core-automation",
    "linkedinUrl": "",
    "name": "Core Automation",
    "timeline": [
      {
        "date": "2026-05-28",
        "id": "core-automation-1",
        "link": "https://www.coreauto.com/blog/when-ai-starts-writing-systems-code",
        "snippet": "Core Automation argues that automating research requires automating systems code and describes the lab's work on continually learning systems.",
        "source": "Core Automation",
        "title": "When AI Starts Writing Systems Code"
      }
    ],
    "websiteUrl": "https://www.coreauto.com/"
  },
  {
    "description": "Ricursive Intelligence is a frontier AI lab focused on building self-improving systems, starting with chip design.",
    "id": "ricursive-intelligence",
    "linkedinUrl": "",
    "name": "Ricursive Intelligence",
    "timeline": [
      {
        "date": "2026-02-16",
        "id": "ricursive-intelligence-1",
        "link": "https://techcrunch.com/2026/02/16/how-ricursive-intelligence-raised-335m-at-a-4b-valuation-in-4-months/",
        "snippet": "TechCrunch profiled Ricursive Intelligence founders Anna Goldie and Azalia Mirhoseini and reported on the company's rapid fundraising around AI-driven chip design.",
        "source": "TechCrunch",
        "title": "How Ricursive Intelligence raised $335M at a $4B valuation in 4 months"
      },
      {
        "date": "2026-01-26",
        "id": "ricursive-intelligence-2",
        "link": "https://www.prnewswire.com/news-releases/ricursive-intelligence-raises-300-million-series-a-at-4-billion-valuation-to-accelerate-ai-driven-semiconductor-design-302670061.html",
        "snippet": "Ricursive Intelligence announced a $300 million Series A led by Lightspeed Venture Partners at a $4 billion post-money valuation.",
        "source": "PR Newswire",
        "title": "Ricursive Intelligence Raises $300 Million Series A at $4 Billion Valuation to Accelerate AI-Driven Semiconductor Design"
      },
      {
        "date": "2025-12-02",
        "id": "ricursive-intelligence-3",
        "link": "https://www.prnewswire.com/news-releases/ricursive-intelligence-launches-frontier-ai-lab-to-transform-semiconductor-design-and-accelerate-path-toward-artificial-superintelligence-302630776.html",
        "snippet": "Ricursive Intelligence launched as a frontier AI lab and announced a $35 million seed round led by Sequoia Capital at a $750 million final valuation.",
        "source": "PR Newswire",
        "title": "Ricursive Intelligence Launches Frontier AI Lab to Transform Semiconductor Design and Accelerate Path Toward Artificial Superintelligence"
      }
    ],
    "websiteUrl": "https://www.ricursive.com/"
  }
]
