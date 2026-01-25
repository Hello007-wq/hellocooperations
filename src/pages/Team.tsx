import React from 'react';
import { Linkedin, Twitter, Mail, Code, Palette, BarChart4 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const team = [
  {
    name: 'Tinotenda Hove',
    role: 'Head of Technology',
    expertise: 'Software Engineering',
    // bio: 'Tinotenda is a systems architect with over a decade of experience building enterprise software for Zimbabwean institutions. He leads our development team in creating secure, scalable solutions.',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Weston N. Sululu',
    role: 'Creative Director',
    expertise: 'Institutional Design',
    // bio: 'Weston is a visionary designer focused on creating bold, professional identities for Harare\'s leading organizations. He ensures every Hello Co-Ops project meets world-class design standards.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Peviorgents Pimbirimano',
    role: 'Growth Strategist',
    expertise: 'Digital Marketing',
    // bio: 'Peviorgents specializes in institutional growth through data-driven digital marketing. He helps colleges and organizations in Harare expand their impact and reach the right audiences.',
    icon: BarChart4,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  }
];

export function Team() {
  return (
    <div className="flex flex-col gap-24 pb-20 pt-32">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-display leading-tight text-white">
            Meet the <span className="text-gradient">Founders.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded by industry experts in Harare, Hello Co-Operations is led by a team dedicated to transforming Zimbabwean institutions through digital excellence.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member) => (
            <div key={member.name} className="group flex flex-col items-center text-center space-y-8 p-12 bg-card border rounded-[4rem] hover:shadow-elegant transition-all">
              <div className="relative">
                <div className="w-48 h-48 rounded-[3rem] overflow-hidden shadow-xl ring-8 ring-primary/5 group-hover:ring-primary/10 transition-all group-hover:scale-105 duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <member.icon className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-display font-bold">{member.name}</h3>
                  <div className="text-primary font-bold text-sm uppercase tracking-wider">{member.role}</div>
                </div>
                <div className="px-4 py-1 bg-secondary/50 rounded-full inline-block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Expertise: {member.expertise}
                </div>
                {/* <p className="text-muted-foreground leading-relaxed text-sm">
                  {member.bio}
                </p> */}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t w-full justify-center">
                <a href="#" className="p-3 bg-secondary/30 rounded-xl hover:bg-primary hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-secondary/30 rounded-xl hover:bg-primary hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-secondary/30 rounded-xl hover:bg-primary hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-secondary/20 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">Our Leadership <span className="text-primary">Philosophy</span></h2>
              <div className="space-y-6">
                {[
                  { title: 'Local Expertise, Global Vision', desc: 'We understand the Harare market deeply while applying world-class technical and design standards.' },
                  { title: 'Direct Access', desc: 'When you work with Hello Co-Ops, you have direct access to our founders and their decades of collective experience.' },
                  { title: 'Institutional Commitment', desc: 'We build long-term relationships with our partners, seeing their success as our primary metric of achievement.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-6 bg-card rounded-3xl border shadow-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team collaborating" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="text-4xl font-display font-bold mb-2 italic">"Institutional transformation is a marathon, not a sprint."</div>
                <div className="font-bold uppercase tracking-widest text-sm opacity-80">— Hello Co-Operations Founders</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
