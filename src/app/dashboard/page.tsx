'use client';

import YourBlog from '@/components/YourBlog/YourBlog';

const DashboardPage = () => {
  return (
    <div className="flex">
      {/* Left Content */}
      <div className="flex flex-col w-1/2 mr-5">
        <h1 className="text-2xl font-bold text-[#999]">Your Blog</h1>
        <YourBlog src="/apps.jpg" title="Title Blog 1"></YourBlog>
        <YourBlog src="/apps.jpg" title="Title Blog 2"></YourBlog>
        <YourBlog src="/apps.jpg" title="Title Blog 3"></YourBlog>
      </div>

      {/* Right Content */}
      <div className="flex flex-col w-1/2 ml-5">
        <h1 className="text-2xl font-bold text-[#999] mb-3">Add New Post</h1>
        <form className="flex flex-col">
          <input type="text" placeholder="Title" className="py-3 pl-2 border border-gray-300 rounded-sm mb-3 focus:outline-none" required />
          <input type="text" placeholder="Short Description" className="py-3 pl-2 border border-gray-300 rounded-sm mb-3 focus:outline-none" required />
          <input type="text" placeholder="Image" className="py-3 pl-2 border border-gray-300 rounded-sm mb-3 focus:outline-none" required />
          <textarea name="Content" id="Content" placeholder="Content" className="py-3 pl-2 border border-gray-300 rounded-sm h-50 mb-3 focus:outline-none" required></textarea>
          <button className="bg-[#53C38B] p-3 rounded-sm hover:cursor-pointer">Send</button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
