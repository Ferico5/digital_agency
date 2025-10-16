import Image from 'next/image';
import LinkButton from '@/components/LinkButton/LinkButton';

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {/* image */}
      <div className="relative w-full h-[40vh]">
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg" alt="about" fill className="object-cover grayscale" />
      </div>
      {/* Image Text */}
      <div className="flex mt-[-5em] ml-4 z-99">
        <div className="bg-[#53c28b] p-1 inline-block">
          <h1 className="text-2xl font-bold">Digital Storytellers</h1>
          <p className="font-semibold">Handcrafting award winning digital experiences</p>
        </div>
      </div>
      {/* Content */}
      <div className="flex h-115">
        {/* Left Content */}
        <div className="flex flex-col justify-between w-1/2 pt-8 pr-10 text-justify">
          <h1 className="text-2xl font-bold">Who Are We?</h1>
          <p>Digital agency, where creativity, innovation, and cutting-edge technology converge to redefine digital experiences.</p>
          <p>
            As a leading digital agency, we are passionate about crafting impactful strategies, designing captivating visuals, and developing robust solutions that help bussinesses thrive in the digital realm. Our team of dedicated
            professionals is committed to delivering exceptional results that exceed our clients&apos; expectations.
          </p>
          <p>
            Our mission is to empower bussinesses by leveraging the power of digital platforms. We believe that every brand has a unique story to tell, and our purpose is to help them tell it effectively through innovative and strategic
            digital solutions.
          </p>
        </div>
        {/* Right Content */}
        <div className="flex flex-col justify-between w-1/2 pt-8 pl-10 text-justify">
          <h1 className="text-2xl font-bold">What We Do?</h1>
          <p>
            We understand that a strong brand identity is the foundation of success in the digital landscape. Our team of creative strategies excels in developing brand strategies that resonate with your target audience. From logo design to
            brand massaging, we craft cohesive and compelling narratives that set your brand apart.
          </p>
          <p>- Creative ilustrations</p>
          <p>- Users Experience</p>
          <p>- Dynamic Websites</p>
          <p>- Fast and Handy Mobile Apps</p>
          <div>
            <LinkButton href="/contact" textButton="Contact"></LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
