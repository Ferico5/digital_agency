import { PrismaClient } from './generated/prisma';
const prisma = new PrismaClient();

const seedBlog = async () => {
  const count = await prisma.blog.count();
  if (count === 0) {
    await prisma.blog.createMany({
      data: [
        { title: 'Blog 1', description: "Description Blog 1", image: '/apps.jpg', url: "/" },
        { title: 'Blog 2', description: "Description Blog 2", image: '/apps.jpg', url: "/" },
        { title: 'Blog 3', description: "Description Blog 3", image: '/apps.jpg', url: "/" },
      ],
    });
  }
};

seedBlog();

export async function getAllBlogs() {
  return prisma.blog.findMany();
}

export default prisma;