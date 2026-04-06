'use client';

import { GraduationCap, BookOpen, Award, Globe, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate';

const typeConfig: Record<string, { color: string; label: { pt: string; en: string } }> = {
  masters: { color: 'bg-purple-500/10 text-purple-500 border-purple-500/20', label: { pt: 'Mestrado', en: 'Master\'s' } },
  mba: { color: 'bg-blue-500/10 text-blue-500 border-blue-500/20', label: { pt: 'MBA', en: 'MBA' } },
  postgrad: { color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20', label: { pt: 'Pós-Graduação', en: 'Post-Graduate' } },
  bachelor: { color: 'bg-amber-500/10 text-amber-500 border-amber-500/20', label: { pt: 'Graduação', en: 'Bachelor\'s' } },
};

export function EducationSection() {
  const { t, lang } = useLanguage();

  const edu = t?.education as any;
  const items = (edu?.items ?? []) as any[];
  const certs = edu?.certifications as any;

  return (
    <Section id="education" className="bg-muted/30">
      <Container size="xl">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <GraduationCap className="w-3 h-3 inline mr-1" />
              {edu?.title ?? 'Formação'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              {edu?.title ?? 'Formação'}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              {edu?.subtitle ?? ''}
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <Stagger className="grid sm:grid-cols-2 gap-4">
            {items?.map?.((item: any, i: number) => {
              const config = typeConfig?.[item?.type] ?? typeConfig.postgrad;
              return (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-card rounded-xl p-5 h-full border border-transparent hover:border-primary/10 transition-all"
                    style={{ boxShadow: 'var(--shadow-sm)' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${config.color}`}>
                        {item?.type === 'bachelor' ? <BookOpen className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${config.color}`}>
                            {config.label?.[lang] ?? config.label.en}
                          </span>
                        </div>
                        <h3 className="text-sm font-display font-semibold leading-tight mb-1">
                          {item?.degree ?? ''}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-1">{item?.institution ?? ''}</p>
                        <p className="text-xs text-primary/70 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item?.year ?? ''}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            }) ?? []}
          </Stagger>

          {/* Certifications & Languages */}
          {certs && (
            <FadeIn>
              <div className="mt-12 bg-card rounded-xl p-8" style={{ boxShadow: 'var(--shadow-sm)' }}>
                <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  {certs?.title ?? ''}
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-primary" />
                      {lang === 'pt' ? 'Certificações' : 'Certifications'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(certs?.certs ?? [])?.map?.((cert: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary"
                        >
                          {cert}
                        </span>
                      )) ?? []}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-primary" />
                      {lang === 'pt' ? 'Idiomas' : 'Languages'}
                    </h4>
                    <p className="text-sm text-muted-foreground">{certs?.languages ?? ''}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </Container>
    </Section>
  );
}
