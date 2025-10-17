import { PrismaClient } from './generated/prisma';
const prisma = new PrismaClient();

const seedBlog = async () => {
  const count = await prisma.blog.count();
  if (count === 0) {
    const blogsData = [
      {
        title: 'Blog 1',
        description: 'Description Blog 1',
        content: 'Lorem ipsum dolor sit amet...',
        image: '/apps.jpg',
        author: 'John Doe',
      },
      {
        title: 'Blog 2',
        description: 'Description Blog 2',
        content: 'Lorem ipsum dolor sit amet...',
        image: '/apps.jpg',
        author: 'John Doe',
      },
      {
        title: 'Blog 3',
        description: 'Description Blog 3',
        content: 'Lorem ipsum dolor sit amet...',
        image: '/apps.jpg',
        author: 'John Doe',
      },
    ];

    // create blogs and generate UUID automatically
    for (const blog of blogsData) {
      const newBlog = await prisma.blog.create({ data: blog });
      await prisma.blog.update({
        where: { id: newBlog.id },
        data: { url: `/blog/${newBlog.id}` },
      });
    }
  }
};

seedBlog();

export async function getAllBlogs() {
  return prisma.blog.findMany();
}

export async function getBlogById(id: string) {
  return prisma.blog.findUnique({
    where: { id },
  });
}

export default prisma;
