import React from 'react';
import { Check, ShieldCheck, CreditCard, Clock, Layers } from 'lucide-react';
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
      '30% Deposit required to start',
    ],
    highlight: false,
    cta: 'Request Proposal',
  },
  {
    name: 'Milestone-Based Engagement',
    tagline: 'Best for large-scale institutional software.',
    price: 'Tiered Billing',
    features: [
      'Phased development approach',
      'Pay as we deliver results',
      'Flexible scope adjustments',
      'Continuous stakeholder feedback',
      'Ideal for portals, ERPs & AI systems',
      '30% Initial deposit',
    ],
    highlight: true,
    cta: 'Schedule Consultation',
  },
  {
    name: 'Monthly Retainer',
    tagline: 'Best for ongoing support, growth & optimization.',
    price: 'Institutional Retainer',
    features: [
      'Dedicated hours per month',
      'Priority support & updates',
      'Continuous digital marketing',
      'Security & performance monitoring',
      'Strategic growth consulting',
      'Month-to-month flexibility',
    ],
    highlight: false,
    cta: 'Start a Retainer',
  },
];

export function Pricing() {
  return (
    <div className="flex flex-col gap-24 pb-20 pt-32">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-display leading-tight">
            Transparent <span className="text-gradient">Investment.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Flexible engagement models aligned with institutional budgets, governance, and project complexity.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto px-4 md:px-6 space-y-12">
        {/* MOBILE CAROUSEL */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto">
          <div className="flex gap-6 snap-x snap-mandatory overflow-x-scroll pb-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`snap-center min-w-[85%] p-8 rounded-[3rem] flex flex-col gap-8 transition-all ${tier.highlight
                  ? 'bg-primary text-white shadow-glow ring-4 ring-primary/20 scale-[1.02]'
                  : 'bg-card border'
                  }`}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold">{tier.name}</h3>
                  <p className={tier.highlight ? 'text-blue-100' : 'text-muted-foreground'}>
                    {tier.tagline}
                  </p>
                  <div className="text-4xl font-display font-extrabold">{tier.price}</div>
                </div>

                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <div
                        className={`p-1 rounded-full ${tier.highlight ? 'bg-white/20' : 'bg-primary/10 text-primary'
                          }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={tier.highlight ? 'text-blue-50' : 'text-muted-foreground'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button
                    className={`w-full rounded-2xl h-14 text-lg font-bold ${tier.highlight ? 'bg-white text-primary hover:bg-blue-50' : ''
                      }`}
                    variant={tier.highlight ? 'default' : 'outline'}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-8">
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
                <p className={tier.highlight ? 'text-blue-100' : 'text-muted-foreground'}>
                  {tier.tagline}
                </p>
                <div className="text-4xl font-display font-extrabold">{tier.price}</div>
              </div>

              <ul className="space-y-4 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div
                      className={`p-1 rounded-full ${tier.highlight ? 'bg-white/20' : 'bg-primary/10 text-primary'
                        }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={tier.highlight ? 'text-blue-50' : 'text-muted-foreground'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button
                  className={`w-full rounded-2xl h-14 text-lg font-bold ${tier.highlight ? 'bg-white text-primary hover:bg-blue-50' : ''
                    }`}
                  variant={tier.highlight ? 'default' : 'outline'}
                >
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Confidence line */}
        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          All engagements begin with a structured discovery phase to align scope, budget, and institutional objectives.
        </p>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="p-12 border rounded-[4rem] bg-secondary/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <TrustItem icon={<CreditCard />} title="30% Deposit" />
          <TrustItem icon={<Layers />} title="Milestone Billing" />
          <TrustItem icon={<ShieldCheck />} title="Fixed Quote Protection" />
          <TrustItem icon={<Clock />} title="Retainer Cycles" />
        </div>
      </section>
    </div>
  );
}

function TrustItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="space-y-4 text-center md:text-left">
      <div className="w-8 h-8 text-primary mx-auto md:mx-0">{icon}</div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-sm text-muted-foreground">
        Designed to reduce risk and align with institutional procurement standards.
      </p>
    </div>
  );
}
