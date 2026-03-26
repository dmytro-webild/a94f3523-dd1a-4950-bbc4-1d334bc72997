"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="blurBottom"
        cardStyle="soft-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Menu", id: "menu" },
        { name: "Story", id: "about" },
        { name: "Location", id: "metrics" },
      ]}
      brandName="La Cantina"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "radial-gradient" }}
      title="Luxury Meets Tradition"
      description="Authentic Mexican street food, refined for the modern palate in Stroud."
      buttons={[
        { text: "View Menu", href: "#menu" },
        { text: "Our Story", href: "#about" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/hands-holding-delicious-tacos_23-2150878335.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="full-width-top-items-bottom-row"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah J.", role: "Connoisseur", company: "Stroud Local", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-african-woman-walking-outdoors-park_171337-13722.jpg" },
        { id: "2", name: "Michael T.", role: "Foodie", company: "Stroud", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104578.jpg" },
      ]}
      title="Elevated Experiences"
      description="Discover why La Cantina is synonymous with quality and tradition."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="The La Cantina Story"
      description="Born from a passion for authentic Mexican flavors and a commitment to locally sourced ingredients. We combine artisan culinary techniques with a warm, welcoming atmosphere to provide an unparalleled dining experience."
      imageSrc="http://img.b2bpic.net/free-photo/portrait-smiling-waiter-waitress-standing-counter_1170-611.jpg"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Signature Carne Asada", price: "£12.50", variant: "Hand-cut Steak", imageSrc: "http://img.b2bpic.net/free-photo/mexican-meal_23-2148159762.jpg" },
        { id: "p2", name: "Truffle Infused Tacos", price: "£10.50", variant: "Gourmet", imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-unfolded-burrito_23-2148329128.jpg" },
        { id: "p3", name: "Artisan Quesadilla", price: "£9.00", variant: "Local Cheeses", imageSrc: "http://img.b2bpic.net/free-photo/tacos-plate-near-vegetables_23-2148132045.jpg" },
      ]}
      title="Culinary Selection"
      description="Our menu showcases a selection of premium, hand-crafted Mexican classics."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        { id: "m1", value: "4+ Years", title: "Culinary Excellence", items: ["Consistent quality", "Premium ingredients", "Local favourite"] },
        { id: "m2", value: "100%", title: "Artisan Crafted", items: ["Daily sourced", "Hand prepared", "Fresh daily"] },
        { id: "m3", value: "Located", title: "Heart of Stroud", items: ["Central spot", "Easy access", "Community hub"] },
      ]}
      title="Visit Our Cantina"
      description="Experience the pinnacle of Mexican luxury right here in Stroud."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="La Cantina"
      columns={[
        { title: "Navigation", items: [{ label: "Home", href: "#hero" }, { label: "Menu", href: "#menu" }] },
        { title: "Visit", items: [{ label: "123 High St, Stroud", href: "#metrics" }] },
        { title: "Connect", items: [{ label: "Instagram", href: "#" }, { label: "Facebook", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}