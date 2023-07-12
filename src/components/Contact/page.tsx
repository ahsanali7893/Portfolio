import React from "react";

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
        </form>
      </div>
    </section>
  );
};

export default Contact;
