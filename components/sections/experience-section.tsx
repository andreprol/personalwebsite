'use client';

import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate';

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <Section id="experience">
      <Container size="xl">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Briefcase className="w-3 h-3 inline mr-1" />
              {t?.experience?.title ?? 'Experiência'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              {t?.experience?.title ?? 'Experiência'}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              {t?.experience?.subtitle ?? ''}
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <Stagger className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border" />

            {(t?.experience?.items ?? [])?.map?.((item: any, i: number) => (
              <StaggerItem key={i}>
                <div className="relative pl-12 sm:pl-20 pb-10 last:pb-0 group">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                  <div className="bg-card rounded-xl p-6 transition-all duration-300 group-hover:translate-x-1" style={{ boxShadow: 'var(--shadow-sm)' }}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {item?.period ?? ''}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Building2 className="w-3 h-3" />
                        {item?.company ?? ''}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-semibold mb-2">{item?.role ?? ''}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item?.description ?? ''}</p>
                  </div>
                </div>
              </StaggerItem>
            )) ?? []}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
