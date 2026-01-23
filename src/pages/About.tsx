import React from 'react';
import { Target, Eye, Heart, Award, Building2, School, Hospital } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col gap-24 pb-20 pt-32">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-display leading-tight text-white">
            Beyond Digital. <br /><span className="text-gradient">Institutional Growth.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hello Co-Operations was founded in Harare with a singular mission: to bridge the gap between complex technology and institutional excellence. We are more than an agency; we are your strategic transformation partner.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-secondary/20 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Office space" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In a rapidly evolving digital landscape, many organizations in Zimbabwe found themselves left behind by generic solutions that didn't understand the unique needs of institutional scale. 
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Hello Co-Operations was born from the collective expertise of designers, developers, and strategists who believed that Harare's colleges, hospitals, and enterprises deserved world-class digital assets. We set out to build a firm that combines technical rigor with a deep understanding of organizational growth.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-display font-extrabold text-primary mb-2">50+</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-extrabold text-primary mb-2">15+</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 bg-primary text-white rounded-[3rem] space-y-6 shadow-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-32 h-32" />
            </div>
            <Target className="w-12 h-12 text-blue-200" />
            <h3 className="text-3xl font-display font-bold">Our Mission</h3>
            <p className="text-blue-50 leading-relaxed text-lg">
              To empower Zimbabwean institutions through bold design, innovative software, and strategic digital marketing, ensuring they lead in their respective sectors.
            </p>
          </div>
          <div className="p-12 bg-card border rounded-[3rem] space-y-6 shadow-elegant relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
              <Eye className="w-32 h-32" />
            </div>
            <Eye className="w-12 h-12 text-primary" />
            <h3 className="text-3xl font-display font-bold">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To be the premier digital transformation firm in Southern Africa, recognized for building the most resilient and impactful digital ecosystems for institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="container mx-auto px-4 md:px-6 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Built for Institutions</h2>
          <p className="text-muted-foreground">We focus our expertise on sectors where digital reliability and impact matter most.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Colleges & Universities', icon: School, desc: 'Modernizing student experiences, administration, and digital presence for educational excellence.', image: '/public/sample.jfif' },
            { title: 'Hospitals & Healthcare', icon: Hospital, desc: 'Implementing secure, efficient digital systems that enhance patient care and operational management.', image: '/public/sample.jfif' },
            { title: 'Corporate Organizations', icon: Building2, desc: 'Designing and developing high-performance digital tools that drive business growth and brand authority.', image: '/public/sample.jfif' },
          ].map((item) => (
            <div
              key={item.title}
              className="p-10 border rounded-[2.5rem] space-y-6 bg-card hover:shadow-xl transition-shadow text-center relative overflow-hidden"
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10">
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <item.icon className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-display font-bold text-white">{item.title}</h4>
                <p className="text-white leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Exist */}
      <section className="bg-secondary/20 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center">Why Hello Co-Operations Exists</h2>
            <div className="space-y-8">
              {[
                { title: 'Credibility Over Convenience', desc: 'In a market filled with freelancers, we provide institutional stability and enterprise-grade reliability.' },
                { title: 'Bold Design for Bold Missions', desc: 'We believe that institutions with important missions deserve design that reflects their significance.' },
                { title: 'Technology for Growth', desc: 'Technology shouldn\'t just work; it should be a catalyst for organizational expansion and efficiency.' },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 font-display font-bold text-xl">
                    {i + 1}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-display font-bold">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
