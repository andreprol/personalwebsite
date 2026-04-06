export type DiplomaCategory = 
  | 'graduation'
  | 'security'
  | 'technology'
  | 'forensics'
  | 'finance'
  | 'international'
  | 'infrastructure';

export interface Diploma {
  id: string;
  name: { pt: string; en: string };
  institution: string;
  category: DiplomaCategory;
  driveId: string;
}

export const categoryLabels: Record<DiplomaCategory, { pt: string; en: string; icon: string }> = {
  graduation: { pt: 'Graduações & MBAs', en: 'Degrees & MBAs', icon: 'graduation' },
  security: { pt: 'Segurança & Perícia Digital', en: 'Security & Digital Forensics', icon: 'shield' },
  technology: { pt: 'Tecnologia & IA', en: 'Technology & AI', icon: 'cpu' },
  forensics: { pt: 'Perícia Financeira & Judicial', en: 'Financial & Judicial Expertise', icon: 'scale' },
  finance: { pt: 'Finanças & Trading', en: 'Finance & Trading', icon: 'trending' },
  international: { pt: 'Certificados Internacionais', en: 'International Certificates', icon: 'globe' },
  infrastructure: { pt: 'Infraestrutura & Redes', en: 'Infrastructure & Networking', icon: 'server' },
};

export const diplomas: Diploma[] = [
  // Graduações & MBAs
  {
    id: 'd1',
    name: { pt: 'Graduação PUC-RJ — Bacharel em Administração', en: 'B.S. in Business Administration — PUC-RJ' },
    institution: 'PUC-RJ',
    category: 'graduation',
    driveId: '12KfVgKAmslktCTU0tRvgC4iSDJoYmM8r',
  },
  {
    id: 'd1b',
    name: { pt: 'Diploma PUC-RJ — Bacharel em Administração (2ª via)', en: 'Diploma PUC-RJ — B.S. Business Administration (copy)' },
    institution: 'PUC-RJ',
    category: 'graduation',
    driveId: '1DlSJGDwJIz98koZSrfprf8UowWjQLb6K',
  },
  {
    id: 'd2',
    name: { pt: 'MBA em Finanças — IBMEC-RJ', en: 'MBA in Finance — IBMEC-RJ' },
    institution: 'IBMEC-RJ',
    category: 'graduation',
    driveId: '1p7iWJHrsTUpBxwDd-JJDgEdMhIFBxMMq',
  },
  {
    id: 'd2b',
    name: { pt: 'Diploma MBA IBMEC-RJ — Finanças', en: 'Diploma MBA IBMEC-RJ — Finance' },
    institution: 'IBMEC-RJ',
    category: 'graduation',
    driveId: '1sa8PuSCmqOFY1csW_ebt_SQBCyIWlojx',
  },
  {
    id: 'd3',
    name: { pt: 'MBA BSSP — Perícia Contábil, Econômica e Financeira', en: 'MBA BSSP — Accounting, Economic & Financial Auditing' },
    institution: 'BSSP',
    category: 'graduation',
    driveId: '1yj5hVz2dyq3K2kstyqjz5iK_mSePjPd7',
  },
  {
    id: 'd4',
    name: { pt: 'Pós-Graduação — Tecnologias e Desenvolvimento Web/Mobile', en: 'Post-Graduate — Web & Mobile Technologies' },
    institution: 'VincIT',
    category: 'graduation',
    driveId: '1SuVJBSv3JuNJD0--NPcMIEgUT9wvyZQN',
  },
  {
    id: 'd5',
    name: { pt: 'Pós-Graduação Unyleya — Contabilidade Forense e Investigação de Fraudes', en: 'Post-Graduate Unyleya — Forensic Accounting & Fraud Investigation' },
    institution: 'Unyleya',
    category: 'graduation',
    driveId: '10aW1AY7-PDpGAIzOa9PBXvRoFOVIZg3j',
  },

  // Segurança & Perícia Digital
  {
    id: 'd6',
    name: { pt: 'Perícia e Investigação Forense Digital — CEFP', en: 'Digital Forensics & Investigation — CEFP' },
    institution: 'CyberExperts',
    category: 'security',
    driveId: '1naGVRWKC2lz3EHfqFskhPQxATK_7LYQ1',
  },
  {
    id: 'd7',
    name: { pt: 'Certified Ethical Hacker — Security Implementation', en: 'Certified Ethical Hacker — Security Implementation' },
    institution: 'Trainning',
    category: 'security',
    driveId: '1v5GvDN7yZcao-wKympbpTEzZ1FHdO40A',
  },

  // Tecnologia & IA
  {
    id: 'd8',
    name: { pt: 'Certificado de Conclusão AI 4 Tech', en: 'AI 4 Tech Certificate' },
    institution: 'AI 4 Tech',
    category: 'technology',
    driveId: '1KFGR0EK3wyjZ3SHXShsQKEG56YgxPJHf',
  },
  {
    id: 'd9',
    name: { pt: 'WordPress — Construindo Sites e Blogs', en: 'WordPress — Building Websites and Blogs' },
    institution: 'Coti Informática',
    category: 'technology',
    driveId: '1-6P4zvhtwaB6yZ9Yd5GqIMb5BYfkedYQ',
  },
  {
    id: 'd10',
    name: { pt: 'RPA — Robotic Process Automation', en: 'RPA — Robotic Process Automation' },
    institution: 'Udemy',
    category: 'technology',
    driveId: '1nVpKskulaRamnZyJUUQrln1VNPBr0lJu',
  },
  {
    id: 'd11',
    name: { pt: 'IBM — Data Engineering Basics for Everyone', en: 'IBM — Data Engineering Basics for Everyone' },
    institution: 'IBM',
    category: 'technology',
    driveId: '1j9A0GvPtfYDNBlpxCmlteHm_U81uMAQO',
  },
  {
    id: 'd12',
    name: { pt: 'IBM — Data Analytics Basics for Everyone', en: 'IBM — Data Analytics Basics for Everyone' },
    institution: 'IBM',
    category: 'technology',
    driveId: '1dfxSJVG6qjcRp-ybY0GlZdwU2xzaIHEV',
  },
  {
    id: 'd13',
    name: { pt: 'IBM — Introduction to Cloud Computing', en: 'IBM — Introduction to Cloud Computing' },
    institution: 'IBM',
    category: 'technology',
    driveId: '1iwHtC_sqkFJYNiDHdToa2IvGObiZ7fGJ',
  },
  {
    id: 'd14',
    name: { pt: 'IBM — Networking and Storage Essentials', en: 'IBM — Networking and Storage Essentials' },
    institution: 'IBM',
    category: 'technology',
    driveId: '1EkKA4jsHsU6GVbwIEFK-41toVW2gcSIu',
  },

  // Infraestrutura & Redes
  {
    id: 'd15',
    name: { pt: 'Certificação MCSA Windows Server 2012 — 70-410', en: 'MCSA Windows Server 2012 Certification — 70-410' },
    institution: 'ADV Informática',
    category: 'infrastructure',
    driveId: '1i3ADZ-zobk1jwheZ2Hy-a-1BcNRr7gIZ',
  },
  {
    id: 'd16',
    name: { pt: 'Análise e Certificação de Redes com Scanner', en: 'Network Analysis & Certification with Scanner' },
    institution: 'ADV Informática',
    category: 'infrastructure',
    driveId: '1rorwXmGMOr5Iv2SwVeF9nWaBjy9MehJy',
  },
  {
    id: 'd17',
    name: { pt: 'Técnico em Montagem, Manutenção e Configuração de Computadores', en: 'Computer Assembly, Maintenance & Configuration Technician' },
    institution: 'ADV Informática',
    category: 'infrastructure',
    driveId: '1s-fzUz_rLRWB_aJEHiMrvz9lICDS_E72',
  },
  {
    id: 'd18',
    name: { pt: 'Técnico em Projeto e Instalação de Redes', en: 'Network Design & Installation Technician' },
    institution: 'ADV Informática',
    category: 'infrastructure',
    driveId: '1XfeXt6Py5vnyKOb1UmEVYWIlR2kCulxN',
  },
  {
    id: 'd19',
    name: { pt: 'Treinamento de Conscientização AVSEC', en: 'AVSEC Awareness Training' },
    institution: 'RioGaleão',
    category: 'infrastructure',
    driveId: '1CoKpSij_HLtgsi541gVMK7fP87fvGhFR',
  },

  // Perícia Financeira & Judicial
  {
    id: 'd20',
    name: { pt: 'Cálculos Revisionais de Cheque Especial', en: 'Overdraft Revisional Calculations' },
    institution: 'Peritos Academy',
    category: 'forensics',
    driveId: '1c7KlVTu-lM-uxnN2Uxg4B9tb2NhOG493',
  },
  {
    id: 'd21',
    name: { pt: 'Cálculos Revisionais em Contratos do Sistema Financeiro de Habitação', en: 'Housing Finance System Revisional Calculations' },
    institution: 'Peritos Academy',
    category: 'forensics',
    driveId: '1AnI9P9izfv1Xwaj4O7RWBp3x1x2XaSKW',
  },
  {
    id: 'd22',
    name: { pt: 'Construindo Tabelas de Atualização Monetária', en: 'Building Monetary Update Tables' },
    institution: 'Peritos Academy',
    category: 'forensics',
    driveId: '1f0w4af0klL_UCprToxavRlMVZD2nECC-',
  },
  {
    id: 'd23',
    name: { pt: 'Excel para Cálculos Judiciais', en: 'Excel for Judicial Calculations' },
    institution: 'Peritos Academy',
    category: 'forensics',
    driveId: '1DGs4K0tUpMut9CTimq12T2kD4SlUqKV8',
  },
  {
    id: 'd24',
    name: { pt: 'Leitura e Interpretação de Processos Judiciais', en: 'Reading & Interpreting Judicial Proceedings' },
    institution: 'Peritos Academy',
    category: 'forensics',
    driveId: '1OWyAwhc-lN4U32cZM6ggU6XCQIllbZNT',
  },
  {
    id: 'd25',
    name: { pt: 'Principais Segredos dos Contratos Bancários', en: 'Key Secrets of Banking Contracts' },
    institution: 'Peritos Academy',
    category: 'forensics',
    driveId: '1xKjX553Nkl7r01lxdSwM9U3TkpYUPSnd',
  },
  {
    id: 'd26',
    name: { pt: 'Cálculos de Expurgos Inflacionários da Poupança', en: 'Savings Inflationary Purge Calculations' },
    institution: 'Sameiro Educacional',
    category: 'forensics',
    driveId: '1q4Z9Mj2ioQBgdMjCs-HbG61YZhx1A-Bu',
  },
  {
    id: 'd27',
    name: { pt: 'Cálculos de Liquidação de Sentenças Cíveis', en: 'Civil Sentence Liquidation Calculations' },
    institution: 'Sameiro Educacional',
    category: 'forensics',
    driveId: '1uxymUH6T9BbJUXtFIXQK6Noa_cyrxxtI',
  },
  {
    id: 'd28',
    name: { pt: 'Perícia em Cartão de Crédito', en: 'Credit Card Expertise' },
    institution: 'Sameiro Educacional',
    category: 'forensics',
    driveId: '17UWlgbINxVSCdrjSgUgh-M868IkRsEeU',
  },
  {
    id: 'd29',
    name: { pt: 'Perícia em Cheque Especial', en: 'Overdraft Expertise' },
    institution: 'Sameiro Educacional',
    category: 'forensics',
    driveId: '1JiiPjpNnPZIAvrR4WS-f1yexGyuyoWr8',
  },
  {
    id: 'd30',
    name: { pt: 'Perícia em Crédito Direto ao Consumidor', en: 'Consumer Direct Credit Expertise' },
    institution: 'Sameiro Educacional',
    category: 'forensics',
    driveId: '1SLvc8Egqa7KqbSV3jR1CZDxLYfUf9kwl',
  },
  {
    id: 'd31',
    name: { pt: 'Perícia Judicial', en: 'Judicial Expertise' },
    institution: 'Sameiro Educacional',
    category: 'forensics',
    driveId: '1xRzdCkDRD_nWNlUKgJLs29LIEVwec9GM',
  },
  {
    id: 'd32',
    name: { pt: 'Formação de Peritos Judiciais', en: 'Judicial Expert Training' },
    institution: 'Viva de Laudos',
    category: 'forensics',
    driveId: '1vZOToQ8Yb0x-8bFYRZHxUjV52Al4cAJg',
  },
  {
    id: 'd33',
    name: { pt: 'Perícia Judicial', en: 'Judicial Expertise' },
    institution: 'Viver de Laudos',
    category: 'forensics',
    driveId: '1XNBCsQobgWInGZZUEYK1D8Vld5peNM_B',
  },

  // Finanças & Trading
  {
    id: 'd34',
    name: { pt: 'Gestão de Tesouraria', en: 'Treasury Management' },
    institution: 'IEF',
    category: 'finance',
    driveId: '1jqq4OGjTOEt4YruxYEcChiDyGkrv-wXf',
  },
  {
    id: 'd35',
    name: { pt: 'Valuation — Como Precificar Ações', en: 'Valuation — How to Price Stocks' },
    institution: 'COPAF',
    category: 'finance',
    driveId: '1sensGVpll6HDZ2Y8Uj4TDlV9gY4HKJbt',
  },
  {
    id: 'd36',
    name: { pt: 'Análise Técnica Avançada e Análise Intermercados', en: 'Advanced Technical Analysis & Intermarket Analysis' },
    institution: 'Trader Brasil',
    category: 'finance',
    driveId: '13dhJcuDP0ZQfUx4qBWcZO4vIqFLJroAq',
  },
  {
    id: 'd37',
    name: { pt: 'Congresso Internacional de Gestores e Operadores de Mercado de Capitais', en: 'International Congress of Capital Market Managers & Operators' },
    institution: 'Trader Brasil',
    category: 'finance',
    driveId: '1Qb-083h0PUFSCrxtG_LkjMRW3ZKzeKDO',
  },
  {
    id: 'd38',
    name: { pt: 'Opções Usando Volatilidade', en: 'Options Using Volatility' },
    institution: 'Trader Brasil',
    category: 'finance',
    driveId: '1IjbNM-9dsbcdoSaaTvo5dhFKBYJMc2MW',
  },
  {
    id: 'd39',
    name: { pt: 'Trader Profissional Avançado', en: 'Advanced Professional Trader' },
    institution: 'Trader Brasil',
    category: 'finance',
    driveId: '1U1HEwgzF9Wkcj3_PLnBh3rdCouR6sTTd',
  },

  // Certificados Internacionais
  {
    id: 'd40',
    name: { pt: 'English Studies Award', en: 'English Studies Award' },
    institution: 'Shafston International College',
    category: 'international',
    driveId: '1GYyRxT9HXp2UagDWQn5hqR8TS4hHL3Jq',
  },
  {
    id: 'd41',
    name: { pt: 'English as a Second Language', en: 'English as a Second Language' },
    institution: 'University of California Riverside',
    category: 'international',
    driveId: '1MhtYzLxSDwHS5RyzV44xxWV_qUjzvl6V',
  },
  {
    id: 'd42',
    name: { pt: 'Introduction to Data Analytics and the Digital Organization', en: 'Introduction to Data Analytics and the Digital Organization' },
    institution: 'University System of Maryland',
    category: 'international',
    driveId: '1nXwlvTqxXx_-C-FYbZMCaZPszJYyr3SC',
  },
];

export function getDriveViewUrl(driveId: string): string {
  return `https://drive.google.com/file/d/${driveId}/view`;
}

export function getDrivePreviewUrl(driveId: string): string {
  return `https://drive.google.com/file/d/${driveId}/preview`;
}
