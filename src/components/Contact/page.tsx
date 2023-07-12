import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section id="contact">
      <div className="container py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-[#66b3b3] sm:text-5xl lg:text-6xl">
          Here's a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6"></div>
        <form className="mx-auto w-full pt-10 sm:w-3/4">
            <div className="flex flex-col md:flex-row">
                <input className="mr-3 w-full rounded border border-gray-200 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5" type="text" placeholder="Name" id="name"/>
                <input className="mt-6 w-full rounded border border-gray-200 px-4 py-3 font-body md:ml-3 md:mt-0 text-black md:w-1/2 lg:ml-5" type="text" placeholder="Email" id="email"/>
            </div>
            <textarea className="mt-6 w-full rounded border border-gray-200 px-4 py-3 font-body text-black md:mt-8" placeholder="Message" id="message" cols={30} rows={10}></textarea>
            <button className="mt-6 mx-auto flex items-center justify-center rounded bg-blue-600 px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-gray-50">Send</button>
        </form>
        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <BsFillTelephoneFill className="text-2xl text-grey-40"/>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">My Phone</p>

            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">+923171370439</p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
