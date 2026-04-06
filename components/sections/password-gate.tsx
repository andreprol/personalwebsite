'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { usePassword } from '@/lib/password-context';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function PasswordGate() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { authenticate } = usePassword();
  const { t, lang, toggleLang } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = authenticate(password);
    if (!success) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i: number) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: 200 + i * 100,
              height: 200 + i * 100,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Language toggle */}
      <button
        onClick={toggleLang}
        className="absolute top-6 right-6 z-10 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-sm text-sm font-mono hover:bg-card transition-colors"
      >
        {lang === 'pt' ? 'EN' : 'PT'}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="bg-card/80 backdrop-blur-xl rounded-2xl p-8 sm:p-10" style={{ boxShadow: 'var(--shadow-lg)' }}>
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-5"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Lock className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-2xl font-display font-bold tracking-tight mb-2">
              {t?.password?.title ?? 'Acesso Restrito'}
            </h1>
            <p className="text-muted-foreground text-sm">
              {t?.password?.subtitle ?? 'Digite a senha para acessar.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e?.target?.value ?? '')}
                placeholder={t?.password?.placeholder ?? 'Senha'}
                className="pr-10 text-center text-lg tracking-widest font-mono h-12"
                autoComplete="new-password"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-destructive text-sm text-center"
              >
                {t?.password?.error ?? 'Senha incorreta.'}
              </motion.p>
            )}

            <Button type="submit" className="w-full h-12 text-base gap-2" size="lg">
              {t?.password?.submit ?? 'Acessar'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
