import React from 'react';
import { Phone, MapPin, Send, CheckCircle2, Search, Palette, Code, ShieldCheck, Rocket, Wrench, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import emailjs from 'emailjs-com';

const steps = [
  {
    title: 'Discovery',
    icon: Search,
    desc: 'We dive deep into your institutional goals, target audience, and current challenges to map out a clear digital strategy.',
  },
  {
    title: 'Design',
    icon: Palette,
    desc: 'Our design team creates high-fidelity prototypes and visual identities that reflect your institutional mission.',
  },
  {
    title: 'Development',
    icon: Code,
    desc: 'We build your solution using modern, secure, and scalable technology stacks that ensure long-term stability.',
  },
  {
    title: 'Testing',
    icon: ShieldCheck,
    desc: 'Rigorous quality assurance and security testing ensure your systems are resilient and user-friendly.',
  },
  {
    title: 'Delivery',
    icon: Rocket,
    desc: 'Seamless deployment to production environments with training for your staff on how to manage the new tools.',
  },
  {
    title: 'Maintenance',
    icon: Wrench,
    desc: 'Ongoing support and performance optimization to ensure your digital assets continue to drive growth.',
  },
];

export function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/263771629805?text=Hello%20Hello%20Co-Operations!%20I%20would%20like%20to%20inquire%20about%20your%20services.', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const institution = formData.get('institution');
    const service = formData.get('service');
    const message = formData.get('message');

    const whatsappMessage = `Hello Hello Co-Operations!%0A%0AMy name is ${name} from ${institution}.%0AI'm interested in ${service}.%0A%0AMessage: ${message}%0A%0AEmail: ${email}`;
    window.open(`https://wa.me/263771629805?text=${whatsappMessage}`, '_blank');
  };

  const handleEmailClick = async () => {
    const formEl = document.getElementById('contact-form') as HTMLFormElement | null;
    if (!formEl) {
      return;
    }
    const formData = new FormData(formEl);
    const name = (formData.get('name') || '').toString();
    const email = (formData.get('email') || '').toString();
    const institution = (formData.get('institution') || '').toString();
    const service = (formData.get('service') || '').toString();
    const message = (formData.get('message') || '').toString();

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    const fallbackMailto = () => {
      const to = 'hellocooperations@gmail.com';
      const subject = encodeURIComponent(`Inquiry: ${service} - ${institution}`);
      const body = encodeURIComponent(
        `Hello Hello Co-Operations,\n\nMy name is ${name} from ${institution}.` +
        `\nI'm interested in ${service}.` +
        `\n\nMessage: ${message}` +
        `\n\nEmail: ${email}`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    };

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          { name, email, institution, service, message },
          PUBLIC_KEY
        );
        alert('Email sent successfully. We will get back to you shortly.');
        return;
      } catch (err) {
        console.error('EmailJS send failed, falling back to mailto:', err);
        fallbackMailto();
        return;
      }
    }

    fallbackMailto();
  };

  return (
    <div className="flex flex-col gap-24 pb-20 pt-32">
      {/* Contact Hero */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-8 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            Available on WhatsApp
          </div>
          <h1 className="text-4xl md:text-5xl font-display leading-tight text-white">
            Let's Build the <span className="text-gradient">Future.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to transform your institution? Contact Hello Co-Operations today for a professional digital consultation.
          </p>
          <div className="pt-4">
            <Button size="lg" className="rounded-full px-12 h-16 text-xl bg-green-600 hover:bg-green-700 text-white group shadow-xl shadow-green-600/20 w-full sm:w-auto" onClick={handleWhatsAppClick}>
              <MessageCircle className="mr-3 w-6 h-6" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-secondary/20 py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold">How We Work</h2>
            <p className="text-muted-foreground">A proven, rigorous process designed for institutional excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="p-6 md:p-8 bg-card border rounded-2xl md:rounded-[3rem] space-y-4 md:space-y-6 relative overflow-hidden group hover:border-primary transition-all shadow-sm">
                <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-4xl sm:text-6xl font-display font-extrabold">{i + 1}</span>
                </div>
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <step.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-2xl font-display font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold">Direct Channels</h2>
              <p className="text-muted-foreground text-lg">
                Connect with Hello Co-Operations directly through the following platforms for faster response times.
              </p>
            </div>

            <div className="space-y-8">
              <a
                href="https://wa.me/263771629805?text=Hello%20Hello%20Co-Operations!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-6 p-4 -m-4 rounded-2xl hover:bg-secondary/30 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground">+263 771 629 805</p>
                  <p className="text-xs text-primary mt-1 font-bold">Message Hello Co-Operations now →</p>
                </div>
              </a>
              <a
                href="tel:+263771629805"
                className="flex items-start gap-6 p-4 -m-4 rounded-2xl hover:bg-secondary/30 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground">+263 771 629 805</p>
                </div>
              </a>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground">Harare, Zimbabwe</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary text-white rounded-2xl md:rounded-[3rem] space-y-4 shadow-glow">
              <div className="flex items-center gap-2 font-bold text-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-200" />
                Professional Consultation
              </div>
              <p className="text-blue-50">All inquiries receive a response within 24 hours. Our co-founders will review your needs personally.</p>
            </div>
          </div>

          <div className="p-6 md:p-10 border rounded-2xl md:rounded-[3rem] bg-card shadow-elegant space-y-8">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@institution.org" required className="rounded-xl h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution">Institution Name</Label>
                <Input id="institution" name="institution" placeholder="Harare College" required className="rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Interested Service</Label>
                <select id="service" name="service" className="w-full h-12 px-4 rounded-xl border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Software Development</option>
                  <option>Product Design & Branding</option>
                  <option>Digital Marketing</option>
                  <option>Management Systems</option>
                  <option>Other / Consulting</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help you?</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your project or goals..." className="rounded-xl min-h-[150px]" required />
              </div>
              <div className="space-y-3">
                <Button type="submit" size="lg" className="w-full rounded-xl h-14 text-lg group bg-green-600 hover:bg-green-700">
                  Continue on WhatsApp
                  <MessageCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
                <Button type="button" size="lg" className="w-full rounded-xl h-14 text-lg group bg-primary hover:bg-primary/90 text-white" onClick={handleEmailClick}>
                  Send Email
                  <Send className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="h-[400px] bg-secondary/30 rounded-[4rem] flex items-center justify-center text-muted-foreground border border-dashed relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/map-grid.png')] opacity-20" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <MapPin className="w-12 h-12 text-primary" />
            <span className="font-display font-bold text-xl">Harare, Zimbabwe</span>
          </div>
        </div>
      </section>
    </div>
  );
}
