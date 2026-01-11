"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Factory, Leaf, Shield, Sparkles, Target, Eye, Users, ChevronLeft, ChevronRight, Send } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

const products = [
  {
    name: "Classic 500ml",
    capacity: "500ml",
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=500&fit=crop",
    dimensions: "H: 210mm | D: 65mm",
    features: ["BPA Free", "Recyclable", "Food Grade"]
  },
  {
    name: "Premium 1L",
    capacity: "1 Liter",
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=500&fit=crop",
    dimensions: "H: 280mm | D: 75mm",
    features: ["Crystal Clear", "UV Protected", "Leak Proof"]
  },
  {
    name: "Pharma 200ml",
    capacity: "200ml",
    category: "Pharmaceutical",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&h=500&fit=crop",
    dimensions: "H: 140mm | D: 55mm",
    features: ["Amber Glass", "Child Safe", "Tamper Evident"]
  },
  {
    name: "Cosmetic 100ml",
    capacity: "100ml",
    category: "Cosmetics",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=500&fit=crop",
    dimensions: "H: 120mm | D: 45mm",
    features: ["Frosted Finish", "Pump Ready", "Luxury Feel"]
  },
  {
    name: "Sport 750ml",
    capacity: "750ml",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1553531580-652231b0df8b?w=400&h=500&fit=crop",
    dimensions: "H: 250mm | D: 70mm",
    features: ["Squeeze Friendly", "Spill Proof", "Ergonomic"]
  },
  {
    name: "Mini 250ml",
    capacity: "250ml",
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?w=400&h=500&fit=crop",
    dimensions: "H: 155mm | D: 55mm",
    features: ["Travel Size", "Lightweight", "Stackable"]
  },
];

const values = [
  { icon: Shield, title: "Quality Assured", description: "ISO 9001 certified manufacturing with rigorous quality control at every stage." },
  { icon: Leaf, title: "Eco-Friendly", description: "Sustainable materials and processes to minimize environmental impact." },
  { icon: Factory, title: "Modern Facilities", description: "State-of-the-art machinery with automated precision manufacturing." },
  { icon: Award, title: "Industry Leader", description: "Trusted by 500+ brands worldwide for over 25 years." },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "50M+", label: "Bottles Produced" },
  { value: "99.9%", label: "Quality Rate" },
];

export default function Home() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const scrollGallery = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = 320;
      galleryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary font-['Outfit']">Premium Quality Since 1995</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-['Outfit']">
                Crafting Perfect
                <span className="block text-primary">Bottles</span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-medium text-muted-foreground mt-2">For Every Purpose</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-['Outfit']">
                Industry-leading manufacturer of premium glass and plastic bottles. From beverages to pharmaceuticals, we deliver excellence in every container.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 font-['Outfit']" asChild>
                  <a href="#products">
                    Explore Products
                    <ArrowRight size={20} className="ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 font-['Outfit']" asChild>
                  <a href="#contact">Request Quote</a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="text-2xl sm:text-3xl font-bold text-primary font-['Outfit']">{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-['Outfit']">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-card rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop"
                    alt="Premium bottles showcase"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground font-['Outfit']">ISO Certified</p>
                    <p className="text-sm text-muted-foreground font-['Outfit']">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=500&fit=crop"
                      alt="Manufacturing facility"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=400&fit=crop"
                      alt="Quality control"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop"
                      alt="Bottle production"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop"
                      alt="Team at work"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 font-['Outfit']">About Us</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-['Outfit']">
                  Pioneering Excellence in Bottle Manufacturing
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed font-['Outfit']">
                Founded in 1995, AquaBottle Co. has grown from a small family business to one of the region&apos;s most trusted bottle manufacturers. Our journey of over 25 years has been marked by continuous innovation and an unwavering commitment to quality.
              </p>

              <p className="text-muted-foreground leading-relaxed font-['Outfit']">
                We specialize in producing high-quality glass and plastic bottles for diverse industries including beverages, pharmaceuticals, cosmetics, and food packaging. Our state-of-the-art facility houses advanced machinery capable of producing millions of bottles monthly while maintaining the highest quality standards.
              </p>

              <div className="bg-secondary rounded-2xl p-6">
                <p className="text-lg font-semibold text-foreground mb-2 font-['Outfit']">Our Mission</p>
                <p className="text-muted-foreground italic font-['Crimson_Pro'] text-lg">
                  &ldquo;To deliver innovative packaging solutions that protect, preserve, and present our clients&apos; products while maintaining sustainable practices for a better tomorrow.&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {values.slice(0, 2).map((value) => (
                  <div key={value.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <value.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-['Outfit']">{value.title}</p>
                      <p className="text-sm text-muted-foreground font-['Outfit']">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 font-['Outfit']">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-['Outfit']">Our Core Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-['Outfit']">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-['Outfit']">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 font-['Outfit']">Our Products</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-['Outfit']">Premium Bottle Collection</h2>
              <p className="text-muted-foreground mt-2 max-w-xl font-['Outfit']">
                Discover our range of high-quality bottles designed for various industries and applications.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => scrollGallery("left")} aria-label="Scroll left">
                <ChevronLeft size={20} />
              </Button>
              <Button variant="outline" size="icon" onClick={() => scrollGallery("right")} aria-label="Scroll right">
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          <div 
            ref={galleryRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <Card key={product.name} className="min-w-[280px] sm:min-w-[300px] snap-start group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary font-['Outfit']">
                      {product.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground font-['Outfit']">{product.name}</h3>
                    <span className="text-lg font-bold text-primary font-['Outfit']">{product.capacity}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 font-['Outfit']">{product.dimensions}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 bg-secondary text-xs font-medium text-secondary-foreground rounded font-['Outfit']">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="py-20 lg:py-32 bg-secondary text-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 font-['Outfit']">Our Vision</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit']">
                  Shaping the Future of Sustainable Packaging
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed font-['Outfit']">
                We envision a world where packaging solutions harmonize with environmental responsibility. Our goal is to become the global benchmark for sustainable, innovative, and high-quality bottle manufacturing.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Target size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-['Outfit']">2030 Goals</h3>
                    <p className="text-muted-foreground font-['Outfit']">
                      100% recyclable products, carbon-neutral operations, and zero waste manufacturing by 2030.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Eye size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-['Outfit']">Innovation Focus</h3>
                    <p className="text-muted-foreground font-['Outfit']">
                      Investing in R&D for biodegradable materials and smart packaging technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Users size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-['Outfit']">Global Expansion</h3>
                    <p className="text-muted-foreground font-['Outfit']">
                      Expanding our footprint to serve clients across 50+ countries by 2028.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop"
                  alt="Sustainable future vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-2xl font-bold font-['Outfit']">Building Tomorrow, Today</p>
                  <p className="text-muted-foreground font-['Outfit']">Sustainability at the core of everything we do</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 font-['Outfit']">Company History</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-['Outfit']">Our Journey Through Time</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-12">
              {[
                { year: "1995", title: "Foundation", description: "Started as a small family business with a single production line." },
                { year: "2005", title: "First Expansion", description: "Opened second manufacturing unit, increased capacity by 300%." },
                { year: "2012", title: "ISO Certification", description: "Achieved ISO 9001:2008 certification for quality management." },
                { year: "2018", title: "Sustainability Initiative", description: "Launched eco-friendly product line with 100% recyclable materials." },
                { year: "2024", title: "Industry Leader", description: "Serving 500+ clients across 30 countries with cutting-edge facilities." },
              ].map((milestone, index) => (
                <div key={milestone.year} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="w-full md:w-5/12">
                    <Card className={`border-0 bg-card shadow-md hover:shadow-lg transition-shadow ${index % 2 === 1 ? "md:text-right" : ""}`}>
                      <CardContent className="p-6">
                        <span className="text-3xl font-bold text-primary font-['Outfit']">{milestone.year}</span>
                        <h3 className="text-xl font-semibold text-foreground mt-2 mb-2 font-['Outfit']">{milestone.title}</h3>
                        <p className="text-muted-foreground font-['Outfit']">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow" />
                  </div>
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div>
                <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 font-['Outfit']">Get In Touch</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-['Outfit']">
                  Let&apos;s Discuss Your Requirements
                </h2>
                <p className="text-muted-foreground mt-4 font-['Outfit']">
                  Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-['Outfit']">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-['Outfit']"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-['Outfit']">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-['Outfit']"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 font-['Outfit']">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-['Outfit']"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-['Outfit']">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none font-['Outfit']"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 font-['Outfit']">
                  Send Message
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                  alt="Our headquarters"
                  fill
                  className="object-cover"
                />
              </div>
              
              <Card className="absolute -bottom-8 left-4 right-4 sm:left-8 sm:right-8 border-0 shadow-xl bg-card">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground font-['Outfit']">Address</p>
                      <p className="font-medium text-foreground font-['Outfit']">123 Industrial Area, Manufacturing Hub</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-['Outfit']">Contact</p>
                      <p className="font-medium text-foreground font-['Outfit']">+91 98765 43210</p>
                      <p className="font-medium text-primary font-['Outfit']">info@aquabottle.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
