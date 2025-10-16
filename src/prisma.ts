import { PrismaClient } from './generated/prisma';
const prisma = new PrismaClient();

const seedBlog = async () => {
  const count = await prisma.blog.count();
  if (count === 0) {
    await prisma.blog.createMany({
      data: [
        { 
            title: 'Blog 1', 
            description: "Description Blog 1", 
            content: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat eum itaque veniam rerum voluptatem numquam ab fugiat laboriosam sequi, accusamus sint vel dolor delectus amet dolorem corrupti culpa ea assumenda nisi repudiandae nobis id impedit? Hic accusantium dolorem rerum alias dolores. Ea quaerat dolores blanditiis ducimus libero expedita omnis praesentium ipsum, magnam vitae fuga amet quia totam rerum cum. Veritatis provident, non recusandae, maxime dolorem, sint nihil totam esse laborum excepturi dolores nulla quasi nobis temporibus aspernatur? Nam blanditiis libero adipisci quod! Tempore ullam possimus cupiditate quibusdam, dolor doloribus illo unde doloremque. Veniam rerum quaerat earum ad harum quam.", 
            image: '/apps.jpg', 
            url: "/" 
        },
        { 
            title: 'Blog 2', 
            description: "Description Blog 2", 
            content: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat eum itaque veniam rerum voluptatem numquam ab fugiat laboriosam sequi, accusamus sint vel dolor delectus amet dolorem corrupti culpa ea assumenda nisi repudiandae nobis id impedit? Hic accusantium dolorem rerum alias dolores. Ea quaerat dolores blanditiis ducimus libero expedita omnis praesentium ipsum, magnam vitae fuga amet quia totam rerum cum. Veritatis provident, non recusandae, maxime dolorem, sint nihil totam esse laborum excepturi dolores nulla quasi nobis temporibus aspernatur? Nam blanditiis libero adipisci quod! Tempore ullam possimus cupiditate quibusdam, dolor doloribus illo unde doloremque. Veniam rerum quaerat earum ad harum quam.", 
            image: '/apps.jpg', 
            url: "/" 
        },
        { 
            title: 'Blog 3', 
            description: "Description Blog 3", 
            content: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat eum itaque veniam rerum voluptatem numquam ab fugiat laboriosam sequi, accusamus sint vel dolor delectus amet dolorem corrupti culpa ea assumenda nisi repudiandae nobis id impedit? Hic accusantium dolorem rerum alias dolores. Ea quaerat dolores blanditiis ducimus libero expedita omnis praesentium ipsum, magnam vitae fuga amet quia totam rerum cum. Veritatis provident, non recusandae, maxime dolorem, sint nihil totam esse laborum excepturi dolores nulla quasi nobis temporibus aspernatur? Nam blanditiis libero adipisci quod! Tempore ullam possimus cupiditate quibusdam, dolor doloribus illo unde doloremque. Veniam rerum quaerat earum ad harum quam.", 
            image: '/apps.jpg', 
            url: "/" 
        },
      ],
    });
  }
};

seedBlog();

export async function getAllBlogs() {
  return prisma.blog.findMany();
}

export default prisma;