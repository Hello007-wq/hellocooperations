import React, { useState, useEffect } from 'react';
import {
  Globe,
  Smartphone,
  Settings,
  Layers,
  Palette,
  PenTool,
  Share2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: Globe,
    image: '/developer1.jfif',
    what: 'High-performance websites, portals, and web applications built with modern frameworks.',
    who: 'Colleges, hospitals, and organizations needing a robust digital headquarters.',
    benefit: 'Enhanced brand credibility, seamless interaction, and global accessibility.',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    icon: Smartphone,
    image: '/mobileapp.jfif',
    what: 'Native and cross-platform mobile apps for iOS and Android.',
    who: 'Institutions wanting to engage users on the go.',
    benefit: 'Higher engagement, real-time communication, and improved service access.',
  },
  {
    id: 'system-dev',
    title: 'System Development',
    icon: Settings,
    image: '/systemdev.jfif',
    what: 'Custom CRMs, ERPs, and internal systems for complex workflows.',
    who: 'Organizations managing large datasets and multi-department operations.',
    benefit: 'Operational efficiency, automation, and data clarity.',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    icon: Layers,
    image: '/ai vid.png',
    what: 'AI-powered automation, chatbots, and decision-support systems.',
    who: 'Institutions handling repetitive workflows and high enquiry volumes.',
    benefit: 'Lower costs, faster service delivery, smarter decisions.',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    icon: Layers,
    image: '/design1.jfif',
    what: 'User-focused interface and experience design.',
    who: 'Digital platforms needing clarity and usability.',
    benefit: 'Improved satisfaction, conversions, and professional polish.',
  },
  {
    id: 'branding',
    title: 'Branding',
    icon: Palette,
    image: '/branding.jfif',
    what: 'Strategic identity systems and brand guidelines.',
    who: 'Institutions establishing credibility and recognition.',
    benefit: 'Trust, consistency, and differentiation.',
  },
  {
    id: 'creative-design',
    title: 'Creative Design',
    icon: PenTool,
    image: '/creativedesign.jfif',
    what: 'Graphic design for reports, campaigns, and digital assets.',
    who: 'Institutions communicating impact visually.',
    benefit: 'Clear storytelling and professional representation.',
  },
  {
    id: 'marketing',
    title: 'Social Media Marketing',
    icon: Share2,
    image: '/marketing1.jfif',
    what: 'Strategic content and ad campaigns across social platforms.',
    who: 'Schools and hospitals reaching new audiences.',
    benefit: 'Measured growth and stronger communities.',
  },
  {
    id: 'support',
    title: 'Maintenance & Support',
    icon: ShieldCheck,
    image: '/maintenance.jfif',
    what: 'Ongoing support, security updates, and optimization.',
    who: 'Institutions that require stability and uptime.',
    benefit: 'Peace of mind, security, and long-term reliability.',
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) setActiveService(hash);
  }, []);

  return (
    <div className="flex flex-col gap-24 pb-20 pt-32">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-display">
            Enterprise-Grade <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our capabilities, then dive deeper into the services that matter most to your institution.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      {!activeService && (
        <section className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => {
                  setActiveService(service.id);
                  window.history.pushState(null, '', `#${service.id}`);
                }}
                className="group text-left p-6 rounded-2xl border bg-card hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {service.what}
                  </p>
                  <div className="inline-flex items-center text-primary font-bold gap-2">
                    View details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Detailed Service (only when selected) */}
      {activeService && (
        <section className="container mx-auto px-4 md:px-6 space-y-1 border-t pt-24">
          <button
            onClick={() => {
              setActiveService(null);
              window.history.pushState(null, '', '/services');
            }}
            className="text-sm font-bold text-primary hover:underline"
          >
            Back to all services
          </button>

          {services
            .filter(service => service.id === activeService)
            .map(service => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-display font-bold">
                    {service.title}
                  </h2>

                  <div className="space-y-6">
                    <div className="p-6 bg-secondary/30 rounded-2xl">
                      <h4 className="font-bold text-primary text-sm uppercase">What it is</h4>
                      <p className="text-muted-foreground">{service.what}</p>
                    </div>
                    <div className="p-6 bg-secondary/30 rounded-2xl">
                      <h4 className="font-bold text-primary text-sm uppercase">Who it's for</h4>
                      <p className="text-muted-foreground">{service.who}</p>
                    </div>
                    <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl">
                      <h4 className="font-bold text-primary text-sm uppercase">The benefit</h4>
                      <p className="font-medium">{service.benefit}</p>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="rounded-full px-8 mt-6 h-12 group">
                      Inquire About This Service
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div
                  className="aspect-square rounded-[3rem] border border-primary/10 overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>
            ))}
        </section>
      )}
    </div>
  );
}
