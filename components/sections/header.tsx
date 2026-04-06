'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, LogOut } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { usePassword } from '@/lib/password-context';
import { ThemeToggle } from '@/components/theme-toggle';
import { Container } from '@/components/layouts/container';

const navItems = ['home', 'about', 'experience', 'education', 'diplomas', 'skills', 'portfolio', 'blog', 'contact'] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();
  const { logout } = usePassword();

  useEffect(() => {
    const handler = () => setScrolled(window?.scrollY > 50);
    window?.addEventListener?.('scroll', handler);
    return () => window?.removeEventListener?.('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document?.getElementById?.(id);
    el?.scrollIntoView?.({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <Container size="xl">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('home')} className="font-display font-bold text-xl tracking-tight">
            <span className="text-primary">A</span>P
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems?.map?.((item: typeof navItems[number]) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent/50"
              >
                {(t?.nav as any)?.[item] ?? item}
              </button>
            )) ?? []}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm hover:bg-accent/50 transition-colors"
              title={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <Globe className="w-4 h-4" />
              <span className="font-mono text-xs">{lang?.toUpperCase?.() ?? 'PT'}</span>
            </button>
            <ThemeToggle />
            <button
              onClick={logout}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
              title={lang === 'pt' ? 'Sair' : 'Logout'}
            >
              <LogOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
          >
            <Container size="xl">
              <div className="py-4 space-y-1">
                {navItems?.map?.((item: typeof navItems[number]) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="block w-full text-left px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
                  >
                    {(t?.nav as any)?.[item] ?? item}
                  </button>
                )) ?? []}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
