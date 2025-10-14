import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex items-center justify-between pb-5">
      <p>©2025 LamaDev. All right reserved.</p>
      {/* social media icon */}
      <div className="flex gap-4">
        <Link href="">
          <Image src="/1.png" alt="Facebook Image" width={20} height={20}></Image>
        </Link>
        <Link href="">
          <Image src="/2.png" alt="Instagram Image" width={20} height={20}></Image>
        </Link>
        <Link href="">
          <Image src="/3.png" alt="Twitter Image" width={20} height={20}></Image>
        </Link>
        <Link href="">
          <Image src="/4.png" alt="Youtube Image" width={20} height={20}></Image>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
