import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default function sitemap(): MetadataRoute.Sitemap {
  let siteUrl = 'https://andreprol.com';
  try {
    const headersList = headers();
    const host = headersList?.get?.('x-forwarded-host') ?? headersList?.get?.('host');
    if (host) siteUrl = `https://${host}`;
  } catch {
    // use default
  }

  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-04-06'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
