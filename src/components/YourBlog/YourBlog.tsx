'use client';

import Image from 'next/image';

interface YourBlogProps {
  src: string;
  title: string;
  id: string;
  onDelete?: (id: string) => void;
  loading?: boolean;
}

const YourBlog: React.FC<YourBlogProps> = ({ src, title, id, onDelete, loading }) => {
  const handleClick = () => {
    if (!loading) onDelete?.(id);
  };

  return (
    <div className="flex items-center justify-between mt-5">
      <Image src={src} alt="Blog Picture" width={200} height={170} unoptimized></Image>
      <h1 className="w-65">{title}</h1>
      <button onClick={handleClick} disabled={loading} className="text-red-500 hover:text-red-700 hover:cursor-pointer font-bold text-xl">
        {loading ? '...' : 'X'}
      </button>
    </div>
  );
};

export default YourBlog;
