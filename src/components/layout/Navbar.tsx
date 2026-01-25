import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' }, // Removed the Home icon
  { name: 'Services', href: '/services' },
  // { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const isDarkNow = document.documentElement.classList.contains('dark');
    if (isDarkNow) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-background/90 backdrop-blur-md border-b py-4 shadow-sm' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-100"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Empowering Harare's Institutions
            </div>
            {/* <img 
              src="/logo.png" 
              alt="Hello Co-Operations" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            /> */}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'px-3 py-2 text-sm  transition-all hover:text-primary relative group/link flex items-center gap-1.5',
                  location.pathname === link.href ? 'text-primary' : 'text-foreground/70'
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <div className="w-px h-6 bg-border mx-2" />
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary transition-all hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/contact">
              <Button className="rounded-full px-6  shadow-lg hover:shadow-primary/20 transition-all">Request a Quote</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b animate-fade-in shadow-xl">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-lg font-bold transition-colors flex items-center gap-3',
                  location.pathname === link.href ? 'text-primary' : 'text-foreground/70'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-xl py-6 text-lg font-bold shadow-lg">Talk to Us</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
