import React from "react";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="text-center mt-10 -mb-3 bottom-0">
      © {getYear()} Kurai
    </footer>
  );
};

export default Footer;
