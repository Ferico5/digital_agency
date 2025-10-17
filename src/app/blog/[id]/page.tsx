import Image from 'next/image';
import { getBlogById } from '@/prisma';

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col justify-around text-justify mr-10">
          <h1 className="font-bold text-2xl">{blog.title}</h1>
          <p className="text-[#999]">{blog.description}</p>
          <p>
            <span className="text-[#999]">Author:</span> {blog.author}
          </p>
        </div>
        <Image src={blog.image} alt="Blog Image" width={400} height={370}></Image>
      </div>

      {/* Content */}
      <div className="mt-10 text-justify">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetailPage;
