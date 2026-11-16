export const siteConfig = {
  name: "Sajesh Adeya",
  title: "Senior Full-Stack Developer | JavaScript, Node.js, React, Java, AWS",
  description:
    "Sajesh Adeya is a Senior Full-Stack Developer specializing in JavaScript, Node.js, React, Java, and AWS. I help startups and businesses build fast, scalable, and maintainable web applications with clean architecture, strong performance, and real product impact.",
  heroHeadline: "I design and build products that deliver real impact.",
  heroSubtext:
    "Senior Full-Stack Developer with hands-on experience building scalable web products, modern dashboards, and MVPs. I focus on clean code, smooth UX, and reliable delivery — from idea to production.",
  email: "sajesh@techsonance.co.in",
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
  },
  {
    id: 9,
    slug: "vodacom-microservices-migration",
    name: "Modern Microservice Migration",
    description:
      "Led the end-to-end migration of Vodacom's mission-critical Deals Calculation Engine (DCE) and Online Data Query (ODQ) systems from legacy CORBA-based monolithic architecture to cloud-native Spring Boot microservices, securing 100% functional parity and fault-tolerant scalability.",
    image: "/projects/vodacom-migration-dashboard.png",
    logo: "/projects/vodacom-migration-logo.png",
    mobileImage1: "/projects/vodacom-migration-dashboard.png",
    mobileImage2: "/projects/vodacom-migration-logo.png",
    gallery: ["/projects/vodacom-migration-dashboard.png"],
    liveUrl: "https://www.vodacom.co.za/",
    color: "#1155CC",
    features: [
      "Led migration of mission-critical DCE and ODQ systems to cloud-native Spring Boot microservices architecture",
      "Achieved 100% functional parity with zero regression across high-throughput deal evaluation engines",
      "Implemented PostgreSQL with JPA and Liquibase, enabling version-controlled database management and zero-downtime schema migrations",
      "Enhanced system observability, distributed tracing, and centralized logging to eliminate operational complexity",
      "Containerized microservices using Docker and deployed with CI/CD automation into Kubernetes on AWS cloud infrastructure"
    ],
    stack: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "JPA / Hibernate", "Liquibase", "Docker", "Kubernetes", "AWS", "CI/CD"],
    client: "Vodacom / Barone Budge and Dominick India",
    duration: "14 Months",
    role: "Senior Full Stack Developer & Module Technical Lead",
    metrics: [
      { label: "Functional Parity", value: "100%" },
      { label: "Latency Reduction", value: "40%" },
      { label: "Award Recognition", value: "Vodacom Star" }
    ],
    fullDescription: "The Modern Microservice Migration was an enterprise-scale transformation project undertaken for Vodacom, one of Africa's largest telecommunications operators. As Module Technical Lead, Sajesh directed the decomposition and re-architecture of the mission-critical Deals Calculation Engine (DCE) and Online Data Query (ODQ) systems from a monolithic CORBA (Common Object Request Broker Architecture) codebase into a decoupled, cloud-native Spring Boot microservices architecture. By standardizing version-controlled database migrations with Liquibase and PostgreSQL, the project established zero-regression parity, reduced operational complexity, and earned the prestigious Vodacom Star Award.",
    challenges: "Vodacom's legacy monolithic services were constrained by decades-old CORBA protocols, monolithic release locks, and rigid database contention. The system needed to process thousands of complex telecom deal evaluations every minute across retail and digital channels. Any deviation or calculation variance between the legacy system and the new microservice architecture would directly impact billing and regulatory compliance.",
    solution: "Designed and implemented an incremental strangler-fig migration pattern using Spring Boot microservices. Built shadow execution and automated reconciliation pipelines comparing legacy CORBA responses against new microservice outputs down to the decimal point across historical test datasets. Implemented Liquibase for declarative, version-controlled database migrations on PostgreSQL with JPA, and integrated Kubernetes probes and AWS CloudWatch distributed tracing for production observability.",
    results: "Successfully transitioned the entire deal calculation pipeline to modern microservices with 100% functional parity and zero regression bugs. Slashed deal evaluation latency by over 40%, streamlined new promotional product launches from weeks to hours, and was awarded the Vodacom Star Award for exceptional technical performance and business-critical delivery.",
    aiDetails: [
      { engine: "Automated Parity & Regression Verifiers", usecase: "Continuous automated comparison testing comparing legacy CORBA responses against Spring Boot microservices across 50,000+ subscriber scenarios." },
      { engine: "Distributed Tracing & APM Telemetry", usecase: "Monitors cross-microservice transactions and RPC latency, isolating database bottlenecks before they affect end customers." }
    ],
    architectureDetails: "Engineered with Java 17, Spring Boot 3, Spring Data JPA, and PostgreSQL. Database evolution is managed through Liquibase changelogs. Microservices communicate via RESTful APIs and asynchronous message queues, containerized with Docker, orchestrating zero-downtime rolling updates via Kubernetes CI/CD pipelines."
  },
  {
    id: 10,
    slug: "deals-calculation-engine",
    name: "Deals Calculation Engine (DCE)",
    description:
      "A high-concurrency enterprise calculation engine managing complex telecom pricing logic, personalized deal selection, and handset upgrade constraints for millions of mobile subscribers.",
    image: "/projects/deals-calculation-engine-dashboard.png",
    logo: "/projects/deals-calculation-engine-logo.png",
    mobileImage1: "/projects/deals-calculation-engine-dashboard.png",
    mobileImage2: "/projects/deals-calculation-engine-logo.png",
    gallery: ["/projects/deals-calculation-engine-dashboard.png"],
    liveUrl: "https://www.vodacom.co.za/",
    color: "#4F46E5",
    features: [
      "Managed high-concurrency monolithic and microservice systems handling complex business rules and personalized offer selection",
      "Redesigned and optimized 10,000+ lines of critical business logic, cutting processing latency and eliminating memory overhead",
      "Architected advanced filtering algorithms for multiple deal types (postpaid, prepaid, corporate contracts, handset upgrades)",
      "Modernized recommendation engine by replacing XML-based rule structures with JPA-based dynamic models for runtime flexibility",
      "Identified and resolved scalability bottlenecks, lock contention, and database contention under peak promotional traffic"
    ],
    stack: ["Java", "Spring Boot", "PL/SQL", "PostgreSQL", "JPA / Hibernate", "Redis", "REST APIs", "High-Concurrency"],
    client: "Vodacom / Barone Budge and Dominick",
    duration: "18 Months",
    role: "Senior Full Stack Developer",
    metrics: [
      { label: "Lines Refactored", value: "10,000+" },
      { label: "Processing Latency", value: "-55%" },
      { label: "Deal Conversion", value: "+22%" }
    ],
    fullDescription: "The Deals Calculation Engine (DSE-DCE) is the computational backbone for Vodacom's commercial offerings, calculating customized handset bundles, airtime discounts, data top-ups, and corporate contracts for millions of active subscribers. Sajesh was entrusted with optimizing and modernizing this high-concurrency engine. He overhauled 10,000+ lines of legacy code, replaced brittle XML-based rule structures with cached JPA dynamic domain models, and architected multi-criteria filtering pipelines that elevated subscriber conversion rates across all sales channels.",
    challenges: "Telecom packages involve hundreds of interacting rules: contract durations, handset subsidies, tariff plans, credit limits, VAS bundles, and regional tax variations. The legacy calculation engine parsed bulky XML files on every evaluation request, resulting in high CPU spikes, heap exhaustion, and database contention during nationwide marketing promotions.",
    solution: "Re-engineered the core calculation engine from the ground up in Java and Spring Boot. Replaced disk and memory-intensive XML parsers with an in-memory dynamic entity model backed by JPA and Redis caching. Designed high-performance filtering algorithms utilizing Java Streams and concurrency primitives that evaluate and rank hundreds of potential deals in milliseconds.",
    results: "Reduced deal calculation latency by 55%, enabling sub-second response times across web portals and in-store POS terminals. Improved deal conversion efficiency by 22% through real-time personalized recommendations, and eliminated memory leak crashes during peak Black Friday and holiday promotions.",
    aiDetails: [
      { engine: "Dynamic Deal Recommendation Matrix", usecase: "Evaluates subscriber usage patterns, tenure, and credit bands to dynamically rank and present the top 5 highest-converting personalized bundle offers." },
      { engine: "Multi-Constraint Matrix Solver", usecase: "Validates complex matrix constraints (device subsidy vs. tariff margin) in real-time, preventing financial loss on mispriced deals." }
    ],
    architectureDetails: "Built on Java 17 and Spring Boot microservices. Uses Redis for distributed caching of active catalog rules, PostgreSQL with optimized PL/SQL routines for high-volume transactions, and asynchronous Spring Task Executors for background computation tasks."
  },
  {
    id: 11,
    slug: "vodapay-business-validation",
    name: "VodaPay Business Validation (VBV)",
    description:
      "A real-time financial validation framework for the VodaPay SuperApp ecosystem, conducting instant credit assessments, affordability rule verification, and transaction risk scoring.",
    image: "/projects/vodapay-business-validation-dashboard.png",
    logo: "/projects/vodapay-business-validation-logo.png",
    mobileImage1: "/projects/vodapay-business-validation-dashboard.png",
    mobileImage2: "/projects/vodapay-business-validation-logo.png",
    gallery: ["/projects/vodapay-business-validation-dashboard.png"],
    liveUrl: "https://www.vodapay.co.za/",
    color: "#059669",
    features: [
      "Re-engineered VodaPay Business Validation (VBV) core module, enabling real-time credit checks and sub-second transaction validation",
      "Developed scalable validation frameworks for complex pricing rules, risk scoring, and financial constraints within microservices",
      "Engineered automated fallback mechanisms and transactional compensation workflows to guarantee zero drop-offs",
      "Integrated secure REST APIs connecting VodaPay checkout pipelines with banking ledgers and fraud scoring endpoints",
      "Collaborated with cross-functional Agile teams to deliver banking-grade audit compliance and regulatory adherence"
    ],
    stack: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "REST APIs", "Financial Validation", "Docker"],
    client: "VodaPay / Vodacom Financial Services",
    duration: "10 Months",
    role: "Senior Full Stack Developer",
    metrics: [
      { label: "Validation Time", value: "<500ms" },
      { label: "Financial Rules", value: "50+ Constraints" },
      { label: "System Uptime", value: "99.99%" }
    ],
    fullDescription: "VodaPay is a premier lifestyle super app and financial services platform developed by Vodacom in partnership with Alipay, serving millions of users across Africa for payments, digital loans, merchant checkout, and subscriptions. Sajesh led the re-engineering of the VodaPay Business Validation (VBV) module, which evaluates financial affordability, regulatory constraints, and pricing rules before any postpaid agreement, device purchase, or loan is finalized.",
    challenges: "Financial checkout in a high-volume consumer super app requires sub-500ms validation response times while evaluating dozens of credit bureau rules, bank affordability parameters, and fraud flags. The previous validation workflow struggled with network timeouts, intermittent service hangs, and fragile validation logic that caused checkout abandonment.",
    solution: "Rebuilt the VBV module into an independent, event-driven Spring Boot microservice. Built a modular rule engine allowing product and risk teams to define complex pricing, loan, and financial constraints without code recompilation. Implemented circuit breakers (Resilience4j), non-blocking asynchronous validation threads, and comprehensive audit trails.",
    results: "Achieved consistent sub-500ms validation times for over 99.99% of transactions. Eliminated customer checkout drop-offs due to validation timeouts and established an airtight audit log for South African financial regulatory compliance.",
    aiDetails: [
      { engine: "Real-Time Affordability Evaluator", usecase: "Analyzes customer historical payment indices, monthly spend, and bank parameters to calculate instant risk ceilings and approved credit tiers." },
      { engine: "Resilience4j Circuit Breakers", usecase: "Monitors upstream payment and credit bureau APIs, gracefully degrading with intelligent cached validation rules when external services experience latency." }
    ],
    architectureDetails: "Constructed with Spring Boot 3, Java, and PostgreSQL. Employs Resilience4j for circuit breaking and rate limiting, Spring Security with OAuth2/JWT for banking-grade endpoint authorization, and structured JSON logging compliant with PCI-DSS audit mandates."
  },
  {
    id: 12,
    slug: "online-data-query-sync",
    name: "Online Data Query & Sync Service (ODQ)",
    description:
      "A high-throughput integration and synchronization service performing automated ETL workflows and daily deal catalog synchronization across distributed telecom databases.",
    image: "/projects/online-data-query-sync-dashboard.png",
    logo: "/projects/online-data-query-sync-logo.png",
    mobileImage1: "/projects/online-data-query-sync-dashboard.png",
    mobileImage2: "/projects/online-data-query-sync-logo.png",
    gallery: ["/projects/online-data-query-sync-dashboard.png"],
    liveUrl: "https://www.vodacom.co.za/",
    color: "#0284C7",
    features: [
      "Developed automated integration service for daily synchronization of hundreds of thousands of active telecom deals",
      "Automated ETL-like pipelines ensuring complete data consistency, deduplication, and schema validation between upstream and downstream systems",
      "Engineered resilient retry mechanisms, dead-letter queues, and automated reconciliation for failed sync payloads",
      "Implemented structured logging and distributed tracing for end-to-end audit compliance and telemetry",
      "Replaced fragile scheduled bash scripts with robust, monitorable Spring Batch / Spring Scheduled microservice workflows"
    ],
    stack: ["Java", "Spring Boot", "PL/SQL", "PostgreSQL", "ETL Pipelines", "REST APIs", "Scheduled Workflows"],
    client: "Vodacom / Barone Budge and Dominick",
    duration: "8 Months",
    role: "Senior Full Stack Developer",
    metrics: [
      { label: "Data Consistency", value: "100%" },
      { label: "Daily Synced Deals", value: "100,000+" },
      { label: "Sync Duration", value: "-70%" }
    ],
    fullDescription: "Online Data Query (ODQ) is an enterprise data synchronization engine responsible for keeping Vodacom's active commercial catalogs, hardware inventories, price books, and promotional discounts in lockstep across web channels, mobile apps, call center software, and retail store point-of-sale systems. Sajesh architected a modern Spring Boot integration service that transformed fragile, opaque sync scripts into automated, resilient ETL workflows.",
    challenges: "Telecom deal catalogs change daily with dynamic promotional rates and inventory allocations. The legacy ODQ process was reliant on fragmented scripts and manual batch queries that frequently crashed, caused data synchronization drift between retail stores and the website, and lacked audit visibility.",
    solution: "Designed a centralized, containerized synchronization microservice in Java and Spring Boot. Implemented automated data extraction, validation, transformation, and batch loading (ETL) routines into PostgreSQL using optimized PL/SQL and JDBC batching. Built automated discrepancy detection, alerting webhooks, and full audit trail logging.",
    results: "Guaranteed 100% catalog consistency across all physical and digital channels. Reduced the daily catalog synchronization cycle from over 4 hours down to less than 45 minutes, completely eliminating price discrepancy tickets in retail branches.",
    aiDetails: [
      { engine: "Automated Data Discrepancy Detector", usecase: "Compares snapshot hashes across disparate database partitions to immediately flag and auto-heal out-of-sync deal records." }
    ],
    architectureDetails: "Built using Java 17, Spring Boot, Spring Batch, and PostgreSQL. Features optimized connection pooling, chunk-based transaction processing, and Prometheus metrics endpoints scraped by Grafana for real-time sync performance dashboards."
  },
  {
    id: 13,
    slug: "sportsgeek-app",
    name: "SportsGeek App",
    description:
      "A high-responsiveness mobile cricket fantasy and prediction platform built using Java Microservices on the backend and React Native on mobile, supporting real-time live match interaction.",
    image: "/projects/sportsgeek-app-dashboard.png",
    logo: "/projects/sportsgeek-app-logo.png",
    mobileImage1: "/projects/sportsgeek-app-dashboard.png",
    mobileImage2: "/projects/sportsgeek-app-logo.png",
    gallery: ["/projects/sportsgeek-app-dashboard.png"],
    liveUrl: "https://www.bbdsoftware.com/",
    color: "#7C3AED",
    features: [
      "Developed a mobile-based cricket fantasy and prediction platform using Java Microservices and React Native",
      "Designed and implemented RESTful APIs, improving system responsiveness and real-time user interaction handling",
      "Contributed to microservices architecture, enhancing modularity and horizontal scalability of the platform",
      "Integrated frontend and backend systems, ensuring seamless real-time score updates and sub-second odds processing",
      "Built interactive leaderboards, user prediction slips, match points ledgers, and tournament statistics"
    ],
    stack: ["Java Microservices", "React Native", "RESTful APIs", "WebSocket", "MySQL", "PostgreSQL", "Docker"],
    client: "Barone Budge and Dominick (Internal Project)",
    duration: "6 Months (Feb 2021 - Jul 2021)",
    role: "Software Developer Intern",
    metrics: [
      { label: "Live Event Latency", value: "<200ms" },
      { label: "API Responsiveness", value: "Sub-second" },
      { label: "Platform Availability", value: "99.9%" }
    ],
    fullDescription: "SportsGeek is a mobile cricket fantasy and interactive prediction platform built as a cutting-edge internal engineering showcase at Barone Budge and Dominick. Developed to demonstrate high-concurrency microservice design and cross-platform mobile excellence, the platform enables cricket fans to participate in ball-by-ball predictions, private contest leagues, and tournament leaderboards during international and IPL matches.",
    challenges: "Live sports applications experience extreme concurrent spikes in user activity during critical match moments (such as boundary hits or wicket falls). Processing thousands of concurrent prediction submissions, updating match states, and re-calculating player leaderboards within a few seconds without server lockups required an exceptionally resilient architecture.",
    solution: "Engineered a decoupled Java microservices backend handling separate concerns for User Profiles, Match Feeds, Prediction Engines, and Points Calculation. Connected the mobile client built with React Native via low-latency RESTful APIs and real-time WebSocket feeds, allowing live scoreboards and leaderboard updates to stream to thousands of devices with zero noticeable delay.",
    results: "Delivered a fluid, responsive mobile experience on both iOS and Android. Demonstrated sub-200ms live event latency during company-wide IPL prediction tournaments, handling peak concurrent spikes smoothly without data loss.",
    aiDetails: [
      { engine: "Dynamic Odds & Score Evaluator", usecase: "Processes live ball-by-ball cricket data to recompute leaderboard standings and award point distributions automatically in real time." }
    ],
    architectureDetails: "Backend engineered with Java Microservices, Spring Boot, and PostgreSQL/MySQL. Mobile client crafted with React Native and Expo. Real-time updates utilize WebSocket connections, while API testing and performance benchmarks were automated via JUnit and Postman collections."
  },
  {
    id: 14,
    slug: "asset-management-system",
    name: "Enterprise Asset Management System",
    description:
      "An internal digital workspace engineered to manage, track, and audit employee IT hardware assets and software licenses, streamlining onboarding workflows and eliminating manual tracking.",
    image: "/projects/asset-management-system-dashboard.png",
    logo: "/projects/asset-management-system-logo.png",
    mobileImage1: "/projects/asset-management-system-dashboard.png",
    mobileImage2: "/projects/asset-management-system-logo.png",
    gallery: ["/projects/asset-management-system-dashboard.png"],
    liveUrl: "https://www.bbdsoftware.com/",
    color: "#0D9488",
    features: [
      "Built an internal system to manage and track employee asset allocation, reducing manual tracking efforts by 85%",
      "Developed backend services using Java Microservices architecture for efficient data processing and lifecycle auditing",
      "Implemented responsive frontend using React.js, improving usability, transparency, and administrative UX",
      "Designed normalized database schemas to manage asset lifecycles, maintenance logs, and return checklists",
      "Improved operational efficiency by digitizing asset handover approvals and automated employee offboarding workflows"
    ],
    stack: ["React.js", "Java Microservices", "REST APIs", "PostgreSQL", "MySQL", "Tailwind CSS", "RBAC"],
    client: "Barone Budge and Dominick (Internal Project)",
    duration: "5 Months (Feb 2021 - Jul 2021)",
    role: "Software Developer Intern",
    metrics: [
      { label: "Manual Effort Saved", value: "-85%" },
      { label: "Asset Traceability", value: "100%" },
      { label: "Handover Speed", value: "Instant" }
    ],
    fullDescription: "The Enterprise Asset Management System is an internal IT governance platform designed to track the full lifecycle of company hardware assets (laptops, monitors, security fobs) and software licenses across departments. By replacing error-prone manual spreadsheets, the system provides IT administrators, managers, and HR with real-time visibility into equipment custody, warranty expirations, and employee provisioning checklists.",
    challenges: "Tracking hundreds of high-value developer laptops and peripheral equipment across multiple offices and remote work setups was managed via scattered spreadsheets. Equipment handovers during employee onboarding and offboarding lacked digital sign-offs, leading to lost inventory and delayed hardware reallocations.",
    solution: "Designed and built a full-stack digital management system. Created a modern, clean web interface using React.js for IT staff to search, allocate, and mark assets for repair or decommissioning. Built a modular Java Microservices backend with normalized PostgreSQL/MySQL schemas that enforce audit trails for every physical custody transfer.",
    results: "Eliminated spreadsheet tracking entirely, reducing manual asset auditing and reconciliation time by 85%. Provided complete traceability for 100% of internal hardware inventory and automated asset return verification during employee exits.",
    aiDetails: [
      { engine: "Predictive Lifecycle Alerts", usecase: "Monitors asset age, manufacturer warranty terms, and repair frequency to flag devices due for hardware refreshment or maintenance." }
    ],
    architectureDetails: "Frontend built with React.js and modern component libraries. Backend powered by Java Spring Boot microservices exposing clean RESTful APIs. Database utilizes PostgreSQL with strict relational constraints, indexed serial numbers, and role-based access control (RBAC)."
  },
  {
    id: 15,
    slug: "cobol-to-java-microservices-migration",
    name: "Legacy COBOL to Java Microservices Migration",
    description:
      "An enterprise-scale modernization initiative decommissioning legacy mainframe COBOL programs and batch calculation routines into cloud-native Java 17 Spring Boot microservices with 100% data parity and sub-second transaction throughput.",
    image: "/projects/cobol-to-java-migration-dashboard.png",
    logo: "/projects/cobol-to-java-migration-logo.png",
    mobileImage1: "/projects/cobol-to-java-migration-dashboard.png",
    mobileImage2: "/projects/cobol-to-java-migration-logo.png",
    gallery: ["/projects/cobol-to-java-migration-dashboard.png"],
    liveUrl: "https://www.bbdsoftware.com/",
    color: "#4338CA",
    features: [
      "Deconstructed complex monolithic COBOL copybooks, flat files, and procedural batch routines into modular Spring Boot microservices",
      "Engineered an automated regression parity harness comparing COBOL calculation outputs against Java microservice results across millions of historical transactions",
      "Migrated mainframe database structures to PostgreSQL with Liquibase version-controlled schema migrations and optimized indexing",
      "Replaced multi-hour overnight batch window delays with real-time Kafka event streams and sub-second RESTful endpoints",
      "Implemented distributed tracing, health monitoring, and circuit breakers for seamless zero-downtime cutover"
    ],
    stack: ["Java 17", "Spring Boot", "COBOL Modernization", "PostgreSQL", "Apache Kafka", "Liquibase", "Docker", "JUnit 5"],
    client: "Enterprise Telecom & Banking Modernization (Barone Budge and Dominick)",
    duration: "10 Months",
    role: "Lead Software Engineer",
    metrics: [
      { label: "Data Parity", value: "100%" },
      { label: "Batch to Real-Time", value: "<1s" },
      { label: "Infrastructure Cost", value: "-60%" }
    ],
    fullDescription: "Enterprise legacy backbones in telecom and banking frequently rely on decades-old COBOL applications running on mainframe infrastructure. While robust, these monolithic systems are difficult to scale, expensive to maintain, and incapable of satisfying modern real-time digital channel demands. Sajesh spearheaded the technical architecture and migration of mission-critical COBOL business calculation engines to cloud-native Java Spring Boot microservices, transforming slow overnight batch workflows into event-driven real-time services with verified mathematical equivalence.",
    challenges: "COBOL systems rely on fixed-width copybooks, implicit computational variables, and tightly coupled batch jobs. Documented specifications were outdated or non-existent, and any slight deviation in numeric rounding or transactional logic could produce multi-million-dollar billing discrepancies or regulatory audit violations.",
    solution: "Engineered a systematic migration strategy: First, deconstructed procedural COBOL logic into domain-driven microservice boundaries. Developed an automated dual-run test harness that fed millions of production-equivalent transaction inputs simultaneously through both the legacy COBOL programs and the new Java microservices, mathematically proving 100% calculation parity. Replaced mainframe flat-file storage with PostgreSQL and Liquibase, and introduced Apache Kafka event pipelines for real-time transaction processing.",
    results: "Achieved 100% functional and calculation parity across all deal and financial computations. Reduced transaction processing times from 4+ hour nightly batch windows to sub-second streaming updates, cutting mainframe operational overhead by over 60% and enabling instant digital channel responsiveness.",
    aiDetails: [
      { engine: "Automated Parity Comparison Engine", usecase: "Executes continuous differential assertions across millions of COBOL batch outputs and Java microservice responses to detect and flag any data drift." }
    ],
    architectureDetails: "Engineered with Java 17, Spring Boot 3, Spring Batch, and PostgreSQL. Integrates Apache Kafka for event-driven message distribution, Liquibase for database schema versioning, and Prometheus/Grafana for real-time latency and throughput telemetry."
  },
  {
    id: 16,
    slug: "agentic-ai-cvm-transformation",
    name: "Agentic AI CVM Microservice Transformation",
    description:
      "Architectural transformation of telecom Customer Value Management (CVM) microservices into an autonomous Agentic AI ecosystem, deploying multi-agent reasoning loops for real-time subscriber value maximization, churn prevention, and personalized campaign dispatch.",
    image: "/projects/agentic-ai-cvm-dashboard.png",
    logo: "/projects/agentic-ai-cvm-logo.png",
    mobileImage1: "/projects/agentic-ai-cvm-dashboard.png",
    mobileImage2: "/projects/agentic-ai-cvm-logo.png",
    gallery: ["/projects/agentic-ai-cvm-dashboard.png"],
    liveUrl: "https://www.vodacom.co.za/",
    color: "#7C3AED",
    features: [
      "Transformed static rule-based Customer Value Management (CVM) services into an autonomous Agentic AI multi-agent decision architecture",
      "Engineered autonomous agent swarms (Churn Predictor Agent, ARPU Optimizer Agent, Next-Best-Action Matcher) collaborating to maximize subscriber lifetime value",
      "Delivered sub-300ms real-time offer evaluation triggered by live network telemetry, balance exhaustion, and subscriber usage milestones",
      "Integrated multi-agent reasoning loops with deterministic policy guardrails to enforce strict telecom regulatory and pricing constraints",
      "Constructed event-driven dispatcher microservices orchestrating personalized campaign delivery across SMS, push notifications, and VodaPay super-app channels"
    ],
    stack: ["Agentic AI", "Multi-Agent Systems", "Java Spring Boot", "Python AI Bridge", "PostgreSQL", "Redis", "Kafka", "Docker"],
    client: "Vodacom / Barone Budge and Dominick (Customer Value Management)",
    duration: "7 Months",
    role: "Senior Full Stack & AI Systems Architect",
    metrics: [
      { label: "ARPU Uplift", value: "+18.4%" },
      { label: "Decision Latency", value: "<300ms" },
      { label: "Churn Reduction", value: "-22%" }
    ],
    fullDescription: "Customer Value Management (CVM) is the neural center of modern telecommunications, responsible for managing subscriber lifecycles, predicting churn, and serving contextual promotional offers. Traditional CVM microservices relied on static, hardcoded SQL rules and batched predictive models that responded days after a subscriber changed their behavioral patterns. Sajesh architected the re-engineering of the CVM microservice suite into an autonomous Agentic AI ecosystem where specialized AI agents continuously evaluate subscriber telemetry in real time to generate and dispatch optimal commercial actions.",
    challenges: "Operating at telecom scale requires analyzing millions of concurrent subscriber events (e.g. data bundle depletion, dropped calls, recharge patterns). Traditional LLMs are too slow for real-time transactional paths and risk hallucinations in pricing. The challenge was building an Agentic AI architecture with deterministic guardrails that could evaluate complex subscriber history and decide optimal campaign actions in under 300 milliseconds.",
    solution: "Designed a multi-agent architectural framework integrated into the Spring Boot microservices backend. Deployed specialized agents: a Churn Prediction Agent that calculates real-time attrition risk, an ARPU Optimization Agent that monitors spend velocity, and a Next-Best-Action (NBA) Agent that matches contextual subscriber intent with available commercial tariffs. Used Redis for high-speed subscriber state caching, Kafka for real-time telemetry streaming, and deterministic policy validators ensuring zero hallucinated promotions.",
    results: "Achieved an 18.4% increase in Average Revenue Per User (ARPU) across targeted cohorts and reduced subscriber churn by 22%. Lowered decision-to-dispatch latency to under 300ms, enabling real-time micro-campaigns to reach subscribers at the exact moment of network interaction.",
    aiDetails: [
      { engine: "Multi-Agent Swarm Orchestrator", usecase: "Coordinates specialized Churn, ARPU, and Offer Selection agents via iterative reasoning loops and confidence-weighted consensus." },
      { engine: "Deterministic Policy & Pricing Guardrail", usecase: "Validates all agent-generated commercial proposals against strict telecom billing constraints and regulatory price ceilings before dispatch." }
    ],
    architectureDetails: "Hybrid architecture combining Java 17 Spring Boot microservices with high-performance Python AI micro-agents. Employs Redis for sub-5ms subscriber state lookups, Apache Kafka for event-driven telemetry ingestion, PostgreSQL for campaign audit persistence, and Docker for containerized deployment across AWS/on-premise clusters."
  },
  {
    id: 17,
    slug: "hisaab-whatsapp-bot",
    name: "Hisaab WhatsApp Bot",
    description:
      "An autonomous conversational commerce and billing engine on Meta WhatsApp Cloud API with sub-second BullMQ event queuing, dual-persona state machines, atomic GST invoice generation, and automated Razorpay financial reconciliation.",
    image: "/projects/hisaab-bot-dashboard.png",
    logo: "/projects/hisaab-bot-logo.png",
    mobileImage1: "/projects/hisaab-bot-mobile.png",
    mobileImage2: "/projects/hisaab-bot-logo.png",
    gallery: ["/projects/hisaab-bot-dashboard.png", "/projects/hisaab-bot-mobile.png"],
    liveUrl: "https://www.techsonance.co.in",
    color: "#25D366",
    features: [
      "Zero-UI Conversational Commerce: Transforms standard WhatsApp Business numbers into interactive point-of-sale (POS) terminals using WhatsApp Interactive Lists, Quick Replies, and CTA links",
      "Dual-Persona Auto-Routing: Intelligently detects whether the incoming phone number belongs to a verified Shop Admin or End Customer, dynamically altering permissions and interactive menus",
      "Sub-Second Ingress & Queue Decoupling: Express ingress acknowledges Meta webhooks in <300ms, pushing payloads into BullMQ + Redis queues with unique deduplication IDs (${phone}-${msg.id})",
      "Deterministic Hybrid State Machine: 24-hour TTL Redis session management with sub-millisecond regex fast-path execution and Groq (Llama 3 70B) / Gemini 1.5 semantic function calling",
      "Idempotent Financial Reconciliation: HMAC SHA256 verified Razorpay webhooks with idempotency guards, automated ledger settlements, and instant digital PDF invoice dispatch",
      "Real-Time GST Tax Compliance: Instant calculation of CGST, SGST, and IGST with dynamic server-side PDF invoice compilation delivered directly into the WhatsApp chat thread"
    ],
    stack: [
      "Meta WhatsApp Cloud API",
      "Node.js",
      "TypeScript",
      "Express.js",
      "BullMQ",
      "Redis",
      "MongoDB",
      "Razorpay",
      "Groq (Llama 3)",
      "Google Gemini"
    ],
    client: "TechSonance Venture / Indian Retail & Wholesale SMBs",
    duration: "4 Months",
    role: "Co-Founder & Lead Systems Architect",
    metrics: [
      { label: "Invoice Creation", value: "15s (was 3m)" },
      { label: "Webhook ACK", value: "<300ms" },
      { label: "Receivables Aging", value: "-35%" }
    ],
    fullDescription: "Hisaab WhatsApp Bot is an enterprise-grade autonomous conversational commerce and billing engine built directly on top of the Meta WhatsApp Cloud API. Engineered for small and medium Indian enterprises (SMBs, traders, wholesalers, and retail merchants), the platform replaces fragmented paper chits and clumsy web dashboards with an interactive WhatsApp-native point of sale. For business owners, it serves as a 24/7 accounting copilot that creates GST/Non-GST tax invoices in under 15 seconds, checks real-time inventory, reports daily ledger summaries ('Aaj ka Hisaab'), and tracks outstanding receivables. For end customers, it provides an interactive storefront to browse catalogs with WhatsApp Interactive Lists, manage persistent carts, complete instant UPI checkout via dynamic Razorpay links, and receive stamped tax invoice PDFs directly inside their active chat thread.",
    challenges: "Indian retail and wholesale commerce runs on conversational trust via WhatsApp, but creates massive administrative bottlenecks: handwritten chits and audio notes lead to frequent ordering errors, shopkeepers spend 3-4 hours every night manually copying orders into accounting software like Tally or Vyapar, collecting payments requires tedious manual UTR verification against bank statements, and customers refuse to install third-party mobile apps or navigate complex web portals.",
    solution: "Architected a decoupled, fault-tolerant backend system running alongside the core Hisaab-Kitaab ERP. Engineered an ultra-low latency Express ingress gateway that acknowledges Meta webhooks in under 300ms to honor Meta's strict SLA, passing payloads into BullMQ over Redis with message-level deduplication and token-bucket rate limiting. Replaced brittle LLM loops with a deterministic hybrid state machine in Redis (24-hour session TTL), routing transactional actions through sub-millisecond regex rules while reserving Groq (Llama 3 70B) and Gemini 1.5 for semantic natural language understanding and Hinglish product recommendations. Integrated dynamic Razorpay payment links with HMAC SHA256 webhook signature verification and automated PDF invoice generation dispatched back into WhatsApp chat via Meta Cloud Media APIs.",
    results: "Cut invoice generation time by 92% (from ~3 minutes down to 15 seconds). Maintained a 100% webhook SLA compliance with consistent sub-250ms ingress response times. Slashed outstanding receivables aging by 35% through real-time in-chat Razorpay UPI links, and achieved 2.4x higher cart-to-order conversions compared to external web storefronts.",
    aiDetails: [
      { engine: "Groq Llama 3 70B & Gemini 1.5 NLP Gateway", usecase: "Performs intent classification, Hinglish conversational parsing, and contextual product search with strict function-calling definitions." },
      { engine: "Deterministic Hybrid State Machine", usecase: "Maintains 24-hour Redis session states and executes sub-millisecond regex validation on transactional buttons to eliminate hallucinated pricing or rogue state transitions." }
    ],
    architectureDetails: "Engineered with Node.js v20+ and strict TypeScript. Ingress webhook layer built on Express.js v5 with payload validation. Queue clustering powered by BullMQ over Redis (Upstash / TLS) with distributed concurrency and Bull-Board observability. Multi-tenant company isolation, product catalogs, and invoice documents stored in MongoDB via Mongoose v9. Integrates Meta WhatsApp Cloud API v20.0 and Razorpay Node SDK with HMAC SHA256 cryptographic webhook reconciliation.",
    architecturePipeline: [
      { step: "01. Sub-Second Ingress ACK", role: "Express.js Ingress Gateway", detail: "Validates HMAC SHA256 Meta webhook signatures and responds with HTTP 200 in <300ms, adhering strictly to Meta's 3-second SLA." },
      { step: "02. Event Deduplication", role: "BullMQ + Redis Queue Cluster", detail: "Payloads enqueued with unique deduplication IDs (${phone}-${msg.id}) and token-bucket rate limiters to eliminate duplicate message processing during retries." },
      { step: "03. Conversational State Engine", role: "Hybrid Deterministic State Machine", detail: "24-hour Redis session state lookup. Executes sub-millisecond regex rules for transactional buttons; routes complex text to Groq Llama 3 70B & Gemini." },
      { step: "04. Core Accounting API", role: "Hisaab-Kitaab ERP Backend", detail: "Performs atomic stock locking, price catalog evaluations, and dynamic CGST/SGST/IGST tax calculation." },
      { step: "05. Payment & Invoicing", role: "Razorpay Gateway & Meta Media API", detail: "Generates dynamic UPI payment links. On HMAC SHA256 webhook capture, marks invoices PAID and pushes stamped PDF invoices into the chat." }
    ],
    stateWorkflows: [
      {
        persona: "Shop Owner & Staff Persona",
        color: "#128C7E",
        commands: [
          { trigger: "1. 'Bill banao'", outcome: "Generates GST-compliant invoice, locks stock, and delivers payment link in under 15 seconds." },
          { trigger: "2. 'Stock dekho'", outcome: "Queries live MongoDB inventory ledger, returning low-stock warnings and reorder recommendations." },
          { trigger: "3. 'Aaj ka hisaab'", outcome: "Summarizes total cash sales, UPI receipts, pending credit balances, and customer transaction counts." },
          { trigger: "4. 'Baaki check karo'", outcome: "Displays aging ledger of outstanding receivables with one-tap payment reminder triggers." }
        ]
      },
      {
        persona: "End Customer Persona",
        color: "#25D366",
        commands: [
          { trigger: "🛍️ Browse Products", outcome: "Interactive WhatsApp lists categorized by product categories with live stock availability." },
          { trigger: "🛒 Persistent Cart", outcome: "Session-persisted shopping cart with instant quantity adjustment and automatic tax calculation." },
          { trigger: "💳 1-Tap UPI Checkout", outcome: "Dynamic Razorpay payment links for seamless mobile checkout without leaving WhatsApp." },
          { trigger: "📄 Instant Tax Invoice", outcome: "Automatic delivery of official stamped PDF tax invoice directly into the WhatsApp thread." }
        ]
      }
    ]
  },
  {
    id: 18,
    slug: "zion-mobile",
    name: "Zion Mobile (React Native eTicketing)",
    description:
      "A production React Native (New Architecture & Hermes V1) mobile eTicketing app engineered for Zion with an encrypted SQLCipher Ticket Vault, 3,000+ seat interactive Skia/SVG map, and dual-clock countdown synchronization.",
    image: "/projects/zion-mobile-dashboard.png",
    logo: "/projects/zion-mobile-logo.png",
    mobileImage1: "/projects/zion-mobile-phone.png",
    mobileImage2: "/projects/zion-mobile-logo.png",
    gallery: ["/projects/zion-mobile-dashboard.png", "/projects/zion-mobile-phone.png"],
    liveUrl: "https://www.techsonance.co.in/portfolio/zion",
    color: "#1155CC",
    features: [
      "Encrypted Offline Ticket Vault: SQLCipher (vault.db) with 256-bit AES-GCM encryption key stored in Keychain / Keystore (WHEN_UNLOCKED_THIS_DEVICE_ONLY) for guaranteed offline gate entry",
      "3,000+ Seat Interactive Map Engine: High-performance tiled SVG and Skia seat map with gesture-driven pinch/pan/zoom on UI thread, 44x44pt hit targets, and accessible List Mode fallback",
      "Dual-Clock Basket Countdown: Monotonic clock (performance.now()) combined with server-offset wall clock, preventing timer tampering when users adjust device time or switch time zones",
      "Anti-Forgery System Browser Payment: ASWebAuthenticationSession (iOS) and Custom Tabs (Android) with cryptographically validated returnState tokens, resisting OS process death",
      "Strict Memory-Only PII Security: Customer form data and checkout drafts reside strictly in RAM, automatically wiping upon logout or app termination to comply with UAE PDPL regulations",
      "Robust Offline & Fault Handling: TanStack Query + Zustand with automated latest-wins concurrency, request abort signals, and network jitter backoff algorithms"
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Hermes V1",
      "Expo",
      "TanStack Query",
      "Zustand",
      "SQLCipher",
      "React Native Skia",
      "React Native SVG",
      "ASWebAuthenticationSession"
    ],
    client: "Zion Entertainment & Events (Anush, Founder & CEO)",
    duration: "4 Months",
    role: "Lead Mobile Architect & React Native Engineer",
    metrics: [
      { label: "Seat Map Render", value: "<500ms (1k)" },
      { label: "Offline Availability", value: "100% Vault" },
      { label: "Crash-Free Rate", value: "99.8%" }
    ],
    fullDescription: "Zion Mobile (zion-mobile) is an enterprise-grade React Native eTicketing application engineered on the New Architecture with Hermes V1. Designed for high-volume entertainment, concerts, and stadium events in the UAE, the application provides an uncompromising ticketing experience from rapid interactive seat selection to offline venue entry. The app features an offline-first encrypted Ticket Vault built on SQLCipher that protects ticket barcodes behind Keychain/Keystore hardware-backed keys, an interactive seat mapping engine rendering 3,000+ seats smoothly without frame drops, and a resilient payment handoff pipeline utilizing system browser sessions (ASWebAuthenticationSession / Custom Tabs) that survives background process termination.",
    challenges: "Event ticketing mobile apps face severe real-world constraints: stadium gates frequently suffer from complete mobile network blackouts, rendering web-based tickets inaccessible. Furthermore, rendering thousands of interactive reserved seats in React Native causes severe frame drops and Android ANRs, while dishonest device clocks can allow users to exploit hold timers or pay for expired baskets. Finally, payment handoffs via WebViews frequently break banking 3D-Secure flows and biometric authentications.",
    solution: "Engineered an offline-first architecture with dual databases: an encrypted SQLCipher vault (vault.db) holding confirmed barcodes accessible offline with a 'Last verified' provenance stamp, and a disposable cache (cache.db) for public catalogue data. Built a hybrid seat map engine combining tiled SVG chunks and Skia rendering with an accessible list mode for screen readers. Formulated a dual-clock algorithm pairing performance.now() monotonic intervals with server-offset timestamps to make hold countdowns tamper-proof. Prohibited WebViews in favor of system browser sessions with single-use returnState anti-forgery tokens, paired with a persistent pending_checkout pointer that auto-recovers transaction state upon app relaunch.",
    results: "Delivered sub-500ms first interactive render on 1,000+ seat maps on mid-range Android devices, maintained 100% offline ticket readability at venue turnstiles, achieved a 99.8% crash-free session rate across diverse iOS and Android hardware, and completely eliminated orphan basket holds and payment return drop-offs.",
    aiDetails: [
      { engine: "Predictive Seat Allocation Engine", usecase: "Analyzes stadium group sizes and seat availability matrices to automatically suggest optimal adjacent seat clusters with zero aisle fragmentation." },
      { engine: "Dual-Clock Monotonic Guard", usecase: "Monitors clock skew and network round-trip latency to dynamically adjust local ticket hold expiry countdowns with sub-second accuracy." }
    ],
    architectureDetails: "Engineered with React Native (New Architecture enabled), Hermes V1 engine, and TypeScript strict mode. Local state powered by TanStack Query for server synchronization and Zustand for memory-only UI interactions. Secure storage handled by SQLCipher with 256-bit AES-GCM encryption keys sealed inside iOS Keychain and Android Keystore. Payment handoff executed via ASWebAuthenticationSession / Custom Tabs.",
    architecturePipeline: [
      { step: "01. App Boot & Security Gating", role: "Hermes V1 & SQLCipher Init", detail: "Initializes New Architecture bridge, unlocks vault.db via Keychain/Keystore key, and reads /v1/app/config for live kill-switches and version floors." },
      { step: "02. High-Density Seat Engine", role: "Skia / SVG Tiled Map", detail: "Renders 3,000+ seats in clamped viewport chunks with UI-thread gestures, 44pt hit-targets, and automatic a11y list mode fallback for TalkBack/VoiceOver." },
      { step: "03. Dual-Clock Synchronization", role: "Monotonic Timer Engine", detail: "Calculates server time offsets on every network cycle, combining performance.now() with wall-clock bounds to prevent local device time cheating." },
      { step: "04. Anti-Forgery Payment Handoff", role: "ASWebAuthSession / Custom Tabs", detail: "Launches hosted checkout in system browser; returnState token validated upon return, recovering status seamlessly even if the OS kills the app." },
      { step: "05. Offline Ticket Vault", role: "Hardware-Backed Local Storage", detail: "Stores confirmed barcodes under AES-GCM encryption, displaying 'Last verified' stamps and offline warning banners when signal is lost." }
    ],
    stateWorkflows: [
      {
        persona: "Event Goer & Fan Flow",
        color: "#1155CC",
        commands: [
          { trigger: "1. Discover & Pick Section", outcome: "Browse live shows with cached catalogue and realtime availability indicators." },
          { trigger: "2. Interactive Seat Selection", outcome: "Select adjacent reserved seats with instant conflict alerts and estimated subtotal preview." },
          { trigger: "3. Countdown Hold & Form", outcome: "Enforces 10-minute hold with dual-clock sync and memory-only customer detail entry." },
          { trigger: "4. System Browser Checkout", outcome: "Completes 3D-Secure banking flow in system browser with automatic cold-start recovery." }
        ]
      },
      {
        persona: "Offline Gate Presentation Flow",
        color: "#10B981",
        commands: [
          { trigger: "1. Zero-Signal Venue Mode", outcome: "Automatically activates read-only Ticket Vault displaying cached tickets with last-synced timestamp." },
          { trigger: "2. Hardware Barcode Rendering", outcome: "Renders high-contrast QR / Code128 barcode with automatic screen brightness boost." },
          { trigger: "3. Re-Sync on Reconnect", outcome: "Pulls delta updates (/v1/orders?updatedSince) to instantly reflect any refunded or transferred tickets." }
        ]
      }
    ]
  },
  {
    id: 19,
    slug: "zion-api",
    name: "Zion API & Caven DET Integration Engine",
    description:
      "An enterprise integration middleware and event orchestration backend connecting Zion with the Dubai Economy & Tourism (DET) Sales API v1.3, featuring BullMQ distributed queuing, atomic inventory holds, and idempotent payment reconciliation.",
    image: "/projects/zion-api-dashboard.png",
    logo: "/projects/zion-api-logo.png",
    mobileImage1: "/projects/zion-api-dashboard.png",
    mobileImage2: "/projects/zion-api-logo.png",
    gallery: ["/projects/zion-api-dashboard.png"],
    liveUrl: "https://www.techsonance.co.in/portfolio/zion",
    color: "#635BFF",
    features: [
      "DET Sales API v1.3 Enterprise Integration: Translates DET ticketing protocols, seat matrices (columnPos/rowPos), and inventory statuses into modern RESTful /v1 endpoints",
      "Distributed Queue Decoupling (BullMQ + Redis): Ingress webhook layer responds in <300ms, queuing payment capture verification (gateway.capture.verify) with 3-second deduplication windows",
      "Atomic Inventory Holds & Hold Expiry: Implements Redis distributed mutex locks and automatic TTL expiration to prevent double-booking and orphan seat allocations",
      "Idempotent Financial Reconciliation: Cryptographically verified HMAC SHA256 webhooks, synthetic event ledgers, and automated partial/full refund processing with zero calculation drift",
      "Dynamic Remote App Configuration (BD-02): Live /v1/app/config endpoint controlling minimum app versions, feature toggles, and instant emergency kill-switches (checkout, seats, refunds)",
      "Strict Opaque ID Shielding: Translates internal DET codes into opaque client identifiers (PRF-, BSK-, CHK-, CVN-, TKT-), shielding the frontend and mobile apps from DET legacy internals"
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "Express.js v5",
      "BullMQ",
      "Redis (TLS)",
      "PostgreSQL",
      "JSONB",
      "DET Sales API v1.3",
      "HMAC SHA256",
      "Sentry"
    ],
    client: "Zion Entertainment & Events / Caven DET Integration",
    duration: "4 Months",
    role: "Principal Backend & Integration Systems Architect",
    metrics: [
      { label: "Webhook Ingress ACK", value: "<300ms" },
      { label: "Reconciliation Parity", value: "100%" },
      { label: "Concurrent Holds", value: "5,000+/min" }
    ],
    fullDescription: "Zion API (zion-api) is the enterprise integration backend and event-driven middleware connecting the Zion eTicketing platform with the Dubai Economy & Tourism (DET) Sales API v1.3. Functioning as the mission-critical transactional backbone, it abstracts DET's legacy protocols into a resilient, developer-friendly REST API while handling distributed seat hold management, payment gateway webhook verification, and automated refund auditing. Built with Node.js, TypeScript, BullMQ, and Redis, the engine guarantees sub-second response times, enforces strict multi-tenant isolation, and ensures zero lost tickets or double-charging during peak nationwide concert sales.",
    challenges: "Integrating with external government tourism APIs (such as DET) introduces severe friction: DET's legacy endpoints lack event listing capabilities, omit image/venue metadata, feature ambiguous error semantics, and lack explicit basket expiry fields. Furthermore, peak ticket drop traffic can swamp external payment gateways, creating webhook delivery delays and leaving purchase outcomes in an ambiguous state that risks double-charging consumers.",
    solution: "Engineered a decoupled, resilient architecture: Created a Caven metadata registry layer (BD-01) enriching DET performances with rich CDN assets, venue details, and availability status. Built an asynchronous BullMQ queue pipeline on top of Redis with dedicated workers for payment capture verification (gateway.capture.verify), deduplicated at 3-second intervals so incoming app return hints trigger immediate gateway queries without flooding APIs. Implemented an idempotent financial ledger verifying HMAC SHA256 signatures and recording all transactions in an append-only payment_events store before issuing final ticket barcodes.",
    results: "Delivered 100% mathematical and data parity across all DET ticketing operations, achieved consistent sub-300ms webhook ingress response times, supported 5,000+ concurrent hold requests per minute during headline stadium launches, and provided live emergency kill-switch controls executable within seconds without requiring app store re-submissions.",
    aiDetails: [
      { engine: "Automated Ticket Reconciliation Solver", usecase: "Executes continuous differential verification between DET confirmed booking states and payment gateway settlement batches to ensure 100% ledger balance." },
      { engine: "Dynamic Hold Expiry & Cleanup Worker", usecase: "Monitors active Redis seat locks and auto-cancels abandoned baskets at the exact millisecond of deadline expiration, releasing seats to waiting fans." }
    ],
    architectureDetails: "Engineered using Node.js v20+ with TypeScript. Express.js v5 ingress layer decoupled from message processing via BullMQ cluster over Redis (Upstash / TLS). Persistence is managed in PostgreSQL with JSONB columns for flexible Caven metadata schemas and Liquibase versioned migrations. Integrates Dubai Economy & Tourism (DET) Sales API v1.3 over secure mutual TLS with Sentry tracing.",
    architecturePipeline: [
      { step: "01. Client Ingress & Opaque Translation", role: "Express.js v5 Gateway", detail: "Translates opaque client refs (PRF-, BSK-) into DET internal codes, applying rate limits and verifying Bearer authentication." },
      { step: "02. Atomic Seat Locking & TTL", role: "Redis Distributed Mutex", detail: "Executes atomic seat locks across requested seat IDs, setting synchronized hold timers and releasing expired baskets automatically." },
      { step: "03. Asynchronous Verification Queue", role: "BullMQ + Redis Worker", detail: "Enqueues gateway.capture.verify jobs upon webhook reception or client return hints, deduplicating checks to prevent gateway rate-limits." },
      { step: "04. Government DET Integration Bridge", role: "DET Sales API v1.3 Client", detail: "Communicates with DET endpoint clusters over mutual TLS, mapping columnPos/rowPos grids into structured, selectable seat matrices." },
      { step: "05. Idempotent Ledger & Barcode Issuance", role: "PostgreSQL & Cryptographic Engine", detail: "Records payment proofs, issues opaque ticket refs (TKT-), and prepares encrypted QR/Code128 barcode payloads for client vault sync." }
    ],
    stateWorkflows: [
      {
        persona: "Webhook Ingress & Verification Pipeline",
        color: "#635BFF",
        commands: [
          { trigger: "1. Immediate <300ms Webhook ACK", outcome: "Ingress gateway returns HTTP 200 to gateway immediately, preventing timeouts and duplicate delivery." },
          { trigger: "2. Deduplicated Verify Job", outcome: "Enqueues gateway.capture.verify in BullMQ with 3-second deduplication bucket." },
          { trigger: "3. Cryptographic Signature Validation", outcome: "Verifies HMAC SHA256 header against stored gateway webhook secrets." },
          { trigger: "4. State Transition & Barcode Push", outcome: "Transitions order state to CONFIRMED and compiles native barcode data." }
        ]
      },
      {
        persona: "DET Inventory & Reservation Pipeline",
        color: "#D97706",
        commands: [
          { trigger: "1. Metadata Enrichment (BD-01)", outcome: "Attaches Caven CDN images, venue details, and pricing categories to raw DET event codes." },
          { trigger: "2. Atomic Seat Hold Allocation", outcome: "Locks seat coordinates in Redis mutex and initiates DET reserve hold." },
          { trigger: "3. Sliding Expiry Synchronization", outcome: "Sends expiresAt and serverTime headers to keep client countdowns synchronized." },
          { trigger: "4. Automated Refund Reversal", outcome: "Executes partial or full ticket void operations directly via DET v1.3 refund endpoints." }
        ]
      }
    ]
  },
  {
    id: 20,
    slug: "om-interiors",
    name: "OM Interior Design Studio",
    description:
      "A luxury architectural and interior design web application engineered for OM Interior Design Studio in Surat, Gujarat. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS, featuring high-fidelity project visual showcases, interactive consultation lead routing with Nodemailer, and localized Schema.org SEO/GEO optimizations.",
    image: "/projects/om-interior-dashboard.png",
    logo: "/projects/om-interior-logo.png",
    mobileImage1: "/projects/om-interior-mobile.webp",
    mobileImage2: "/projects/om-interior-logo.png",
    gallery: ["/projects/om-interior-dashboard.png", "/projects/om-interior-mobile.webp"],
    liveUrl: "https://www.om-interior.in/",
    githubUrl: "https://github.com/techsonance-infotech/om-interiors",
    color: "#C5A880",
    features: [
      "Next.js 15 App Router & React 19 Architecture: High-performance server-side rendered (SSR) and statically generated (SSG) web app with ultra-fast initial page loads and zero layout shift",
      "High-Fidelity Architectural Visual Showcase: Immersive multi-room galleries (Living, Bedroom, Modular Kitchen, Commercial Office) with smooth Jarallax parallax motion and fluid responsive transitions",
      "Automated Consultation & Lead Routing: Secure server-side inquiry dispatch powered by Nodemailer and structured email notifications for instant client quote turnaround",
      "Hyper-Local SEO & GEO Search Authority: Implemented Schema.org LocalBusiness, InteriorDesignStudio, and GeoCoordinates (21.1702, 72.8311) targeting key Surat luxury hubs including Vesu, Adajan, Pal, and City Light",
      "Optimized Web Vitals & Asset Delivery: Responsive Next.js WebP/AVIF asset pipelines delivering sub-second LCP and 98+ Google Lighthouse performance benchmarks",
      "Responsive Luxury Design System: Mobile-first responsive layouts styled with Tailwind CSS, bespoke typography, and subtle micro-interactions tailored for high-net-worth residential clients"
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Nodemailer",
      "Jarallax",
      "Schema.org / JSON-LD",
      "Vercel"
    ],
    client: "OM Interior Design Studio (Surat, Gujarat)",
    duration: "2 Months",
    role: "Lead Full-Stack Web Architect & SEO Strategist",
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Consultation Conversion", value: "+38%" },
      { label: "Surat Search Visibility", value: "#1 Rank" }
    ],
    fullDescription: "OM Interior Design Studio (om-interior.in) is a premier digital presence engineered for Surat's premier luxury residential and commercial interior design firm. Built using Next.js 15 and React 19, the platform showcases bespoke architectural living spaces, modular kitchens, luxury 2/3 BHK residences, and corporate office designs. Engineered from the ground up by Sajesh Adeya at TechSonance InfoTech LLP, the web application combines high-fidelity visual aesthetics with lightning-fast server rendering, automated consultation request pipelines via Nodemailer, and comprehensive LocalBusiness and InteriorDesignStudio Geo-Schemas that capture high-intent architectural searches across Surat's luxury corridors (Vesu, Adajan, Pal, City Light, and Piplod).",
    challenges: "High-end architectural and interior photography involves dense, multi-megabyte imagery that typically crushes mobile load speeds and cripples Core Web Vitals. Simultaneously, competing for local luxury interior design clients in Surat requires exceptional search visibility, zero-lag mobile responsiveness, and an effortless consultation booking flow that converts discerning luxury homeowners into qualified leads.",
    solution: "Architected a Next.js 15 App Router application utilizing modern Next.js Image optimization with responsive WebP/AVIF compression and lazy loading with BlurDataURL placeholders. Integrated smooth parallax scroll dynamics using lightweight Jarallax mechanics for a tactile, editorial magazine feel. Deployed a serverless API endpoint powered by Nodemailer with input validation to route prospective design consultations directly to the studio's executive inbox. Implemented structured JSON-LD schemas incorporating LocalBusiness, InteriorDesignStudio, GeoCoordinates, and OpeningHoursSpecification to dominate local search algorithms and voice/AI engines.",
    results: "Achieved a 98/100 Lighthouse performance score on desktop and mobile, drove a 38% increase in inbound consultation conversions within the first quarter of deployment, secured top organic rankings for high-intent Surat interior design queries, and established a scalable, modern foundation for ongoing project portfolio expansions.",
    aiDetails: [
      { engine: "Structured GEO & AEO Knowledge Graph", usecase: "Injects complete LocalBusiness, GeoCoordinates (21.1702, 72.8311), and postal address data into indexable JSON-LD graph nodes for Google SGE, Perplexity, and Apple Maps." },
      { engine: "Automated Lead Sanitization & Dispatch", usecase: "Validates and structures inbound consultation inquiries server-side before dispatching styled email notifications to studio designers via Nodemailer." }
    ],
    architectureDetails: "Engineered with Next.js 15 App Router and React 19. Styling executed with Tailwind CSS and custom typography. Smooth scroll and parallax dynamics driven by Jarallax. Server-side lead submission handled by Next.js Server Actions / API routes with Nodemailer SMTP transport. Fully instrumented with Open Graph, Twitter Cards, Schema.org LocalBusiness, GeoCoordinates, and canonical SEO configurations deployed on Vercel with edge caching.",
    architecturePipeline: [
      { step: "01. Next.js 15 App Router & Edge Delivery", role: "Vercel Global CDN", detail: "Serves pre-rendered HTML and cached static assets from edge points of presence across India with sub-40ms TTFB." },
      { step: "02. Responsive Asset Pipeline", role: "Next.js Image Optimizer", detail: "Dynamically transforms high-resolution interior photographs into modern WebP/AVIF formats with blur placeholders." },
      { step: "03. Interactive Visual Experience", role: "Jarallax & Tailwind CSS", detail: "Renders silky-smooth parallax depth effects and responsive residential showcase grids without layout shifts." },
      { step: "04. Serverless Consultation Dispatch", role: "Next.js API & Nodemailer", detail: "Validates incoming design consultation forms and securely dispatches structured alerts directly to studio administrators." },
      { step: "05. Geo & Schema Search Authority", role: "Schema.org & JSON-LD", detail: "Exposes rich structured snippets with geographic coordinates (21.1702, 72.8311) and multi-locality service metadata." }
    ],
    stateWorkflows: [
      {
        persona: "Luxury Homeowner Discovery Flow",
        color: "#C5A880",
        commands: [
          { trigger: "1. Browse Architectural Gallery", outcome: "Explores curated 2/3 BHK and villa project portfolios with instant modal zoom and layout insights." },
          { trigger: "2. Schedule Design Consultation", outcome: "Submits property configuration, timeline, and design preferences through interactive inquiry modal." },
          { trigger: "3. Instant Direct Routing", outcome: "Receives immediate on-screen submission receipt while dispatching formatted lead brief to studio." }
        ]
      },
      {
        persona: "Local Search & Discovery Engine Flow",
        color: "#1155CC",
        commands: [
          { trigger: "1. Hyper-Local Query Match", outcome: "Matches search queries for 'interior designer in Vesu / Adajan / Surat' via structured LocalBusiness schemas." },
          { trigger: "2. GeoCoordinates Geocoding", outcome: "Supplies precise latitude/longitude (21.1702, 72.8311) to Google Maps, Apple Maps, and local search packs." },
          { trigger: "3. Rich Snippet Presentation", outcome: "Surfaces verified studio phone (+91 7990114574), address, and portfolio imagery in search knowledge panels." }
        ]
      }
    ]
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
    items: ["Java", "JavaScript", "PL/SQL", "COBOL (Modernization & Migration)"],
  },
  {
    category: "Agentic AI & ML",
    items: ["Agentic AI Workflows", "Multi-Agent Systems", "LangChain / Tool Calling", "Groq Llama 3", "Gemini AI"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Material UI (MUI)", "ShadCN"],
  },
  {
    category: "Backend & Microservices",
    items: ["Spring Boot (Microservices)", "Node.js", "REST APIs", "Apache Kafka", "CORBA & COBOL Migration"],
  },
  {
    category: "Databases & ORM",
    items: ["PostgreSQL", "MySQL", "Liquibase", "Spring Data JPA", "Hibernate"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "GitLab CI/CD"],
  },
  {
    category: "Tools & Version Control",
    items: ["Git", "GitHub", "GitLab", "Bitbucket"],
  },
  {
    category: "Project Management",
    items: ["Jira", "Confluence", "Agile / Scrum"],
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
  { label: "Services", href: "/#services" },
  { label: "Showcase", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/about#experience" },
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
      "Spearheaded migration of legacy COBOL mainframe systems to modern Java 17 Spring Boot microservices, deconstructing procedural copybooks into event-driven services with verified mathematical equivalence.",
      "Architected and deployed Agentic AI transformations for Customer Value Management (CVM) microservices, orchestrating autonomous multi-agent decision loops for real-time churn prevention and contextual offer dispatch.",
      "Redesigned and optimized 10,000+ lines of business logic, improving system scalability and reducing processing latency.",
      "Architected advanced filtering logic for multiple deal types, contributing to improved deal conversion efficiency and business outcomes.",
      "Modernized recommendation engine by replacing XML-based structures with JPA-based dynamic models, enhancing performance and maintainability.",
      "Re-engineered VodaPay Business Validation (VBV) module, enabling real-time credit validation and improving system reliability.",
      "Developed scalable validation frameworks for complex pricing and financial constraints within microservices architecture.",
      "Collaborated with cross-functional teams in Agile environment, delivering high-quality, production-ready features on schedule."
    ],
    tags: ["Java 17", "Spring Boot", "Agentic AI", "Microservices", "COBOL Modernization", "CVM", "PostgreSQL", "Kafka"]
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
