import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="mb-10">
        <div className="flex">
          <Image src="/apps.jpg" alt="Blog Image" width={400} height={370}></Image>
          <div className="flex flex-col justify-center ml-10">
            <h1 className="font-bold text-2xl mb-5">Title Blog</h1>
            <p className="text-[#999]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi fuga eaque natus, beatae illum fugiat eum quos? Ratione enim deleniti debitis alias, culpa impedit delectus vitae sed exercitationem. Perspiciatis magni
              cum error deleniti amet, reiciendis nobis unde rem cumque rerum ex aut incidunt, harum, tenetur perferendis. Ratione, explicabo harum?
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPage;
