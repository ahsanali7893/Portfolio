import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-8 max-h-screen items-center justify-center "
        style={{ backgroundColor: "rgba(0, 128, 128, 0.6)" }}
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>
        <div className="container relative z-30 pb-12 sm:pt-56 sm:pb-48 lg:pt-20 lg:pb-48 max-w-6xl mx-auto ">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <Image
                height={48}
                width={225}
                src="/dev.jpeg"
                className="h-56 rounded-full sm:h-56"
                alt=""
              />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl px-3">
                Hello
                <span className="text-pink-600 text-3xl sm:text-5xl pl-2">
                  I am Ahsan Ali
                </span>
              </h1>

              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">
                    Let&apos;s Connect
                  </p>
                  <div className="hidden sm:block">
                    <AiOutlineArrowRight className="text-3xl text-yellow-500" />
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <Link
                    href="https://github.com/ahsanali7893"
                    className="mx-2 text-xl text-white transition duration-400 hover:text-gray-500"
                  >
                    <BsGithub />
                  </Link>
                  <Link
                    href="https://twitter.com/EhsanAl13204331?t=sjfdVnaWqQ877jP5Gj-gvQ&s=09"
                    className="mx-2 text-xl text-white transition duration-400 hover:text-blue-500"
                  >
                    <BsTwitter />
                  </Link>
                  <Link
                    href="https://instagram.com/ahsan_ali_panhwa?igshid=MzNlNGNkZWQ4Mg=="
                    className="mx-2 text-xl text-white transition duration-400 hover:text-pink-500"
                  >
                    <BsInstagram />
                  </Link>
                  <Link
                    href="https://www.facebook.com/ahsanali.panhwer.58?mibextid=ZbWKwL"
                    className="mx-2 text-xl text-white transition duration-400 hover:text-blue-500"
                  >
                    <BsFacebook />
                  </Link>
                </div>
                  <Link
                    href="/resume.pdf" target="_blank"
                    className="my-6 px-28 py-3 sm:px-6 sm:py-3 sm:ml-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                  >
                    Download CV
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
