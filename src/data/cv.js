// Single source of truth for CV content.
// App.vue renders from this; the printed PDF is rendered from the same DOM,
// so keep everything here print-safe (plain text / simple inline anchors).

export const experience = [
  {
    page: 1,
    company: 'Visa',
    url: 'https://www.visa.co.uk/',
    title: 'Senior Engineering Manager',
    period: '2024 Nov - Present',
    tech: [
      'Java', 'Spring Boot', 'Apache Flink', 'Kafka', 'Elasticsearch',
      'Kubernetes', 'Argo CD', 'Jenkins', 'AWS', 'Claude / LLMs'
    ],
    bullets: [
      `Lead two engineering teams within VXBS (Visa Cross-Border Solutions): the Real-Time Data
       Platform (RTDP) team, driving event-driven architecture across the platform, and the Treasury
       Liquidity Management (TRLM) team, rebuilding the core treasury system.`,
      `Founded and run the internal Claude Guild — a cross-team practice of
       300+ engineers with monthly demo sessions topping 150 attendees — driving adoption of the latest from
       Claude, lifting engineering productivity and embedding safe, effective LLM use across VXBS.`,
      `Led the team through our eventification / event-driven architecture pivot,
       taking Apache Flink from zero to production as the streaming backbone for VXBS — re-architected an
       external-facing API on top of Flink and Elasticsearch to cut p99 latency, with further
       rollout ongoing.`,
      `Operate within a regulated Java / Spring Boot stack under strict security
       controls, delivering services to 5 nines of availability through fully automated Argo CD and
       Jenkins pipelines.`,
      `Balance hands-on technical leadership with people management — setting
       direction, unblocking engineers and owning outcomes, while staying close enough to the stack to make
       credible technical and architectural decisions.`
    ]
  },
  {
    page: 1,
    company: 'Profusion',
    url: 'https://profusion.com/',
    title: 'Head of Engineering',
    period: '2022 Nov - 2024 Nov',
    tech: [
      'Terraform', 'Python', 'SQL', 'Serverless λ', 'TypeScript',
      'Go', 'Spark', 'Docker', 'dbt', 'Snowflake', 'Azure', 'GCP'
    ],
    bullets: [
      `Led and managed the engineering team end-to-end — hiring, onboarding,
       performance managing and making the hard calls rather than the easy ones.`,
      `Owned engineering budgets and accounting structure, driving the transition
       from a loss-making unit to the leading revenue generator for the business.`,
      `Designed and rolled out a utilisation model to identify and fix pipeline
       inefficiencies, upskilling project management on the process and sustaining the 70%+ billable zone needed
       for consultancy profitability.`,
      `Set strategic direction — technology choices, cross-skilling for resilience, AWS
       partnership — while fostering a continuous-learning culture; communicated direction internally and
       externally via blog posts such as
       <a href="https://medium.com/@rob-f/the-machine-that-builds-the-machine-8f768fcb1c0d"
          style="color: #1a1f71; text-decoration: underline;">the machine that builds the machine</a>.`,
      `Built a reusable Terraform IAC framework for AWS account management —
       VPC, VPN, IAM, budgeting, alerting and endpoint management — underpinning a new multi-client,
       multi-account delivery model.`
    ]
  },
  {
    page: 1,
    company: 'HTK',
    url: 'https://www.htk.co.uk/',
    title: 'Full Stack Data Engineer',
    period: '2019 Aug - 2022 Nov',
    tech: [
      'EMR', 'Lambda', 'Appmesh', 'Looker', 'Pytest'
    ],
    bullets: [
      `Engineered <a href="https://www.htk.co.uk/solutions/real-time-customer-insights/"
       style="color: #1a1f71; text-decoration: underline;">Autopilot</a>, a machine-learning product ingesting
       real-time horizon data and automatically surfacing insights such as churn and anomaly detection.`,
      `Led a small, cohesive team of developers, QA and data scientists to
       deliver Autopilot to production.`,
      `Architected the fully decoupled, well-documented infrastructure (EMR,
       SFN, Lambda, ECS, Appmesh, Athena, Looker, SageMaker, RDS) and established the Jenkins-based CI/CD
       architecture for immediate failure detection.`
    ]
  },
  {
    page: 2,
    company: 'Marsh',
    url: 'https://www.marsh.com/uk/home.html',
    title: 'Data Developer',
    period: '2018 Sep - 2019 Aug',
    bullets: [
      `Developed automated consolidation of insurance and reinsurance across multiple platforms
       using Python, Qlikview &amp; SQL. Built fuzzy broker-name matching (Levenshtein-based) that auto-resolved
       high-confidence joins and routed the rest for human validation via a shared, Excel-backed repository.`
    ]
  },
  {
    page: 2,
    company: 'NHS Norfolk & Suffolk Foundation Trust',
    url: 'https://www.nsft.nhs.uk/',
    title: 'Business Intelligence Programmer',
    period: '2016 October - 2018 September',
    bullets: [
      `Developed the 'Patient Journey' application on my own initiative, a cost-effective centralised
       VBA (visual basic) based application that would allow for excel access to a central datawarehouse that was
       used to align reporting with care practitioners. Allowing for a trust in special measures to address critiques
       on data availability and robustness.`
    ]
  }
]

export const projects = [
  {
    name: 'Pension Overboard',
    description: `A top-down 3D pirate ship action game built in Godot 4.6 — a modern spiritual successor to
      <i>Overboard!</i> (PS1, 1997). An ageing pirate fights through 11 themed "branch offices" of the Cosmic
      Bank to recover their frozen pension; tone lands somewhere between Banjo-Tooie and The Good Place.
      GDScript + shaders, GPU particle effects and procedural waves, wired into custom scene systems for
      combat, enemy AI and boss encounters.`,
    tech: ['Godot', 'GDScript', 'Shaders']
  },
  {
    name: 'Janus',
    description: `Architected and led implementation of a scalable AWS data platform that ingests data from 20+ sources and
      constructs a unified semantic layer for use across an entire government department using Datalakehouse technologies
      on an ELT based ingestion. Uses ECR, Terraform, Docker, Python &amp; Pandas, Athena, SQL &amp; Github Actions`,
    tech: ['AWS', 'Terraform', 'Docker', 'Python', 'Athena', 'SQL', 'Github Actions']
  },
  {
    name: 'Options Trading Bot',
    description: `Developed a Go-based trading bot that interacts with the options market and executes trades against
      a predefined strategy — maps the TradeStation HTTP API in Go via net/http, using goroutines for concurrent
      processing and mutexes for thread safety.`,
    tech: ['Go']
  },
  {
    name: 'Home Network',
    description: `Designed and implemented a custom home network with features such as dynamic ad removal using Pi-hole
      , Wi-Fi meshing with unifi, and custom alerting for a battery/solar panel/ASHP setup to reduce costs &amp; optimise
      usage via thermal energy storage.`,
    tech: ['Linux']
  }
]

export const education = [
  {
    period: '2012 - 2015',
    institution: 'University College London',
    url: 'https://www.ucl.ac.uk/',
    detail: 'BSc Chemistry'
  },
  {
    period: '2010 - 2012',
    institution: 'Alton College',
    url: 'https://www.hsdc.ac.uk/study-with-us/alton-campus/',
    detail: 'A Levels: Mathematics (A), Chemistry (A), Biology (A*)'
  }
]

// Set `image` to a path under /public (e.g. '/pension-overboard.png') to show a screenshot.
export const interests = [
  {
    text: `Built my own eco-friendly house at <a href="https://www.gravenhill.co.uk/"
     style="color: #1a1f71; text-decoration: underline;">Graven Hill</a>, aimed to build a fully self-sufficient home
     that minimises carbon output and running costs. Project managed and built myself, after a long slog - now
     very pleased with the result!`
  },
  {
    text: `Outside of work I build video games. My current project is <b>Pension Overboard</b> — a top-down 3D
     pirate action game in Godot 4.6, a modern homage to the PS1 cult classic <i>Overboard!</i> (1997).`,
    image: '/pension-overboard.jpg',
    link: 'https://pension-overboard.rob-farrow.me.uk',
    caption: `The diegetic main menu — built with the game's own mechanics. Footage, the full pitch and
     more at <a href="https://pension-overboard.rob-farrow.me.uk"
     style="color: #1a1f71; text-decoration: underline;">pension-overboard.rob-farrow.me.uk</a>.`
  },
  {
    text: `When I'm not coding or doing DIY, I can often be found in the kitchen. Big fan of cooking and baking.`
  }
]
