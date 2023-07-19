import Image from "next/image";
import Link from "next/link";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <section className="bg-gray-50" id="portfolio">
      <div className="container py-16 md:py-20 max-w-6xl mx-auto px-5">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-[#66b3b3] sm:text-5xl lg:text-6xl">
          Check Out My Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here&apos;s what I have done with the past
        </h3>
        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <Link
            href={"/"}
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <Image width={1400} height={100} src="/Portfolio.png" alt="" />
          </Link>
          <Link
            href="https://textutilsby.vercel.app"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <Image width={1400} height={100} src="/textutils.PNG" alt="" />
          </Link>
          <Link
            href={"/"}
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <Image width={1400} height={100} src="/trippy.PNG" alt="" />
          </Link>
          <Link
            href={"/"}
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <Image width={1400} height={100} src="/codeswear.PNG" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
