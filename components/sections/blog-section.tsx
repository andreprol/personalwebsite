'use client';

import { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, Clock, Tag, Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { FadeIn, Stagger, StaggerItem, HoverLift } from '@/components/ui/animate';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface BlogPost {
  id: string;
  slug: string;
  titlePt: string;
  titleEn: string;
  summaryPt: string;
  summaryEn: string;
  contentPt: string;
  contentEn: string;
  category: string;
  createdAt: string;
}

export function BlogSection() {
  const { t, lang } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetch('/api/blog')
      .then((res: Response) => res?.json?.())
      .then((data: any) => {
        setPosts(data?.posts ?? data ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getTitle = (post: BlogPost) => (lang === 'en' ? post?.titleEn : post?.titlePt) ?? '';
  const getSummary = (post: BlogPost) => (lang === 'en' ? post?.summaryEn : post?.summaryPt) ?? '';
  const getContent = (post: BlogPost) => (lang === 'en' ? post?.contentEn : post?.contentPt) ?? '';

  return (
    <Section id="blog" className="bg-muted/30">
      <Container size="xl">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <BookOpen className="w-3 h-3 inline mr-1" />
              {t?.blog?.title ?? 'Blog'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              {t?.blog?.title ?? 'Blog'}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              {t?.blog?.subtitle ?? ''}
            </p>
          </div>
        </FadeIn>

        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {!loading && (posts?.length ?? 0) === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>{lang === 'pt' ? 'Nenhum artigo publicado ainda.' : 'No articles published yet.'}</p>
          </div>
        )}

        {!loading && (posts?.length ?? 0) > 0 && (
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts?.map?.((post: BlogPost) => (
              <StaggerItem key={post?.id ?? post?.slug}>
                <HoverLift>
                  <div
                    className="bg-card rounded-xl p-6 h-full flex flex-col cursor-pointer group"
                    style={{ boxShadow: 'var(--shadow-sm)' }}
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        <Tag className="w-3 h-3" />
                        {post?.category ?? ''}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {(() => {
                          try {
                            return new Date(post?.createdAt ?? '')?.toLocaleDateString?.(lang === 'pt' ? 'pt-BR' : 'en-US', {
                              year: 'numeric', month: 'short', day: 'numeric'
                            }) ?? '';
                          } catch { return ''; }
                        })()}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                      {getTitle(post)}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                      {getSummary(post)}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-primary font-medium">
                      {t?.blog?.readMore ?? 'Ler mais'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            )) ?? []}
          </Stagger>
        )}
      </Container>

      {/* Blog post modal */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    <Tag className="w-3 h-3" />
                    {selectedPost?.category ?? ''}
                  </span>
                </div>
                <DialogTitle className="text-xl font-display">
                  {getTitle(selectedPost)}
                </DialogTitle>
              </DialogHeader>
              <div className="prose prose-sm dark:prose-invert max-w-none mt-4 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                {getContent(selectedPost)}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
