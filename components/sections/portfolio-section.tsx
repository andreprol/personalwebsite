'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, GitFork, ExternalLink, Code2, Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { FadeIn, Stagger, StaggerItem, HoverLift } from '@/components/ui/animate';
import { Button } from '@/components/ui/button';

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

const langColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  'C++': '#f34b7d',
  C: '#555555',
  'Jupyter Notebook': '#DA5B0B',
};

export function PortfolioSection() {
  const { t } = useLanguage();
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/andreprol/repos?sort=updated&per_page=30')
      .then((res: Response) => {
        if (!res?.ok) throw new Error('Failed');
        return res?.json?.();
      })
      .then((data: any) => {
        const sorted = (data ?? [])
          ?.filter?.((r: any) => !r?.fork)
          ?.sort?.((a: any, b: any) => (b?.stargazers_count ?? 0) - (a?.stargazers_count ?? 0))
          ?.slice?.(0, 6) ?? [];
        setRepos(sorted);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Section id="portfolio">
      <Container size="xl">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <GitBranch className="w-3 h-3 inline mr-1" />
              {t?.portfolio?.title ?? 'Portfólio'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              {t?.portfolio?.title ?? 'Portfólio'}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              {t?.portfolio?.subtitle ?? ''}
            </p>
          </div>
        </FadeIn>

        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-muted-foreground">
            <Code2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Unable to load repositories. Please try again later.</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos?.map?.((repo: GithubRepo) => (
                <StaggerItem key={repo?.id ?? 0}>
                  <HoverLift>
                    <a
                      href={repo?.html_url ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-card rounded-xl p-6 h-full group"
                      style={{ boxShadow: 'var(--shadow-sm)' }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <GitBranch className="w-5 h-5 text-primary flex-shrink-0" />
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="font-display font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                        {repo?.name ?? ''}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {repo?.description ?? t?.portfolio?.noDescription ?? ''}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        {repo?.language && (
                          <span className="flex items-center gap-1.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: langColors?.[repo.language] ?? '#888' }}
                            />
                            {repo.language}
                          </span>
                        )}
                        {(repo?.stargazers_count ?? 0) > 0 && (
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {repo.stargazers_count}
                          </span>
                        )}
                        {(repo?.forks_count ?? 0) > 0 && (
                          <span className="flex items-center gap-1">
                            <GitFork className="w-3 h-3" />
                            {repo.forks_count}
                          </span>
                        )}
                      </div>
                    </a>
                  </HoverLift>
                </StaggerItem>
              )) ?? []}
            </Stagger>

            <FadeIn className="text-center mt-10">
              <a href="https://github.com/andreprol" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <GitBranch className="w-4 h-4" />
                  {t?.portfolio?.viewAll ?? 'Ver todos no GitHub'}
                </Button>
              </a>
            </FadeIn>
          </>
        )}
      </Container>
    </Section>
  );
}
