import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, Palette, BarChart4 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ['Software','Automation', 'Design', 'Marketing'];

const projects = [
  {
    title: 'Health Care Native App',
    category: 'Software',
    desc: 'A completely offline mobile android app for a health institution to help patients with general medical issues.',
    image: '/health aid app.png',
    tags: ['React Native', 'Android', 'TypeScript'],
    stat: '100+ Active Users'
  },
  {
    title: 'AI Note Taking Platform',
    category: 'Software',
    desc: 'Professional and sleek platform to use as a note taking tool. It is integrated with an AI that can depict notes even from podcasts',
    image: '/SmartScribe Logo.png',
    tags: ['API Integration', 'React JSX', 'Tailwind CSS'],
    stat: 'Modern & Reliable'
  },
  {
    title: 'Anime Trackr',
    category: 'Software',
    desc: 'A native tool, people can use to track their progress on their watched shows specifically anime genre.',
    image: '/anime trackr.png',
    tags: ['Lead Gen', 'Facebook Ads', 'SEO', 'Email Funnels'],
    stat: 'Progress Monitor'
  },
  // {
  //   title: 'Forex-Education App',
  //   category: 'Automation',
  //   desc: `A mobile app that serves as a guard to one's navigation to the world of Forex trade. Foxerly provides the basics of forex trade`,
  //   image: '/foxerly.png',
  //   tags: ['Native Android', 'Vite', 'Variables'],
  //   stat: 'Easy Navigation'
  // },
  // {
  //   title: 'Credit Score',
  //   category: 'Automation',
  //   desc: 'A comprehensive platform providing users with their credit score and report to ensure financial health',
  //   image: '/credit score.png',
  //   tags: ['React TSX', 'Supabase', 'Evaluation'],
  //   stat: 'Financial Health'
  // },
  // {
  //   title: 'E-Commerce Fashion Website',
  //   category: 'Automation',
  //   desc: 'Your premier destination for trendy clothing and accessories.',
  //   image: '/kwamefashion.png',
  //   tags: ['Supabase', 'Stripe', 'React TSX'],
  //   stat: 'Global Reach'
  // },
  {
    title: 'Custom Web Design',
    category: 'Design',
    desc: 'Story telling and visual web design for a beauty brand, focusing on perfect product display.',
    image: '/batanabycleo.png',
    tags: ['Figma Design', 'Visual UI', 'Print Design'],
    stat: 'Impact Storytelling'
  },
  {
    title: 'Automated Welcome Email',
    category: 'Marketing',
    desc: 'Designed and implemented an automated email workflow that sends personalized responses to users, who submit forms on our website.',
    image: '/email marketing.jpeg',
    tags: ['Email Marketing', 'Automation', 'Lead Nurture'],
    stat: 'Open Rate + 40%'
  },
  {
    title: 'Custom Logo Design',
    category: 'Design',
    desc: 'Top notch editorial logo design for a sportsman, focusing on activity potrayal and impact storytelling.',
    image: '/Basketball design.png',
    tags: ['Logo Design', 'Vector', 'Branding'],
    stat: 'Visual Tone'
  },
  {
    title: 'AI-Powered Video Campaigns',
    category: 'Marketing',
    desc: 'Created engaging ideo content using AI technology for various case scenarios thus increasing brand awareness',
    image: '/ai vid.png',
    tags: ['Content Marketing', 'Video Production', 'AI'],
    stat: 'Engagement Rate + 25%'
  },
  {
    title: 'Inclusive Learning Platform',
    category: 'Design',
    desc: 'Designed the UI of A.B.L.E Learning Inclusive App for children with disabilities to help them learn.',
    image: '/able.png',
    tags: ['Education', 'Inclusive', 'Good UI'],
    stat: 'Accessible'
  },
  {
    title: 'Social Media Campaigns',
    category: 'Marketing',
    desc: 'Implemented a targeted social media campaign to increase followers and engagement on key platforms, enhancing online presence',
    image: 'marketing1.jfif',
    tags: ['Social Media', 'Follower Growth', 'Online Presence'],
    stat: 'Follower Growth'
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col gap-24 pb-20 pt-32">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-display leading-tight text-gray-900 dark:text-white">
            Institutional <span className="text-gradient">Impact.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A showcase of our work in transforming Harare's institutions through robust software, bold design, and strategic marketing.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap gap-4 items-center justify-center p-2 bg-secondary/30 rounded-full max-w-fit mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-s font-bold transition-all",
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg"
                  : "hover:bg-primary/10 text-muted-foreground hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={project.title}
              className="group flex flex-col bg-card border rounded-[2.5rem] overflow-hidden hover:shadow-elegant transition-all animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1 bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white font-display font-bold text-lg mb-1">{project.stat}</div>
                </div>
              </div>

              <div className="p-8 space-y-4 flex-grow">
                <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-primary/70 px-2 py-1 bg-primary/5 rounded border border-primary/10 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 border-t bg-secondary/10">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="p-0 h-auto font-bold text-primary group/btn">
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process CTA */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-secondary/20 rounded-[4rem] p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Have a similar project in mind?</h2>
            <p className="text-muted-foreground text-lg">
              We've helped institutions across Harare achieve digital excellence. Let's discuss how we can help you too.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-12 h-14 text-lg">Start a Conversation</Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-card border rounded-3xl space-y-4">
              <Code className="w-8 h-8 text-primary" />
              <h4 className="font-bold uppercase tracking-widest text-xs">Software Projects</h4>
              <p className="text-2xl font-display font-bold">15+</p>
            </div>
            <div className="p-6 bg-card border rounded-3xl space-y-4">
              <Palette className="w-8 h-8 text-primary" />
              <h4 className="font-bold uppercase tracking-widest text-xs">Design Systems</h4>
              <p className="text-2xl font-display font-bold">40+</p>
            </div>
            <div className="p-6 bg-card border rounded-3xl space-y-4 sm:col-span-2">
              <BarChart4 className="w-8 h-8 text-primary" />
              <h4 className="font-bold uppercase tracking-widest text-xs">Growth Campaigns</h4>
              <p className="text-2xl font-display font-bold">10+</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
