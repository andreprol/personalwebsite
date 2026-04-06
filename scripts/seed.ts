import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed blog posts
  const posts = [
    {
      slug: 'futuro-ia-negocios',
      titlePt: 'O Futuro da IA nos Negócios',
      titleEn: 'The Future of AI in Business',
      summaryPt: 'Como a inteligência artificial está transformando a forma como empresas operam e tomam decisões estratégicas.',
      summaryEn: 'How artificial intelligence is transforming the way companies operate and make strategic decisions.',
      contentPt: 'A inteligência artificial está redefinindo o cenário empresarial global. Desde automação de processos até análise preditiva, as empresas que abraçam a IA estão ganhando vantagens competitivas significativas.\n\nNos últimos anos, vimos uma explosão no uso de modelos de linguagem, visão computacional e sistemas de recomendação. Empresas de todos os portes estão investindo em soluções baseadas em IA para otimizar operações, melhorar a experiência do cliente e descobrir novos insights de dados.\n\nO futuro promete ainda mais avanços, com a IA generativa abrindo novas possibilidades criativas e a automação inteligente transformando cadeias de valor inteiras. A chave para o sucesso está em adotar essas tecnologias de forma estratégica e responsável.',
      contentEn: 'Artificial intelligence is redefining the global business landscape. From process automation to predictive analytics, companies that embrace AI are gaining significant competitive advantages.\n\nIn recent years, we have seen an explosion in the use of language models, computer vision, and recommendation systems. Companies of all sizes are investing in AI-based solutions to optimize operations, improve customer experience, and discover new data insights.\n\nThe future promises even more advances, with generative AI opening new creative possibilities and intelligent automation transforming entire value chains. The key to success lies in adopting these technologies strategically and responsibly.',
      category: 'AI',
    },
    {
      slug: 'arquitetura-microservicos',
      titlePt: 'Arquitetura de Microsserviços: Lições Aprendidas',
      titleEn: 'Microservices Architecture: Lessons Learned',
      summaryPt: 'Reflexões sobre a implementação de microsserviços em projetos de grande escala e as melhores práticas que descobri.',
      summaryEn: 'Reflections on implementing microservices in large-scale projects and the best practices I discovered.',
      contentPt: 'Ao longo da minha carreira, tive a oportunidade de participar de diversas migrações de arquiteturas monolíticas para microsserviços. Cada projeto trouxe lições valiosas.\n\nUma das principais lições é que microsserviços não são uma bala de prata. A complexidade operacional aumenta significativamente, e é essencial ter uma infraestrutura robusta de observabilidade e monitoramento.\n\nOutra lição importante é sobre o dimensionamento dos serviços. Serviços muito pequenos geram overhead desnecessário, enquanto serviços muito grandes perdem os benefícios da arquitetura distribuída. O equilíbrio é fundamental.\n\nA comunicação entre serviços, seja síncrona (REST, gRPC) ou assíncrona (message queues), deve ser cuidadosamente planejada para evitar acoplamento e garantir resiliência.',
      contentEn: 'Throughout my career, I have had the opportunity to participate in several migrations from monolithic architectures to microservices. Each project brought valuable lessons.\n\nOne of the main lessons is that microservices are not a silver bullet. Operational complexity increases significantly, and it is essential to have a robust observability and monitoring infrastructure.\n\nAnother important lesson is about service sizing. Services that are too small generate unnecessary overhead, while services that are too large lose the benefits of distributed architecture. Balance is key.\n\nCommunication between services, whether synchronous (REST, gRPC) or asynchronous (message queues), must be carefully planned to avoid coupling and ensure resilience.',
      category: 'Architecture',
    },
    {
      slug: 'transformacao-digital-2026',
      titlePt: 'Transformação Digital em 2026: Tendências e Desafios',
      titleEn: 'Digital Transformation in 2026: Trends and Challenges',
      summaryPt: 'As principais tendências de transformação digital para 2026 e como as empresas podem se preparar para o futuro.',
      summaryEn: 'Key digital transformation trends for 2026 and how companies can prepare for the future.',
      contentPt: 'A transformação digital continua sendo uma prioridade para organizações em todo o mundo. Em 2026, vemos tendências consolidadas e novos desafios emergentes.\n\nA adoção de cloud-native está se tornando o padrão, não a exceção. Empresas estão migrando não apenas infraestrutura, mas redesenhando processos inteiros para serem nativos da nuvem.\n\nLow-code e no-code platforms estão democratizando o desenvolvimento, permitindo que profissionais de negócio criem soluções sem depender exclusivamente de equipes de TI.\n\nA cibersegurança evoluiu para um modelo zero-trust, onde cada acesso é verificado e nada é confiável por padrão. Privacidade e proteção de dados tornaram-se diferenciadores competitivos.',
      contentEn: 'Digital transformation continues to be a priority for organizations worldwide. In 2026, we see consolidated trends and new emerging challenges.\n\nCloud-native adoption is becoming the standard, not the exception. Companies are migrating not just infrastructure, but redesigning entire processes to be cloud-native.\n\nLow-code and no-code platforms are democratizing development, enabling business professionals to create solutions without relying exclusively on IT teams.\n\nCybersecurity has evolved into a zero-trust model, where every access is verified and nothing is trusted by default. Privacy and data protection have become competitive differentiators.',
      category: 'Digital Transformation',
    },
  ];

  for (const post of posts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {
        titlePt: post.titlePt,
        titleEn: post.titleEn,
        summaryPt: post.summaryPt,
        summaryEn: post.summaryEn,
        contentPt: post.contentPt,
        contentEn: post.contentEn,
        category: post.category,
      },
      create: post,
    });
  }

  console.log('Seed complete: 3 blog posts upserted');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e: any) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
