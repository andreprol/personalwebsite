'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/layouts/container';

export function Footer() {
  const { t } = useLanguage();
  const year = 2026;

  return (
    <footer className="border-t border-border/50 py-8 bg-muted/20">
      <Container size="xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {year} André Prol.</span>
            <span>{t?.footer?.rights ?? 'Todos os direitos reservados.'}</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{t?.footer?.madeWith ?? 'Feito com'}</span>
            <Heart className="w-3.5 h-3.5 text-destructive fill-destructive" />
            <span>&</span>
            <span className="text-primary font-mono">Next.js</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/andreprol"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/andreprol"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:contato@andreprol.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
