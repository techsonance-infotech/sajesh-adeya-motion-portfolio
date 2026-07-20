export const siteConfig = {
  name: "Sajesh Adeya",
  title: "Senior Full-Stack Developer | JavaScript, Node.js, React, Java, AWS",
  description:
    "Sajesh Adeya is a Senior Full-Stack Developer specializing in JavaScript, Node.js, React, Java, and AWS. I help startups and businesses build fast, scalable, and maintainable web applications with clean architecture, strong performance, and real product impact.",
  heroHeadline: "I design and build products that deliver real impact.",
  heroSubtext:
    "Senior Full-Stack Developer with hands-on experience building scalable web products, modern dashboards, and MVPs. I focus on clean code, smooth UX, and reliable delivery — from idea to production.",
  email: "sajeshkumar@techsonanceinfotech.com",
  location: "SURAT, India",
  calLink: "techsonance-infotech/connect-with-founder",
  socials: {
    github: "https://github.com/techsonance-infotech",
    linkedin: "https://www.linkedin.com/in/sajeshkumar-adeya-418809148?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    x: "https://x.com/sajeshadeya?s=11",
    portfolio: "https://sajeshadeya.dev",
  },
};

export const aboutContent = {
  heading: "About",
  paragraph:
    "Hi, I'm Sajesh Adeya — a Senior Full-Stack Developer focused on building robust, scalable, and maintainable web applications for startups and growing businesses. I work across the full development lifecycle, from planning and architecture to implementation, optimization, and deployment. My strengths include modern frontend development, reliable backend systems, API integrations, and cloud-ready deployments — with a strong emphasis on clean code, performance, and long-term maintainability.",
  keywords: ["Full-Stack Engineering", "Scalable Systems", "Startup Execution"],
};

export const showcaseContent = {
  heading: "Venture Showcase",
  paragraph:
    "A curated set of projects that highlight how I approach product design, frontend development, and interaction-driven experiences — from concept to deployment.",
  bullets: [
    "Responsive, mobile-first layouts with clean component architecture",
    "Smooth scrolling, scroll storytelling, and high-performance animations",
    "Production-ready code with scalable styling and reusable UI patterns",
  ],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "Framer Motion",
    "GSAP",
  ],
};

export const showcaseProjects = [
  {
    id: 1,
    slug: "marketplace",
    name: "TechSonance Marketplace",
    description:
      "A multi-tenant e-commerce platform allowing sellers to launch fully branded online stores with custom domains, isolated tenant data, Razorpay payment routing, Shiprocket shipping automation, and native promo workflows.",
    image: "/projects/marketplace-dashboard.png",
    logo: "/projects/marketplace-logo.png",
    mobileImage1: "/projects/marketplace-mobile.png",
    mobileImage2: "/projects/marketplace-logo.png",
    gallery: ["/projects/marketplace-dashboard.png", "/projects/marketplace-mobile.png"],
    liveUrl: "https://marketplace.techsonance.co.in/",
    color: "#2563EB",
    features: [
      "100% Fully Branded Storefronts with Custom Domain Support & Tenant-Scoped Data Isolation",
      "Drag & Drop Page Builder & Mobile-First Responsive Themes",
      "Product & Inventory Management: Unlimited Products, Variant Management, Bulk Import/Export & Warehouse Tracking",
      "Seamless Payments & Logistics: Razorpay Integration, Shiprocket Auto-Shipping, Automatic Invoices & Tracking",
      "Promotions & Growth Suite: Coupons, Referral Rewards, Flash Sales, Bundles, Email Campaigns & Cart Recovery",
      "Real-Time Business Insights: Sales Analytics, Revenue Trends, Top Products & Performance Dashboards"
    ],
    stack: ["Next.js", "React 19", "Node.js", "PostgreSQL", "Razorpay", "Shiprocket", "Tailwind CSS"],
    client: "TechSonance Venture / Global E-Commerce Vendors",
    duration: "5 Months",
    role: "Co-Founder & Lead Architect",
    metrics: [
      { label: "Store Setup", value: "<10m" },
      { label: "Platform Uptime", value: "99.9%" },
      { label: "Stores Launched", value: "500+" }
    ],
    fullDescription: "TechSonance Marketplace is an independent, highly customizable multi-tenant e-commerce SaaS platform that allows entrepreneurs, brands, and retail businesses to launch fully branded online storefronts in minutes without code. Equipped with custom domain integration, isolated tenant-scoped database architecture, automated Razorpay payment routing, and Shiprocket shipping orchestration, it gives vendors complete ownership over their catalog, branding, and customer relationships.",
    challenges: "Sellers and retail brands often struggle with third-party marketplaces that charge steep transaction fees, suppress custom branding, and lock customer data inside walled gardens. Conversely, custom ecommerce software builds are expensive, require continuous developer maintenance, and complicate payment gateway and logistics integrations.",
    solution: "We engineered a turn-key multi-tenant platform built on Next.js, React 19, and PostgreSQL with tenant-scoped isolation and proxy-friendly onboarding. Vendors can configure custom domain records, customize mobile-first responsive themes, manage inventory across multiple warehouses, and automate payment payouts via Razorpay alongside shipping labels and order tracking through Shiprocket.",
    results: "Empowered 500+ independent stores to go live with zero code overhead. Reduced store deployment timelines to under 10 minutes, processing millions in annual GMV with 99.9% platform availability and 0% platform transaction commission fees.",
    aiDetails: [
      { engine: "Tenant-Scoped Analytics Engine", usecase: "Aggregates real-time sales trends, top product movers, customer cohorts, and inventory replenishment curves." },
      { engine: "Automated Logistics & NDR Dispatcher", usecase: "Coordinates Shiprocket courier selection, generates automatic PDF tax invoices, and handles non-delivery exception workflows." }
    ],
    architectureDetails: "Built on Next.js App Router and React 19. Database operations use PostgreSQL with multi-tenant data scoping policies. Integrates Razorpay SDK for zero-commission checkout flows, Shiprocket REST APIs for fulfillment, and Cloudinary media pipelines for high-performance responsive image serving."
  },
  {
    id: 2,
    slug: "accunest",
    name: "AccuNest",
    description:
      "A premium, enterprise-grade invoicing, inventory management, and digital accounting suite custom-tailored for Indian businesses, featuring strict GST tax validations and an AI-driven WhatsApp chatbot.",
    image: "/projects/accunest-dashboard.png",
    logo: "/projects/accunest-logo.png",
    mobileImage1: "/projects/accunest-showcase-landing.png",
    mobileImage2: "/projects/accunest-invoice.png",
    gallery: ["/projects/accunest-invoice.png"],
    liveUrl: "https://accunest.techsonance.co.in/",
    color: "#10B981",
    features: [
      "GST Invoicing & Auto splitting of CGST, SGST & IGST based on client location",
      "Real-time Stock Tracking & FIFO stock valuation summary with low-stock alerts",
      "Automated GST Compliance (GSTR-1, GSTR-3B ready reports) & HSN/SAC lookups",
      "Bank Statement Sync (ICICI, HDFC, SBI) & Razorpay / PayU payment link bindings",
      "AI OCR Purchase Bill Scanner for vendor PDF/photo auto-extraction & Tally XML export support"
    ],
    stack: ["Next.js 16", "React 19", "Express", "MongoDB", "Groq AI", "Gemini AI", "AI OCR"],
    client: "TechSonance Agency / Enterprise Client",
    duration: "4 Months",
    role: "Co-founder & Lead Architect",
    metrics: [
      { label: "Invoice Generation", value: "<30s" },
      { label: "Active Businesses", value: "5,000+" },
      { label: "AI Intent Confidence", value: "94%" }
    ],
    fullDescription: "AccuNest is a cloud financial accounting, stock control, and automated billing ecosystem custom-built for Indian shop owners, wholesalers, and manufacturers. Built with Next.js 16, React 19, Express, and MongoDB, it simplifies compliance friction, enabling shopkeepers to issue legal tax-compliant GST invoices in under 30 seconds. Simultaneously, it bridges the gap between client bank records, offline retail terminals, and professional accounting logs, backing everything up with bank-grade encryption.",
    challenges: "Indian small businesses face massive friction during GST calculations (such as managing intra-state CGST+SGST vs. inter-state IGST, HSN lookup directories) and manual bookkeeping. Traditional accounting packages are clunky, lack mobile interfaces, and are hard to navigate for non-technical retail users.",
    solution: "We designed a multi-channel cloud solution. Field agents and accountants can utilize a premium Next.js dashboard equipped with Zod form schemas, dynamic bank institution selections, and instant cache updates via TanStack Query. Simultaneously, users can message the enterprise WhatsApp bot to parse product purchases, add cart lines, and check inventory using native voice/text commands processed by Groq Llama 3.3 and Gemini 3.5 Flash.",
    results: "Invoice generation time dropped from an average of 8 minutes down to less than 30 seconds. By allowing billing direct from WhatsApp, sales teams could issue legal tax-compliant PDFs in real time during field distribution runs, reducing delays and eliminating paperwork.",
    aiDetails: [
      { engine: "Groq SDK / Llama 3.3 70B", usecase: "Powers the WhatsApp Billing Bot, parsing product purchases, quantity numbers, and customer contacts from unstructured Hinglish voice or text chats." },
      { engine: "AI OCR / Tesseract & Custom Parser", usecase: "Acts as a vendor bill scanner. Automatically parses uploaded vendor PDF receipts or camera photos to extract line items, HSN numbers, and tax groups." },
      { engine: "Google Gemini 3.5 Flash", usecase: "Functions as a conversational GST compliance assistant. Answers FAQ inquiries on tax thresholds, templates, and return timelines, and drafts support tickets dynamically." }
    ],
    architectureDetails: "The application features a monorepo setup. The client uses Next.js and Zustand stores, query invalidations are synchronized using React Query v5, and styles utilize TailwindCSS v4 HSL variables. The server acts as a TypeScript Express REST API querying a MongoDB backend via Mongoose v9, utilizing jsPDF for high-resolution vector PDF receipts and SheetJS for Excel spreadsheets."
  },
  {
    id: 3,
    slug: "freightflow",
    name: "FreightFlow",
    description:
      "A single platform replacing spreadsheets, paper LRs, and disconnected Tally accounts for Indian road transport businesses, from LR creation to GST filing.",
    image: "/projects/freightflow-dashboard.png",
    logo: "/projects/freightflow-logo.png",
    mobileImage1: "/projects/freightflow-mobile.png",
    mobileImage2: "/projects/freightflow-hero.png",
    gallery: ["/projects/freightflow-hero.png"],
    liveUrl: "https://freightflow.techsonance.co.in/",
    color: "#3B82F6",
    features: [
      "Create digital Lorry Receipts (LR) in 30 seconds with immediate PDF sharing via WhatsApp",
      "Granular trip-expense ledgers tracking driver advances, fuel slips, tolls, and wages against P&L",
      "One-click e-Way Bill check and automated e-Invoice IRN registration integrated into the booking window",
      "Native GST Reverse Charge Mechanism GTA compliance calculations auto-applied based on place of supply",
      "Fleet registry with automated expiry notifications (PUC, Fitness, Insurance) warning managers 7/15/30 days in advance",
      "PostgreSQL Row-Level Security (RLS) enforcing multi-tenant isolation across organizations"
    ],
    stack: ["Next.js", "React 19", "Express", "PostgreSQL", "Prisma ORM", "Docker", "Tailwind CSS"],
    client: "Indian Road Transport Operators",
    duration: "6 Months",
    role: "Lead Full Stack Engineer",
    metrics: [
      { label: "LR Creation Time", value: "<30s" },
      { label: "GTA RCM Compliance", value: "100%" },
      { label: "Operational Leakage", value: "0%" }
    ],
    fullDescription: "FreightFlow is an enterprise-grade logistics and fleet operating system designed to digitize the complete lifecycle of Indian road transport carriers. By replacing disconnected spreadsheets and manual notebooks, it aggregates consignment bookings, driver advances, route dispatches, and real-time expense calculations in a single PostgreSQL-backed dashboard, providing live corridor profit insights.",
    challenges: "Indian highway logistics operates on thin margins with scattered trip expenses (driver advances, manual fuel slips, loading charges). Managing compliance is labor-intensive: transport managers waste hours manually validating e-Way bills, calculating GTA Reverse Charge taxes, and tracking document expiries for vehicle fleets.",
    solution: "Built a robust Next.js multi-tenant platform. Integrated automated API lookups for official NIC e-Way bill portals and vehicle registration databases. Implemented trip ledger systems that track advances against individual dispatches, and created a simple mobile-responsive view for drivers to upload proof of deliveries (POD) from low-bandwidth highway connections.",
    results: "Reduced LR processing time from minutes to under 30 seconds. Eliminated billing leakage by capturing unlogged expenses live. Allowed operators to run multiple distinct companies under one unified login without data spillover via PostgreSQL RLS.",
    aiDetails: [
      { engine: "OCR Bill Parser", usecase: "Extracts invoice fields, amounts, and dates from scanned fuel bills and vehicle maintenance receipts to auto-populate ledgers." }
    ],
    architectureDetails: "Engineered on a Turborepo monorepo. The client uses Next.js with Zustand state, API communication uses TanStack Query v5 over a TypeScript Express backend. Database operations utilize PostgreSQL with Prisma ORM, leveraging Postgres Row-Level Security (RLS) to strictly isolate multi-tenant customer directories."
  },
  {
    id: 4,
    slug: "sync-serve-pos",
    name: "SyncServe POS",
    description:
      "A high-performance Point of Sale (POS) solution custom-built for Indian retail and restaurant businesses, featuring offline-first SQLite synchronization, KOT generation, and admin auditing.",
    image: "/projects/syncserve-dashboard.png",
    logo: "/projects/syncserve-logo.png",
    mobileImage1: "/projects/syncserve-mobile.png",
    mobileImage2: "/projects/syncserve-mobile.png",
    gallery: ["/projects/syncserve-mobile.png"],
    liveUrl: "https://syncserve.techsonance.co.in/",
    color: "#EC4899",
    features: [
      "Point of Sale Interface with categories, search, addon modifier management, and KOT generation",
      "Offline-First architecture with local SQLite storage for uninterrupted checkout sessions",
      "Bi-directional Prisma synchronization mapping local SQLite logs to centralized Cloud PostgreSQL/MongoDB databases",
      "Visual table and floor management with real-time capacity and occupancy tracking",
      "Granular Role-Based Access Control (RBAC) and full audit activity logging"
    ],
    stack: ["Next.js 16", "React 19", "Electron", "Prisma ORM", "SQLite", "PostgreSQL", "MongoDB"],
    client: "TechSonance Agency / POS Merchant Clients",
    duration: "5 Months",
    role: "Full Stack & Desktop Architect",
    metrics: [
      { label: "Transaction Speed", value: "<1.2s" },
      { label: "Offline Operations", value: "100%" },
      { label: "Active Stores Enabled", value: "50+" }
    ],
    fullDescription: "SyncServe POS (TechSonance POS) is a hybrid desktop and web billing ecosystem designed to provide uninterrupted checkout speeds for modern Indian businesses. Built on Next.js 16, React 19, and Electron, it implements a dual-schema database system that processes orders offline via SQLite and synchronizes activity queues to central cloud instances upon reconnection.",
    challenges: "Storefront cash registers face frequent network drops, but cannot afford checkout delays. Syncing transaction ledgers, item modifier groups, and active kitchen tickets in real-time across multiple terminals without data conflicts is highly complex.",
    solution: "Designed an offline-first desktop client using local SQLite registers synchronized with Prisma. Created background synchronizer workers that buffer transactions locally and upload them sequentially. Implemented visual drag-and-drop table layouts using Radix UI primitives.",
    results: "Deployed successfully as a native cross-platform Desktop app (built via electron-builder) and a standard web SaaS. Enabled merchants to process checkouts at lightning speeds of under 1.2s, even during total WAN link downtime.",
    aiDetails: [
      { engine: "Custom Regression Models", usecase: "Analyzes past weekly order volumes and category trends to forecast inventory depletion curves and suggest auto-replenishment counts." }
    ],
    architectureDetails: "SyncServe is packaged as a shared Next.js application running inside a native Electron container. It features a shared codebase using customized CSS variables, Prisma Client generators for both local SQLite databases and remote PostgreSQL servers, and jsPDF-autotable to build vector invoice receipts on local thermal printer terminals."
  },
  {
    id: 5,
    slug: "masterweg",
    name: "Masterweg",
    description:
      "A comprehensive profile matching, Bavarian grade calculation, German A1 learning, and document checklist workspace designed for Indian students applying for their Master's degree in Germany.",
    image: "/projects/masterweg-dashboard.png",
    logo: "/projects/masterweg-logo.png",
    mobileImage1: "/projects/masterweg-mobile.png",
    mobileImage2: "/projects/masterweg-logo.png",
    gallery: ["/projects/masterweg-mobile.png"],
    liveUrl: "https://masterweg.com/",
    color: "#FF9F1A",
    features: [
      "Interactive German Grade Calculator using the modified Bavarian formula supporting 10-point, 4-point, and percentage scales",
      "Automated Profile Evaluation comparing student credentials against typical public university admission standards in Germany",
      "City-specific Student Cost of Living Calculator predicting rent, utilities, insurance, and transport budgets",
      "German APS dMAT requirement checker checking degree specialization fields against APS guidelines",
      "Personal Application Tracker, checklists, and video course roadmaps eliminating scattered docs"
    ],
    stack: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion", "GSAP", "Node.js"],
    client: "TechSonance Venture / EdTech Platform",
    duration: "3 Months",
    role: "Co-Founder & Lead Engineer",
    metrics: [
      { label: "Matched Courses", value: "1,500+" },
      { label: "Universities Indexed", value: "100+" },
      { label: "Cost vs Agency", value: "-95%" }
    ],
    fullDescription: "Masterweg is a digital platform built by TechSonance InfoTech LLP to guide international students through the application process for Master's programs in Germany. By integrating academic matching tools, document builders, German A1 courses, and visa financial planning spreadsheets into a single unified space, it allows students to take complete ownership of their university applications for a fraction of the cost of traditional consultants.",
    challenges: "Applying to German universities involves navigating fragmented Uni-Assist requirements, complex Bavarian grade conversions, local financial rules (blocked account deposits of €11,904/year), and mandatory APS certification checks. Students frequently get overwhelmed with scattered folders, spreadsheet trackers, and expensive, non-transparent consultancy firms.",
    solution: "Developed a centralized, highly-optimized React application. Built interactive tools like the German Grade Calculator, APS dMAT checker, and a living cost budget calculator. Integrated video instruction modules that walk users through SOP preparation, CV guidelines, and block account setups step-by-step.",
    results: "Allowed over 1,000+ students to confidently manage and submit their applications independently with zero agency middleman fees. Reduced shortlisting overhead by presenting all German public universities in a single, filtered, English-friendly portal.",
    aiDetails: [
      { engine: "Custom Evaluation Algorithms", usecase: "Analyzes student CGPA, IELTS, and bachelor branch to calculate admission likelihood, listing matching courses from the university database." }
    ],
    architectureDetails: "Built on a modern Next.js framework using Radix UI primitives and Tailwind CSS. The app uses static page pre-rendering for tools to ensure sub-100ms load speeds, local storage for offline profile caching, and a light REST API to query the catalog of 1,500+ German master's courses."
  },
  {
    id: 6,
    slug: "utsav",
    name: "Utsav",
    description:
      "A sophisticated digital management suite for temple trusts and cultural organizations, featuring high-volume donation pipelines, volunteer shift rostering, and live procession tracking maps.",
    image: "/projects/utsav-dashboard.png",
    logo: "/projects/utsav-logo.png",
    mobileImage1: "/projects/utsav-mobile.png",
    mobileImage2: "/projects/utsav-logo.png",
    gallery: ["/projects/utsav-mobile.png"],
    liveUrl: "https://utsav.techsonance.co.in/",
    color: "#F59E0B",
    features: [
      "High-Volume donation tracking supporting continuous collections via UPI, credit cards, and QR codes with automated 80G tax receipt generation",
      "Volunteer Force roster management coordinating department heads, shift assignments, and live location check-ins",
      "Real-time procession maps plotting street coordinates, monitoring parade speed, and auto-notifying traffic authorities",
      "Devotee outreach system broadcasting daily prayers, schedule revisions, and emergency updates via custom WhatsApp templates"
    ],
    stack: ["Next.js", "React Native", "Expo", "Supabase", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    client: "Cultural Organizations & Temple Trusts",
    duration: "4 Months",
    role: "Lead Full-Stack Developer",
    metrics: [
      { label: "Donations Tracked", value: "₹4.8Cr+" },
      { label: "Volunteers Managed", value: "15,000+" },
      { label: "Events Coordinated", value: "1,200+" }
    ],
    fullDescription: "Utsav (UtsavManager) is a comprehensive SaaS and mobile platform developed by TechSonance InfoTech LLP to modernize the administration of temple trusts and local street committees (mandals). Deployed as a web dashboard for admins and an Expo-based React Native mobile app for volunteers, it automates high-volume donation processing, rosters thousands of volunteers across multiple departments, and tracks public street processions live via GPS coordinates.",
    challenges: "Large religious festivals trigger immense spikes in digital donations and site traffic, requiring 99.9% uptime. Managing thousands of ground volunteers, assigning shifts, and updating coordinates for massive public street processions without network failures or data bottlenecks is extremely complex.",
    solution: "Designed a distributed architecture built on Next.js, React Native, and Supabase. Implemented Supabase Realtime for instant volunteer check-in tracking and live procession coordination maps. Integrated a specialized payment routing API that automatically channels UPI and credit card donations to verified trust bank accounts with automated 80G PDF receipts.",
    results: "Successfully deployed for multiple historical mandal committees nationwide. Handled over ₹4.8Cr+ in digital donations with zero system downtime during peak festival periods, significantly increasing transparency and coordinating over 15,000+ volunteers.",
    aiDetails: [
      { engine: "Custom Geofencing Engines", usecase: "Monitors procession float speeds, coordinates routes, and projects arrival times at critical junctions to dispatch alerts to local police and traffic services." }
    ],
    architectureDetails: "Structured as a Turborepo monorepo sharing types and configurations. The web client is built on Next.js (App Router), while the mobile app uses Expo/React Native. Real-time updates and database storage are handled by Supabase (PostgreSQL) leveraging Postgres RLS policies to isolate temple trust database partitions."
  },
  {
    id: 7,
    slug: "learn",
    name: "TechSonance Learn",
    description:
      "An interactive school and corporate LMS platform featuring automated online grading, invoicing, class scheduling, and real-time student assessments.",
    image: "/projects/learn-dashboard.png",
    logo: "/projects/learn-logo.png",
    mobileImage1: "/projects/learn-mobile.png",
    mobileImage2: "/projects/learn-logo.png",
    gallery: ["/projects/learn-mobile.png"],
    liveUrl: "https://learn.techsonance.co.in/",
    color: "#1E3A8A",
    features: [
      "Online billing, contracts, and personalized invoice routing for campus registrations",
      "Easy classroom reserving and automated student attendance logbooks across multiple locations",
      "Live learning tools for teachers to hand out assignments and assessments in real-time",
      "Interactive student gradebooks and automated quizzes powered by rich TipTap and Stripe integrations"
    ],
    stack: ["Next.js", "React 19", "Drizzle ORM", "Turso / LibSQL", "Stripe", "Tailwind CSS"],
    client: "TechSonance Education & Partners",
    duration: "5 Months",
    role: "Fullstack Developer",
    metrics: [
      { label: "Active Students", value: "15,000+" },
      { label: "Grading Success", value: "75%" },
      { label: "Main Questions", value: "35+" }
    ],
    fullDescription: "TechSonance Learn is a robust LMS designed for modern schools and corporate workspaces to easily administer online courses. The system houses course material distribution, interactive test taking, real-time feedback submissions, automated digital grading lists, and secure campus billing channels all within a unified Web interface.",
    challenges: "Ensuring real-time synchronization between live classroom assignments and instant student gradebook calculations. Handling large-scale course material uploads and processing automated invoice files securely without server overload.",
    solution: "Utilized Next.js 15 SSR with a high-performance LibSQL/SQLite database layer using Drizzle ORM. Integrated Stripe for secure invoice checkouts and TipTap for highly custom Rich Text editing environments. Designed dynamic React hooks to process test scores asynchronously.",
    results: "Successfully launched across multiple test schools in 2024. Handled over 15,000+ active students with a 75% graduation success rate and streamlined student checkout processes with custom Stripe payment flows.",
    aiDetails: [
      { engine: "Automated Grading Evaluators", usecase: "Auto-grades code snippets and multiple choice quizzes on submission, entering final metrics directly into the student gradebook." }
    ],
    architectureDetails: "Built on Next.js 15 using Drizzle ORM with LibSQL Client connection. Utilized Radix UI primitives and Tailwind CSS for rapid responsive interface layouts, Jose and Bcryptjs for secure session handlers, and Stripe checkout hooks."
  },
  {
    id: 8,
    slug: "cms",
    name: "CMS TechSonance",
    description:
      "A multi-tenant corporate ERP and operations portal integrating geolocation geofenced attendance logs, NFC validation, custom payroll runs, and a 23-role RBAC permissions system.",
    image: "/projects/cms-dashboard.png",
    logo: "/projects/cms-logo.png",
    mobileImage1: "/projects/cms-mobile.png",
    mobileImage2: "/projects/cms-logo.png",
    gallery: ["/projects/cms-mobile.png"],
    liveUrl: "https://cms.techsonance.co.in/login",
    color: "#10B981",
    features: [
      "Multi-Tenant data partitioning using PostgreSQL Row-Level Security (RLS) and absolute tenant scoping",
      "Advanced attendance loggers with GPS geofencing, IP whitelisting, NFC readers, and manual override tracking",
      "Integrated payroll and billing pipelines supporting bulk generations and receipt PDF compiling via jsPDF",
      "Granular Role-Based Access Control matrix supporting 23+ distinct roles across 13 backend modules"
    ],
    stack: ["Next.js", "React 19", "Supabase", "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker"],
    client: "TechSonance InfoTech Internal Operations",
    duration: "8 Months",
    role: "Lead System Architect",
    metrics: [
      { label: "Feature Modules", value: "13+" },
      { label: "User Roles", value: "23+" },
      { label: "REST Endpoints", value: "53+" }
    ],
    fullDescription: "CMS TechSonance is a high-performance multi-tenant Content Management and Corporate Operations portal built to serve as an internal ERP. It manages HR directories, project milestone checkouts, run-rate invoicing, help desk ticket threads, CRM inquiries, expense reimbursement approvals, and geo-fenced attendance checks.",
    challenges: "Ensuring strict tenant data separation across a shared PostgreSQL backend. Managing real-time geofenced check-ins and NFC authentication readers while compiling complex weekend overtime calculations across 23 distinct user roles.",
    solution: "Implemented Supabase Row-Level Security (RLS) policies scoped by tenant_id on all database queries. Created a custom AST parser script to auto-generate Swagger APIs and a centralized middleware request handler. Developed NFC API endpoints and geofencing math scripts using geolocation.",
    results: "Deployed internally and containerized using Docker, scaling operation tracking across multiple offices. Reduced manual payroll calculations by 90% and resolved database seq out-of-sync bugs with automated identity repair scripts.",
    aiDetails: [
      { engine: "GPS Geofencing Triggers", usecase: "Monitors check-in coordinates relative to office polygon bounds, automatically flagging out-of-bounds attempts for admin approval." }
    ],
    architectureDetails: "Crafted as a modular Next.js 15 web client utilizing Tailwind CSS v4 styling. Backed by Supabase PostgreSQL for operational databases, MongoDB for telemetry / audit logging, Nodemailer SMTP, and Firebase Cloud Messaging for FCM push alerts."
  }
];

export const projects = [
  {
    name: "Full Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS, featuring smooth scroll, premium animations, and responsive layout.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "[PORTFOLIO_LIVE_URL]",
    githubUrl: "[PORTFOLIO_GITHUB_URL]",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "PL/SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Material UI (MUI)", "ShadCN"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Spring Boot (Microservices)"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines"],
  },
  {
    category: "Tools & Version Control",
    items: ["Git", "GitHub", "GitLab", "Bitbucket"],
  },
  {
    category: "Project Management",
    items: ["Jira", "Confluence"],
  },
];

export const highlights = [
  { label: "Role", value: "Senior Full-Stack Developer" },
  { label: "Core Stack", value: "React • Node.js • Java • AWS" },
  {
    label: "Focus",
    value: "Clean architecture • Performance • Maintainability",
  },
  { label: "Delivery", value: "MVPs • Dashboards • Full product builds" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/about#experience" },
  { label: "Showcase", href: "/projects" },
  { label: "Skills", href: "/about#skills" },
  { label: "Contact", href: "/#contact" },
];

export const experience = [
  {
    period: "Dec 2025 - Present",
    role: "Co-founder & CTO",
    company: "TechSonance InfoTech LLP",
    location: "Surat, Gujarat, India",
    bullets: [
      "Co-founded TechSonance InfoTech LLP to deliver high-performance software systems, custom enterprise SaaS, and AI-driven workflow automations.",
      "Shipped multiple production products, including 'FreightFlow' (logistics SaaS), 'Sync Serve POS' (offline-first point of sale), and 'AccuNest' (compliance & invoicing SaaS).",
      "Architected and standardised CI/CD pipelines, advanced RBAC security, HR payroll modules, and low-latency database syncing frameworks."
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js", "SaaS Architecture", "PostgreSQL", "Tailwind CSS"]
  },
  {
    period: "Aug 2021 - June 2026",
    role: "Senior Full Stack Developer",
    company: "Barone Budge and Dominick India Private Limited",
    location: "Pune, Maharashtra",
    bullets: [
      "Led migration of a mission-critical Deals Calculation Engine (DCE) from legacy CORBA-based monolithic architecture to Spring Boot microservices, ensuring 100% functional parity.",
      "Redesigned and optimized 10,000+ lines of business logic, improving system scalability and reducing processing latency.",
      "Architected advanced filtering logic for multiple deal types, contributing to improved deal conversion efficiency and business outcomes.",
      "Modernized recommendation engine by replacing XML-based structures with JPA-based dynamic models, enhancing performance and maintainability.",
      "Re-engineered VodaPay Business Validation (VBV) module, enabling real-time credit validation and improving system reliability.",
      "Developed scalable validation frameworks for complex pricing and financial constraints within microservices architecture.",
      "Collaborated with cross-functional teams in Agile environment, delivering high-quality, production-ready features on schedule."
    ],
    tags: ["Java", "Spring Boot", "Microservices", "JPA", "PL/SQL", "REST APIs", "Agile"]
  },
  {
    period: "Feb 2021 - Jul 2021",
    role: "Software Developer Intern",
    company: "Barone Budge and Dominick India Private Limited",
    location: "Pune, Maharashtra",
    bullets: [
      "SportsGeek App (Internal Project): Developed a mobile-based cricket betting platform using Java Microservices and React Native; designed and implemented RESTful APIs to enhance scalability and real-time response.",
      "Asset Management System: Built an internal digital workspace using React.js and Java Microservices to track employee asset allocations and database lifecycles, replacing manual tracking workflows."
    ],
    tags: ["Java Microservices", "React.js", "React Native", "REST APIs", "PostgreSQL", "MySQL"]
  }
];

export const education = [
  {
    period: "2018 - 2021",
    degree: "Master of Computer Application (MCA)",
    institution: "Veer Narmad South Gujarat University",
    details: "Completed postgraduate degree focused on advanced software architectures, database design, and systems analysis."
  },
  {
    period: "2015 - 2018",
    degree: "Bachelor of Science in Computer Science",
    institution: "Veer Narmad South Gujarat University",
    details: "Acquired fundamental computing knowledge in data structures, algorithms, object-oriented design, and systems engineering."
  }
];
