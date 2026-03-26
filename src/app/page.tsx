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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Story",
          id: "about",
        },
        {
          name: "Visit",
          id: "location",
        },
      ]}
      brandName="La Cantina"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      title="The Best Burrito You’ll Ever Taste"
      description="Fresh. Generous. Made with ingredients that actually matter. Authentic Mexican street food, elevated for Stroud locals."
      buttons={[
        {
          text: "Order Now",
          href: "#order",
        },
        {
          text: "Find Us",
          href: "#location",
        },
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
        {
          id: "1",
          name: "Sarah J.",
          role: "Loyal Regular",
          company: "Stroud Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-african-woman-walking-outdoors-park_171337-13722.jpg",
        },
        {
          id: "2",
          name: "Michael T.",
          role: "Burrito Fan",
          company: "Foodie",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104578.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Vegan",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-middle-aged-woman-posing_344912-2831.jpg",
        },
        {
          id: "4",
          name: "David K.",
          role: "Office Luncher",
          company: "Stroud",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-afro-haircut-with-yellow-headphones_273609-23033.jpg",
        },
      ]}
      title="Loved by Locals"
      description="Don't just take our word for it—join the community of locals who make us their daily ritual."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="A Small Team. A Big Standard."
      description="At La Cantina, we believe in the magic of simple, honest ingredients. Our family-run approach ensures that every taco and burrito serves a slice of home-made authentic Mexican tradition to the heart of Stroud."
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
        {
          id: "p1",
          name: "Classic Burrito",
          price: "£9.50",
          variant: "Meat or Veg",
          imageSrc: "http://img.b2bpic.net/free-photo/mexican-meal_23-2148159762.jpg",
        },
        {
          id: "p2",
          name: "Street Tacos",
          price: "£8.00",
          variant: "Authentic Corn",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-unfolded-burrito_23-2148329128.jpg",
        },
        {
          id: "p3",
          name: "Crispy Quesadilla",
          price: "£7.50",
          variant: "Melted Cheese",
          imageSrc: "http://img.b2bpic.net/free-photo/tacos-plate-near-vegetables_23-2148132045.jpg",
        },
      ]}
      title="Signature Flavours"
      description="Crafted from fresh, daily-sourced ingredients. Bold, generous, and prepared exactly the way you like them."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "4+",
          title: "Years of Tradition",
          items: [
            "Consistent quality",
            "Local favourite",
            "Stroud staple",
          ],
        },
        {
          id: "m2",
          value: "100%",
          title: "Fresh Ingredients",
          items: [
            "Daily sourced",
            "No shortcuts",
            "Hand prepared",
          ],
        },
        {
          id: "m3",
          value: "99%",
          title: "Loyal Customers",
          items: [
            "Always returning",
            "Loved by locals",
            "Generous portions",
          ],
        },
      ]}
      title="Why You’ll Crave It Again"
      description="Consistency and quality are the pillars of our kitchen, built by four years of loyal patrons."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="La Cantina"
      columns={[
        {
          title: "Navigate",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Story",
              href: "#about",
            },
            {
              label: "Location",
              href: "#location",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Facebook",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
