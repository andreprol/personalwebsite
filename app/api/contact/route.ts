export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const contact = await prisma.contactMessage.create({
      data: {
        name: String(name),
        email: String(email),
        subject: String(subject),
        message: String(message),
      },
    });

    return NextResponse.json({ success: true, id: contact?.id ?? '' });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}
