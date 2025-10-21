import { NextResponse } from 'next/server';
import prisma from '@/prisma';

export async function GET(req: Request, context: { params: Promise<{ userId: string }> }) {
  try {
    const { userId } = await context.params;
    const blogs = await prisma.blog.findMany({
      where: { authorId: userId },
      orderBy: { createdAt: 'desc' },
      take: 3,
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching user blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
