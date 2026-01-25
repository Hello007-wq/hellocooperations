import React from 'react';
import {
  Globe,
  Smartphone,
  Settings,
  Layers,
  Palette,
  PenTool,
  Layout,
  Share2,
  ShieldCheck,
  ArrowRight
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
    benefit: 'Enhanced brand credibility, seamless student/patient interaction, and global accessibility.',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    icon: Smartphone,
    image: '/mobileapp.jfif',
    what: 'Native and cross-platform mobile apps for iOS and Android.',
    who: 'Institutions wanting to engage users on the go through personalized mobile experiences.',
    benefit: 'Increased user retention, real-time notifications, and improved accessibility to services.',
  },
  {
    id: 'system-dev',
    title: 'System Development',
    icon: Settings,
    image: '/systemdev.jfif',
    what: 'Custom internal management systems, CRMs, and ERPs tailored to complex workflows.',
    who: 'Organizations dealing with large datasets and multi-departmental coordination.',
    benefit: 'Operational efficiency, eliminated data silos, and automated administrative tasks.',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    icon: Layers,
    image: '/design1.jfif',
    what: 'User-centric interface design and experience mapping based on psychological principles.',
    who: 'Digital products needing intuitive navigation and high conversion rates.',
    benefit: 'Reduced user frustration, increased completion rates for tasks, and professional aesthetic appeal.',
  },
  {
    id: 'branding',
    title: 'Branding',
    icon: Palette,
    image: '/branding.jfif',
    what: 'Strategic identity design including logos, color systems, and brand voice guidelines.',
    who: 'Institutions looking to establish a strong, professional, and memorable market presence.',
    benefit: 'Trust from stakeholders, market differentiation, and a unified institutional identity.',
  },
  // {
  //   id: 'product-design',
  //   title: 'Product Design',
  //   icon: Layout,
  //   what: 'End-to-end design of digital products from concept to high-fidelity prototypes.',
  //   who: 'Innovators and organizations launching new digital services or tools.',
  //   benefit: 'Validated product-market fit, reduced development risk, and superior market positioning.',
  // },
  {
    id: 'creative-design',
    title: 'Creative Design',
    icon: PenTool,
    image: '/creativedesign.jfif',
    what: 'Graphic design for digital and print assets, annual reports, and marketing collateral.',
    who: 'Institutions requiring high-quality visual communications for reports and campaigns.',
    benefit: 'Clear communication of impact, professional representation, and engaging visual storytelling.',
  },
  {
    id: 'marketing',
    title: 'Social Media Marketing',
    icon: Share2,
    image: '/marketing1.jfif',
    what: 'Strategic content creation, management, and ad campaigns across social platforms.',
    who: 'Schools and hospitals wanting to reach prospective students or patients effectively.',
    benefit: 'Direct reach to target demographics, measurable growth, and community building.',
  },
  {
    id: 'support',
    title: 'Maintenance & Support',
    icon: ShieldCheck,
    image: '/maintenance.jfif',
    what: 'Ongoing technical support, security updates, and performance optimization.',
    who: 'Institutions that cannot afford downtime or security vulnerabilities.',
    benefit: 'Long-term system stability, guaranteed security, and peace of mind for leadership.',
  },
];

export function Services() {
  return (
    <div className="flex flex-col gap-24 pb-20 pt-32">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-display leading-tight text-gray-900 dark:text-white">
            Enterprise-Grade <span className="text-gradient">Services.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We offer a comprehensive suite of digital transformation services designed to modernize and scale Harare's leading institutions.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="space-y-32">
        {services.map((service, i) => (
          <div key={service.id} id={service.id} className="scroll-mt-32">
            <div className={`container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-8 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                  <service.icon className="w-4 h-4" />
                  Detailed Service
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold">{service.title}</h2>

                <div className="space-y-6">
                  <div className="p-6 bg-secondary/30 rounded-2xl space-y-2">
                    <h4 className="font-bold text-primary text-sm uppercase tracking-widest">What it is</h4>
                    <p className="text-muted-foreground">{service.what}</p>
                  </div>
                  <div className="p-6 bg-secondary/30 rounded-2xl space-y-2">
                    <h4 className="font-bold text-primary text-sm uppercase tracking-widest">Who it is for</h4>
                    <p className="text-muted-foreground">{service.who}</p>
                  </div>
                  <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl space-y-2">
                    <h4 className="font-bold text-primary text-sm uppercase tracking-widest">The Benefit</h4>
                    <p className="text-foreground font-medium">{service.benefit}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/contact">
                    <Button className="rounded-full px-8 h-12 group">
                      Inquire About This Service
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className={`relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div
                  className="aspect-square bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-[3rem] border border-primary/10 flex items-center justify-center p-12 overflow-hidden group"
                  style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <service.icon className="w-1/2 h-1/2 text-primary opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

                  {/* Visual represention decorations */}
                  <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl" />
                  <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-3xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-12 md:p-24 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Need a Custom Package?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every institution is unique. We can combine our services into a custom digital transformation package that fits your specific goals.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-12 h-14 text-lg">Talk to a Consultant</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
