import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-4xl font-bold mb-10">Let&apos;s Keep in Touch</h1>
      <div className="flex justify-between">
        <Image src="/contact.png" alt="Contact" width={400} height={400} priority></Image>
        {/* Input Field */}
        <div className="w-full ml-20">
          <form action="" className="flex flex-col">
            <input type="text" placeholder="Name" className="py-3 pl-2 border rounded-sm mb-3 focus:outline-none" />
            <input type="email" placeholder="Email" className="py-3 pl-2 border rounded-sm mb-3 focus:outline-none" />
            <textarea name="message" id="message" placeholder="Message" className="py-3 pl-2 border rounded-sm h-50 mb-3 focus:outline-none"></textarea>
            <div>
              <button type="submit" className="w-30 bg-[#53C38B] p-3 rounded-sm hover:cursor-pointer">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
