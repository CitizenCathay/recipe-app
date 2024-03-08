import React from "react";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="text-center pt-14 mt-auto -mb-3 bottom-0">
      © {getYear()}{" "}
      <a
        href="https://github.com/CitizenCathay"
        target="_blank"
        rel="noreferrer noopener"
      >
        Choi Meng Yew
      </a>
    </footer>
  );
};

export default Footer;
