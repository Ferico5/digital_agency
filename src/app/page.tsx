import Image from 'next/image';
import LinkButton from '@/components/LinkButton/LinkButton';

const HomePage = () => {
  return (
    <div className="flex justify-between items-center min-h-[70vh]">
      {/* left side content */}
      <div className="flex flex-col justify-between w-[50%]">
        <h1
          className="text-6xl font-bold leading-[1.3] mb-7 bg-gradient-to-b from-[#194c33] to-[#bbb] 
          bg-clip-text text-transparent"
        >
          Better design for your digital products.
        </h1>
        <p className="textw-[50%]">Turning your idea into Reality. We bring together the teams rom the global team industry</p>
        <div className="mt-7">
          <LinkButton href="/portfolio" textButton="See Our Works"></LinkButton>
        </div>
      </div>
      {/* right side content */}
      <div className="animate-float">
        <Image src="/hero.png" alt="Hero Image" width={400} height={400} />
      </div>
    </div>
  );
};

export default HomePage;
