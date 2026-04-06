'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { User, Target, Lightbulb, Award } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { FadeIn, SlideIn, Stagger, StaggerItem } from '@/components/ui/animate';

function CountUp({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const num = parseInt(target?.replace?.(/\D/g, '') ?? '0', 10) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries?.[0]?.isIntersecting) {
          let start = 0;
          const step = Math.max(1, Math.floor(num / 40));
          const interval = setInterval(() => {
            start += step;
            if (start >= num) {
              setCount(num);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 30);
          observer?.disconnect?.();
        }
      },
      { threshold: 0.5 }
    );
    if (ref?.current) observer?.observe?.(ref.current);
    return () => observer?.disconnect?.();
  }, [num]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const highlightIcons = [Target, Lightbulb, Award, User];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <Section id="about" className="bg-muted/30">
      <Container size="xl">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <User className="w-3 h-3 inline mr-1" />
              {t?.about?.title ?? 'Sobre Mim'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              {t?.about?.title ?? 'Sobre Mim'}
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SlideIn from="left">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted relative" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <Image
                  src="/images/photo-cockpit.jpg"
                  alt="André Prol - Foto em cabine de avião"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center" style={{ boxShadow: 'var(--shadow-md)' }}>
                <span className="text-2xl font-display font-bold text-primary">
                  <CountUp target="10" suffix="+" />
                </span>
              </div>
            </div>
          </SlideIn>

          <SlideIn from="right">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t?.about?.description ?? ''}
              </p>

              <Stagger className="grid grid-cols-2 gap-4">
                {(t?.about?.highlights ?? [])?.map?.((h: any, i: number) => {
                  const Icon = highlightIcons?.[i] ?? Target;
                  return (
                    <StaggerItem key={i}>
                      <div className="bg-card rounded-xl p-5 text-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
                        <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-display font-bold tracking-tight">
                          <CountUp target={h?.value ?? '0'} suffix={h?.value?.includes?.('+') ? '+' : ''} />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{h?.label ?? ''}</div>
                      </div>
                    </StaggerItem>
                  );
                }) ?? []}
              </Stagger>
            </div>
          </SlideIn>
        </div>
      </Container>
    </Section>
  );
}
