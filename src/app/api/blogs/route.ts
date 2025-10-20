import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import prisma from '@/prisma';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.formData();
    const title = body.get('title') as string;
    const description = body.get('description') as string;
    const imageFile = body.get('image') as File;
    const content = body.get('content') as string;

    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${imageFile.type};base64,${buffer.toString('base64')}`;

    const uploadResponse = await cloudinary.uploader.upload(base64Image, {
      folder: 'blogs',
      resource_type: 'image',
    });

    const blog = await prisma.blog.create({
      data: {
        title,
        description,
        image: uploadResponse.secure_url,
        content,
        author: 'Anonymous',
        authorId: userId,
      },
    });

    await prisma.blog.update({
      where: { id: blog.id },
      data: { url: `/blog/${blog.id}` },
    });

    return NextResponse.redirect(new URL('/dashboard', req.url));
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
