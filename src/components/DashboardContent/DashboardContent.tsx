'use client';

import { useState } from 'react';
import YourBlog from '@/components/YourBlog/YourBlog';

const MAX_FILE_SIZE_MB = 1;

interface DashboardContentProps {
  blogs: {
    id: string;
    title: string;
    image: string;
  }[];
  userId: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ blogs, userId }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [blogList, setBlogList] = useState(blogs);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    setDeletingId(id);

    try {
      // Delete dari DB
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');

      // Fetch ulang 3 blog terbaru
      const refreshRes = await fetch(`/api/blogs/user/${userId}`);
      const newBlogs = await refreshRes.json();

      setBlogList(newBlogs);
    } catch (err) {
      console.error(err);
      alert('Error deleting or refreshing blogs.');
    } finally {
      setDeletingId(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const fileInput = e.currentTarget.image as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file && file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      e.preventDefault();
      setError(`File is too big! Maximum ${MAX_FILE_SIZE_MB} MB.`);
      return;
    }
    setError('');
    setLoading(true);
  };

  return (
    <div className="flex">
      {/* Left Content */}
      <div className="flex flex-col w-1/2 mr-5">
        <h1 className="text-2xl font-bold text-[#999]">Your Blog</h1>
        {blogList.length > 0 ? (
          blogList.map((blog) => <YourBlog key={blog.id} src={blog.image} title={blog.title} id={blog.id} onDelete={handleDelete} loading={deletingId === blog.id} />)
        ) : (
          <p className="text-gray-500 mt-3">You haven&apos;t posted anything yet.</p>
        )}
      </div>

      {/* Right Content */}
      <div className="flex flex-col w-1/2 ml-5">
        <h1 className="text-2xl font-bold text-[#999] mb-3">Add New Post</h1>
        <form action="api/blogs" method="POST" encType="multipart/form-data" className="flex flex-col" onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" className="py-3 pl-2 border border-gray-300 rounded-sm mb-3 focus:outline-none" required />
          <input type="text" name="description" placeholder="Short Description" className="py-3 pl-2 border border-gray-300 rounded-sm mb-3 focus:outline-none" required />
          <input type="file" name="image" accept="image/*" className="py-3 pl-2 border border-gray-300 rounded-sm mb-3 focus:outline-none" required />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <textarea name="content" placeholder="Content" className="py-3 pl-2 border border-gray-300 rounded-sm h-50 mb-3 focus:outline-none" required></textarea>
          <button className="bg-[#53C38B] p-3 rounded-sm hover:cursor-pointer">{loading ? '...' : 'Send'}</button>
        </form>
      </div>
    </div>
  );
};

export default DashboardContent;
