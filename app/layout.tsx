import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { LanguageProvider } from '@/lib/language-context';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'André Dias Moreira Prol | IT Manager & Blockchain Developer',
  description: 'André Dias Moreira Prol — IT Manager Sênior no Delírio Tropical, Desenvolvedor Blockchain (Solidity/Ethereum), Web3, AI. CEH, CEFP. Rio de Janeiro, Brasil.',
  keywords: 'André Dias Moreira Prol, Andre Dias Moreira Prol, blockchain developer, web3, solidity, IT manager, Rio de Janeiro, Delírio Tropical',
  authors: [{ name: 'André Dias Moreira Prol' }],
  alternates: {
    canonical: 'https://andreprol.com.br/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'André Dias Moreira Prol | Blockchain Developer & IT Manager',
    description: 'Senior IT Manager at Delírio Tropical. Blockchain & Web3 Developer. CEH. Rio de Janeiro, Brazil.',
    url: 'https://andreprol.com.br',
    type: 'profile',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary',
    title: 'André Dias Moreira Prol | IT Manager & Blockchain Developer',
    description: 'Senior IT Manager at Delírio Tropical. Blockchain & Web3 Developer. CEH. Rio de Janeiro, Brazil.',
  },
};

const schemaPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'André Dias Moreira Prol',
  alternateName: 'Andre Dias Moreira Prol',
  url: 'https://andreprol.com.br',
  image: 'https://andreprol.com.br/og-image.png',
  jobTitle: 'Senior IT Manager & Blockchain Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Delírio Tropical',
    url: 'https://delirio.com.br',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rio de Janeiro',
    addressCountry: 'BR',
  },
  email: 'andreprol@andreprol.com.br',
  sameAs: [
    'https://www.linkedin.com/in/andre-dias-moreira-prol',
    'https://github.com/andreprol',
    'https://medium.com/@andreprol',
  ],
  knowsAbout: ['Blockchain', 'Web3', 'Solidity', 'Ethereum', 'IT Management', 'Digital Forensics', 'Artificial Intelligence', 'SAP Business One'],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'PUC Rio de Janeiro' },
    { '@type': 'CollegeOrUniversity', name: 'IBMEC' },
    { '@type': 'CollegeOrUniversity', name: 'IGTI' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }}
        />
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
