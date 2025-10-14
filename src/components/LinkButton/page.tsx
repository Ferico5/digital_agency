import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  textButton: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, textButton }) => {
  return (
    <Link href={href} className="bg-[#53C38B] p-3 rounded-sm">
      {textButton}
    </Link>
  );
};

export default LinkButton;
