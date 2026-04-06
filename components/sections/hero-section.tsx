'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/layouts/container';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const { t, lang } = useLanguage();

  const cvUrl = '/Andre_Prol_CV_EN.docx';
  const cvLabel = lang === 'pt' ? 'Baixar CV' : 'Download CV';

  const scrollTo = (id: string) => {
    document?.getElementById?.(id)?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <Container size="xl" className="relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              {t?.hero?.greeting ?? 'Olá'}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4"
            >
              {t?.hero?.name ?? 'André Prol'}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-primary font-display font-semibold tracking-tight mb-4"
            >
              {t?.hero?.title ?? ''}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-lg mb-8"
            >
              {t?.hero?.subtitle ?? ''}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Button size="lg" onClick={() => scrollTo('portfolio')} className="gap-2">
                {t?.hero?.cta ?? 'Ver Portfólio'}
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('contact')} className="gap-2">
                <Mail className="w-4 h-4" />
                {t?.hero?.contact ?? 'Contato'}
              </Button>
              <a href={cvUrl} download>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  {cvLabel}
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3"
            >
              <a
                href="https://github.com/andreprol"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-card hover:bg-accent/50 transition-colors"
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/andreprol"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-card hover:bg-accent/50 transition-colors"
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 rotate-6" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-muted" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <Image
                  src="/images/photo-formal.jpg"
                  alt="André Prol - Foto profissional"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
