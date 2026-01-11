"use client";

import { MapPin, Phone, Mail, Clock, Download, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg font-['Outfit']">A</span>
                </div>
                <span className="text-xl font-semibold font-['Outfit']">Adishri Enterprises</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-['Outfit']">
                Leading manufacturer of premium HDPE & LDPE bottles and Jerry cans. Committed to quality and industrial excellence.
              </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors text-card-foreground"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-['Outfit']">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-['Outfit']"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-['Outfit']">Contact Info</h3>
            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <MapPin size={18} className="shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm font-['Outfit']">
                      PLOT NO B 33 2 Shendra MIDC Shendra Chh Sambhajinagar Maharashtra 431007
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="shrink-0" />
                    <span className="text-muted-foreground text-sm font-['Outfit']">+91 98765 43210</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="shrink-0" />
                    <span className="text-muted-foreground text-sm font-['Outfit']">info@adishrienterprises.com</span>
                  </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm font-['Outfit']">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </span>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-6 font-['Outfit']">Download Brochure</h3>
              <p className="text-muted-foreground text-sm mb-4 font-['Outfit']">
                Get our complete product catalog with specifications and pricing.
              </p>
            <Button
              variant="secondary"
              className="w-full gap-2 font-['Outfit']"
              asChild
            >
              <a href="/brochure.pdf" download>
                <Download size={18} />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground text-sm font-['Outfit']">
                  © {new Date().getFullYear()} Adishri Enterprises. All rights reserved.
                </p>
              <div className="flex gap-6">
                <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors font-['Outfit']">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors font-['Outfit']">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}
