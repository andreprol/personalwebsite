export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ posts: posts ?? [] });
  } catch (err: any) {
    console.error('Blog API error:', err);
    return NextResponse.json({ posts: [] });
  }
}
