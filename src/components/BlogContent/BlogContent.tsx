import Image from 'next/image';
import Link from 'next/link';

interface BlogContentProps {
  url: string;
  image: string;
  title: string;
  description: string;
}

const BlogContent = ({ url, image, title, description }: BlogContentProps) => {
  return (
    <Link href={url} className="my-5">
      <div className="flex">
        <Image src={image} alt="Blog Image" width={400} height={370}></Image>
        <div className="flex flex-col justify-center ml-10">
          <h1 className="font-bold text-2xl mb-5">{title}</h1>
          <p className="text-[#999]">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogContent;
