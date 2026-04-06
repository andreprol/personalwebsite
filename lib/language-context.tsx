'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations, type Lang, type Translations } from './i18n';

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt',
  t: translations.pt,
  toggleLang: () => {},
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt');

  const toggleLang = useCallback(() => {
    setLangState((prev: Lang) => (prev === 'pt' ? 'en' : 'pt'));
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
