import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { e } from "maath/dist/index-43782085.esm";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_c7w8qcq",
        "template_m9o42x7",
        {
          from_name: form.name,
          to_name: "Irfan",
          from_email: form.email,
          to_email: "im4941668@gmail.com",
          message: form.message,
        },

        "cIa_oPTfGNXQUo1LA"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for connecting with me. I will get back to you as soon as posible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Ah Oh!, something went Wrong");
        }
      );
  };

  return (
    <>
      <div
        className={`justify-center flex gap-10 sm:gap-4 -mx-9 overflow-hidden sm:flex-col`}
      >
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:hidden md:hidden lg:hidden sm:h-72"
        >
          <EarthCanvas />
        </motion.div>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-6 sm:p-2 rounded-2xl ml-4 sm:ml-0"
        >
          <p
            className={`${styles.sectionSubText} sm:text-lg sm:flex sm:justify-center`}
          >
            Get in touch
          </p>
          <h3
            className={`${styles.sectionHeadText} sm:text-xl sm:flex sm:justify-center`}
          >
            Contact.
          </h3>

          <form
            spellCheck={false}
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 sm:w-4/5 mx-5"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium sm:text-sm"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 sm:text-sm placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto sm:hidden"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
