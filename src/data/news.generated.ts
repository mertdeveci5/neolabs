export type CompanyNewsItem = {
  date: string
  id: string
  link: string
  markdown?: string
  snippet: string
  source: string
  title: string
}

export const newsFetchedAt = "2026-06-06T14:55:47.146633+00:00"

export const companyNews: Record<string, CompanyNewsItem[]> = {
  "thinking-machines-lab": [
    {
      "id": "thinking-machines-lab-1",
      "title": "Thinking Machines Lab Wants to Replace OpenAI Realtime With a Model That Listens While It Speaks",
      "link": "https://www.startuphub.ai/ai-news/artificial-intelligence/2026/thinking-machines-lab-interaction-models-mira-murati-2026",
      "source": "StartupHub.ai",
      "date": "3 weeks ago",
      "snippet": "Mira Murati's Thinking Machines Lab on Sunday published its first detailed technical post since the company was founded, and the thesis is a..."
    },
    {
      "id": "thinking-machines-lab-2",
      "title": "Mira Murati's Thinking Machines Lab Introduces Interaction Models: A Native Multimodal Architecture for Real-Time Human-AI Collaboration",
      "link": "https://www.marktechpost.com/2026/05/13/mira-muratis-thinking-machines-lab-introduces-interaction-models-a-native-multimodal-architecture-for-real-time-human-ai-collaboration/",
      "source": "MarkTechPost",
      "date": "3 weeks ago",
      "snippet": "Mira Murati's Thinking Machines Lab Introduces Interaction Models: A Native Multimodal Architecture for Real-Time Human-AI Collaboration."
    },
    {
      "id": "thinking-machines-lab-3",
      "title": "Thinking Machines Lab, newly established by the former CTO of OpenAI, has released a research preview of 'Interaction Models,' an AI that changes the input and output of AI from the existing turn-based system to real-time.",
      "link": "https://gigazine.net/gsc_news/en/20260512-thinking-machines-lab-interaction-models/",
      "source": "GIGAZINE",
      "date": "3 weeks ago",
      "snippet": "Thinking Machines Lab , an AI startup founded by former OpenAI CTOMira Murati , has announced a research preview of its real-time..."
    },
    {
      "id": "thinking-machines-lab-4",
      "title": "The 10 biggest AI startup fundraising rounds so far this year",
      "link": "https://qz.com/biggest-ai-fundraises-2025-openai-anthropic",
      "source": "Quartz",
      "date": "Sep 15, 2025",
      "snippet": "These leading artificial intelligence startups are fetching valuations in the tends of billions and higher."
    },
    {
      "id": "thinking-machines-lab-5",
      "title": "Thinking Machines Lab Makes Tinker Generally Available: Adds Kimi K2 Thinking And Qwen3-VL Vision Input",
      "link": "https://www.marktechpost.com/2025/12/16/thinking-machines-lab-makes-tinker-generally-available-adds-kimi-k2-thinking-and-qwen3-vl-vision-input/",
      "source": "MarkTechPost",
      "date": "Dec 16, 2025",
      "snippet": "Thinking Machines Lab has moved its Tinker training API into general availability and added 3 major capabilities, support for the Kimi K2..."
    }
  ],
  "ssi-safe-superintelligence": [
    {
      "id": "ssi-safe-superintelligence-1",
      "title": "CoreNest Capital Announces Investments in 10 Frontier",
      "link": "https://www.globenewswire.com/news-release/2025/07/07/3111035/0/en/corenest-capital-announces-investments-in-10-frontier-companies-including-safe-superintelligence-ssi-neuralink-perceptive-orbit-fab-and-ottonomy.html",
      "source": "GlobeNewswire",
      "date": "Jul 7, 2025",
      "snippet": "CoreNest Capital announces 10 new investments across AI, robotics, and deeptech advancing next-gen infrastructure and frontier technologies."
    },
    {
      "id": "ssi-safe-superintelligence-2",
      "title": "Safe Superintelligence’s Launch Spotlights OpenAI Roots",
      "link": "https://www.pymnts.com/artificial-intelligence-2/2024/safe-superintelligences-launch-spotlights-openai-roots/",
      "source": "PYMNTS.com",
      "date": "Jun 20, 2024",
      "snippet": "Ilya Sutskever, co-founder and former chief scientist of OpenAI, has launched Safe Superintelligence Inc. (SSI), a new artificial intelligence (AI) company."
    },
    {
      "id": "ssi-safe-superintelligence-3",
      "title": "Ilya Sutskever Launches Safe Superintelligence with $1B in Funding",
      "link": "https://www.industryleadersmagazine.com/ilya-sutskever-launches-safe-superintelligence-with-1b-in-funding/",
      "source": "Industry Leaders Magazine",
      "date": "Sep 5, 2024",
      "snippet": "OpenAI co-founder Ilya Sutskever, who left the artificial intelligence startup in May, has raised $1B from investors for his new AI company, Safe..."
    }
  ],
  "skild-ai": [
    {
      "id": "skild-ai-1",
      "title": "Skild AI: Pioneering Omni-Bodied Intelligence Through Simulation",
      "link": "https://www.nvidia.com/en-us/case-studies/skild-ai/",
      "source": "NVIDIA",
      "date": "Jan 15, 2026",
      "snippet": "Skild AI, powered by NVIDIA's accelerated computing infrastructure, has developed a novel technique to train an omni-bodied robot foundation model capable..."
    },
    {
      "id": "skild-ai-2",
      "title": "Robotics Startup Skild AI Lands $1.4B, Tripling Valuation To $14B In Just 7 Months",
      "link": "https://news.crunchbase.com/venture/robotics-startup-skild-ai-triples-valuation/",
      "source": "Crunchbase News",
      "date": "Jan 14, 2026",
      "snippet": "Skild AI, a robotics company building an “omni-bodied” brain to operate any robot for any task, announced Wednesday that it has raised $1.4..."
    },
    {
      "id": "skild-ai-3",
      "title": "Skild AI Acquires Zebra Technologies' Robotics Automation Business",
      "link": "https://www.businesswire.com/news/home/20260415518240/en/Skild-AI-Acquires-Zebra-Technologies-Robotics-Automation-Business",
      "source": "Business Wire",
      "date": "1 month ago",
      "snippet": "Skild AI today announced the acquisition of Zebra Technologies' Robotics Automation business, including its Symmetry Fulfillment..."
    },
    {
      "id": "skild-ai-4",
      "title": "Skild AI, Nvidia deploy robot brain on Blackwell assembly lines",
      "link": "https://www.reuters.com/business/media-telecom/skild-ai-nvidia-deploy-robot-brain-blackwell-assembly-lines-2026-03-16/",
      "source": "Reuters",
      "date": "Mar 16, 2026",
      "snippet": "Skild AI's artificial intelligence ​model will power robots manning Foxconn's assembly lines in Houston, where Nvidia's Blackwell GPU server..."
    },
    {
      "id": "skild-ai-5",
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
      "title": "American AI startup Poolside launches free, high-performing open model Laguna XS.2 for local agentic coding",
      "link": "https://venturebeat.com/technology/american-ai-startup-poolside-launches-free-high-performing-open-model-laguna-xs-2-for-local-agentic-coding",
      "source": "Venturebeat",
      "date": "1 month ago",
      "snippet": "By putting the weights of a highly capable, 33B-parameter agentic model in the hands of researchers and startups, Poolside is positioning..."
    },
    {
      "id": "poolside-2",
      "title": "Poolside seeks partners for data center in Texas after CoreWeave deal falls apart",
      "link": "https://www.datacenterdynamics.com/en/news/poolside-seeks-partners-for-data-center-in-texas-after-coreweave-deal-falls-apart/",
      "source": "Data Center Dynamics",
      "date": "Apr 2, 2026",
      "snippet": "AI start-up Poolside is in talks with cloud providers, including Google, in hopes of securing a new partner for its Texas data center..."
    },
    {
      "id": "poolside-3",
      "title": "Poolside AI’s 4B Texas Bet Collapses: CoreWeave Walks, B Round Fails [2026]",
      "link": "https://tech-insider.org/poolside-ai-project-horizon-coreweave-2gw-texas-collapse-2026/",
      "source": "tech-insider.org",
      "date": "1 month ago",
      "snippet": "Poolside AI's 4B Project Horizon collapses as CoreWeave exits and a B Series C with Nvidia fails. Inside the AI coding startup's 2GW Texas..."
    },
    {
      "id": "poolside-4",
      "title": "CoreWeave Ends Poolside Deal Raising Questions On AI Growth Strategy",
      "link": "https://finance.yahoo.com/markets/stocks/articles/coreweave-ends-poolside-deal-raising-111152269.html",
      "source": "Yahoo Finance",
      "date": "Apr 3, 2026",
      "snippet": "CoreWeave (NasdaqGS:CRWV) has ended its partnership with AI start up Poolside on a major Texas data centre project."
    },
    {
      "id": "poolside-5",
      "title": "Poolside hunts data centre partners after CoreWeave deal falls through",
      "link": "https://www.ft.com/content/24168508-e2a1-447d-b1a0-44a0be0c0550?syn-25a6b1a6=1",
      "source": "Financial Times",
      "date": "Apr 1, 2026",
      "snippet": "AI start-up Poolside has held talks with Google and other cloud providers to revive a large Texas data centre project after a deal with..."
    }
  ],
  "reflection-ai": [
    {
      "id": "reflection-ai-1",
      "title": "Exclusive: Reflection AI to power Genesis Mission",
      "link": "https://www.axios.com/2026/05/22/reflection-ai-genesis-mission-energy-partnership",
      "source": "Axios",
      "date": "2 weeks ago",
      "snippet": "Open-source AI firm Reflection AI is partnering with the Department of Energy to help power the Genesis Mission, a federal scientific..."
    },
    {
      "id": "reflection-ai-2",
      "title": "AI & Tech Brief: Reflection AI arrives in Washington",
      "link": "https://www.washingtonpost.com/wp-intelligence/ai-tech-brief/2026/05/26/ai-tech-brief-reflection-ai-arrives-washington/",
      "source": "The Washington Post",
      "date": "1 week ago",
      "snippet": "Misha Laskin, Reflection's CEO, explains why developing open-source models is a national security imperative."
    },
    {
      "id": "reflection-ai-3",
      "title": "DOE Taps Reflection AI for Genesis Mission",
      "link": "https://www.meritalk.com/articles/doe-taps-reflection-ai-for-genesis-mission/",
      "source": "MeriTalk",
      "date": "2 weeks ago",
      "snippet": "Artificial intelligence (AI) company Reflection AI said on May 22 that it will provide its open-source AI platform to support the Department..."
    },
    {
      "id": "reflection-ai-4",
      "title": "Exclusive | Nvidia-Backed Startup Seeking to Counter Chinese AI Eyes $25 Billion Valuation",
      "link": "https://www.wsj.com/tech/ai/nvidia-backed-startup-seeking-to-counter-chinese-ai-eyes-25-billion-valuation-3bd8216c",
      "source": "WSJ",
      "date": "Mar 25, 2026",
      "snippet": "Reflection is one of several startups working alongside Nvidia to build powerful, freely available 'open-source' AI models."
    },
    {
      "id": "reflection-ai-5",
      "title": "Valuation Surges 15-Fold in 7 Months: What Caused the Sudden Explosion of Reflection AI?",
      "link": "https://eu.36kr.com/en/p/3815518156185346",
      "source": "36氪",
      "date": "3 weeks ago",
      "snippet": "The emerging trend of Open AI has seen Reflection AI being pursued by capital, resulting in a soaring valuation."
    }
  ],
  "project-prometheus": [
    {
      "id": "project-prometheus-1",
      "title": "Jeff Bezos describes his $38B startup Prometheus for the first time: 'Nothing to do with robotics'",
      "link": "https://www.geekwire.com/2026/jeff-bezos-describes-his-38b-startup-prometheus-for-the-first-time-nothing-to-do-with-robotics/",
      "source": "GeekWire",
      "date": "2 weeks ago",
      "snippet": "In a CNBC interview, Jeff Bezos offered the most detailed public description yet of Project Prometheus, calling the secretive startup an..."
    },
    {
      "id": "project-prometheus-2",
      "title": "Inside Project Prometheus: Jeff Bezos’ AI Startup Targeting Aerospace, Chips and More",
      "link": "https://builtin.com/articles/what-is-project-prometheus",
      "source": "Built In",
      "date": "1 month ago",
      "snippet": "Project Prometheus is Jeff Bezos' stealth AI startup focused on automating manufacturing with world models, targeting industries like..."
    },
    {
      "id": "project-prometheus-3",
      "title": "Jeff Bezos' secretive AI startup is set to be valued at around $38 billion after raising a $10 billion mega round",
      "link": "https://www.businessinsider.com/jeff-bezos-project-prometheus-valued-at-38-billion-2026-4",
      "source": "Business Insider",
      "date": "1 month ago",
      "snippet": "Project Prometheus is raising around $10 billion in fresh funding at a post-money valuation of around $38 billion."
    },
    {
      "id": "project-prometheus-4",
      "title": "Jeff Bezos Is Quietly Building an A.I. Dream Team at Project Prometheus",
      "link": "https://observer.com/2026/04/jeff-bezos-project-prometheus-new-hires/",
      "source": "Observer",
      "date": "Apr 7, 2026",
      "snippet": "Jeff Bezos's A.I. startup Project Prometheus recruits elite engineers from OpenAI and xAI to drive next-phase A.I. automation."
    },
    {
      "id": "project-prometheus-5",
      "title": "Bezos’s Physical AI Lab Has Closed Round at $38 Billion Value",
      "link": "https://www.bloomberg.com/news/articles/2026-04-23/bezos-s-physical-ai-lab-has-closed-round-at-38-billion-value",
      "source": "Bloomberg",
      "date": "1 month ago",
      "snippet": "Project Prometheus, the artificial intelligence lab that Amazon.com Inc. founder Jeff Bezos is leading with Google veteran Vik Bajaj,..."
    }
  ],
  "physical-intelligence": [
    {
      "id": "physical-intelligence-1",
      "title": "'π0' is a general-purpose robot base model that can take clothes out of the washing machine, fold them, and clear the table after meals.",
      "link": "https://gigazine.net/gsc_news/en/20241101-physical-intelligence-pi0/",
      "source": "GIGAZINE",
      "date": "Nov 1, 2024",
      "snippet": "While AI can sometimes show talents that surpass humans in difficult tasks, such as beating humans at chess or creating new drugs,..."
    }
  ],
  "unconventional-ai": [
    {
      "id": "unconventional-ai-1",
      "title": "Investing in Unconventional",
      "link": "https://a16z.com/announcement/investing-in-unconventional/",
      "source": "Andreessen Horowitz",
      "date": "Dec 8, 2025",
      "snippet": "GPUs are the backbone of the AI industry. They run the majority of training and inference workloads today, and advances in GPU technology..."
    },
    {
      "id": "unconventional-ai-2",
      "title": "Investing In Unconventional AI: Biology-Scale Efficiency For The AI Era",
      "link": "https://lsvp.com/stories/investing-in-unconventional-ai-biology-scale-efficiency-for-the-ai-era/",
      "source": "Lightspeed Venture Partners",
      "date": "Dec 8, 2025",
      "snippet": "Founded by Naveen Rao, MeeLan Lee, Sara Achour, and Michael Carbin, Unconventional is building a new substrate for intelligence. Their insight:..."
    },
    {
      "id": "unconventional-ai-3",
      "title": "Unconventional AI Raises $475M Seed Round At $4.5B Valuation To Build Energy-Efficient AI Computers",
      "link": "https://finance.yahoo.com/news/unconventional-ai-raises-475m-seed-213649847.html",
      "source": "Yahoo Finance",
      "date": "Dec 11, 2025",
      "snippet": "According to Bloomberg, Unconventional AI, launched just two months ago by former Databricks AI lead Naveen Rao, secured $475 million in seed..."
    },
    {
      "id": "unconventional-ai-4",
      "title": "AI Computer Startup Hits $4.5 Billion Valuation in Seed Round",
      "link": "https://www.bloomberg.com/news/articles/2025-12-08/ai-computer-startup-hits-4-5-billion-valuation-in-seed-round",
      "source": "Bloomberg.com",
      "date": "Dec 8, 2025",
      "snippet": "A two-month-old startup from the former head of artificial intelligence at Databricks Inc. has raised a seed round of funding from investors..."
    },
    {
      "id": "unconventional-ai-5",
      "title": "Jeff Bezos backs $475M seed round for chip startup Unconventional AI",
      "link": "https://siliconangle.com/2025/12/08/jeff-bezos-backs-475m-seed-round-chip-startup-unconventional-ai/",
      "source": "SiliconANGLE",
      "date": "Dec 8, 2025",
      "snippet": "Jeff Bezos backs $475M seed round for chip startup Unconventional AI ... Unconventional AI Inc., a chip startup led by former Intel Corp."
    }
  ],
  "humansand": [
    {
      "id": "humansand-1",
      "title": "Humans&, a 'human-centric' AI startup founded by Anthropic, xAI, Google alums, raised $480M seed round",
      "link": "https://techcrunch.com/2026/01/20/humans-a-human-centric-ai-startup-founded-by-anthropic-xai-google-alums-raised-480m-seed-round/",
      "source": "TechCrunch",
      "date": "Jan 20, 2026",
      "snippet": "Humans&, a startup that believes AI should empower people, not replace them, has reportedly raised a $480 million seed round at a $4.48..."
    },
    {
      "id": "humansand-2",
      "title": "humans& Raises $480M Seed at $4.48B Valuation",
      "link": "https://www.thesaasnews.com/news/humans-raises-480m-seed-at-4-48b-valuation/",
      "source": "The SaaS News",
      "date": "Jan 26, 2026",
      "snippet": "humans&, a San Francisco, CA–based startup focused on AI that empowers people rather than replaces them, has raised $480 million in Seed..."
    },
    {
      "id": "humansand-3",
      "title": "New AI Startup Humans& Raises $480M Seed at $4.8B Valuation",
      "link": "https://builtin.com/articles/humansand-raises-480m-4b-valuation-20260121",
      "source": "Built In",
      "date": "Jan 21, 2026",
      "snippet": "Three-month-old AI startup Humans& raised $480 million in a seed funding round from investors including Nvidia, Google Ventures and Jeff..."
    },
    {
      "id": "humansand-4",
      "title": "An A.I. Start-Up Says It Wants to Empower Workers, Not Replace Them",
      "link": "https://www.nytimes.com/2026/01/20/technology/humans-ai-anthropic-xai.html",
      "source": "The New York Times",
      "date": "Jan 20, 2026",
      "snippet": "Founded by researchers from Anthropic, Google and xAI, the new company, Humans&, is already valued at $4.48 billion."
    },
    {
      "id": "humansand-5",
      "title": "AI startup Humans& raises $480 million at $4.5 billion valuation in seed round",
      "link": "https://www.reuters.com/business/ai-startup-humans-raises-480-million-45-billion-valuation-seed-round-2026-01-20/",
      "source": "Reuters",
      "date": "Jan 20, 2026",
      "snippet": "AI startup Humans&, founded by former OpenAI, Alphabet ​and xAI researchers, has raised $480 million in a seed financing ‌round,..."
    }
  ],
  "inflection-ai": [
    {
      "id": "inflection-ai-1",
      "title": "Mustafa Suleyman-founded Inflection AI to return to London",
      "link": "https://www.msn.com/en-gb/money/other/mustafa-suleyman-founded-inflection-ai-to-return-to-london/ar-AA23Cvn4",
      "source": "MSN",
      "date": "2 weeks ago",
      "snippet": "Silicon Valley startup Inflection AI is marking a return to London as the company forges ahead with its expansion plans, City AM can reveal."
    },
    {
      "id": "inflection-ai-2",
      "title": "Reid Hoffman leaves Microsoft board to focus on AI startup",
      "link": "https://scanx.trade/stock-market-news/companies/reid-hoffman-leaves-microsoft-board-to-focus-on-ai-startup/42288017",
      "source": "scanx.trade",
      "date": "4 hours ago",
      "snippet": "Reid Hoffman is leaving Microsoft's board after nearly a decade to focus on Manus, his AI drug discovery startup. He joined Microsoft in..."
    },
    {
      "id": "inflection-ai-3",
      "title": "LinkedIn co-founder Reid Hoffman to step down from Microsoft's board",
      "link": "https://www.thehindu.com/sci-tech/technology/linkedin-co-founder-reid-hoffman-to-step-down-from-microsofts-board/article71068458.ece",
      "source": "The Hindu",
      "date": "9 hours ago",
      "snippet": "Reid Hoffman, billionaire co-founder of networking website ​LinkedIn, has decided not ‌to stand for re-election to ​Microsoft's board of..."
    },
    {
      "id": "inflection-ai-4",
      "title": "Inflection CEO bets on emotion to stand out in AI",
      "link": "https://www.sfexaminer.com/news/technology/how-inflection-is-betting-on-emotion-to-stand-out-in-ai/article_a908125c-5c1c-4b46-b6d4-dd66080597ec.html",
      "source": "San Francisco Examiner",
      "date": "Oct 14, 2025",
      "snippet": "Among the artificial-intelligence startups that quickly rose up to challenge OpenAI, Inflection AI arguably seemed the most like a flash in..."
    },
    {
      "id": "inflection-ai-5",
      "title": "Reid Hoffman is leaving Microsoft's board as AI scrutiny rises",
      "link": "https://startupfortune.com/reid-hoffman-is-leaving-microsofts-board-as-ai-scrutiny-rises/",
      "source": "Startup Fortune",
      "date": "23 hours ago",
      "snippet": "Reid Hoffman will not stand for re-election to Microsoft's board at the company's 2026 annual shareholder meeting."
    }
  ],
  "isomorphic-labs": [
    {
      "id": "isomorphic-labs-1",
      "title": "Isomorphic Labs Announces $2.1B Funding to Scale its AI Drug Design Engine",
      "link": "https://theaiinsider.tech/2026/05/13/isomorphic-labs-announces-2-1b-funding-to-scale-its-ai-drug-design-engine/",
      "source": "AI Insider",
      "date": "3 weeks ago",
      "snippet": "Insider Brief Isomorphic Labs, an AI-first drug design company founded by Sir Demis Hassabis, has raised $2.1 billion in Series B funding..."
    },
    {
      "id": "isomorphic-labs-2",
      "title": "Isomorphic Labs Raises $2.1 Billion to Expand AI-Driven Drug Discovery Platform",
      "link": "https://www.biopharminternational.com/view/isomorphic-labs-raises-2-1-billion-to-expand-ai-driven-drug-discovery-platform",
      "source": "BioPharm International",
      "date": "3 weeks ago",
      "snippet": "Isomorphic Labs' $2.1 billion financing will support expansion of its AI-driven drug discovery platform and advancement of therapeutic..."
    },
    {
      "id": "isomorphic-labs-3",
      "title": "Google-backed Isomorphic Labs to launch human trials for AI-designed drugs",
      "link": "https://tribune.com.pk/story/2554523/google-backed-isomorphic-labs-to-launch-human-trials-for-ai-designed-drugs",
      "source": "The Express Tribune",
      "date": "Jul 7, 2025",
      "snippet": "Alphabet's drug discovery arm, Isomorphic Labs, is preparing to enter a new chapter in its ambitious efforts to reshape medicine through artificial..."
    },
    {
      "id": "isomorphic-labs-4",
      "title": "Google's parent company announces that it will launch 'Isomorphic Labs', a company that develops AI for drug discovery",
      "link": "https://gigazine.net/gsc_news/en/20211105-alphabet-launch-isomorphic-labs-deepmind-ai/",
      "source": "GIGAZINE",
      "date": "Nov 5, 2021",
      "snippet": "Google's parent company Alphabet has announced that it will launch Isomorphic Labs, a venture company that redevelops the entire drug..."
    }
  ],
  "ami-labs": [
    {
      "id": "ami-labs-1",
      "title": "Yann LeCun Launches AMI Labs to Build AI World Models",
      "link": "https://builtin.com/articles/ami-labs-yann-lecun",
      "source": "Built In",
      "date": "Mar 12, 2026",
      "snippet": "After leaving Meta, Yann LeCun founded AMI Labs to develop world models trained on real-world sensory data instead of large language models."
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
      "title": "Cypher 2026 is here. And this one means more. For the last decade, Cypher has helped shape India’s AI story, bringing together the brightest minds to build, showcase, debate, and define the future of AI. What started as a conference became a platform. Then",
      "link": "https://www.linkedin.com/posts/analytics-india-magazine_cypher2026-10yearsofcypher-aiinindia-activity-7438119154643083264-q0Eu",
      "source": "LinkedIn",
      "date": "Mar 13, 2026",
      "snippet": ""
    },
    {
      "id": "ami-labs-4",
      "title": "Who’s behind AMI Labs, Yann LeCun’s ‘world model’ startup",
      "link": "https://techcrunch.com/2026/01/23/whos-behind-ami-labs-yann-lecuns-world-model-startup/",
      "source": "TechCrunch",
      "date": "Jan 23, 2026",
      "snippet": "Yann LeCun's new venture, AMI Labs, has drawn intense attention since the AI scientist left Meta to found it."
    }
  ],
  "decart": [
    {
      "id": "decart-1",
      "title": "Exclusive | Startup Makes Switching AI Chips Easier—and Nvidia Is a New Investor",
      "link": "https://www.wsj.com/tech/ai/startup-makes-switching-ai-chips-easierand-nvidia-is-a-new-investor-c78e3a54",
      "source": "WSJ",
      "date": "3 weeks ago",
      "snippet": "Decart's valuation hits nearly $4 billion as investors pour capital into startups making AI computing more efficient."
    },
    {
      "id": "decart-2",
      "title": "Decart raises $300M for its AI optimization software, world models",
      "link": "https://siliconangle.com/2026/05/18/decart-raises-300m-ai-optimization-software-world-models/",
      "source": "SiliconANGLE",
      "date": "3 weeks ago",
      "snippet": "Artificial intelligence developer Decart.ai Inc. today announced that it has raised $300 million in funding at a nearly $4 billion valuation..."
    },
    {
      "id": "decart-3",
      "title": "Decart’s New Lucy 2 Generative AI Video Model Pushes Generative Video Into Real Time",
      "link": "https://www.forbes.com/sites/charliefink/2026/01/27/decarts-new-lucy-2-generative-ai-video-model-pushes-generative-video-into-real-time/",
      "source": "Forbes",
      "date": "Jan 27, 2026",
      "snippet": "Decart, the Israeli real time generative AI startup backed by Sequoia Capital and Benchmark, is advancing a new class of generative video..."
    },
    {
      "id": "decart-4",
      "title": "AI unicorn Decart expands leadership team, appoints Noy Levinson as GM of Strategy and Business",
      "link": "https://www.calcalistech.com/ctechnews/article/bkst4hrzwl",
      "source": "CTech",
      "date": "Nov 27, 2025",
      "snippet": "Artificial intelligence lab Decart announced on Thursday the appointment of Noy Levinson as General Manager, joining the company's senior..."
    },
    {
      "id": "decart-5",
      "title": "Decart: Interview With General Manager Noy Levinson About The AI Research Lab",
      "link": "https://pulse2.com/decart-profile-noy-levinson-interview/",
      "source": "Pulse 2.0",
      "date": "Feb 19, 2026",
      "snippet": "Decart is an AI research lab that specializes in video and world models optimized for efficiency and real-time performance."
    }
  ],
  "xaira-therapeutics": [
    {
      "id": "xaira-therapeutics-1",
      "title": "Xaira Therapeutics Announces the Appointment of Rachel Lane, Ph.D., as Senior Vice President, Business Development and Operations",
      "link": "https://www.businesswire.com/news/home/20260325916932/en/Xaira-Therapeutics-Announces-the-Appointment-of-Rachel-Lane-Ph.D.-as-Senior-Vice-President-Business-Development-and-Operations",
      "source": "Business Wire",
      "date": "Mar 26, 2026",
      "snippet": "Xaira Therapeutics today announced the appointment of Dr. Rachel Lane as Senior Vice President, Business Development and Operations,..."
    },
    {
      "id": "xaira-therapeutics-2",
      "title": "Reinventing Drug Discovery with AI: Marc Tessier-Lavigne on The Long Run",
      "link": "https://timmermanreport.com/2025/11/reinventing-drug-discovery-with-ai-marc-tessier-lavigne-on-the-long-run/",
      "source": "Timmerman Report",
      "date": "Nov 12, 2025",
      "snippet": "Marc Tessier-Lavigne is today's guest on The Long Run. Marc is the chairman and CEO of South San Francisco-based Xaira Therapeutics."
    },
    {
      "id": "xaira-therapeutics-3",
      "title": "Xaira Therapeutics Revenue 2025: $20.2M ARR, $2.7B Valuation",
      "link": "https://getlatka.com/companies/xaira.com",
      "source": "GetLatka",
      "date": "Nov 24, 2025",
      "snippet": "Xaira Therapeutics is an integrated biotechnology company driving advances in artificial intelligence to learn the language of life and..."
    },
    {
      "id": "xaira-therapeutics-4",
      "title": "Xaira Therapeutics Launches X-Cell, Its First Virtual Cell Model, Trained on the Largest-Ever Genome-Wide Perturbation Dataset, X-Atlas/Pisces",
      "link": "https://www.businesswire.com/news/home/20260317710096/en/Xaira-Therapeutics-Launches-X-Cell-Its-First-Virtual-Cell-Model-Trained-on-the-Largest-Ever-Genome-Wide-Perturbation-Dataset-X-AtlasPisces",
      "source": "Business Wire",
      "date": "Mar 17, 2026",
      "snippet": "Xaira Therapeutics, a company built to transform drug discovery through AI, today announced X-Cell, its first virtual cell model."
    },
    {
      "id": "xaira-therapeutics-5",
      "title": "Xaira Therapeutics Releases Largest Perturb-Seq Dataset to Power the Virtual Cell",
      "link": "https://www.genengnews.com/topics/artificial-intelligence/xaira-therapeutics-releases-largest-perturb-seq-dataset-to-power-the-virtual-cell/",
      "source": "Genetic Engineering and Biotechnology News",
      "date": "Jun 17, 2025",
      "snippet": "Ever since artificial intelligence (AI) drug developer Xaira Therapeutics launched in April 2024 with a jaw-dropping $1 billion in committed..."
    }
  ],
  "sakana-ai": [
    {
      "id": "sakana-ai-1",
      "title": "Introducing Sakana AI’s Recursive Self-Improvement (RSI) Lab",
      "link": "https://sakana.ai/rsi-lab/",
      "source": "Sakana AI",
      "date": "21 hours ago",
      "snippet": "As the world enters the era of artificial intelligence, Japan has a unique opportunity to reclaim its position at the frontier of global innovation."
    },
    {
      "id": "sakana-ai-2",
      "title": "Sakana AI bets AI that improves itself can break the compute arms race of frontier labs",
      "link": "https://the-decoder.com/sakana-ai-bets-ai-that-improves-itself-can-break-the-compute-arms-race-of-frontier-labs/",
      "source": "The Decoder",
      "date": "53 minutes ago",
      "snippet": "Japanese startup Sakana AI has founded the \"Sakana AI RSI Lab,\" a research group focused on recursive self-improvement (RSI)."
    },
    {
      "id": "sakana-ai-3",
      "title": "Towards end-to-end automation of AI research",
      "link": "https://www.nature.com/articles/s41586-026-10265-5",
      "source": "Nature",
      "date": "Mar 25, 2026",
      "snippet": "The automation of science is a long-standing ambition in artificial intelligence (AI) research1,2. Although the community has made..."
    },
    {
      "id": "sakana-ai-4",
      "title": "Mitsubishi Electric Invests in AI Startup Sakana AI",
      "link": "https://finance.yahoo.com/sectors/technology/articles/mitsubishi-electric-invests-ai-startup-050000743.html",
      "source": "Yahoo Finance",
      "date": "Mar 25, 2026",
      "snippet": "TOKYO, March 25, 2026--Mitsubishi Electric Corporation (TOKYO: 6503) announced today that it has invested in Sakana AI Inc., a Japan-based..."
    },
    {
      "id": "sakana-ai-5",
      "title": "The AI Scientist: Towards Fully Automated AI Research, Now Published in Nature",
      "link": "https://sakana.ai/ai-scientist-nature/",
      "source": "Sakana AI",
      "date": "Mar 26, 2026",
      "snippet": "When we first introduced The AI Scientist in our initial preprint, we shared an ambitious vision: an agent powered by foundation models..."
    }
  ],
  "general-intuition": [],
  "liquid-ai": [
    {
      "id": "liquid-ai-1",
      "title": "Liquid AI Releases LFM2.5-8B-A1B: An On-Device MoE Model With 8.3B Total and 1.5B Active Parameters",
      "link": "https://www.marktechpost.com/2026/05/28/liquid-ai-releases-lfm2-5-8b-a1b-an-on-device-moe-model-with-8-3b-total-and-1-5b-active-parameters/",
      "source": "MarkTechPost",
      "date": "1 week ago",
      "snippet": "Liquid AI releases LFM2.5-8B-A1B, a reasoning on-device Mixture-of-Experts model with 8.3B total parameters, 1.5B active, and 128K context."
    },
    {
      "id": "liquid-ai-2",
      "title": "Liquid AI and Insilico Medicine Announce Strategic Partnership Delivering Lightweight Scientific Foundation Models for Drug Discovery",
      "link": "https://insilico.com/news/bo54fkt0e1-liquid-ai-and-insilico-medicine-announce",
      "source": "Insilico Medicine",
      "date": "Mar 8, 2026",
      "snippet": "Liquid AI and Insilico Medicine today announced a partnership that creates lightweight scientific foundation models for pharmaceutical..."
    },
    {
      "id": "liquid-ai-3",
      "title": "Automotive intelligence moves forwards with ‘Liquid AI’",
      "link": "https://www.digitaljournal.com/article/automotive-intelligence-moves-forwards-with-liquid-ai/",
      "source": "Digital Journal",
      "date": "1 week ago",
      "snippet": "Is a new era of automotive intelligence about to begin? This is the claim of Autobrains Technologies who are working on 'Liquid AI',..."
    },
    {
      "id": "liquid-ai-4",
      "title": "The case for liquid foundation models",
      "link": "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-case-for-liquid-foundation-models",
      "source": "McKinsey & Company",
      "date": "Jan 21, 2026",
      "snippet": "Ramin Hasani, CEO and cofounder of Liquid AI, discusses his company's journey and impact and how the company's much smaller models are..."
    },
    {
      "id": "liquid-ai-5",
      "title": "Liquid AI & AMD Show the Future of On-Device AI With Local Private Meeting Summarization",
      "link": "https://www.amd.com/en/blogs/2026/liquid-ai-amd-ryzen-on-device-meeting-summaries.html",
      "source": "AMD",
      "date": "Jan 5, 2026",
      "snippet": "Liquid AI and AMD are showcasing the next era of GenAI: AI everywhere— powered by high-quality, application-specific, efficient models that..."
    }
  ],
  "h-the-h-company": [
    {
      "id": "h-the-h-company-1",
      "title": "AI model 'Holo3' capable of performing click operations and task execution on a PC has been released; the open-source version has a free tier.",
      "link": "https://gigazine.net/gsc_news/en/20260409-holo3-open-computer-use/",
      "source": "GIGAZINE",
      "date": "Apr 9, 2026",
      "snippet": "H Company, a French AI startup, released ' Holo3 ,' an AI model capable of performing click operations and task execution on a PC,..."
    },
    {
      "id": "h-the-h-company-2",
      "title": "H Company Launches Next-Generation Autonomous AI Agents for Enterprise and Consumer Markets",
      "link": "https://www.businesswire.com/news/home/20250603660208/en/H-Company-Launches-Next-Generation-Autonomous-AI-Agents-for-Enterprise-and-Consumer-Markets",
      "source": "Business Wire",
      "date": "Jun 3, 2025",
      "snippet": "H Company, a leading European AI Research and Product company backed by $220 million from tier-one investors, today announced the public..."
    },
    {
      "id": "h-the-h-company-3",
      "title": "H Company Revenue 2025: $22.1M ARR, $66.3M Valuation",
      "link": "https://getlatka.com/companies/hcompany.ai",
      "source": "GetLatka",
      "date": "Jun 10, 2025",
      "snippet": "Runner H is an AI-powered web automation agent developed by HCompanyAI, designed to simplify and scale complex workflows."
    },
    {
      "id": "h-the-h-company-4",
      "title": "H Raises $220 Million in Seed Round",
      "link": "https://www.thesaasnews.com/news/h-raises-220-million-in-seed-round/",
      "source": "The SaaS News",
      "date": "May 21, 2024",
      "snippet": "H (previously known as Holistic AI), a Paris, France-based AI startup, has raised $220 million in a seed round."
    },
    {
      "id": "h-the-h-company-5",
      "title": "Sign Up for Runner H AI Agent Beta by H Company",
      "link": "https://smestreet.in/technology/sign-up-for-runner-h-ai-agent-beta-by-h-company-7599595",
      "source": "SMEStreet",
      "date": "Nov 22, 2024",
      "snippet": "We are thrilled to bring agentic AI to market with Runner H,” said Charles Kantor, CEO of H. “This is about empowering people to harness AI..."
    }
  ],
  "magic": [
    {
      "id": "magic-1",
      "title": "Founder Eric Steinberger on Magic’s Counterintuitive Approach to Pursuing AGI",
      "link": "https://sequoiacap.com/podcast/training-data-eric-steinberger/",
      "source": "Sequoia Capital",
      "date": "Oct 26, 2025",
      "snippet": "In 2022 Eric Steinberger realized that AGI was closer than he had previously thought and started Magic to automate the software engineering to get there."
    },
    {
      "id": "magic-2",
      "title": "Dev Diary: Creating Arena Powered Cube",
      "link": "https://magic.wizards.com/en/news/mtg-arena/dev-diary-creating-arena-powered-cube",
      "source": "Magic: The Gathering",
      "date": "Oct 23, 2025",
      "snippet": "From an \"Experimental Frenzy\" to an actual event on MTG Arena, the road to Powered Cube was as complex as it was rewarding."
    },
    {
      "id": "magic-3",
      "title": "Generative AI coding startup Magic lands $320M investment from Eric Schmidt, Atlassian and others",
      "link": "https://techcrunch.com/2024/08/29/generative-ai-coding-startup-magic-lands-320m-investment-from-eric-schmidt-atlassian-and-others/",
      "source": "TechCrunch",
      "date": "Aug 29, 2024",
      "snippet": "Magic, an AI startup creating models to generate code and automate a range of software development tasks, has raised a large tranche of cash from investors."
    },
    {
      "id": "magic-4",
      "title": "AWS named as a Leader in the 2025 Gartner Magic Quadrant for AI Code Assistants | Amazon Web Services",
      "link": "https://aws.amazon.com/blogs/devops/aws-named-as-a-leader-in-the-2025-gartner-magic-quadrant-for-ai-code-assistants/",
      "source": "Amazon Web Services (AWS)",
      "date": "Sep 19, 2025",
      "snippet": "We are excited to share that AWS has been named a Leader in the 2025 Gartner Magic Quadrant for AI Code Assistants for the second year in..."
    },
    {
      "id": "magic-5",
      "title": "Heroes of Might and Magic Olden Era’s early access recoups dev costs in one day and earns positive initial response",
      "link": "https://massivelyop.com/2026/05/02/heroes-of-might-and-magic-olden-eras-early-access-recoups-dev-costs-in-one-day-and-earns-positive-initial-response/",
      "source": "Massively Overpowered",
      "date": "1 month ago",
      "snippet": "Heroes of Might and Magic: Olden Era (or HOMAMOE to give its mouthful of an acronym), appears to have made something of a splash since its..."
    }
  ],
  "periodic-labs": [
    {
      "id": "periodic-labs-1",
      "title": "Investing in Periodic Labs",
      "link": "https://a16z.com/announcement/investing-in-periodic-labs/",
      "source": "Andreessen Horowitz",
      "date": "Sep 30, 2025",
      "snippet": "Everyone has been amazed by the remarkable progress that frontier AI models have made in tackling increasingly complex challenges in math,..."
    },
    {
      "id": "periodic-labs-2",
      "title": "Periodic Labs raises $300M to accelerate scientific research with AI",
      "link": "https://siliconangle.com/2025/10/01/periodic-labs-raises-300m-accelerate-scientific-research-ai/",
      "source": "SiliconANGLE",
      "date": "Oct 1, 2025",
      "snippet": "Periodic Labs Inc., an artificial intelligence startup working to speed up scientific research, has raised $300 million in funding."
    },
    {
      "id": "periodic-labs-3",
      "title": "Periodic Labs launches with $300M to build an “AI scientist”",
      "link": "https://www.maginative.com/article/periodic-labs-launches-with-300m-to-build-an-ai-scientist/",
      "source": "Maginative",
      "date": "Sep 30, 2025",
      "snippet": "Periodic Labs, cofounded by Liam Fedus and Ekin Dogus Cubuk, came out of stealth Tuesday with a claimed $300 million seed round and a..."
    },
    {
      "id": "periodic-labs-4",
      "title": "San Francisco-based AI science startup Periodic Labs is in deal talks at about $7 billion valuation",
      "link": "https://www.mercurynews.com/2026/03/25/ai-science-startup-periodic-labs-is-in-deal-talks-at-about-7-billion-valuation/",
      "source": "The Mercury News",
      "date": "Mar 25, 2026",
      "snippet": "By Natasha Mascarenhas and Rebecca Torrence, Bloomberg. Periodic Labs, an artificial intelligence research startup founded last year by..."
    },
    {
      "id": "periodic-labs-5",
      "title": "Top A.I. Researchers Leave OpenAI, Google and Meta for New Start-Up",
      "link": "https://www.nytimes.com/2025/09/30/technology/ai-meta-google-openai-periodic.html",
      "source": "The New York Times",
      "date": "Sep 30, 2025",
      "snippet": "Founded by a co-creator of ChatGPT, Periodic Labs aims to build artificial intelligence that can accelerate discoveries in physics,..."
    }
  ],
  "harmonic": [
    {
      "id": "harmonic-1",
      "title": "Harmonic Builds Momentum Towards Mathematical Superintelligence with $120 Million Series C",
      "link": "https://www.businesswire.com/news/home/20251125727962/en/Harmonic-Builds-Momentum-Towards-Mathematical-Superintelligence-with-%24120-Million-Series-C",
      "source": "Business Wire",
      "date": "Nov 25, 2025",
      "snippet": "Harmonic, the artificial intelligence lab leading the development of Mathematical Superintelligence (MSI), achieves unicorn status with the..."
    },
    {
      "id": "harmonic-2",
      "title": "Why Vlad Tenev and Tudor Achim of Harmonic Think AI Is About to Change Math—and Why It Matters",
      "link": "https://sequoiacap.com/podcast/training-data-harmonic/",
      "source": "Sequoia Capital",
      "date": "Oct 26, 2025",
      "snippet": "Vlad Tenev and Tudor Achim founded Harmonic create mathematical superintelligence and along the way verify all safety-critical software."
    },
    {
      "id": "harmonic-3",
      "title": "Robinhood CEO's math-focused AI startup Harmonic valued at $1.45 billion in latest fundraising",
      "link": "https://www.reuters.com/business/robinhood-ceos-math-focused-ai-startup-harmonic-valued-145-billion-latest-2025-11-25/",
      "source": "Reuters",
      "date": "Nov 25, 2025",
      "snippet": "Nov 25 (Reuters) - Harmonic, an artificial intelligence startup co-founded by Robinhood CEO Vlad Tenev, has raised $120 million in new..."
    },
    {
      "id": "harmonic-4",
      "title": "Exclusive: Nvidia backs Harmonic, a specialized AI math startup",
      "link": "https://www.axios.com/2026/01/15/nvidia-harmonic-ai-math-accuracy",
      "source": "Axios",
      "date": "Jan 15, 2026",
      "snippet": "Chipmaker Nvidia is joining the list of investors backing Harmonic, a startup focused on AI systems designed to solve mathematical problems."
    },
    {
      "id": "harmonic-5",
      "title": "AI startup tackles bottleneck where people spend more time checking AI content than creating it",
      "link": "https://the-decoder.com/ai-startup-tackles-bottleneck-where-people-spend-more-time-checking-ai-content-than-creating-it/",
      "source": "The Decoder",
      "date": "Jul 29, 2025",
      "snippet": "Alongside OpenAI and Google DeepMind, AI startup Harmonic has also achieved a gold-medal performance at this year's International..."
    }
  ],
  "ai21-labs": [
    {
      "id": "ai21-labs-1",
      "title": "AI21 Labs Revenue 2024: $57.8M ARR, $1.4B Valuation",
      "link": "https://getlatka.com/companies/ai21.com",
      "source": "GetLatka",
      "date": "Nov 28, 2025",
      "snippet": "AI21 Labs 2024 revenue: $57.8M ARR (up from $50M in 2023). Valuation: $1.4B. Total funding: $461.5M across 5 rounds."
    },
    {
      "id": "ai21-labs-2",
      "title": "Nebius in talks to acquire AI21 after Nvidia deal falls through",
      "link": "https://www.calcalistech.com/ctechnews/article/r1kdh64nzg",
      "source": "CTech",
      "date": "Apr 9, 2026",
      "snippet": "AI21 Labs is in acquisition talks once again, this time with AI infrastructure company Nebius, according to a report by The Information,..."
    },
    {
      "id": "ai21-labs-3",
      "title": "Report: Nvidia in advanced talks to buy Israel’s AI21 Labs for up to $3 billion",
      "link": "https://www.timesofisrael.com/report-nvidia-in-advanced-talks-to-buy-israels-ai21-labs-for-up-to-3-billion/",
      "source": "The Times of Israel",
      "date": "Dec 30, 2025",
      "snippet": "Potential deal would come shortly after AI chip giant announced 'second home' in Kiryat Tivon, and following banner year for Israeli tech..."
    },
    {
      "id": "ai21-labs-4",
      "title": "Nebius in talks to acquire AI21 Labs - report",
      "link": "https://en.globes.co.il/en/article-nebius-in-talks-to-acquire-ai21labs-report-1001539693",
      "source": "Globes - Israel Business News",
      "date": "Apr 9, 2026",
      "snippet": "The Information” reports that Dutch AI cloud company Nebius is negotiating to buy the Israeli company after Nvidia pulled out of talks to..."
    },
    {
      "id": "ai21-labs-5",
      "title": "Nvidia-Backed AI21 Labs Raising $300M to Scale Proprietary LLMs",
      "link": "https://www.fintechweekly.com/news/ai21-series-d-funding-nvidia-google",
      "source": "FinTech Weekly",
      "date": "May 10, 2025",
      "snippet": "Israeli AI startup AI21 is raising a $300M round to build its own large language models, with support from Nvidia and Google."
    }
  ],
  "lila-sciences": [
    {
      "id": "lila-sciences-1",
      "title": "Lila Sciences Said in Talks for Funds at $8.5 Billion Valuation",
      "link": "https://www.bloomberg.com/news/articles/2026-06-03/lila-sciences-said-in-talks-for-funds-at-8-5-billion-valuation",
      "source": "Bloomberg.com",
      "date": "2 days ago",
      "snippet": "Artificial intelligence research startup Lila Sciences Inc. is in talks to raise about $2 billion at an expected valuation of about $8.5..."
    },
    {
      "id": "lila-sciences-2",
      "title": "25. Lila Sciences",
      "link": "https://www.cnbc.com/2026/05/19/lila-sciences-cnbc-disruptor-50-ranking.html",
      "source": "CNBC",
      "date": "2 weeks ago",
      "snippet": "Lila Sciences, a \"superintelligence platform\" with a focus on scientific advances, ranks No. 25 on CNBC's 2026 Disruptor 50 list."
    },
    {
      "id": "lila-sciences-3",
      "title": "Lila Sciences eyes $8.5b valuation, Suno's $5.4b, and Aeon's sport ambitions shrink",
      "link": "https://www.axios.com/pro/all-deals/2026/06/03/pro-rata-premium-first-look-lila-suno-aeon",
      "source": "Axios",
      "date": "2 days ago",
      "snippet": "Venture Capital. Lila Sciences, a Cambridge, Mass.-based developer of autonomous scientific labs, is in talks to raise $2b at an $8.5b..."
    },
    {
      "id": "lila-sciences-4",
      "title": "Lila Sciences Raises $350M in Series A Funding",
      "link": "https://www.finsmes.com/2026/06/lila-sciences-raises-350m-in-series-a-funding.html",
      "source": "FinSMEs",
      "date": "2 days ago",
      "snippet": "Lila Sciences, a Cambridge, Massachusetts-based developer of a scientific superintelligence platform and automated laboratory systems,..."
    },
    {
      "id": "lila-sciences-5",
      "title": "Lila Sciences is testing how much investors will pay for automated labs",
      "link": "https://startupfortune.com/lila-sciences-is-testing-how-much-investors-will-pay-for-automated-labs/",
      "source": "Startup Fortune",
      "date": "2 days ago",
      "snippet": "Lila Sciences is reportedly in talks to raise funding at an $8.5 billion valuation, a major jump from its 2025 financing."
    }
  ],
  "chai-discovery": [
    {
      "id": "chai-discovery-1",
      "title": "Chai Discovery Announces Collaboration with Eli Lilly and Company to Accelerate Biologics Discovery",
      "link": "https://www.businesswire.com/news/home/20260108131261/en/Chai-Discovery-Announces-Collaboration-with-Eli-Lilly-and-Company-to-Accelerate-Biologics-Discovery",
      "source": "Business Wire",
      "date": "Jan 9, 2026",
      "snippet": "Chai Discovery, the AI company building a computer-aided design suite for molecules, announces Eli Lilly and Company collaboration."
    },
    {
      "id": "chai-discovery-2",
      "title": "Chai Discovery Unveils Chai-2 Breakthrough, Achieving Fully De Novo Antibody Design With AI",
      "link": "https://finance.yahoo.com/news/chai-discovery-unveils-chai-2-100000398.html",
      "source": "Yahoo Finance",
      "date": "Jun 30, 2025",
      "snippet": "SAN FRANCISCO, June 30, 2025--Chai Discovery, which builds frontier artificial intelligence to predict and reprogram the interactions..."
    },
    {
      "id": "chai-discovery-3",
      "title": "Chai Discovery Announces $130M Series B to Advance Molecular Discovery",
      "link": "https://www.hpcwire.com/aiwire/2025/12/15/chai-discovery-announces-130-million-series-b-to-transform-molecular-discovery/",
      "source": "HPCwire",
      "date": "Dec 15, 2025",
      "snippet": "SAN FRANCISCO, Dec. 15, 2025 — Chai Discovery, an AI company that predicts and reprograms the interactions between biochemical molecules,..."
    },
    {
      "id": "chai-discovery-4",
      "title": "Chai Discovery Announces License Agreement with Pfizer to Accelerate Drug Discovery with AI",
      "link": "https://www.businesswire.com/news/home/20260602498831/en/Chai-Discovery-Announces-License-Agreement-with-Pfizer-to-Accelerate-Drug-Discovery-with-AI",
      "source": "Business Wire",
      "date": "2 days ago",
      "snippet": "Chai Discovery, the company engineering AI models to discover new molecules, announces a license agreement with Pfizer."
    },
    {
      "id": "chai-discovery-5",
      "title": "Chai-1 Released by Chai Discovery Team: A Groundbreaking Multi-Modal Foundation Model Set to Transform Drug Discovery and Biological Engineering with Revolutionary Molecular Structure Prediction",
      "link": "https://www.marktechpost.com/2024/09/10/chai-1-released-by-chai-discovery-team-a-groundbreaking-multi-modal-foundation-model-set-to-transform-drug-discovery-and-biological-engineering-with-revolutionary-molecular-structure-prediction/",
      "source": "MarkTechPost",
      "date": "Sep 10, 2024",
      "snippet": "Chai-1 Released by Chai Discovery Team: A Groundbreaking Multi-Modal Foundation Model Set to Transform Drug Discovery and Biological..."
    }
  ],
  "flapping-airplanes": [
    {
      "id": "flapping-airplanes-1",
      "title": "Partnering With Flapping Airplanes",
      "link": "https://sequoiacap.com/article/partnering-with-flapping-airplanes/",
      "source": "Sequoia Capital",
      "date": "Jan 28, 2026",
      "snippet": "Building the “young person's AGI lab” to unlock data efficient models, which we believe is the bottleneck to laddering up the next rung of..."
    },
    {
      "id": "flapping-airplanes-2",
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
      "title": "We Don't Need More Talk About \"Potentials\"",
      "link": "https://therecursive.com/the-recursive-cee-forum-2026-top-takeaways-on-cross-border-collaboration-scaling/",
      "source": "The Recursive",
      "date": "2 weeks ago",
      "snippet": "The Recursive CEE Forum 2026 at ViennaUP shifted the narrative of the CEE startup ecosystem 2026 from mere potential to tangible..."
    },
    {
      "id": "recursive-2",
      "title": "The Recursive CEE Forum Returns to ViennaUP 2026",
      "link": "https://www.therecursive.com/recursive-cee-forum-2026-viennaup/",
      "source": "The Recursive",
      "date": "Mar 23, 2026",
      "snippet": "The Recursive CEE Forum returns to ViennaUP 2026 on May 20, connecting founders, and investors across CEE."
    },
    {
      "id": "recursive-3",
      "title": "Why 500 Global and Nvidia Just Bet €91.5m on Deepinfra’s ‘Token Factory’",
      "link": "https://therecursive.com/deepinfra-series-b-500-global-nvidia-ai-inference-infrastructure/",
      "source": "The Recursive",
      "date": "1 month ago",
      "snippet": "As DeepInfra secures $107 million in Series B funding, the focus of the tech industry is pivoting from model training to managing the..."
    },
    {
      "id": "recursive-4",
      "title": "North Macedonian Eliza Prendzov on Shifting From Diplomacy to Wall Street",
      "link": "https://therecursive.com/post-dream-new-york-eliza-prendzov-risk-reinvention/",
      "source": "The Recursive",
      "date": "Feb 25, 2026",
      "snippet": "A Post-Dream column by Kristiana Kuneva exploring New York after the shine fades, featuring Eliza Prendzov's journey."
    },
    {
      "id": "recursive-5",
      "title": "Credo Ventures Launches Over €74M New Fund to Back CEE Startups at Pre-Seed",
      "link": "https://www.therecursive.com/credo-stage-5-88m-cee-preseed-fund/",
      "source": "The Recursive",
      "date": "Mar 23, 2026",
      "snippet": "Credo Ventures Launches Over €74M New Fund to Back CEE Startups at Pre-Seed. InvestorsNews · The Recursive. by The Recursive."
    }
  ],
  "world-labs": [
    {
      "id": "world-labs-1",
      "title": "World Labs Raises $1B Series B",
      "link": "https://www.thesaasnews.com/news/world-labs-raises-1b-series-b/",
      "source": "The SaaS News",
      "date": "1 day ago",
      "snippet": "World Labs raises $1B Series B led by Autodesk at a $5B valuation to scale its spatial-intelligence world model platform Marble."
    },
    {
      "id": "world-labs-2",
      "title": "World Labs Marble Creates 3D Worlds with AI",
      "link": "https://content-technology.com/ai-in-media/world-labs-marble-creates-3d-worlds-with-ai/",
      "source": "Content + Technology",
      "date": "Sep 18, 2025",
      "snippet": "World Labs has introduced Marble, a limited access beta preview of its model, now available at marble.worldlabs.ai, where users can view and..."
    },
    {
      "id": "world-labs-3",
      "title": "Marble 1.1 — World Labs Just Made Their World Model Significantly Better",
      "link": "https://quasa.io/media/marble-1-1-world-labs-just-made-their-world-model-significantly-better",
      "source": "Quasa.io",
      "date": "Apr 10, 2026",
      "snippet": "World Labs has released a meaningful update to its generative world model: Marble 1.1 and a new, more powerful variant called Marble 1.1..."
    },
    {
      "id": "world-labs-4",
      "title": "Marble, a multimodal world model that generates 3D worlds from text, images, and videos, is now publicly available",
      "link": "https://gigazine.net/gsc_news/en/20251113-marble-multimodal-world-model/",
      "source": "GIGAZINE",
      "date": "Nov 13, 2025",
      "snippet": "On November 12, 2025 local time,. World Labs , an AI company founded by Fei-Fei Li, a computer science authority who served as director of..."
    },
    {
      "id": "world-labs-5",
      "title": "Li Feifei's World Labs Launches Its First Commercial 3D World Model Marble, Supporting Multiple Inputs for Generation",
      "link": "https://news.aibase.com/news/22756",
      "source": "AIBase",
      "date": "Nov 13, 2025",
      "snippet": "The world model Marble, the first commercial product from World Labs co-founded by AI expert Li Feifei, supports the generation of editable..."
    }
  ],
  "evolutionaryscale": [
    {
      "id": "evolutionaryscale-1",
      "title": "Zuckerberg, Chan shift bulk of philanthropy to science, focusing on AI and biology to curb disease",
      "link": "https://apnews.com/article/chan-zuckerberg-philanthropy-biohub-evolutionaryscale-87c24eb349abcce8abec132b8538d7b0",
      "source": "AP News",
      "date": "Nov 6, 2025",
      "snippet": "For the past decade, Dr. Priscilla Chan and her husband Mark Zuckerberg have focused part of their philanthropy on a lofty goal — “to cure,..."
    },
    {
      "id": "evolutionaryscale-2",
      "title": "CZI has acquired the startup EvolutionaryScale and created Biohub, an organization dedicated to advancing AI in science, with the aim of accelerating medical discoveries.",
      "link": "https://informat.ro/en/international/czi-founded-by-zuckerberg-launches-biohub-for-advancements-in-medical-ai-89600",
      "source": "Informat.ro",
      "date": "Nov 6, 2025",
      "snippet": "Mark Zuckerberg announced that his organization, CZI, has acquired the startup EvolutionaryScale, specialized in artificial intelligence for..."
    },
    {
      "id": "evolutionaryscale-3",
      "title": "AI Startup EvolutionaryScale Generates Novel Protein and Raises $142M+",
      "link": "https://www.insideprecisionmedicine.com/topics/precision-medicine/ai-startup-evolutionaryscale-generates-novel-protein-and-raises-142m/",
      "source": "Inside Precision Medicine",
      "date": "Jun 26, 2024",
      "snippet": "EvolutionaryScale, an AI startup founded by x-Meta researchers, launched this week with its ESM3 platform for novel protein generation."
    },
    {
      "id": "evolutionaryscale-4",
      "title": "Revolutionizing Generative Biology with AWS and EvolutionaryScale | Amazon Web Services",
      "link": "https://aws.amazon.com/blogs/industries/revolutionizing-generative-biology-with-aws-and-evolutionaryscale/",
      "source": "Amazon Web Services (AWS)",
      "date": "Jun 25, 2024",
      "snippet": "AWS is excited to announce a collaboration with EvolutionaryScale to bring their new frontier language models for biology to scientists and researchers."
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
  "aai": [
    {
      "id": "aai-1",
      "title": "Amnon Shashua’s new AI startup on track to become a unicorn",
      "link": "https://www.ynetnews.com/business/article/by6jwiqnxl",
      "source": "Ynetnews",
      "date": "Sep 26, 2025",
      "snippet": "Lightspeed is leading a funding round worth hundreds of millions for Amnon Shashua's startup AAI, which until now focused on futuristic AI..."
    }
  ],
  "kyutai": [
    {
      "id": "kyutai-1",
      "title": "CMA CGM co-founds Kyutai, a European artificial intelligence research lab",
      "link": "https://www.cmacgm-group.com/en/news-media/launch-kyutai-europes-first-independent-research-lab-dedicated-ai-open-science",
      "source": "cmacgm-group.com",
      "date": "Nov 17, 2023",
      "snippet": "CMA CGM invests €100 million in Kyutai, an open-science AI research lab co-founded with iliad and Schmidt Futures."
    },
    {
      "id": "kyutai-2",
      "title": "Kyutai is a French AI research lab with a $330 million budget that will make everything open source",
      "link": "https://techcrunch.com/2023/11/17/kyutai-is-an-french-ai-research-lab-with-a-330-million-budget-that-will-make-everything-open-source/",
      "source": "TechCrunch",
      "date": "Nov 17, 2023",
      "snippet": "This new lab called Kyutai will be a privately-funded nonprofit working on artificial general intelligence."
    },
    {
      "id": "kyutai-3",
      "title": "Kyutai releases Moshi, an open-source conversational AI assistant",
      "link": "https://the-decoder.com/kyutai-releases-moshi-an-open-source-conversational-ai-assistant/",
      "source": "the-decoder.com",
      "date": "Sep 19, 2024",
      "snippet": "French AI lab Kyutai releases two versions of its AI assistant Moshi, capable of natural conversations with users."
    },
    {
      "id": "kyutai-4",
      "title": "Kyutai unveils Invincible Voice: artificial intelligence in the service of human connection",
      "link": "https://www.iliad.fr/en/actualites/article/kyutai-unveils-invincible-voice-artificial-intelligence-in-the-service-of-human-connection",
      "source": "Groupe iliad",
      "date": "Jan 21, 2026",
      "snippet": "The artificial intelligence research laboratory Kyutai, co-founded by the iliad Group, today unveils Invincible Voice, a project that..."
    },
    {
      "id": "kyutai-5",
      "title": "Kyutai Open Sources Moshi: A Breakthrough Full-Duplex Real-Time Dialogue System that Revolutionizes Human-like Conversations with Unmatched Latency and Speech Quality",
      "link": "https://www.marktechpost.com/2024/09/18/kyutai-open-sources-moshi-a-breakthrough-full-duplex-real-time-dialogue-system-that-revolutionizes-human-like-conversations-with-unmatched-latency-and-speech-quality/",
      "source": "MarkTechPost",
      "date": "Sep 18, 2024",
      "snippet": "Kyutai Open Sources Moshi: A Breakthrough Full-Duplex Real-Time Dialogue System that Revolutionizes Human-like Conversations with Unmatched..."
    }
  ],
  "goodfire": [
    {
      "id": "goodfire-1",
      "title": "This startup’s new mechanistic interpretability tool lets you debug LLMs",
      "link": "https://www.technologyreview.com/2026/04/30/1136721/this-startups-new-mechanistic-interpretability-tool-lets-you-debug-llms/",
      "source": "MIT Technology Review",
      "date": "1 month ago",
      "snippet": "The San Francisco–based startup Goodfire just released a new tool, called Silico, that lets researchers and engineers peer inside an AI..."
    },
    {
      "id": "goodfire-2",
      "title": "A New AI Tool Could Transform How We Diagnose Genetic Diseases",
      "link": "https://time.com/article/2026/04/14/ai-disease-genetic-mayo-clinic-goodfire/",
      "source": "Time Magazine",
      "date": "1 month ago",
      "snippet": "Researchers at the Mayo Clinic and Goodfire, a San Francisco research startup, say they have used an AI model to predict which genetic..."
    },
    {
      "id": "goodfire-3",
      "title": "Goodfire raises $150M in funding to enhance its AI interpretability platform",
      "link": "https://siliconangle.com/2026/02/05/goodfire-raises-150m-funding-enhance-ai-interpretability-platform/",
      "source": "SiliconANGLE",
      "date": "Feb 5, 2026",
      "snippet": "Goodfire Inc., a startup working to uncover how artificial intelligence models make decisions, has raised $150 million in funding."
    },
    {
      "id": "goodfire-4",
      "title": "Goodfire Raises $150M at $1.25B Valuation",
      "link": "https://www.thesaasnews.com/news/goodfire-raises-150-million-at1-25-billion-valuation/",
      "source": "The SaaS News",
      "date": "Feb 9, 2026",
      "snippet": "Goodfire, a San Francisco, CA-based AI research lab focused on model interpretability, has raised $150 million in a Series B round at a..."
    },
    {
      "id": "goodfire-5",
      "title": "Startup Goodfire Notches $1.25 Billion Valuation to Decode AI Models",
      "link": "https://www.bloomberg.com/news/articles/2026-02-05/startup-goodfire-notches-1-25-billion-valuation-to-decode-ai-models",
      "source": "Bloomberg.com",
      "date": "Feb 5, 2026",
      "snippet": "A growing cadre of multibillion-dollar startups are racing to create the best artificial intelligence models, able to absorb tasks from..."
    }
  ],
  "imbue": [
    {
      "id": "imbue-1",
      "title": "Urban Fantasy Novels That Imbue the Real World With Magic",
      "link": "https://www.nytimes.com/2026/02/19/books/urban-fantasy-books.html",
      "source": "The New York Times",
      "date": "Feb 19, 2026",
      "snippet": "The best-selling author Marie Lu recommends thrilling reads that ground enchanting adventures in recognizable settings."
    },
    {
      "id": "imbue-2",
      "title": "Crimson Desert - How To Unlock and Imbue Elements",
      "link": "https://www.ign.com/videos/crimson-desert-how-to-unlock-and-imbue-elements",
      "source": "IGN",
      "date": "Apr 8, 2026",
      "snippet": "Some of the flashiest abilities in Crimson Desert are undoubtedly your elemental powers– Lightning, Frost, Flame, and Wind. To unlock these..."
    },
    {
      "id": "imbue-3",
      "title": "Birmingham artist Imbue makes Mona Lisa from 100 iPhone replicas",
      "link": "https://www.bbc.com/news/articles/czey8p18n3ro",
      "source": "BBC",
      "date": "Jul 7, 2025",
      "snippet": "Imbue spends months creating the portrait which features in his latest exhibition."
    },
    {
      "id": "imbue-4",
      "title": "Imbue digitally heists The Louvre for his largest show to date.",
      "link": "https://fadmagazine.com/2025/06/30/imbue-digitally-heists-the-louvre-for-his-largest-show-to-date/",
      "source": "FAD Magazine",
      "date": "Jun 30, 2025",
      "snippet": "Experience the fusion of technology and art in Imbue's exhibition featuring works 'stolen' from The Louvre."
    },
    {
      "id": "imbue-5",
      "title": "Latham Advises Astera Institute on Investment in Imbue",
      "link": "https://www.lw.com/en/news/latham-advises-astera-institute-on-investment-in-imbue",
      "source": "Latham & Watkins LLP",
      "date": "Sep 8, 2023",
      "snippet": "Imbue, an independent research lab that trains foundational models to develop AI agents, announced it has raised US$200 million in a Series..."
    }
  ],
  "reka": [
    {
      "id": "reka-1",
      "title": "Reka AI Revenue 2025: $10.9M ARR, $1B Valuation",
      "link": "https://getlatka.com/companies/reka.ai",
      "source": "GetLatka",
      "date": "Nov 28, 2025",
      "snippet": "Reka AI 2025 revenue: $10.9M ARR. Valuation: $1B. Total funding: $170M across 2 rounds. 60 employees Updated Nov 28, 2025."
    },
    {
      "id": "reka-2",
      "title": "Oracle Cloud Infrastructure and Reka: A 4-Step Approach to AI-Driven Surveillance Solutions for Defense and Public Safety Missions",
      "link": "https://blogs.oracle.com/cloud-infrastructure/oci-reka-vision-ai-surveillance-for-defense",
      "source": "Oracle Blogs",
      "date": "Mar 26, 2026",
      "snippet": "Reka Vision on Oracle Cloud Infrastructure transforms video data into actionable insights in four steps, delivering AI-driven surveillance..."
    },
    {
      "id": "reka-3",
      "title": "Nvidia, Snowflake invest in Reka AI's $110M funding round - report",
      "link": "https://www.msn.com/en-us/news/other/nvidia-snowflake-invest-in-reka-ais-110m-funding-round-report/ar-AA1J3MnQ?apiversion=v2&domshim=1&noservercache=1&noservertelemetry=1&batchservertelemetry=1&renderwebcomponents=1&wcseo=1&bundles=feat-es2020-t",
      "source": "MSN",
      "date": "1 month ago",
      "snippet": "Sunnyvale, California-based startup Reka AI raised $110M in funding from investors including Nvidia (NASDAQ:NVDA) and Snowflake (NYSE:SNOW),..."
    },
    {
      "id": "reka-4",
      "title": "Multimodal AI startup Reka AI raises $110M at $1B valuation",
      "link": "https://siliconangle.com/2025/07/22/multimodal-ai-startup-reka-ai-raises-110m-1b-valuation/",
      "source": "SiliconANGLE",
      "date": "Jul 22, 2025",
      "snippet": "Multimodal large language model research startup Reka AI Inc. today announced it has raised $110 million in fresh funding backed by Nvidia..."
    },
    {
      "id": "reka-5",
      "title": "Why Musk is Giving xAI’s Servers to Anthropic; AI Video-App Developer Reka Acquires Video-Generating Startup",
      "link": "https://www.theinformation.com/newsletters/ai-agenda/musk-giving-xais-servers-anthropic-ai-video-app-developer-reka-acquires-video-generating-startup",
      "source": "The Information",
      "date": "1 month ago",
      "snippet": "OpenAI and Anthropic's servers are generally bursting at the seams, while xAI's mountain of servers aren't as busy, as we and others..."
    }
  ],
  "essential-ai": [
    {
      "id": "essential-ai-1",
      "title": "The essential AI skills required to stay competitive in global development",
      "link": "https://www.devex.com/news/the-essential-ai-skills-required-to-stay-competitive-in-global-development-112638",
      "source": "Devex",
      "date": "1 day ago",
      "snippet": "Experts explore how AI adoption is transforming roles across global development and what this means for the skills and capabilities expected..."
    },
    {
      "id": "essential-ai-2",
      "title": "Will AI Replace Truck Drivers, or Will They Become Essential AI Partners?",
      "link": "https://washingtoncitypaper.com/article/786896/will-ai-replace-truck-drivers-or-will-they-become-essential-ai-partners/",
      "source": "Washington City Paper",
      "date": "1 day ago",
      "snippet": "HMD Trucking , a Chicago-based company, sees the question almost every week now: will AI replace truck drivers, or will it make their work..."
    },
    {
      "id": "essential-ai-3",
      "title": "Essential AI Partners with Google Cloud to Revolutionize Enterprise Decision Making with Generative AI",
      "link": "https://aimmediahouse.com/stories/generative-ai/essential-ai-partners-with-google-cloud-to-revolutionize-enterprise-decision-making-with-generative-ai",
      "source": "AIM Media House",
      "date": "3 days ago",
      "snippet": "In a groundbreaking announcement, Essential AI and Google Cloud have unveiled a strategic multi-year partnership aimed at simplifying and scaling the..."
    },
    {
      "id": "essential-ai-4",
      "title": "The executive driving AT&T’s $250B high-stakes bid to connect the AI economy",
      "link": "https://fortune.com/article/att-250-billion-bid-essential-ai-infrastructure/",
      "source": "Fortune",
      "date": "Mar 13, 2026",
      "snippet": "AT&T is staking $250 billion o transform from a legacy telecom utility into the essential physical highway for the AI era."
    },
    {
      "id": "essential-ai-5",
      "title": "Essential AI Security Best Practices",
      "link": "https://www.wiz.io/academy/ai-security/ai-security-best-practices",
      "source": "wiz.io",
      "date": "Mar 25, 2026",
      "snippet": "To manage risks associated with AI, organizations need a strategic and well-coordinated security approach that extends traditional..."
    }
  ],
  "zyphra": [
    {
      "id": "zyphra-1",
      "title": "Zyphra and AMD Partner to Power Zyphra Cloud on AMD Instinct™ MI355X GPUs",
      "link": "https://www.prnewswire.com/news-releases/zyphra-and-amd-partner-to-power-zyphra-cloud-on-amd-instinct-mi355x-gpus-302761765.html",
      "source": "PR Newswire",
      "date": "1 month ago",
      "snippet": "Zyphra announced Zyphra Cloud, a full-stack AI platform on AMD powered by Tensorwave. The platform launches with Zyphra Inference,..."
    },
    {
      "id": "zyphra-2",
      "title": "Zyphra adds 15 MW of AMD MI355X capacity to cloud",
      "link": "https://www.engineering.com/zyphra-adds-15-mw-of-amd-mi355x-capacity-to-cloud/",
      "source": "Engineering.com",
      "date": "3 weeks ago",
      "snippet": "Zyphra announced the availability of 15 megawatts of AMD Instinct MI355X GPU capacity through Zyphra Cloud, expanding the platform with..."
    },
    {
      "id": "zyphra-3",
      "title": "New AI cloud opens DeepSeek access on AMD MI355X GPUs",
      "link": "https://www.stocktitan.net/news/AMD/zyphra-and-amd-partner-to-power-zyphra-cloud-on-amd-instinct-tm-szmg39yx13dh.html",
      "source": "Stock Titan",
      "date": "1 month ago",
      "snippet": "Zyphra launched Zyphra Cloud on May 4, 2026, a full-stack AI platform running on AMD Instinct MI355X GPUs via TensorWave infrastructure."
    },
    {
      "id": "zyphra-4",
      "title": "Zyphra Revenue 2024: $8.8M ARR, $1B Valuation",
      "link": "https://getlatka.com/companies/zyphra.com",
      "source": "GetLatka",
      "date": "Nov 24, 2025",
      "snippet": "Zyphra is an open source/open science superintelligence company focused on developing and testing AI models using probabilistic computing..."
    },
    {
      "id": "zyphra-5",
      "title": "IBM and AMD Collaborate with Zyphra on Next Generation AI Infrastructure",
      "link": "https://newsroom.ibm.com/2025-10-01-ibm-and-amd-collaborate-with-zyphra-on-next-generation-ai-infrastructure",
      "source": "IBM Newsroom",
      "date": "Oct 1, 2025",
      "snippet": "IBM and AMD announced a collaboration to deliver advanced AI infrastructure to Zyphra, an open-source AI research and product company based..."
    }
  ],
  "nous-research": [
    {
      "id": "nous-research-1",
      "title": "Hermes Agent Ships Tool Search for MCP: Anthropic Evals Show 49% to 74% Accuracy Gain on Opus 4",
      "link": "https://www.marktechpost.com/2026/05/29/hermes-agent-ships-tool-search-for-mcp-anthropic-evals-show-49-to-74-accuracy-gain-on-opus-4/",
      "source": "MarkTechPost",
      "date": "1 week ago",
      "snippet": "When you connect multiple MCP (Model Context Protocol) servers to an AI agent, every tool's JSON schema gets sent to the model on every turn..."
    },
    {
      "id": "nous-research-2",
      "title": "Nous Research Releases 'Hermes Agent' to Fix AI Forgetfulness with Multi-Level Memory and Dedicated Remote Terminal Access Support",
      "link": "https://www.marktechpost.com/2026/02/26/nous-research-releases-hermes-agent-to-fix-ai-forgetfulness-with-multi-level-memory-and-dedicated-remote-terminal-access-support/",
      "source": "MarkTechPost",
      "date": "Feb 26, 2026",
      "snippet": "Nous Research Releases 'Hermes Agent' to Fix AI Forgetfulness with Multi-Level Memory and Dedicated Remote Terminal Access Support."
    },
    {
      "id": "nous-research-3",
      "title": "Hermes Agent v0.12: Why Developers Are Ditching OpenClaw for Nous Research’s Self-Improving Agent",
      "link": "https://quasa.io/media/hermes-agent-v0-12-why-developers-are-ditching-openclaw-for-nous-research-s-self-improving-agent",
      "source": "Quasa.io",
      "date": "3 weeks ago",
      "snippet": "More and more developers are choosing Hermes Agent from Nous Research over alternatives like OpenClaw."
    },
    {
      "id": "nous-research-4",
      "title": "Lobsters Take a Backseat: Silicon Valley's Top AI \"Hermès\" Hits Global #1 on WeChat Overnight",
      "link": "https://eu.36kr.com/en/p/3764690311266819",
      "source": "36 Kr",
      "date": "1 month ago",
      "snippet": "The new Silicon Valley favorite, Hermes Agent, has suddenly become extremely popular overnight. It has not only amassed 66,000 stars on..."
    },
    {
      "id": "nous-research-5",
      "title": "Nous Research Funding Rounds, Token Sale Review & Tokenomics Analysis",
      "link": "https://cryptorank.io/ico/nous-research",
      "source": "CryptoRank",
      "date": "Apr 25, 2025",
      "snippet": "Discover fundraising information: Funding Rounds, return on investment (ROI), prices of investors, and funds raised by Nous Research ."
    }
  ],
  "aaru": [
    {
      "id": "aaru-1",
      "title": "The Billion-Dollar AI Startup That Was Founded by Teenagers",
      "link": "https://www.wsj.com/business/ai-startup-aaru-young-founders-35da7f87",
      "source": "WSJ",
      "date": "Mar 11, 2026",
      "snippet": "AI startup Aaru, founded by teenagers, reached a $1 billion valuation by using AI agents to simulate human responses for market research and..."
    },
    {
      "id": "aaru-2",
      "title": "Sources: AI synthetic research startup Aaru raised a Series A at a $1B ‘headline’ valuation",
      "link": "https://techcrunch.com/2025/12/05/ai-synthetic-research-startup-aaru-raised-a-series-a-at-a-1b-headline-valuation/",
      "source": "TechCrunch",
      "date": "Dec 5, 2025",
      "snippet": "Aaru, a startup that provides near-instant customer research by using AI to simulate user behavior, has raised a Series A led by Redpoint..."
    },
    {
      "id": "aaru-3",
      "title": "Teens, AI, and Billions: The Startup That Replaces Focus Groups",
      "link": "https://lavocedinewyork.com/en/news/2026/03/11/teens-ai-and-billions-the-startup-that-replaces-focus-groups/",
      "source": "La Voce di New York",
      "date": "Mar 11, 2026",
      "snippet": "An American startup founded by teenagers in March 2024 is transforming market research. Aaru has reached a valuation of $1 billion,..."
    },
    {
      "id": "aaru-4",
      "title": "Wealth and asset management AI simulation with Aaru",
      "link": "https://www.ey.com/en_us/insights/wealth-asset-management/how-ai-simulation-accelerates-growth-in-wealth-and-asset-management",
      "source": "EY",
      "date": "Oct 7, 2025",
      "snippet": "Harness the power of AI simulation to anticipate client behavior and make faster, smarter decisions. Learn more."
    },
    {
      "id": "aaru-5",
      "title": "Cracking the human simulation code: Aaru co-founders on refining the science of prediction",
      "link": "https://www.cnbc.com/video/2026/03/20/cracking-the-human-simulation-code-aaru-co-founders-on-refining-the-science-of-prediction.html",
      "source": "CNBC",
      "date": "Mar 20, 2026",
      "snippet": "Cameron Fink, Aaru co-founder and CEO, Ned Koh, Aaru co-founder and president, and John Kessler, Aaru co-founder and CTO, join 'Squawk Box'..."
    }
  ],
  "simile": [
    {
      "id": "simile-1",
      "title": "$100M for Stanford spinout Simile: AI that simulates human decisions",
      "link": "https://techfundingnews.com/100m-for-stanford-spinout-simile-ai-that-simulates-human-decisions/",
      "source": "Tech Funding News",
      "date": "Feb 13, 2026",
      "snippet": "Artificial intelligence startup Simile has secured $100 million in fresh funding. The round, led by Index Ventures, included participation..."
    },
    {
      "id": "simile-2",
      "title": "AI Startup Nabs $100 Million to Help Firms Predict Human Behavior",
      "link": "https://www.bloomberg.com/news/articles/2026-02-12/ai-startup-nabs-100-million-to-help-firms-predict-human-behavior",
      "source": "Bloomberg.com",
      "date": "Feb 12, 2026",
      "snippet": "Artificial intelligence startup Simile has raised $100 million in new funding to build a model designed to predict human behavior,..."
    },
    {
      "id": "simile-3",
      "title": "AI digital twin startup Simile raises $100M in funding",
      "link": "https://siliconangle.com/2026/02/12/ai-digital-twin-startup-simile-raises-100m-funding/",
      "source": "SiliconANGLE",
      "date": "Feb 12, 2026",
      "snippet": "Simile Inc., a startup that's using artificial intelligence to generate digital twins of individuals, has raised $100 million in funding."
    },
    {
      "id": "simile-4",
      "title": "Startups Target the Tricky Task of Making AI Seem More Human",
      "link": "https://www.newcomer.co/p/startups-target-the-tricky-task-of",
      "source": "Newcomer | Substack",
      "date": "Feb 25, 2026",
      "snippet": "In early February, the startup Simile, which aims to build AI models that simulate the emotional reactions of humans, was at the center of..."
    },
    {
      "id": "simile-5",
      "title": "Fei-Fei Li and Andrej Karpathy Back a New A.I. Use Case: Simulating Human Behavior",
      "link": "https://observer.com/2026/02/simile-100m-startup-backed-fei-fei-li-andrej-karpathy/",
      "source": "Observer",
      "date": "Feb 13, 2026",
      "snippet": "Backed by Fei-Fei Li and Andrej Karpathy, Simile raises $100 million to use A.I. simulations that predict analyst questions and business..."
    }
  ],
  "isara": [
    {
      "id": "isara-1",
      "title": "Exclusive | OpenAI Backs New AI Startup Seeking Bot Army Breakthroughs",
      "link": "https://www.wsj.com/tech/ai/openai-backs-new-ai-startup-seeking-bot-army-breakthroughs-a0b1fedc",
      "source": "WSJ",
      "date": "Mar 25, 2026",
      "snippet": "Isara, founded by a pair of 23-year-old researchers, aims to build software that can coordinate the work of thousands of 'agents'."
    },
    {
      "id": "isara-2",
      "title": "OpenAI backs Isara’s $94M round at $650M valuation to build ‘AI agent swarms’",
      "link": "https://techfundingnews.com/openai-backs-isara-ai-agents-94-million-funding/",
      "source": "Tech Funding News",
      "date": "Mar 27, 2026",
      "snippet": "OpenAI is backing a new startup called Isara, which is building software that allows thousands of AI agents to communicate and solve complex..."
    },
    {
      "id": "isara-3",
      "title": "OpenAI Joins Funding for Isara's $94M Raise to Develop AI Agent Swarms",
      "link": "https://mlq.ai/news/openai-joins-funding-for-isaras-94m-raise-to-develop-ai-agent-swarms/",
      "source": "MLQ.ai",
      "date": "Mar 27, 2026",
      "snippet": "Isara, a San Francisco-based AI startup founded in June 2025 by Eddie Zhang and Henry Gasztowtt, secured $94 million in funding at a $650..."
    },
    {
      "id": "isara-4",
      "title": "OpenAI Backs New AI Startup Isara At $650 Million Valuation - WSJ",
      "link": "https://www.tradingview.com/news/reuters.com,2026:newsml_FWN40D14T:0-openai-backs-new-ai-startup-isara-at-650-million-valuation-wsj/",
      "source": "TradingView",
      "date": "Mar 25, 2026",
      "snippet": "OpenAI Backs New AI Startup Isara At $650 Million Valuation - WSJ. Mar 25, 2026, 17:25 GMT-7 RefinitivLess than 1 min read."
    },
    {
      "id": "isara-5",
      "title": "OpenAI backs new AI startup seeking bot army breakthroughs",
      "link": "https://www.msn.com/en-us/money/other/openai-backs-new-ai-startup-seeking-bot-army-breakthroughs/ar-AA1ZpuBh",
      "source": "MSN",
      "date": "Mar 26, 2026",
      "snippet": "OpenAI is backing a new AI startup that aims to build software allowing so-called AI “agents” to communicate and solve complex problems in industries such..."
    }
  ],
  "moonvalley": [
    {
      "id": "moonvalley-1",
      "title": "AI Firm Moonvalley Releases “Commercially Safe” Marey Video System To General Public",
      "link": "https://deadline.com/2025/07/ai-firm-moonvalley-releases-marey-video-system-to-general-public-1236451169/",
      "source": "Deadline",
      "date": "Jul 8, 2025",
      "snippet": "AI firm Moonvalley has released its Marey video model to the general public after an initial test run with filmmakers, agencies and other..."
    },
    {
      "id": "moonvalley-2",
      "title": "Moonvalley Releases First Fully-Licensed AI Video Model for Professional Production",
      "link": "https://www.businesswire.com/news/home/20250708099256/en/Moonvalley-Releases-First-Fully-Licensed-AI-Video-Model-for-Professional-Production",
      "source": "Business Wire",
      "date": "Jul 8, 2025",
      "snippet": "Today, leading AI research company Moonvalley announced general availability of Marey, its foundational AI video model that provides..."
    },
    {
      "id": "moonvalley-3",
      "title": "Moonvalley secures $84m funding",
      "link": "https://finance.yahoo.com/news/moonvalley-secures-84m-funding-142301193.html",
      "source": "Yahoo Finance",
      "date": "Jul 15, 2025",
      "snippet": "Moonvalley, an AI research company specialising in foundational AI video models and tools, has raised $84m in a funding round led by General..."
    },
    {
      "id": "moonvalley-4",
      "title": "Can Ethical AI Work in Hollywood? This Startup Thinks So",
      "link": "https://time.com/7300636/ai-hollywood-moonvalley-marey/",
      "source": "Time Magazine",
      "date": "Jul 8, 2025",
      "snippet": "Moonvalley, which works with Hollywood power players like Natasha Lyonne, is releasing an AI video model for filmmakers."
    },
    {
      "id": "moonvalley-5",
      "title": "Inside Moonvalley's $84 Million Ambition for “Production Grade” AI Video",
      "link": "https://lbbonline.com/news/moonvalley-raises-84m-ai-video-platform",
      "source": "Little Black Book | LBBOnline",
      "date": "Jul 15, 2025",
      "snippet": "Little Black Book, With backing from CAA, CoreWeave, Comcast Ventures and more Moonvalley plans to scale a fully licensed AI video platform..."
    }
  ],
  "hark": [],
  "prime-intellect": [
    {
      "id": "prime-intellect-1",
      "title": "Prime Intellect Secures $5.5M in Seed Funding Co-Led By Distributed Global and CoinFund to Advance Its Decentralized and Collaborative AI Ecosystem",
      "link": "https://www.prnewswire.com/news-releases/prime-intellect-secures-5-5m-in-seed-funding-co-led-by-distributed-global-and-coinfund-to-advance-its-decentralized-and-collaborative-ai-ecosystem-302124585.html",
      "source": "PR Newswire",
      "date": "Apr 23, 2024",
      "snippet": "PRNewswire/ -- Prime Intellect, an open and decentralized AI platform and protocol democratizing access to computing and intelligence,..."
    },
    {
      "id": "prime-intellect-2",
      "title": "What is Prime Intellect? Overview of the Prime Intellect project",
      "link": "https://www.binance.com/en/square/post/24671270631137",
      "source": "Binance",
      "date": "May 24, 2025",
      "snippet": "In the era of AI explosion, when the demand for computing for training and inference of AI models is growing exponentially, Prime Intellect..."
    },
    {
      "id": "prime-intellect-3",
      "title": "Prime Intellect Secures $15M to Build a Peer-to-Peer AI Future",
      "link": "https://www.binance.com/en/square/post/21045945484697",
      "source": "Binance",
      "date": "Mar 3, 2025",
      "snippet": "Prime Intellect has successfully raised $15 million in funding, with backing from major players like Founders Fund, Menlo Ventures, and AI pioneers."
    }
  ],
  "ndea": [
    {
      "id": "ndea-1",
      "title": "From homeless to board member, NDea Young has traveled an unlikely path",
      "link": "https://www.postbulletin.com/news/local/from-homeless-to-board-member-ndea-young-has-traveled-an-unlikely-path",
      "source": "Post Bulletin",
      "date": "Sep 2, 2025",
      "snippet": "ROCHESTER — For much of her young life growing up, NDea Young didn't have a home. Her childhood was one marked by upheaval, instability and..."
    },
    {
      "id": "ndea-2",
      "title": "The Sequence Radar #472: Remember this Name: Ndea",
      "link": "https://thesequence.substack.com/p/the-sequence-radar-472-remember-this",
      "source": "TheSequence",
      "date": "Jan 19, 2025",
      "snippet": "A new AI lab with legendary founders and unique ideas."
    },
    {
      "id": "ndea-3",
      "title": "Forget Nvidia: Ndea wants to build AI that keeps improving on its own with 'no bottlenecks in sight'",
      "link": "https://venturebeat.com/ai/forget-nvidia-ndea-wants-to-build-ai-that-keeps-improving-on-its-own-with-no-bottlenecks-in-sight",
      "source": "VentureBeat",
      "date": "Jan 15, 2025",
      "snippet": "François Chollet, a former Google engineer and the creator of the widely-used Python deep learning framework Keras, has co-founded Ndea,..."
    },
    {
      "id": "ndea-4",
      "title": "Science Leaders Prepare Pitch for National Defense Education Act 2.0",
      "link": "https://www.aip.org/fyi/science-leaders-prepare-pitch-for-national-defense-education-act-2-0",
      "source": "AIP.ORG",
      "date": "Oct 18, 2024",
      "snippet": "The new NDEA would focus on STEM education and training in areas that are critical for US economic competitiveness and national security, such as AI."
    },
    {
      "id": "ndea-5",
      "title": "Integrating the NDEA into the Police Department",
      "link": "https://statehouse.gov.sc/news/3648/integrating-the-ndea-into-the-police-department",
      "source": "State House Seychelles",
      "date": "Dec 3, 2025",
      "snippet": "President Danny Faure has announced that he intends to integrate the National Drug Enforcement Agency with the Department of Police in order to avoid..."
    }
  ],
  "inception-labs": [
    {
      "id": "inception-labs-1",
      "title": "The ‘Fastest Commercial-Grade’ Diffusion LLM is Available Now",
      "link": "https://analyticsindiamag.com/ai-news-updates/the-fastest-commercial-grade-diffusion-llm-is-available-now/",
      "source": "Analytics India Magazine",
      "date": "Jun 27, 2025",
      "snippet": "Snippet: Mercury matches the performance of GPT-4.1 Nano and Claude 3.5 Haiku, running over seven times faster. Inception Labs, an AI..."
    },
    {
      "id": "inception-labs-2",
      "title": "Inception raises $50 million to build diffusion models for code and text",
      "link": "https://techcrunch.com/2025/11/06/inception-raises-50-million-to-build-diffusion-models-for-code-and-text/",
      "source": "TechCrunch",
      "date": "Nov 6, 2025",
      "snippet": "Diffusion models already power AI image generators, but Inception thinks they can be even more powerful applied in software development."
    },
    {
      "id": "inception-labs-3",
      "title": "Introducing 'Mercury,' a diffuse large-scale language model (dLLM) capable of Japanese language support and ultra-fast code generation",
      "link": "https://gigazine.net/gsc_news/en/20250708-diffusion-llm-mercury/",
      "source": "GIGAZINE",
      "date": "Jul 8, 2025",
      "snippet": "Inception Labs , an AI startup developing a new generation of large-scale language models (LLMs) founded by professors from Stanford..."
    }
  ],
  "adaption-labs": [
    {
      "id": "adaption-labs-1",
      "title": "Former Cohere execs Sara Hooker and Sudip Roy secure $50 million seed round for their new startup Adaption Labs",
      "link": "https://fortune.com/2026/02/04/adaption-labs-50-million-seed-funding-emergence-captial-sara-hooker-sudip-roy-ai-models-that-learn-on-the-fly/",
      "source": "Fortune",
      "date": "Feb 4, 2026",
      "snippet": "Sara Hooker, an AI researcher and advocate for cheaper AI systems that use less computing power, is hanging her own shingle."
    },
    {
      "id": "adaption-labs-2",
      "title": "Why Cohere’s ex-AI research lead is betting against the scaling race",
      "link": "https://techcrunch.com/2025/10/22/why-coheres-ex-ai-research-lead-is-betting-against-the-scaling-race/",
      "source": "TechCrunch",
      "date": "Oct 22, 2025",
      "snippet": "Cohere's former VP of AI research, Sara Hooker, is launching a new startup to build AI models that can adapt to their environment."
    },
    {
      "id": "adaption-labs-3",
      "title": "Adaption Labs: $50 Million Seed Funding At $1 Billion Valuation Secured To Build AI Systems That Evolve",
      "link": "https://pulse2.com/adaption-labs-50-million-seed-funding/",
      "source": "Pulse 2.0",
      "date": "Feb 8, 2026",
      "snippet": "Adaption Labs, a San Francisco-based startup developing AI systems designed to evolve in real time, has raised $50 million in seed funding..."
    },
    {
      "id": "adaption-labs-4",
      "title": "Why Cohere’s ex-AI research lead is betting against the scaling race",
      "link": "https://finance.yahoo.com/news/why-cohere-ex-ai-research-205217561.html",
      "source": "Yahoo Finance",
      "date": "Oct 22, 2025",
      "snippet": "Cohere's former VP of AI research, Sara Hooker, is launching a new startup to build AI models that can adapt to their environment."
    },
    {
      "id": "adaption-labs-5",
      "title": "Ex-Cohere execs Sara Hooker and Sudip Roy unveil new AI startup",
      "link": "https://betakit.com/ex-cohere-execs-sara-hooker-and-sudip-roy-unveil-new-ai-startup/",
      "source": "BetaKit",
      "date": "Oct 9, 2025",
      "snippet": "Adaption Labs will focus on novel approaches to efficient AI."
    }
  ],
  "elorian": [
    {
      "id": "elorian-1",
      "title": "Elorian AI: $55 Million Raised For Multimodal Reasoning Research Lab Founded By Former DeepMind Leaders",
      "link": "https://pulse2.com/elorian-ai-55-million-raised-for-multimodal-reasoning-research-lab-founded-by-former-deepmind-leaders/",
      "source": "Pulse 2.0",
      "date": "1 month ago",
      "snippet": "Elorian AI, a newly launched multimodal reasoning research and product lab, has raised $55 million to advance the next frontier of..."
    },
    {
      "id": "elorian-2",
      "title": "Watch Former Google Deepmind Researcher on New AI Startup",
      "link": "https://www.bloomberg.com/news/videos/2026-05-21/former-google-deepmind-researcher-on-new-ai-startup-video",
      "source": "Bloomberg.com",
      "date": "2 weeks ago",
      "snippet": "Andrew Dai, co-Founder & CEO of visual reasoning AI firm Elorian, discusses the progress of his new startup, including hiring and funding..."
    },
    {
      "id": "elorian-3",
      "title": "Wilson Sonsini Advises Elorian on $55 Million Seed Financing as Company Emerges from Stealth",
      "link": "https://www.wsgr.com/en/insights/wilson-sonsini-advises-elorian-on-dollar55-million-seed-financing-as-company-emerges-from-stealth.html",
      "source": "Wilson Sonsini",
      "date": "1 month ago",
      "snippet": "On April 9, 2026, Palo Alto-based Elorian AI, a start-up building models for visual reasoning, emerged from stealth and announced a $55..."
    },
    {
      "id": "elorian-4",
      "title": "Elorian Raises $55M to Scale Visual Reasoning AI",
      "link": "https://ventureburn.com/elorian-raises-55m-visual-reasoning-ai/",
      "source": "Ventureburn",
      "date": "Apr 10, 2026",
      "snippet": "Visual reasoning ai startup, Elorian raises $55M to scale AI systems for robotics, manufacturing, and industrial applications worldwide."
    },
    {
      "id": "elorian-5",
      "title": "Elorian Raises $55M in Seed Funding at $300M Valuation",
      "link": "https://www.finsmes.com/2026/04/elorian-raises-55m-in-seed-funding-at-300m-valuation.html",
      "source": "FinSMEs",
      "date": "Apr 10, 2026",
      "snippet": "Elorian, a Palo Alto, CA-based AI research and product lab focused on advancing visual reasoning for AI, raised $55M in a seed funding round..."
    }
  ],
  "genesis-ai": [
    {
      "id": "genesis-ai-1",
      "title": "Genesis AI names Indian American Pally Kumar as operations chief",
      "link": "https://americanbazaaronline.com/2026/06/01/genesis-ai-names-indian-american-pally-kumar-as-operations-chief-481862/",
      "source": "The American Bazaar",
      "date": "5 days ago",
      "snippet": "Moving to accelerate the introduction of its first general purpose robot, global full-stack robotics company Genesis AI has appointed Indian..."
    },
    {
      "id": "genesis-ai-2",
      "title": "Genesis AI launches simulation platform to accelerate robotics development",
      "link": "https://roboticsandautomationnews.com/2026/06/04/genesis-ai-launches-simulation-platform-to-accelerate-robotics-development/102243/",
      "source": "Robotics & Automation News",
      "date": "2 days ago",
      "snippet": "Genesis AI has launched Genesis World 1.0, a robotics simulation platform that enables photorealistic testing, digital twin creation,..."
    },
    {
      "id": "genesis-ai-3",
      "title": "Industry Insights: Genesis AI is Using New Tools to Train Robots on Real World Data",
      "link": "https://www.automate.org/ai/industry-insights/genesis-ais-novel-approach-to-robot-training",
      "source": "A3 Association for Advancing Automation",
      "date": "2 weeks ago",
      "snippet": "The startup's VP of Commercial Strategy discusses physical AI's future. | Industry Insights | Genesis AI's Novel Approach to Robot Training."
    },
    {
      "id": "genesis-ai-4",
      "title": "U.S. labs get direct path to AI chips in GlobalFoundries-DOE pact",
      "link": "https://www.stocktitan.net/news/GFS/global-foundries-joins-u-s-department-of-energy-s-genesis-mission-as-2yx0kubjnhlp.html",
      "source": "Stock Titan",
      "date": "3 days ago",
      "snippet": "Deal opens GlobalFoundries U.S. design platform to DOE Genesis researchers, linking labs, universities and industry from AI chip concepts to..."
    },
    {
      "id": "genesis-ai-5",
      "title": "Quantum Genesis AI Announces Removal of OTC Markets Caveat Emptor Designation",
      "link": "https://www.tradingview.com/news/eqs:f7b58468c094b:0-quantum-genesis-ai-announces-removal-of-otc-markets-caveat-emptor-designation/",
      "source": "TradingView",
      "date": "4 days ago",
      "snippet": "Quantum Genesis AI Corp/ Key word(s): ManufacturingQuantum Genesis AI Announces Removal of OTC Markets Caveat Emptor Designation01.06.2026..."
    }
  ],
  "cuspai": [
    {
      "id": "cuspai-1",
      "title": "CuspAI raising $200m at unicorn valuation, reports say",
      "link": "https://sifted.eu/articles/cuspai-funding-round-unicorn-valuation",
      "source": "Sifted",
      "date": "1 month ago",
      "snippet": "AI materials startup CuspAI counts 'AI godfathers' Yann LeCun and Geoffrey Hinton among its advisers."
    },
    {
      "id": "cuspai-2",
      "title": "Hyundai Motor Group and CuspAI Partner to Accelerate Material Innovation Using AI",
      "link": "https://www.hyundai.com/worldwide/en/newsroom/detail/hyundai-motor-group-and-cuspai-partner-to-accelerate-material-innovation-using-ai-0000001052",
      "source": "Hyundai",
      "date": "Nov 6, 2025",
      "snippet": "Hyundai Motor Group announced a strategic partnership with CuspAI to accelerate the development of innovative materials through AI..."
    },
    {
      "id": "cuspai-3",
      "title": "CuspAI, startup building AI models for chemistry, raises $100 million Series A at $520 million valuation",
      "link": "https://fortune.com/2025/09/10/cuspai-raises-100-million-in-new-venture-capital-funding-ai-for-chemistry/",
      "source": "Fortune",
      "date": "Sep 10, 2025",
      "snippet": "NEA and Temasek are leading the investment into CuspAI, with Nvidia's NVentures, Samsung, and Hyundai also participating."
    },
    {
      "id": "cuspai-4",
      "title": "Watch Nvidia-Backed CuspAI Raises $100m in Series A Funding",
      "link": "https://www.bloomberg.com/news/videos/2025-09-11/nvidia-baked-cusp-ai-raises-100m-in-series-a-funding-video",
      "source": "Bloomberg.com",
      "date": "Sep 11, 2025",
      "snippet": "As European companies seek listings in the US, others are changing the way our industries work. Cusp AI is a platform that acts like a..."
    },
    {
      "id": "cuspai-5",
      "title": "CuspAI lands $100M to build the AI ‘search engine for molecules’",
      "link": "https://techfundingnews.com/cuspai-lands-100m-to-build-the-ai-search-engine-for-molecules/",
      "source": "Tech Funding News",
      "date": "Sep 11, 2025",
      "snippet": "UK-based deep-tech startup CuspAI pioneering AI-driven material discovery, has raised $100 million in its Series A round."
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
    },
    {
      "id": "poetiq-2",
      "title": "Poetiq Justice",
      "link": "https://puck.news/how-poetiqs-six-person-team-beat-google-at-ai/",
      "source": "Puck",
      "date": "Jan 29, 2026",
      "snippet": "A less-than-one-year-old A.I. startup just crushed the ARC A.G.I. benchmark, beating Anthropic and Google with only six people and $40000."
    },
    {
      "id": "poetiq-3",
      "title": "Poetiq's Meta-System Automatically Builds a Model-Agnostic Harness That Improved Every LLM Tested on LiveCodeBench Pro Without Fine-Tuning",
      "link": "https://www.marktechpost.com/2026/05/14/poetiqs-meta-system-automatically-builds-a-model-agnostic-harness-that-improved-every-llm-tested-on-livecodebench-pro-without-fine-tuning/",
      "source": "MarkTechPost",
      "date": "3 weeks ago",
      "snippet": "Poetiq has just published some very interesting results showing its Meta-System reached a new state-of-the-art on LiveCodeBench Pro (LCB..."
    },
    {
      "id": "poetiq-4",
      "title": "Poetiq nabs $45.8M in seed funding for its LLM-enhancing ‘meta-system’",
      "link": "https://siliconangle.com/2026/01/30/poetiq-nabs-45-8m-seed-funding-llm-enhancing-meta-system/",
      "source": "SiliconANGLE",
      "date": "Jan 30, 2026",
      "snippet": "Poetiq Inc., a startup working to make artificial intelligence large language models more capable and cost-efficient, has raised $45.8..."
    },
    {
      "id": "poetiq-5",
      "title": "Poetiq shows model orchestration can beat bigger coding models",
      "link": "https://startupfortune.com/poetiq-shows-model-orchestration-can-beat-bigger-coding-models/",
      "source": "Startup Fortune",
      "date": "3 weeks ago",
      "snippet": "Poetiq's latest benchmark claim is simple but important: the next AI advantage may come from the system around the model, not only the model..."
    }
  ],
  "axiom-math": [
    {
      "id": "axiom-math-1",
      "title": "Breaking the equation: Female founder secures $64M to teach AI the language of mathematics",
      "link": "https://techfundingnews.com/axiom-math-ai-mathematician-64m-seed/",
      "source": "Tech Funding News",
      "date": "Oct 3, 2025",
      "snippet": "San Francisco startup Axiom Math raises $64M seed to build an AI mathematician that solves and generates complex math problems with..."
    },
    {
      "id": "axiom-math-2",
      "title": "This startup wants to change how mathematicians do math",
      "link": "https://www.technologyreview.com/2026/03/25/1134642/this-startup-wants-to-change-how-mathematicians-do-math/",
      "source": "MIT Technology Review",
      "date": "Mar 25, 2026",
      "snippet": "Axiom Math is giving away a powerful new AI tool. But it remains to be seen if it speeds up research as much as the company hopes."
    },
    {
      "id": "axiom-math-3",
      "title": "How a 24-year-old Stanford Ph.D. dropout hired some of Meta's brightest minds to join her AI math startup",
      "link": "https://www.businessinsider.com/axiom-math-stanford-dropout-meta-ai-researchers-startup-2025-12",
      "source": "Business Insider",
      "date": "Dec 6, 2025",
      "snippet": "24-year-old Axiom Math founder Carina Hong wooed top Meta researchers in a competitive AI talent market."
    },
    {
      "id": "axiom-math-4",
      "title": "Former Meta Researchers Are Building An AI Math Whiz",
      "link": "https://www.forbes.com/sites/rashishrivastava/2025/09/30/meet-the-stanford-dropout-building-an-ai-to-solve-maths-hardest-problems-and-create-harder-ones/",
      "source": "Forbes",
      "date": "Sep 30, 2025",
      "snippet": "Axiom Math, which has recruited top talent from Meta, has raised $64 million in seed funding to build an AI math whiz. ByRashi Shrivastava,."
    },
    {
      "id": "axiom-math-5",
      "title": "A.I. Writes Buggy Code. A Silicon Valley Start-Up Wants to Fix It.",
      "link": "https://www.nytimes.com/2026/03/12/technology/axiom-ai-code-funding.html",
      "source": "The New York Times",
      "date": "Mar 12, 2026",
      "snippet": "Valued at $1.6 billion, a tiny start-up called Axiom is building A.I. systems that can check for mistakes. Axiom Math's founder and chief..."
    }
  ],
  "ineffable-intelligence": [
    {
      "id": "ineffable-intelligence-1",
      "title": "Ineffable Intelligence: $1.1B Seed, $5.1B Valuation [2026]",
      "link": "https://tech-insider.org/ineffable-intelligence-1-1-billion-seed-5-1-billion-valuation-david-silver-2026/",
      "source": "https://tech-insider.org/",
      "date": "1 week ago",
      "snippet": "On April 27, 2026, a London-based stealth AI lab called Ineffable Intelligence walked out of stealth with a record-shattering $1.1 billion..."
    },
    {
      "id": "ineffable-intelligence-2",
      "title": "Nvidia's Jensen Huang bets on this British startup to build 'next frontier' of AI",
      "link": "https://www.cnbc.com/2026/05/13/google-deepmind-alumni-startup-partners-nvidia-superintelligence.html",
      "source": "CNBC",
      "date": "3 weeks ago",
      "snippet": "Nvidia will partner with British startup Ineffable Intelligence to develop new AI systems, the companies announced in Wednesday."
    },
    {
      "id": "ineffable-intelligence-3",
      "title": "Partnering with Ineffable Intelligence: A Superlearner for the Era of Experience",
      "link": "https://sequoiacap.com/article/partnering-with-ineffable-intelligence-a-superlearner-for-the-era-of-experience/",
      "source": "Sequoia Capital",
      "date": "1 month ago",
      "snippet": "David Silver's new research lab is racing to build AI's next chapter with an RL 'superlearner.'"
    },
    {
      "id": "ineffable-intelligence-4",
      "title": "Nvidia partners with Ineffable Intelligence to create 'AI superlearners'",
      "link": "https://seekingalpha.com/news/4592228-nvidia-partners-with-ineffable-intelligence-to-create-ai-superlearners",
      "source": "Seeking Alpha",
      "date": "3 weeks ago",
      "snippet": "Nvidia (NVDA) has formed a new engineering-level collaboration with Ineffable Intelligence, a London-based AI startup, to develop..."
    },
    {
      "id": "ineffable-intelligence-5",
      "title": "DeepMind’s David Silver just raised $1.1B to build an AI that learns without human data",
      "link": "https://techcrunch.com/2026/04/27/deepminds-david-silver-just-raised-1-1b-to-build-an-ai-that-learns-without-human-data/",
      "source": "TechCrunch",
      "date": "1 month ago",
      "snippet": "Ineffable Intelligence, a British AI lab founded a mere few months ago by former DeepMind researcher David Silver, has raised $1.1 billion..."
    }
  ],
  "cursive": [
    {
      "id": "cursive-1",
      "title": "Why is cursive handwriting instruction in Massachusetts such a sloppy mess?",
      "link": "https://www.bostonglobe.com/2026/01/21/magazine/should-massachusetts-schools-mandate-cursive/",
      "source": "The Boston Globe",
      "date": "Jan 21, 2026",
      "snippet": "Research has shown that it helps children develop. But many parents say their kids aren't learning cursive in school."
    },
    {
      "id": "cursive-2",
      "title": "General AI Outruns Specialized Tools at Transcribing Handwriting",
      "link": "https://spectrum.ieee.org/ai-handwriting-transcription-transkribus-lecun",
      "source": "IEEE Spectrum",
      "date": "3 weeks ago",
      "snippet": "AI handwriting transcription platforms like Archive Pearl give access to rare journals and records."
    },
    {
      "id": "cursive-3",
      "title": "Opinion | Why reinstating cursive is a profoundly progressive idea",
      "link": "https://www.startribune.com/kids-handwriting-skills-cursive-penmanship-classroom/601659280",
      "source": "Star Tribune",
      "date": "Apr 11, 2026",
      "snippet": "It may seem counterintuitive at first, but it may be just what today's children need in an increasingly high-tech, AI-driven world."
    },
    {
      "id": "cursive-4",
      "title": "These Houston schools are saying no to AI and devices and yes to paper and pen",
      "link": "https://www.houstonchronicle.com/news/houston-texas/education/article/school-technology-screens-learning-22238095.php",
      "source": "Houston Chronicle",
      "date": "2 weeks ago",
      "snippet": "Houston-area private and charter schools are limiting screens and returning to paper to support learning and social skills."
    },
    {
      "id": "cursive-5",
      "title": "Why Generative AI Makes Cursive and Memorization Obsolete",
      "link": "https://www.startuphub.ai/ai-news/ai-video/2026/why-generative-ai-makes-cursive-and-memorization-obsolete",
      "source": "StartupHub.ai",
      "date": "Jan 20, 2026",
      "snippet": "The future of education is not about banning the technology that enables cheating; it is about fundamentally restructuring learning..."
    }
  ],
  "inherent": []
}
