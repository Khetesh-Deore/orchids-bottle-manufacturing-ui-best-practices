"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg font-['Outfit']">A</span>
            </div>
            <span className="text-xl font-semibold text-foreground font-['Outfit'] tracking-tight">
              AquaBottle
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-['Outfit']"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 font-['Outfit']">
              <a href="#contact">Get Quote</a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors font-['Outfit']"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-primary hover:bg-primary/90 font-['Outfit']">
              <a href="#contact" onClick={() => setIsOpen(false)}>Get Quote</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
