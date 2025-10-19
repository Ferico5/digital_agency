import Image from 'next/image';

interface YourBlogProps {
  src: string;
  title: string;
}

const YourBlog: React.FC<YourBlogProps> = ({ src, title }) => {
  return (
    <div className="flex items-center justify-between mt-5">
      <Image src={src} alt="Blog Picture" width={200} height={170}></Image>
      <h1 className="w-65">{title}</h1>
      <p>X</p>
    </div>
  );
};

export default YourBlog;
