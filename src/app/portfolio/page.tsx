import Link from "next/link";
import Image from "next/image";

const PortfolioPage = () => {
  const items = [
    { src: "/illustration.png", title: "Illustration", href: '/portfolio/illustration' },
    { src: "/websites.jpg", title: "Websites", href: '/portfolio/websites' },
    { src: "/apps.jpg", title: "Applications", href: '/portfolio/applications' },
  ];

  return (
    <div className="font-bold">
      <h1 className="text-6xl mb-5">Our Works</h1>
      <p className="text-xl mb-5">Choose a gallery</p>

      <div className="flex gap-6">
        {items.map((item, i) => (
          <Link key={i} href={item.href} className="group relative w-[200px] h-[400px] border-2 border-gray-500 overflow-hidden rounded-lg">
            {/* Gambar */}
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-300"></div>

            {/* Teks di atas gambar */}
            <p className="absolute inset-0 flex items-end justify-end text-white text-xl font-semibold group-hover:text-[#53C38B] transition-colors duration-300 mb-3 mr-3">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
