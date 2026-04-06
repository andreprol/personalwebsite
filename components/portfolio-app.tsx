'use client';

import { usePassword } from '@/lib/password-context';
import { PasswordGate } from './sections/password-gate';
import { MainContent } from './sections/main-content';

export function PortfolioApp() {
  const { isAuthenticated } = usePassword();

  if (!isAuthenticated) {
    return <PasswordGate />;
  }

  return <MainContent />;
}
