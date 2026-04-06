'use client';

import { Code2, Server, Cloud, Bot, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate';

const categoryIcons = [Code2, Server, Cloud, Bot, Shield, Users];
const categoryColors = [
  'from-blue-500/10 to-cyan-500/10 text-blue-500',
  'from-green-500/10 to-emerald-500/10 text-green-500',
  'from-orange-500/10 to-amber-500/10 text-orange-500',
  'from-purple-500/10 to-pink-500/10 text-purple-500',
  'from-red-500/10 to-rose-500/10 text-red-500',
  'from-teal-500/10 to-cyan-500/10 text-teal-500',
];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <Section id="skills" className="bg-muted/30">
      <Container size="xl">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Code2 className="w-3 h-3 inline mr-1" />
              {t?.skills?.title ?? 'Habilidades'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              {t?.skills?.title ?? 'Habilidades'}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              {t?.skills?.subtitle ?? ''}
            </p>
          </div>
        </FadeIn>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(t?.skills?.categories ?? [])?.map?.((cat: any, i: number) => {
            const Icon = categoryIcons?.[i] ?? Code2;
            const color = categoryColors?.[i] ?? categoryColors[0];
            return (
              <StaggerItem key={i}>
                <div
                  className="bg-card rounded-xl p-6 h-full group hover:scale-[1.02] transition-transform duration-300"
                  style={{ boxShadow: 'var(--shadow-sm)' }}
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${color} mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-4">{cat?.name ?? ''}</h3>
                  <div className="flex flex-wrap gap-2">
                    {(cat?.items ?? [])?.map?.((skill: string, j: number) => (
                      <motion.span
                        key={j}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    )) ?? []}
                  </div>
                </div>
              </StaggerItem>
            );
          }) ?? []}
        </Stagger>
      </Container>
    </Section>
  );
}
