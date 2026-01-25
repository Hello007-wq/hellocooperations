import React from 'react';
import { ArrowRight, Code, Palette, BarChart, Shield, Zap, Globe, Users, Building2, School, Hospital } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Software Development',
    description: 'Custom web and mobile applications tailored for institutional scale and security.',
    icon: Code,
    href: '/services#web-dev',
  },
  {
    title: 'Product Design & Branding',
    description: 'Strategic design that defines your identity and enhances user experience.',
    icon: Palette,
    href: '/services#design',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven growth strategies to expand your reach and institutional impact.',
    icon: BarChart,
    href: '/services#marketing',
  },
];

const institutions = [
  { name: 'Colleges & Universities', icon: School },
  { name: 'Hospitals & Healthcare', icon: Hospital },
  { name: 'Government Organizations', icon: Building2 },
  { name: 'Corporate Enterprises', icon: Users },
];

export function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[95vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero1.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" />
        </div>
        <div className="container mx-auto px-8 lg:px-16 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display leading-tight text-white">
              Digital Transformation for the <br /> <span className="text-gradient">Future-Ready</span> Institution
            </h1>
            <p className="text-sm md:text-base text-white/90 max-w-2xl leading-relaxed">
              Hello Co-Operations delivers smart software, bold design, and digital growth strategies to help colleges, hospitals, and organizations thrive in the digital age.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-6 md:px-8 h-12 md:h-14 text-sm md:text-lg group">
                  Request a Quote
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="rounded-full px-6 md:px-8 h-12 md:h-14 text-sm md:text-lg">
                  Talk to Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Institutions Section */}
      <section className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {institutions.map((item) => (
            <div key={item.name} className="flex flex-col items-center justify-center text-center space-y-2 md:space-y-3">
              <div className="p-2 md:p-3 bg-primary/10 rounded-xl md:rounded-2xl text-primary">
                <item.icon className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <span className="font-display font-bold text-xs md:text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-6 lg:px-12 space-y-12 md:space-y-16">
        <div className="text-center space-y-2 md:space-y-4 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-display font-bold">Comprehensive Solutions</h2>
          <p className="text-muted-foreground text-sm md:text-base">We provide enterprise-grade services to modernize your operations and expand your digital footprint.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group p-5 md:p-8 bg-card border rounded-xl md:rounded-3xl hover:border-primary/50 transition-all hover:shadow-elegant relative overflow-hidden flex flex-col"
              style={{ backgroundImage: `url('#')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <service.icon className="w-16 md:w-32 h-16 md:h-32" />
              </div>
              <div className="space-y-3 md:space-y-6 relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-primary rounded-lg md:rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <service.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-2xl font-display font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-white text-xs md:text-base leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link to={service.href} className="inline-flex items-center text-primary font-bold gap-2 group/link mt-4 md:mt-auto text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/20 py-16 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-2xl md:text-5xl font-display font-bold">Why Institutions Choose <span className="text-primary">Hello Co-Operations</span></h2>
                <p className="text-muted-foreground text-sm md:text-lg">We don't just build software; we build institutional assets that drive growth and operational excellence.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { title: 'Enterprise-Ready', icon: Shield, desc: 'Secure, scalable solutions built for high-stakes environments.' },
                  { title: 'Rapid Delivery', icon: Zap, desc: 'Efficient workflows that respect your institutional timelines.' },
                  { title: 'Global Standards', icon: Globe, desc: 'World-class tech stack applied to local Zimbabwean needs.' },
                  { title: 'Dedicated Support', icon: Users, desc: 'Ongoing maintenance to ensure your systems never stop.' },
                ].map((item) => (
                  <div key={item.title} className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="p-1.5 md:p-2 bg-primary/10 rounded-lg text-primary">
                        <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <h4 className="font-bold text-sm md:text-base">{item.title}</h4>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-blue-600/10 rounded-full absolute -inset-4 blur-3xl animate-pulse" />
              <div className="relative bg-card border rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 border-b pb-4 md:pb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full" />
                  <div>
                    <div className="font-bold text-sm md:text-base">Institutional Excellence</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Certified Partner</div>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-secondary rounded shrink-0" />
                      <div className="space-y-1 md:space-y-2 flex-grow">
                        <div className="h-3 md:h-4 bg-secondary rounded w-3/4" />
                        <div className="h-2 md:h-3 bg-secondary/50 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-2 md:pt-4">
                  <Button variant="outline" className="w-full rounded-lg md:rounded-xl text-sm">View Our Case Studies</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-6 lg:px-12 text-center space-y-8 md:space-y-16">
        <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-muted-foreground">Trusted by Harare's Leading Institutions</h3>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
          {/* Placeholder Logos */}
          <div className="text-lg md:text-2xl font-bold font-display">UNIVERSITY</div>
          <div className="text-lg md:text-2xl font-bold font-display">MEDICAL CTR</div>
          <div className="text-lg md:text-2xl font-bold font-display hidden sm:block">GLOBAL ORG</div>
          <div className="text-lg md:text-2xl font-bold font-display hidden sm:block">GOVT DEPT</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="bg-primary rounded-2xl md:rounded-[3rem] p-8 md:p-32 text-white text-center space-y-8 md:space-y-16 relative overflow-hidden shadow-glow">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-2xl md:text-6xl font-display font-bold relative z-10">Ready to transform your <br className="hidden md:block" /> institution?</h2>
          <p className="text-blue-100 text-sm md:text-xl max-w-2xl mx-auto relative z-10">
            Join the ranks of Harare's most digitally-advanced organizations. Let's build your future together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 relative z-10 pt-2 md:pt-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-blue-50 rounded-full px-6 md:px-8 h-12 md:h-14 text-sm md:text-lg">
                Request a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 rounded-full px-6 md:px-8 h-12 md:h-14 text-sm md:text-lg">
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}