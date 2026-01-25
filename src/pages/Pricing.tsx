import React from 'react';
import { Check, Info, ShieldCheck, CreditCard, Clock, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const pricingTiers = [
  {
    name: 'Fixed-Price Project',
    tagline: 'Best for specific, well-defined deliverables.',
    price: 'Custom Quote',
    features: [
      'Pre-defined scope & timeline',
      'Fixed cost guarantee',
      'Dedicated project manager',
      'Quality assurance included',
      'Ideal for branding & core websites',
      '30% Deposit required to start'
    ],
    highlight: false,
    cta: 'Get a Quote'
  },
  {
    name: 'Milestone-Based',
    tagline: 'Best for large-scale institutional software.',
    price: 'Tiered Billing',
    features: [
      'Phased development approach',
      'Pay as we deliver results',
      'Flexible scope adjustments',
      'Continuous stakeholder feedback',
      'Ideal for portals & ERP systems',
      '30% Initial deposit'
    ],
    highlight: true,
    cta: 'Discuss My Project'
  },
  {
    name: 'Monthly Retainer',
    tagline: 'Best for ongoing marketing & maintenance.',
    price: 'Starting $500/mo',
    features: [
      'Dedicated hours per month',
      'Priority support & updates',
      'Continuous digital marketing',
      'Security & performance monitoring',
      'Strategic growth consulting',
      'Month-to-month flexibility'
    ],
    highlight: false,
    cta: 'Subscribe Now'
  }
];

export function Pricing() {
  return (
    <div className="flex flex-col gap-24 pb-20 pt-32">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-display leading-tight text-gray-900 dark:text-white">
            Transparent <span className="text-gradient">Investment.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Flexible billing models designed to align with institutional budgets and project requirements.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-10 rounded-[3rem] flex flex-col gap-8 transition-all ${tier.highlight
                  ? 'bg-primary text-white shadow-glow ring-4 ring-primary/20 scale-105 relative z-10'
                  : 'bg-card border shadow-sm hover:shadow-elegant'
                }`}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold">{tier.name}</h3>
                <p className={tier.highlight ? 'text-blue-100' : 'text-muted-foreground'}>{tier.tagline}</p>
                <div className="text-4xl font-display font-extrabold">{tier.price}</div>
              </div>

              <div className="space-y-4 flex-grow">
                <h4 className={`text-sm font-bold uppercase tracking-widest ${tier.highlight ? 'text-blue-200' : 'text-primary'}`}>What's Included</h4>
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <div className={`p-1 rounded-full shrink-0 ${tier.highlight ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={tier.highlight ? 'text-blue-50' : 'text-muted-foreground'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact">
                <Button
                  className={`w-full rounded-2xl h-14 text-lg font-bold ${tier.highlight
                      ? 'bg-white text-primary hover:bg-blue-50 shadow-lg'
                      : ''
                    }`}
                  variant={tier.highlight ? 'default' : 'outline'}
                >
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Policy / Trust */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="p-12 border rounded-[4rem] bg-secondary/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <CreditCard className="w-8 h-8 text-primary mx-auto md:mx-0" />
            <h4 className="font-bold text-lg">30% Deposit</h4>
            <p className="text-sm text-muted-foreground">All projects require a 30% commitment deposit before the discovery phase begins.</p>
          </div>
          <div className="space-y-4">
            <Layers className="w-8 h-8 text-primary mx-auto md:mx-0" />
            <h4 className="font-bold text-lg">Milestone Billing</h4>
            <p className="text-sm text-muted-foreground">For larger systems, we bill based on pre-agreed technical milestones and deliveries.</p>
          </div>
          <div className="space-y-4">
            <ShieldCheck className="w-8 h-8 text-primary mx-auto md:mx-0" />
            <h4 className="font-bold text-lg">Fixed Quote</h4>
            <p className="text-sm text-muted-foreground">Once a fixed-price quote is signed, the price is locked regardless of internal complexity.</p>
          </div>
          <div className="space-y-4">
            <Clock className="w-8 h-8 text-primary mx-auto md:mx-0" />
            <h4 className="font-bold text-lg">Retainer Cycles</h4>
            <p className="text-sm text-muted-foreground">Retainers are billed at the start of each monthly cycle for guaranteed priority support.</p>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table (Placeholder) */}
      <section className="container mx-auto px-4 md:px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Indicative Pricing</h2>
          <p className="text-muted-foreground">General pricing ranges for common institutional requirements.</p>
        </div>

        <div className="overflow-hidden rounded-[3rem] border bg-card shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary/50 border-b">
                <th className="p-8 font-display font-bold">Service Category</th>
                <th className="p-8 font-display font-bold">Indicative Range</th>
                <th className="p-8 font-display font-bold">Typical Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { category: 'Institutional Branding (Logo, Voice, Identity)', price: '$500 - $1,500', duration: '2-4 Weeks' },
                { category: 'Institutional Website (10+ Pages, CMS)', price: '$1,200 - $3,500', duration: '4-8 Weeks' },
                { category: 'Student/Patient Portal (Custom Build)', price: '$5,000+', duration: '3-6 Months' },
                { category: 'Mobile App (iOS & Android)', price: '$4,000+', duration: '3-5 Months' },
                { category: 'Monthly Digital Marketing Retainer', price: '$500 - $2,500/mo', duration: 'Ongoing' },
              ].map((row) => (
                <tr key={row.category} className="hover:bg-secondary/10 transition-colors">
                  <td className="p-8 font-medium">{row.category}</td>
                  <td className="p-8 text-primary font-bold">{row.price}</td>
                  <td className="p-8 text-muted-foreground">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-8 bg-secondary/30 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Info className="w-4 h-4" />
              Final prices depend on technical specifications and scope. Contact us for a detailed proposal.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
