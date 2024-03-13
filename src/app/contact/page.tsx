import React from "react";

const Contact = () => {
  return (
    <>
      <section className="mt-10 flex justify-center">
        <div className="bg-whiterounded px-8 py-8 mb-4 max-w-md">
          <h1 className="font-semibold text-3xl mb-6 text-center">
            Contact Me
          </h1>
          <div className="flex flex-col items-center justify-center">
            <a
              href="mailto:g2skurai@gmail.com"
              className="hover:underline mb-4"
            >
              <span className="font-bold">Email:</span> g2skurai@gmail.com
            </a>
            <span className="hover:underline mb-4 cursor-pointer">
              <span className="font-bold">Phone: +65 8128 1647</span>
            </span>
            <a
              href="https://github.com/CitizenCathay"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline mb-4"
            >
              <span className="font-bold">GitHub:</span>{" "}
              https://github.com/CitizenCathay
            </a>
            <a
              href="https://www.linkedin.com/in/choimengyew/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline"
            >
              <span className="font-bold">LinkedIn:</span>{" "}
              https://www.linkedin.com/in/choimengyew/
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
