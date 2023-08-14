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
      <div className="py-16 bg-white max-w-6xl mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
            Education
          </h2>
          <div className="md:flex flex-row space-x-5 space-y-6">
            <div className="flex-1 bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                MATRICULATION
              </h3>
              <p className="text-gray-600 mb-4">
                GOVT: BOYS HIGH SCHOOL KHAIR MUHAMMAD PANHWAR, DADU
              </p>
              <p className="text-gray-600">2021/22-2022/23</p>
            </div>

            <div className="flex-1 bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                INTERMEDIATE
              </h3>
              <p className="text-gray-600 mb-4">
                GOVT: BOYS DEGREE COLLEGE BHANSYEDABAD
              </p>
              <p className="text-gray-600">2023-Continue</p>
            </div>
            <div className="flex-1 bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                CIT - (certificate in information technology)
              </h3>
              <p className="text-gray-600 mb-4">
                BHAN SAYEDABAD, DISTRICT JAMSHORO
              </p>
              <p className="text-gray-600">2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m">
        <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gray-700 p-4">
            <h3 className="text-xl font-semibold text-white">EXPERIENCE</h3>
            <p className="text-gray-300">
              React developer ( Internship ) At Newtown It Solution
            </p>
          </div>
          <div className="p-4">
            <p className="text-gray-600">
              Worked on front-end development projects,
              collaborating with cross-functional teams to deliver high-quality
              software solutions.
            </p>
          </div>
          <div className="bg-gray-100 p-4 border-t border-gray-300 flex justify-between items-center">
            <div className="text-gray-600">
              <p>Des/2022 - July/2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
