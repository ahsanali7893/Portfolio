import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <div className="bg-gray-50" id="about">
        <div className="container flex flex-col justify-center items-center py-16 md:py-20 lg:flex-row px-5 max-w-7xl mx-auto">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold text-center uppercase text-primary sm:text-5xl lg:text-6xl text-[#66b3b3]">
              Who I am?
            </h2>
            <h4 className="pt-6 font-header text-xl text-center font-medium text-black sm:text-2xl lg:text-3xl">
              I&apos;m Ahsan Ali, a Web developer
            </h4>
            <p className="pt-6 font-body text-center leading-relaxed text-grey-20 font-bold">
              My portfolio showcases my expertise in Next.js, React, Tailwind
              CSS, HTML, CSS, JavaScript, TypeScript, GitHub, and Git. Through
              my projects, I demonstrate proficiency in building modern web
              applications using these technologies. With a strong focus on
              front-end development, I create visually appealing and
              user-friendly interfaces. By leveraging the power of Next.js and
              React, I ensure efficient and dynamic web solutions. Tailwind CSS
              helps me to streamline my styling process, while TypeScript
              enhances the reliability and scalability of my code. I also
              utilize GitHub and Git for version control and collaboration. My
              portfolio reflects my skills in creating responsive and
              high-performance websites that deliver an exceptional user
              experience.
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-center">
              <div className="flex justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-gray-400">
                  Let&apos;s Connect
                </p>
                <div className="hidden sm:block items-center">
                  <AiOutlineArrowRight className="text-3xl text-yellow-500" />
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <Link
                  href={"/"}
                  className="mx-2 text-xl text-gray-400 transition duration-400 hover:text-gray-500"
                >
                  <BsGithub />
                </Link>
                <Link
                  href={"/"}
                  className="mx-2 text-xl text-gray-400 transition duration-400 hover:text-blue-500"
                >
                  <BsTwitter />
                </Link>
                <Link
                  href={"/"}
                  className="mx-2 text-xl text-gray-400 transition duration-400 hover:text-pink-500"
                >
                  <BsInstagram />
                </Link>
                <Link
                  href={"/"}
                  className="mx-2 text-xl text-gray-400 transition duration-400 hover:text-blue-500"
                >
                  <BsFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
