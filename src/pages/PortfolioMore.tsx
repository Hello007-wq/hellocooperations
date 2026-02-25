import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { moreProjects, portfolioCategories, type PortfolioCategory } from '@/data/portfolioProjects';
import { cn } from '@/lib/utils';

export function PortfolioMore() {
  const [searchParams] = useSearchParams();
  const { category } = useParams();
  const categoryMap: Record<string, Exclude<PortfolioCategory, 'All'>> = {
    software: 'Software',
    automation: 'Automation',
    design: 'Design',
    marketing: 'Marketing',
  };
  const queryCategory = (searchParams.get('category') || '').toLowerCase();
  const activeCategory = categoryMap[(category || queryCategory || '').toLowerCase()] || 'Software';

  const filteredProjects = moreProjects.filter((project) => project.category === activeCategory);

  return (
    <div className="flex flex-col gap-16 pb-20 pt-32">
      <section className="container mx-auto px-4 md:px-6 space-y-6">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-display leading-tight">
            More <span className="text-gradient">{activeCategory}</span> Projects
          </h1>
          <p className="text-muted-foreground text-lg">
            Additional {activeCategory.toLowerCase()} project listings for quick review. Small cards, no screenshots.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          {portfolioCategories.filter((item) => item !== 'All').map((categoryItem) => (
            <Link
              key={categoryItem}
              to={`/portfolio/more/${categoryItem.toLowerCase()}`}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-bold transition-all border',
                activeCategory === categoryItem
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-card text-muted-foreground hover:text-primary hover:border-primary/40'
              )}
            >
              {categoryItem}
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        {filteredProjects.length === 0 ? (
          <div className="p-6 md:p-8 rounded-2xl border bg-card text-center space-y-2">
            <h3 className="text-xl font-display font-bold">No {activeCategory.toLowerCase()} projects listed yet</h3>
            <p className="text-sm text-muted-foreground">
              We can still share relevant examples during a consultation.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <Button className="rounded-full px-6">Request Examples</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {filteredProjects.map((project) => (
            <div
              key={`${project.category}-${project.name}`}
              className="p-5 md:p-6 bg-card border rounded-2xl flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <div className="space-y-2">
                <div className="inline-flex px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-lg font-display font-bold leading-tight">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.summary}</p>
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 text-primary font-bold text-sm hover:underline self-start"
                >
                  Link
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  to="/contact"
                  className="shrink-0 inline-flex items-center gap-1 text-primary font-bold text-sm hover:underline self-start"
                >
                  Inquire
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
            ))}
          </div>
        )}
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="rounded-3xl border bg-secondary/20 p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-display font-bold">Need a full walkthrough?</h2>
            <p className="text-muted-foreground">We can share relevant examples based on your institution and goals.</p>
          </div>
          <Link to="/contact">
            <Button className="rounded-full px-6">Request a Portfolio Walkthrough</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
