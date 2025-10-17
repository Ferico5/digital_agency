import BlogContent from '@/components/BlogContent/BlogContent';
import { getAllBlogs } from '@/prisma';

export type Blog = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
};

const BlogPage = async () => {
  const blogs = await getAllBlogs();
  return (
    <div className="flex flex-col">
      {blogs.map((blog) => (
        <BlogContent key={blog.id} url={`/blog/${blog.id}`} image={blog.image} title={blog.title} description={blog.description}></BlogContent>
      ))}
    </div>
  );
};

export default BlogPage;
