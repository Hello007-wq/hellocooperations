import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, Palette, BarChart4 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ['Software', 'Design', 'Marketing'];

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
    title: 'Heritage Hospital Branding',
    category: 'Design',
    desc: 'Total visual identity overhaul for a private medical center, focusing on trust, cleanliness, and professionalism.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    tags: ['Logo Design', 'Brand Strategy', 'Identity System'],
    stat: 'Modern & Reliable'
  },
  {
    title: 'National School Enrollment Campaign',
    category: 'Marketing',
    desc: 'A data-driven social media campaign that increased enrollments by 40% for an private educational group.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    tags: ['Lead Gen', 'Facebook Ads', 'SEO', 'Email Funnels'],
    stat: '40% Enrollment Boost'
  },
  {
    title: 'Forex-Education App',
    category: 'Software',
    desc: 'Custom inventory and payroll management system for a large-scale Harare-based manufacturing organization.',
    image: '/foxerly.png',
    tags: ['Native Android', 'Vite', 'Variables'],
    stat: 'Easy Navigation'
  },
  {
    title: 'Institutional Annual Report',
    category: 'Design',
    desc: 'High-end editorial design for a government agency annual report, focusing on data visualization and impact storytelling.',
    image: 'https://images.unsplash.com/photo-1544383335-c54936d52570?auto=format&fit=crop&q=80&w=800',
    tags: ['Editorial Design', 'Data Visualization', 'Print Design'],
    stat: 'Impact Storytelling'
  },
  {
    title: 'Global NGO Digital Strategy',
    category: 'Marketing',
    desc: 'Complete digital strategy and management for an international NGO working in Southern Africa.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    tags: ['Digital Strategy', 'Community Management', 'PR'],
    stat: 'Global Reach'
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
                "px-6 py-2 rounded-full text-xs font-bold transition-all",
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
              <p className="text-2xl font-display font-bold">20+</p>
            </div>
            <div className="p-6 bg-card border rounded-3xl space-y-4">
              <Palette className="w-8 h-8 text-primary" />
              <h4 className="font-bold uppercase tracking-widest text-xs">Design Systems</h4>
              <p className="text-2xl font-display font-bold">15+</p>
            </div>
            <div className="p-6 bg-card border rounded-3xl space-y-4 sm:col-span-2">
              <BarChart4 className="w-8 h-8 text-primary" />
              <h4 className="font-bold uppercase tracking-widest text-xs">Growth Campaigns</h4>
              <p className="text-2xl font-display font-bold">30+</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
