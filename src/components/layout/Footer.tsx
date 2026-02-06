import React from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t pt-20 pb-12">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          <div className="space-y-4">
            {/* <Link to="/" className="flex items-center gap-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fsd7yC1dZuyYpyDAISORlOeV95dJ3%2Flogo__06175f94.png?alt=media&token=731c3f47-6169-4db9-9ba0-da9cb3c65acb"
                alt="Hello Co-Operations"
                className="h-8 w-auto object-contain dark:invert"
              />
            </Link> */}
            <Link to="/" className="flex items-center gap-2">
              {/* Light theme logo */}
              <img
                src="/logo.png"
                alt="Hello Co-Operations"
                className="h-13 w-auto object-contain block dark:hidden"
              />
              {/* Dark theme logo */}
              <img
                src="/logo-dark.png"
                alt="Hello Co-Operations"
                className="h-13 w-auto object-contain hidden dark:block"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Smart software, bold design & digital growth. Harare's trusted digital transformation partner for institutions.
            </p>
            <div className="flex items-center gap-4">
              {/* <a href="#" className="p-2 bg-background border rounded-full hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a> */}
              <a href="https://www.x.com/HCoopetati87075" className="p-2 bg-background border rounded-full hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575608852361" className="p-2 bg-background border rounded-full hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/hellocooperations2026" className="p-2 bg-background border rounded-full hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">System Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">UI/UX & Branding</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">AI Automation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+263771629805" className="hover:text-primary transition-colors">0771629805</a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="https://wa.me/263771629805?text=Hello%20Hello%20Co-Operations!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Harare, Zimbabwe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Hello Co-Operations. All rights reserved.</p>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div> */}
          <div className="flex gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-primary">Privacy Policy</button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Privacy Policy</DialogTitle>
                  <DialogDescription>Overview of our psrivacy practices.</DialogDescription>
                </DialogHeader>
                <div className="text-sm text-muted-foreground space-y-3">
                  <p>We collect minimal information necessary to provide our services.</p>
                  <p>Your data is processed securely and never sold to third parties.</p>
                  <p>Contact us to request access, correction, or deletion of your data.</p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-primary">Terms of Service</button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Terms of Service</DialogTitle>
                  <DialogDescription>Summary of the terms for using our services.</DialogDescription>
                </DialogHeader>
                <div className="text-sm text-muted-foreground space-y-3">
                  <p>Use of this site and services constitutes acceptance of these terms.</p>
                  <p>All content is provided "as is" without warranties of any kind.</p>
                  <p>By engaging our services, you agree to our payment and usage policies.</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
