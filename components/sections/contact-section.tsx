'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { FadeIn, SlideIn } from '@/components/ui/animate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function ContactSection() {
  const { t, lang } = useLanguage();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e?.target ?? {};
    setForm((prev: any) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res?.ok) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        toast?.success?.(t?.contact?.success ?? 'Mensagem enviada!');
      } else {
        toast?.error?.(t?.contact?.error ?? 'Erro ao enviar.');
      }
    } catch {
      toast?.error?.(t?.contact?.error ?? 'Erro ao enviar.');
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact">
      <Container size="xl">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Mail className="w-3 h-3 inline mr-1" />
              {t?.contact?.title ?? 'Contato'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              {t?.contact?.title ?? 'Contato'}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              {t?.contact?.subtitle ?? ''}
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <SlideIn from="left">
            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted" style={{ boxShadow: 'var(--shadow-md)' }}>
                <Image
                  src="/images/photo-casual.jpg"
                  alt="André Prol trabalhando"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span>contato@andreprol.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </div>
          </SlideIn>

          <SlideIn from="right">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-xl font-display font-semibold mb-2">
                  {t?.contact?.success ?? 'Mensagem enviada!'}
                </h3>
                <Button variant="outline" onClick={() => setSent(false)} className="mt-4">
                  {t?.contact?.send ?? 'Enviar outra'}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">{t?.contact?.name ?? 'Nome'}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form?.name ?? ''}
                    onChange={handleChange}
                    placeholder={t?.contact?.namePlaceholder ?? ''}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t?.contact?.email ?? 'E-mail'}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form?.email ?? ''}
                    onChange={handleChange}
                    placeholder={t?.contact?.emailPlaceholder ?? ''}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">{t?.contact?.subject ?? 'Assunto'}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form?.subject ?? ''}
                    onChange={handleChange}
                    placeholder={t?.contact?.subjectPlaceholder ?? ''}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="message">{t?.contact?.message ?? 'Mensagem'}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form?.message ?? ''}
                    onChange={handleChange}
                    placeholder={t?.contact?.messagePlaceholder ?? ''}
                    required
                    rows={5}
                    className="mt-1.5"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2" disabled={sending}>
                  <Send className="w-4 h-4" />
                  {sending ? (t?.contact?.sending ?? 'Enviando...') : (t?.contact?.send ?? 'Enviar')}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  {lang === 'pt' ? 'Suas informações serão armazenadas com segurança.' : 'Your information will be stored securely.'}
                </p>
              </form>
            )}
          </SlideIn>
        </div>
      </Container>
    </Section>
  );
}
