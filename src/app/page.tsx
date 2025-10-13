import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex justify-between items-center min-h-[90vh]">
      {/* left side content */}
      <div className="flex flex-col justify-center w-[40%]">
        <h1 className='text-5xl font-bold leading-[1.3] mb-7 bg-gradient-to-b from-[#194c33] to-[#bbb] 
          bg-clip-text text-transparent'>Better design for your digital products</h1>
        <p className='textw-[50%]'>Turning your idea into Reality. We bring together the teams rom the global team industry</p>
      </div>
      <Image src="/hero.png" alt="Hero Image" width={400} height={400} />
      {/* right side content */}
    </div>
  );
};

export default HomePage;
