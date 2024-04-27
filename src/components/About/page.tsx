import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="bg-gray-50" id="about">
        <div className="flex flex-col justify-center items-center py-16 md:py-20 lg:flex-row px-5 max-w-6xl mx-auto">
          <div className="w-full text-center sm:w-3/4 lg:w-full lg:text-left">
            <h2 className="font-header text-4xl font-semibold text-center uppercase text-primary sm:text-5xl lg:text-6xl text-cyan-600 ">
              Who I am?
            </h2>
            <h4 className="pt-6 font-header text-xl text-center font-medium text-black sm:text-2xl lg:text-3xl">
              I&apos;m Ahsan Ali, React, Next js Web developer
            </h4>
            <p className="pt-6 font-body text-justify leading-relaxed text-grey-20 w-full">
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
                  href="https://www.linkedin.com/in/ahsan-ali-334403280/"
                  className="mx-2 text-xl transition duration-300 transform hover:scale-110"
                  target="_blank"
                >
                  <FaLinkedin className="text-gray-500 hover:text-blue-500" />
                </Link>
                <Link
                  href="https://github.com/ahsanali7893"
                  className="mx-2 text-xl transition duration-300 transform hover:scale-110"
                  target="_blank"
                >
                  <BsGithub className="text-gray-500" />
                </Link>
                <Link
                  href="https://twitter.com/EhsanAl13204331?t=sjfdVnaWqQ877jP5Gj-gvQ&s=09"
                  className="mx-2 text-xl transition duration-300 transform hover:scale-110"
                  target="_blank"
                >
                  <BsTwitter className="text-gray-500 hover:text-blue-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                MATRICULATION
              </h3>
              <p className="text-gray-600 mb-4">
                GOVT: BOYS HIGH SCHOOL KHAIR MUHAMMAD PANHWAR, DADU
              </p>
              <p className="text-gray-600">2021/22-2022/23</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                INTERMEDIATE
              </h3>
              <p className="text-gray-600 mb-4">
                GOVT: BOYS DEGREE COLLEGE BHANSYEDABAD
              </p>
              <p className="text-gray-600">2023-Continue</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
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

      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4">
              <h3 className="text-xl font-semibold text-white">EXPERIENCE</h3>
              <p className="text-gray-300">
                React developer ( Internship ) At Newtown It Service
              </p>
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Worked on front-end development projects, collaborating with
                cross-functional teams to deliver high-quality software
                solutions.
              </p>
            </div>
            <div className="bg-gray-100 p-4 border-t border-gray-300 flex justify-between items-center">
              <div className="text-gray-600">
                <p>Des/2022 - Oct/2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
