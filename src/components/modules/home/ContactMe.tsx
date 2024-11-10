/* eslint-disable react/no-unescaped-entities */
"use client";
/* eslint-disable react/jsx-sort-props */
import { FaUserAlt, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);

  // Function to send email
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q1kch7n",
        "template_pdmpzex",
        form.current!,
        "C61pccjrY14jsvXqX"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert(
            "An error occurred while sending your message. Please try again later."
          );
        }
      );
  };

  return (
    <div className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Contact Me
        </h2>
        <p className="mt-6 text-lg leading-7 text-gray-300 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have questions, feedback, or
          just want to connect, drop us a message and we'll get back to you as
          soon as possible.
        </p>
        <div className="mt-12 flex justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 w-full max-w-2xl bg-white rounded-xl shadow-2xl p-12 transform transition-all hover:shadow-3xl duration-300 ease-in-out"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="relative">
                <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="py-3 pl-10 pr-4 block w-full shadow-sm text-gray-400 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="py-3 pl-10 pr-4 text-gray-400 block w-full shadow-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="relative">
              <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message"
                required
                className="py-3 pl-10 text-gray-400 pr-4 block w-full shadow-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
