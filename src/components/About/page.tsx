import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <div className="bg-gray-50" id="about">
        <div className="container flex flex-col justify-center items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold text-center uppercase text-primary sm:text-5xl lg:text-6xl text-[#66b3b3]">
              Who Iam i?
            </h2>
            <h4 className="pt-6 font-header text-xl text-center font-medium text-black sm:text-2xl lg:text-3xl">
              I'm Ahsan Ali, a Web developer
            </h4>
            <p className="pt-6 font-body text-center leading-relaxed text-grey-20">
              Welcome to my portfolio! I'm a frontend web developer skilled in
              HTML, CSS, JavaScript, Next.js, React, Tailwind CSS, and
              TypeScript. With a passion for crafting engaging user experiences,
              I specialize in creating modern and responsive websites. Using
              HTML, I structure the content of web pages, ensuring accessibility
              and semantic markup. CSS is my tool of choice for designing
              visually appealing interfaces, implementing custom layouts, and
              creating a consistent user experience across devices. JavaScript
              is where I bring interactivity to life. I leverage its power to
              add dynamic features, handle user interactions, and fetch data
              from servers. With Next.js, I build fast and optimized
              applications, utilizing server-side rendering and static site
              generation for seamless user experiences. React is my go-to
              library for building scalable and reusable UI components. Its
              component-based architecture allows me to efficiently manage state
              and behavior, creating complex applications with ease. I also
              leverage TypeScript to enhance code quality, catch errors early,
              and improve collaboration in larger projects. In addition, I
              utilize Tailwind CSS, a utility-first framework, to rapidly build
              custom designs using pre-built classes. This ensures a responsive
              and mobile-first approach while maintaining flexibility and a
              unique visual identity. I'm excited to showcase my projects and
              demonstrate how I've applied my skills to create stunning web
              experiences. Take a look at my portfolio to explore my work and
              see how I can contribute to your next web development project.
              Let's collaborate and bring your ideas to life!
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-center">
              <div className="flex  justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-gray-400">
                  Let's Connect
                </p>
                <div className="hidden sm:block items-center">
                  <AiOutlineArrowRight className="text-3xl text-yellow-500" />
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <Link
                  href={"/"}
                  className="mx-2 text-xl text-gray-400 transition duration-400 hover:text-blue-500"
                >
                  <BsFacebook />
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
                  className="mx-2 text-xl text-gray-400 transition duration-400 hover:text-gray-500"
                >
                  <BsGithub />
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
