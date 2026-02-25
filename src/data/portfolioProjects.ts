export type PortfolioCategory = 'All' | 'Software' | 'Automation' | 'Design' | 'Marketing';

export type FeaturedProject = {
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  desc: string;
  image: string;
  tags: string[];
  stat: string;
  projectUrl?: string;
};

export type ListedProject = {
  name: string;
  category: Exclude<PortfolioCategory, 'All'>;
  summary: string;
  link?: string;
};

export const portfolioCategories: PortfolioCategory[] = ['All', 'Software', 'Automation', 'Design', 'Marketing'];

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Health Care Native App',
    category: 'Software',
    desc: 'A completely offline mobile android app for a health institution to help patients with general medical issues.',
    image: '/health aid app.png',
    tags: ['React Native', 'Android', 'TypeScript'],
    stat: '100+ Active Users',
  },
  {
    title: 'AI Note Taking Platform',
    category: 'Software',
    desc: 'Professional and sleek platform to use as a note taking tool. It is integrated with an AI that can depict notes even from podcasts',
    image: '/SmartScribe Logo.png',
    tags: ['API Integration', 'React JSX', 'Tailwind CSS'],
    stat: 'Modern & Reliable',
  },
  {
    title: 'Anime Trackr',
    category: 'Software',
    desc: 'A native tool, people can use to track their progress on their watched shows specifically anime genre.',
    image: '/anime trackr.png',
    tags: ['Lead Gen', 'Facebook Ads', 'SEO', 'Email Funnels'],
    stat: 'Progress Monitor',
  },
  {
    title: 'Custom Web Design',
    category: 'Design',
    desc: 'Storytelling and visual web design for a beauty brand, focusing on perfect product display.',
    image: '/batanabycleo.png',
    tags: ['Figma Design', 'Visual UI', 'Print Design'],
    stat: 'Impact Storytelling',
  },
  {
    title: 'Automated Welcome Email',
    category: 'Marketing',
    desc: 'Designed and implemented an automated email workflow that sends personalized responses to users, who submit forms on our website.',
    image: '/email marketing.jpeg',
    tags: ['Email Marketing', 'Automation', 'Lead Nurture'],
    stat: 'Open Rate + 40%',
  },
  {
    title: 'Custom Logo Design',
    category: 'Design',
    desc: 'Top-notch editorial logo design for a sportsman, focusing on activity portrayal and impact storytelling.',
    image: '/Basketball design.png',
    tags: ['Logo Design', 'Vector', 'Branding'],
    stat: 'Visual Tone',
  },
  {
    title: 'AI-Powered Video Campaigns',
    category: 'Marketing',
    desc: 'Created engaging video content using AI technology for various case scenarios, increasing brand awareness.',
    image: '/ai vid.png',
    tags: ['Content Marketing', 'Video Production', 'AI'],
    stat: 'Engagement Rate + 25%',
  },
  {
    title: 'Inclusive Learning Platform',
    category: 'Design',
    desc: 'Designed the UI of A.B.L.E Learning Inclusive App for children with disabilities to help them learn.',
    image: '/able.png',
    tags: ['Education', 'Inclusive', 'Good UI'],
    stat: 'Accessible',
  },
  {
    title: 'Social Media Campaigns',
    category: 'Marketing',
    desc: 'Implemented a targeted social media campaign to increase followers and engagement on key platforms, enhancing online presence',
    image: '/marketing1.jfif',
    tags: ['Social Media', 'Follower Growth', 'Online Presence'],
    stat: 'Follower Growth',
  },
];

export const moreProjects: ListedProject[] = [
  { name: 'Student Portal Upgrade', category: 'Software', summary: 'Institution portal redesign with admissions, notices, and fee tracking modules.' },
  { name: 'Clinic Queue Assistant', category: 'Software', summary: 'Appointment and patient queue experience for faster front-desk operations.' },
  { name: 'Internal Staff Dashboard', category: 'Software', summary: 'Role-based dashboard for operations reporting and team coordination.' },
  { name: 'College E-Learning Hub', category: 'Software', summary: 'Course delivery portal with notices, class resources, and assignment tracking.' },
  { name: 'Hospital Records Front Desk App', category: 'Software', summary: 'Fast patient lookup and registration workflow for reception and triage desks.' },
  { name: 'Procurement Request Tracker', category: 'Software', summary: 'Internal request submission and approval tracking system for departments.' },
  { name: 'Lead Routing Workflow', category: 'Automation', summary: 'Automated routing of leads from forms into CRM and WhatsApp follow-up queues.' },
  { name: 'Invoice Reminder Automation', category: 'Automation', summary: 'Scheduled payment reminders and status updates sent to clients automatically.' },
  { name: 'Support Escalation Flow', category: 'Automation', summary: 'Multi-step support triage automation for faster issue resolution.' },
  { name: 'Admissions Response Bot', category: 'Automation', summary: 'Automated response flow for common admissions enquiries across web and chat.' },
  { name: 'Document Approval Workflow', category: 'Automation', summary: 'Step-based internal approvals with status notifications and audit trail updates.' },
  { name: 'Marketing Lead Sync Automation', category: 'Automation', summary: 'Syncs lead data across forms, spreadsheets, and campaign follow-up tools.' },
  { name: 'Institution Rebrand Toolkit', category: 'Design', summary: 'Logo system, stationery, social templates, and brand usage guidelines.' },
  { name: 'Campaign Visual Suite', category: 'Design', summary: 'Creative assets for awareness campaigns across print and digital channels.' },
  { name: 'Website UI Refresh', category: 'Design', summary: 'Modernized page layouts and component styling for stronger credibility.' },
  { name: 'Annual Report Layout System', category: 'Design', summary: 'Clean editorial system for institutional annual reports and impact documents.' },
  { name: 'Healthcare Signage Visual Pack', category: 'Design', summary: 'Directional and informational visuals for clinics and hospital spaces.' },
  { name: 'Admissions Brand Landing Concepts', category: 'Design', summary: 'Landing page visual concepts focused on trust, clarity, and conversion.' },
  { name: 'Admissions Campaign Funnel', category: 'Marketing', summary: 'Landing pages and ad funnel strategy to improve enrollment enquiries.' },
  { name: 'Healthcare Awareness Campaign', category: 'Marketing', summary: 'Content planning and social distribution for public health engagement.' },
  { name: 'Email Nurture Sequences', category: 'Marketing', summary: 'Multi-step email campaigns for onboarding and conversion follow-up.' },
  { name: 'Community Outreach Social Campaign', category: 'Marketing', summary: 'Localized content rollout and performance tracking for community programs.' },
  { name: 'Retargeting Ad Sequence', category: 'Marketing', summary: 'Audience retargeting strategy to improve repeat visits and conversions.' },
  { name: 'Monthly Content Calendar Execution', category: 'Marketing', summary: 'Content planning and execution workflow for consistent brand visibility.' },
];
