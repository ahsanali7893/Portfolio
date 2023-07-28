"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsWhatsapp } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import { RxCrossCircled } from "react-icons/rx";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_subject: "",
      user_message: "",
    },
    validationSchema: Yup.object().shape({
      user_name: Yup.string()
        .min(3, "Name must be more than 3 character")
        .max(65, "Enter your name with 65 characters or less")
        .required("Please enter your name"),
      user_subject: Yup.string()
        .min(3, "Subject must be more than 3 character")
        .max(225, "Enter Subject with 225 characters or less")
        .required("Please enter your subject"),
      user_email: Yup.string()
        .email("Invalid email")
        .max(225, "email address with 225 characters or less")
        .required("Please enter your email"),
      user_message: Yup.string()
        .min(3, "message must be more than 3 character")
        .max(250, "Enter message with 250 characters or less")
        .required("Please enter your message"),
    }),
    onSubmit: (values: any) => {
      handleSaveAction(values);
    },
    enableReinitialize: true,
  });
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    formik;

  const handleSaveAction = (formValue: any) => {
    sendEmail(formValue);
  };
  // console.log(errors, "errors");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    setLoading(true);
    emailjs
      .send("service_2d241zq", "template_3mtzjmk", e, "LQe7qqYP6HhGvunpL")
      .then(
        (result) => {
          // console.log(result.text);
          const notify = () =>
            toast("Message sent", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          values.user_name = "";
          values.user_email = "";
          values.user_subject = "";
          values.user_message = "";
          notify();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          const notify = () =>
            toast("Error while sending message", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          notify();
          setLoading(false);
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <div className="pt-20 max-w-screen-2xl min-h-screen px-5 mt-20 md:px-10 lg:px-32 mx-auto flex items-cente">
        <div className="w-full ">
          <div className="text-2xl items-center justify-center text-center">
            <h2 className="font-bold text-3xl md:text-4xl tracking-widest uppercase text-black">
              CONTACT <span className="text-[#ffb200]"> ME</span>
            </h2>
            {/* <button onClick={notify}>Notify !</button> */}
          </div>
          <div className="my-10">
            <div className="lg:flex pt-6">
              <div className="w-full lg:w-[40%]">
                <h1 className="pb-6 font-bold text-3xl text-black tracking-widest">
                  (: DON&apos;T BE{" "}
                  <span className="text-[#ffb400]"> SHY !</span>
                </h1>
                <p className="text-black">
                  I&lsquo;m open to discussing new projects, creative ideas, and
                  opportunities to be part of your vision. Let&lsquo;s connect
                  and explore possibilities together. Feel free to reach out for
                  a free consultation using the contact information below.
                </p>
                <div className="flex items-center mt-8">
                  <div className="">
                    <HiOutlineLocationMarker
                      className="text-[#ffb400] mr-4"
                      size={40}
                    />
                  </div>
                </div>
                <div className="flex items-center mt-8">
                  <div className="">
                    <GoMail className="text-[#ffb400] mr-4" size={40} />
                  </div>
                  <div className="">
                    <h2 className=" font-bold text-xl text-white tracking-widest">
                      Mail Me
                    </h2>
                    <p className="text-white">contact@khalilahmed.dev</p>
                  </div>
                </div>
                <div className="flex items-center mt-8">
                  <div className="">
                    <BsWhatsapp className="text-[#ffb400] mr-4" size={35} />
                  </div>
                  <div className="">
                    <h2 className=" font-bold text-xl text-white tracking-widest">
                      Whatsapp
                    </h2>
                    <p className="text-white">+923070599766</p>
                  </div>
                </div>
              </div>
              <div className="w-full mt-10 lg:mt-0 lg:pl-4 lg:w-[60%]">
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="flex">
                    <div className="w-[50%]">
                      <input
                        onChange={handleChange}
                        value={values.user_name}
                        type="text"
                        name="user_name"
                        className={`${
                          errors.user_name && touched.user_name
                            ? "!border-red-500"
                            : ""
                        } w-full shadow-lg shadow-black focus:shadow-black outline-none focus:shadow-md duration-300 border-4 border-[#333B43] bg-[#45505B] p-2 rounded-full text-white`}
                        placeholder="Enter your name"
                      />
                      {errors.user_name && touched.user_name ? (
                        <div className=" p-1 rounded-full flex items-center bg-red-100">
                          <RxCrossCircled
                            className="text-red-400 mr-2"
                            size={20}
                          />
                          <p className="text-black font-bold">
                            {`${errors.user_name}`}
                          </p>
                        </div>
                      ) : null}
                    </div>
                    <div className="w-[50%] ml-4">
                      <input
                        onChange={handleChange}
                        value={values.user_email}
                        type="email"
                        name="user_email"
                        className={`${
                          errors.user_email && touched.user_email
                            ? "!border-red-500"
                            : ""
                        } w-full shadow-lg shadow-black focus:shadow-black outline-none focus:shadow-md duration-300 border-4 border-[#333B43] bg-[#45505B] p-2 rounded-full text-white`}
                        placeholder="Enter your email"
                      />
                      {errors.user_email && touched.user_email ? (
                        <div className=" p-1 rounded-full flex items-center bg-red-100">
                          <RxCrossCircled
                            className="text-red-400 mr-2"
                            size={20}
                          />
                          <p className="text-black font-bold">
                            {`${errors.user_email}`}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="">
                    <input
                      onChange={handleChange}
                      value={values.user_subject}
                      name="user_subject"
                      type="text"
                      className={`${
                        errors.user_subject && touched.user_subject
                          ? "!border-red-500"
                          : ""
                      } shadow-lg shadow-black focus:shadow-black focus:shadow-md outline-none duration-300 border-4 border-[#333B43] bg-[#45505B] w-full p-2 mt-4 rounded-full text-white`}
                      placeholder="Your subject"
                    />
                    {errors.user_subject && touched.user_subject ? (
                      <div className=" p-1 rounded-full flex items-center bg-red-100">
                        <RxCrossCircled
                          className="text-red-400 mr-2"
                          size={20}
                        />
                        <p className="text-black font-bold">
                          {`${errors.user_subject}`}
                        </p>
                      </div>
                    ) : null}
                  </div>
                  <div className="">
                    <textarea
                      onChange={handleChange}
                      value={values.user_message}
                      name="user_message"
                      rows={7}
                      className={`${
                        errors.user_message && touched.user_message
                          ? "!border-red-500"
                          : ""
                      } shadow-lg shadow-black focus:shadow-black focus:shadow-md outline-none duration-300 first-letter border-4 border-[#333B43] bg-[#45505B] w-full p-2 mt-4 rounded-2xl text-white`}
                      placeholder="Write your message here..."
                    />
                    {errors.user_message && touched.user_message ? (
                      <div className=" p-1 rounded-full flex items-center bg-red-100">
                        <RxCrossCircled
                          className="text-red-400 mr-2"
                          size={20}
                        />
                        <p className="text-black font-bold">
                          {`${errors.user_message}`}
                        </p>
                      </div>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="bg-[#ffb400] border-4 border-[#9A7318] text-white shadow-xl shadow-black hover:shadow-md hover:shadow-black mt-3 py-1 px-3 rounded-full duration-300 hover:scale-95"
                    disabled={loading}
                  >
                    {loading ? "sending... " : "Send message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
