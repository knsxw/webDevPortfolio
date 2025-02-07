import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto zoom-container">
              <Image
                src="/profile-picture.jpg"
                alt="Khine Khant - Full Stack Developer"
                fill
                className="rounded-2xl object-cover object-center zoom-image"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Hi, I&apos;m Khine Khant, a passionate full stack web developer. I
              love creating beautiful, functional, and user-friendly websites
              and applications.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me playing music, reading books,
              or experimenting with new web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
