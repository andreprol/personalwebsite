'use client';

import { Header } from './header';
import { HeroSection } from './hero-section';
import { AboutSection } from './about-section';
import { ExperienceSection } from './experience-section';
import { SkillsSection } from './skills-section';
import { PortfolioSection } from './portfolio-section';
import { BlogSection } from './blog-section';
import { ContactSection } from './contact-section';
import { Footer } from './footer';

export function MainContent() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
