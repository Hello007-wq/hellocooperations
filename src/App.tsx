import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages (to be implemented)
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Portfolio } from './pages/Portfolio';
import { PortfolioMore } from './pages/PortfolioMore';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';

type SeoEntry = {
  title: string;
  description: string;
};

const BASE_URL = 'https://hellocooperations.com';

const SEO_BY_PATH: Record<string, SeoEntry> = {
  '/': {
    title: 'Hello Co-Operations | Tech Company in Zimbabwe',
    description:
      'Hello Co-Operations is a Harare-based tech company in Zimbabwe delivering software development, UI/UX design, branding, and digital marketing services.',
  },
  '/about': {
    title: 'About Us | Hello Co-Operations Zimbabwe',
    description:
      'Learn about Hello Co-Operations, a Zimbabwe tech company helping institutions and businesses grow with digital transformation.',
  },
  '/services': {
    title: 'Services | Software, Design & Marketing in Zimbabwe',
    description:
      'Explore our services in Zimbabwe: web development, mobile apps, system development, AI automation, branding, and digital marketing.',
  },
  '/pricing': {
    title: 'Pricing | Hello Co-Operations',
    description:
      'View flexible pricing for software development, design, and marketing services from our Harare-based team.',
  },
  '/portfolio': {
    title: 'Portfolio | Hello Co-Operations',
    description:
      'See selected software, branding, and digital projects delivered by Hello Co-Operations for organizations in Zimbabwe and beyond.',
  },
  '/portfolio/more': {
    title: 'More Projects | Hello Co-Operations Zimbabwe',
    description:
      'Browse more software, automation, design, and marketing projects by Hello Co-Operations, a Harare-based tech company in Zimbabwe.',
  },
  '/team': {
    title: 'Team | Hello Co-Operations',
    description:
      'Meet the Hello Co-Operations team of developers, designers, and strategists building digital products from Harare, Zimbabwe.',
  },
  '/contact': {
    title: 'Contact | Hello Co-Operations Zimbabwe',
    description:
      'Contact Hello Co-Operations in Harare, Zimbabwe for software, design, and digital growth services.',
  },
};

function upsertMeta(selector: string, create: () => HTMLMetaElement, content: string) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLinkCanonical(href: string) {
  let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', href);
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const matchedPath = Object.keys(SEO_BY_PATH)
      .sort((a, b) => b.length - a.length)
      .find((path) => pathname === path || pathname.startsWith(`${path}/`));
    const seo = matchedPath ? SEO_BY_PATH[matchedPath] : SEO_BY_PATH['/'];
    const canonicalUrl = `${BASE_URL}${pathname === '/' ? '/' : pathname}`;

    document.title = seo.title;
    upsertMeta('meta[name="description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      return meta;
    }, seo.description);
    upsertMeta('meta[name="robots"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      return meta;
    }, 'index, follow, max-image-preview:large');
    upsertMeta('meta[property="og:title"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      return meta;
    }, seo.title);
    upsertMeta('meta[property="og:description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      return meta;
    }, seo.description);
    upsertMeta('meta[property="og:url"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      return meta;
    }, canonicalUrl);
    upsertMeta('meta[name="twitter:title"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:title');
      return meta;
    }, seo.title);
    upsertMeta('meta[name="twitter:description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:description');
      return meta;
    }, seo.description);
    upsertLinkCanonical(canonicalUrl);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.toggle('dark', userPrefersDark);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <SeoManager />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/more" element={<PortfolioMore />} />
          <Route path="/portfolio/more/:category" element={<PortfolioMore />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
