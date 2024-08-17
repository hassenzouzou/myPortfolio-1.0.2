import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";


const initEmailJS = () => {
  emailjs.init("jNMawxs8HqZWcCpNA");
};

export default function Contact() {
  useEffect(() => {
    initEmailJS();
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_4pu6vhl", "template_dtl7ves", form).then(
      () => {
        alert("Email sent successfully");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      () => {
        alert("Failed to send email. Please try again.");
      }
    );
  };

  return (
    <section
      id="contact"
      className="contact pt-[100px] pb-[100px] flex flex-col justify-center items-center"
    >
      <h1 className="font-bold sm:text-6xl text-4xl text-[#3572EF]">
        Contact:
      </h1>
      <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
        <form id="user-form" onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
          ></textarea>
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
