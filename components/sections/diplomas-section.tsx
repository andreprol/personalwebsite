'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, GraduationCap, Shield, Cpu, Scale, TrendingUp, Globe, Server, Filter, X, FileText } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { FadeIn } from '@/components/ui/animate';
import {
  diplomas,
  categoryLabels,
  getDriveViewUrl,
  type DiplomaCategory,
  type Diploma,
} from '@/lib/diplomas-data';

const categoryIcons: Record<DiplomaCategory, any> = {
  graduation: GraduationCap,
  security: Shield,
  technology: Cpu,
  forensics: Scale,
  finance: TrendingUp,
  international: Globe,
  infrastructure: Server,
};

const categoryColors: Record<DiplomaCategory, string> = {
  graduation: 'bg-purple-500/10 text-purple-500 border-purple-500/30 hover:bg-purple-500/20',
  security: 'bg-red-500/10 text-red-500 border-red-500/30 hover:bg-red-500/20',
  technology: 'bg-blue-500/10 text-blue-500 border-blue-500/30 hover:bg-blue-500/20',
  forensics: 'bg-amber-500/10 text-amber-500 border-amber-500/30 hover:bg-amber-500/20',
  finance: 'bg-green-500/10 text-green-500 border-green-500/30 hover:bg-green-500/20',
  international: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/30 hover:bg-cyan-500/20',
  infrastructure: 'bg-orange-500/10 text-orange-500 border-orange-500/30 hover:bg-orange-500/20',
};

const cardBorderColors: Record<DiplomaCategory, string> = {
  graduation: 'hover:border-purple-500/30',
  security: 'hover:border-red-500/30',
  technology: 'hover:border-blue-500/30',
  forensics: 'hover:border-amber-500/30',
  finance: 'hover:border-green-500/30',
  international: 'hover:border-cyan-500/30',
  infrastructure: 'hover:border-orange-500/30',
};

export function DiplomasSection() {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<DiplomaCategory | 'all'>('all');
  const [previewDiploma, setPreviewDiploma] = useState<Diploma | null>(null);

  const filteredDiplomas = activeFilter === 'all'
    ? diplomas
    : diplomas.filter(d => d.category === activeFilter);

  const categories = Object.keys(categoryLabels) as DiplomaCategory[];

  const getCategoryCount = (cat: DiplomaCategory) =>
    diplomas.filter(d => d.category === cat).length;

  const texts = {
    title: lang === 'pt' ? 'Diplomas & Certificados' : 'Diplomas & Certificates',
    subtitle: lang === 'pt'
      ? `${diplomas.length} certificados organizados por área de especialização.`
      : `${diplomas.length} certificates organized by area of expertise.`,
    all: lang === 'pt' ? 'Todos' : 'All',
    view: lang === 'pt' ? 'Ver Diploma' : 'View Diploma',
    close: lang === 'pt' ? 'Fechar' : 'Close',
    showing: lang === 'pt' ? 'Mostrando' : 'Showing',
    of: lang === 'pt' ? 'de' : 'of',
    results: lang === 'pt' ? 'certificados' : 'certificates',
  };

  return (
    <Section id="diplomas">
      <Container size="xl">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Award className="w-3 h-3 inline mr-1" />
              {texts.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              {texts.title}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              {texts.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Category filters */}
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                activeFilter === 'all'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-muted/50 text-muted-foreground border-border hover:bg-muted'
              }`}
            >
              <Filter className="w-3 h-3" />
              {texts.all} ({diplomas.length})
            </button>
            {categories.map(cat => {
              const Icon = categoryIcons[cat];
              const count = getCategoryCount(cat);
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(isActive ? 'all' : cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground border-primary'
                      : `${categoryColors[cat]} border`
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {categoryLabels[cat][lang]} ({count})
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Results count */}
        <p className="text-xs text-muted-foreground text-center mb-6">
          {texts.showing} {filteredDiplomas.length} {texts.of} {diplomas.length} {texts.results}
        </p>

        {/* Diploma cards grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredDiplomas.map((diploma) => {
              const Icon = categoryIcons[diploma.category];
              const colorClass = categoryColors[diploma.category];
              const borderClass = cardBorderColors[diploma.category];
              return (
                <motion.div
                  key={diploma.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-card rounded-xl p-5 border border-transparent ${borderClass} transition-all group cursor-pointer`}
                  style={{ boxShadow: 'var(--shadow-sm)' }}
                  onClick={() => setPreviewDiploma(diploma)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${colorClass.split(' ').slice(0, 2).join(' ')}`}>
                      <Icon className={`w-4 h-4 ${colorClass.split(' ')[1]}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-display font-semibold leading-tight mb-1 group-hover:text-primary transition-colors">
                        {diploma.name[lang]}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">{diploma.institution}</p>
                      <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${colorClass.split(' ').slice(0, 2).join(' ')} ${colorClass.split(' ')[1]}`}>
                        {categoryLabels[diploma.category][lang]}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Preview modal */}
        <AnimatePresence>
          {previewDiploma && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setPreviewDiploma(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
                style={{ boxShadow: 'var(--shadow-lg)' }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <h3 className="text-sm font-display font-semibold truncate">
                        {previewDiploma.name[lang]}
                      </h3>
                      <p className="text-xs text-muted-foreground">{previewDiploma.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href={getDriveViewUrl(previewDiploma.driveId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {texts.view}
                    </a>
                    <button
                      onClick={() => setPreviewDiploma(null)}
                      className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {/* PDF preview iframe */}
                <div className="flex-1 min-h-0" style={{ height: '70vh' }}>
                  <iframe
                    src={`https://drive.google.com/file/d/${previewDiploma.driveId}/preview`}
                    className="w-full h-full border-0"
                    allow="autoplay"
                    title={previewDiploma.name[lang]}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
