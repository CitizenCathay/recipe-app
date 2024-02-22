import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link
        className="text-primary font-semibold text-lg sm:text-2xl"
        href={""}
      >
        RELISH
      </Link>
      <nav className="flex gap-6 sm:gap-12 font-normal text-gray-500 items-center">
        <Link href={""} className="text-sm sm:text-lg">
          Home
        </Link>
        <Link href={""} className="text-sm sm:text-lg">
          About
        </Link>
        <Link
          href={""}
          className="bg-primary text-white rounded-full px-8 py-2 text-sm sm:text-lg active:bg-secondary"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
