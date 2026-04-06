export type Lang = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      portfolio: 'Portfólio',
      blog: 'Blog',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'André Prol',
      title: 'Profissional de Tecnologia & Inovação',
      subtitle: 'Transformando ideias em soluções digitais com paixão por tecnologia, dados e inovação.',
      cta: 'Ver Portfólio',
      contact: 'Entrar em Contato',
    },
    about: {
      title: 'Sobre Mim',
      description: 'Com ampla experiência em tecnologia e gestão, dedico-me a criar soluções inovadoras que transformam negócios. Minha trajetória combina expertise técnica com visão estratégica, permitindo desenvolver projetos que geram impacto real.',
      highlights: [
        { label: 'Anos de Experiência', value: '10+' },
        { label: 'Projetos Entregues', value: '50+' },
        { label: 'Tecnologias', value: '20+' },
        { label: 'Certificações', value: '5+' },
      ],
    },
    experience: {
      title: 'Experiência Profissional',
      subtitle: 'Minha trajetória profissional ao longo dos anos.',
      items: [
        {
          role: 'Líder de Tecnologia & Inovação',
          company: 'Empresa de Tecnologia',
          period: '2021 - Presente',
          description: 'Liderança de equipes multidisciplinares, definição de estratégia tecnológica e implementação de soluções baseadas em dados e IA.',
        },
        {
          role: 'Gerente de Projetos Digitais',
          company: 'Consultoria Digital',
          period: '2018 - 2021',
          description: 'Gestão de projetos de transformação digital para grandes empresas, incluindo implementação de plataformas e automação de processos.',
        },
        {
          role: 'Desenvolvedor Full Stack',
          company: 'Startup de Tecnologia',
          period: '2015 - 2018',
          description: 'Desenvolvimento de aplicações web e mobile, arquitetura de sistemas e integração de APIs.',
        },
        {
          role: 'Analista de Sistemas',
          company: 'Empresa de Software',
          period: '2013 - 2015',
          description: 'Análise de requisitos, modelagem de dados e desenvolvimento de sistemas corporativos.',
        },
      ],
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Tecnologias e ferramentas que domino.',
      categories: [
        {
          name: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
        },
        {
          name: 'Backend',
          items: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'],
        },
        {
          name: 'Cloud & DevOps',
          items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
        },
        {
          name: 'Data & IA',
          items: ['Machine Learning', 'Data Analytics', 'Power BI', 'Pandas', 'TensorFlow'],
        },
        {
          name: 'Gestão',
          items: ['Scrum', 'Kanban', 'Jira', 'Liderança', 'Planejamento Estratégico'],
        },
      ],
    },
    portfolio: {
      title: 'Portfólio',
      subtitle: 'Meus projetos e repositórios no GitHub.',
      viewOnGithub: 'Ver no GitHub',
      stars: 'estrelas',
      forks: 'forks',
      noDescription: 'Sem descrição disponível.',
      viewAll: 'Ver todos no GitHub',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Artigos e reflexões sobre tecnologia e inovação.',
      readMore: 'Ler mais',
      readTime: 'min de leitura',
    },
    contact: {
      title: 'Contato',
      subtitle: 'Tem um projeto em mente? Vamos conversar!',
      name: 'Nome',
      email: 'E-mail',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar mensagem. Tente novamente.',
      namePlaceholder: 'Seu nome completo',
      emailPlaceholder: 'seu@email.com',
      subjectPlaceholder: 'Assunto da mensagem',
      messagePlaceholder: 'Escreva sua mensagem aqui...',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      madeWith: 'Feito com',
    },
    password: {
      title: 'Acesso Restrito',
      subtitle: 'Digite a senha para acessar o portfólio.',
      placeholder: 'Digite a senha',
      submit: 'Acessar',
      error: 'Senha incorreta. Tente novamente.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'André Prol',
      title: 'Technology & Innovation Professional',
      subtitle: 'Transforming ideas into digital solutions with passion for technology, data, and innovation.',
      cta: 'View Portfolio',
      contact: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      description: 'With extensive experience in technology and management, I am dedicated to creating innovative solutions that transform businesses. My career combines technical expertise with strategic vision, enabling me to develop projects that generate real impact.',
      highlights: [
        { label: 'Years of Experience', value: '10+' },
        { label: 'Projects Delivered', value: '50+' },
        { label: 'Technologies', value: '20+' },
        { label: 'Certifications', value: '5+' },
      ],
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'My professional journey over the years.',
      items: [
        {
          role: 'Technology & Innovation Lead',
          company: 'Tech Company',
          period: '2021 - Present',
          description: 'Leading multidisciplinary teams, defining technology strategy, and implementing data-driven and AI solutions.',
        },
        {
          role: 'Digital Projects Manager',
          company: 'Digital Consultancy',
          period: '2018 - 2021',
          description: 'Managing digital transformation projects for large companies, including platform implementation and process automation.',
        },
        {
          role: 'Full Stack Developer',
          company: 'Tech Startup',
          period: '2015 - 2018',
          description: 'Web and mobile application development, systems architecture, and API integration.',
        },
        {
          role: 'Systems Analyst',
          company: 'Software Company',
          period: '2013 - 2015',
          description: 'Requirements analysis, data modeling, and corporate systems development.',
        },
      ],
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I master.',
      categories: [
        {
          name: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
        },
        {
          name: 'Backend',
          items: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'],
        },
        {
          name: 'Cloud & DevOps',
          items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
        },
        {
          name: 'Data & AI',
          items: ['Machine Learning', 'Data Analytics', 'Power BI', 'Pandas', 'TensorFlow'],
        },
        {
          name: 'Management',
          items: ['Scrum', 'Kanban', 'Jira', 'Leadership', 'Strategic Planning'],
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'My projects and GitHub repositories.',
      viewOnGithub: 'View on GitHub',
      stars: 'stars',
      forks: 'forks',
      noDescription: 'No description available.',
      viewAll: 'View all on GitHub',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Articles and thoughts on technology and innovation.',
      readMore: 'Read more',
      readTime: 'min read',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project in mind? Let\'s talk!',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'your@email.com',
      subjectPlaceholder: 'Message subject',
      messagePlaceholder: 'Write your message here...',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with',
    },
    password: {
      title: 'Restricted Access',
      subtitle: 'Enter the password to access the portfolio.',
      placeholder: 'Enter password',
      submit: 'Access',
      error: 'Incorrect password. Please try again.',
    },
  },
} as const;

export type Translations = typeof translations.pt | typeof translations.en;
