'use client';

import { Briefcase, Calendar, Building2, ChevronDown, ChevronUp, Trophy, Plane } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate';

export function ExperienceSection() {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const items = (t?.experience?.items ?? []) as unknown as any[];

  const isAviation = (company: string) => {
    const lc = company?.toLowerCase?.() ?? '';
    return lc.includes('taxi') || lc.includes('táxi') || lc.includes('aéreo') || lc.includes('heliprol') || lc.includes('cruzeiro') || lc.includes('sênior');
  };

  return (
    <Section id="experience">
      <Container size="xl">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Briefcase className="w-3 h-3 inline mr-1" />
              {t?.experience?.title ?? 'Experiência'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              {t?.experience?.title ?? 'Experiência'}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              {t?.experience?.subtitle ?? ''}
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <Stagger className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10" />

            {items?.map?.((item: any, i: number) => {
              const aviation = isAviation(item?.company ?? '');
              const hasAchievements = (item?.achievements?.length ?? 0) > 0;
              const isExpanded = expandedIndex === i;

              return (
                <StaggerItem key={i}>
                  <div className="relative pl-12 sm:pl-20 pb-8 last:pb-0 group">
                    {/* Timeline dot */}
                    <div className={`absolute left-2 sm:left-6 top-2 w-4 h-4 rounded-full ring-4 ring-background transition-all duration-300 ${
                      i === 0 ? 'bg-primary scale-110' : aviation ? 'bg-sky-500' : 'bg-primary/70'
                    }`}>
                      {i === 0 && (
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                      )}
                    </div>

                    <motion.div
                      className={`bg-card rounded-xl p-6 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20 ${
                        isExpanded ? 'ring-1 ring-primary/20' : ''
                      }`}
                      style={{ boxShadow: 'var(--shadow-sm)' }}
                      onClick={() => setExpandedIndex(isExpanded ? null : i)}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full font-medium">
                          <Calendar className="w-3 h-3" />
                          {item?.period ?? ''}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          {aviation ? <Plane className="w-3 h-3" /> : <Building2 className="w-3 h-3" />}
                          {item?.company ?? ''}
                        </span>
                        {item?.companyDesc && (
                          <span className="hidden sm:inline-flex text-xs text-muted-foreground/60">
                            — {item.companyDesc}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-display font-semibold">{item?.role ?? ''}</h3>
                        {hasAchievements && (
                          <button className="text-muted-foreground hover:text-primary transition-colors p-1">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item?.description ?? ''}</p>

                      <AnimatePresence>
                        {isExpanded && hasAchievements && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-border">
                              <p className="text-xs font-semibold text-primary mb-3 flex items-center gap-1.5">
                                <Trophy className="w-3.5 h-3.5" />
                                {t?.experience?.title === 'Experiência Profissional' ? 'Principais Conquistas' : 'Key Achievements'}
                              </p>
                              <ul className="space-y-2">
                                {(item?.achievements ?? [])?.map?.((ach: string, j: number) => (
                                  <motion.li
                                    key={j}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: j * 0.1 }}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                    {ach}
                                  </motion.li>
                                )) ?? []}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </StaggerItem>
              );
            }) ?? []}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
