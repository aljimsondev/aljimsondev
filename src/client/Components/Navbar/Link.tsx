import React from "react";
import Link from "next/link";

const NavbarLink: React.FC<{ name: string; link: string }> = ({
  name,
  link,
}) => {
  return (
    <div className="hidden relative group items-center mr-4 xs:flex cursor-pointer text-gray-900 dark:text-purple-500 px-3 py-1  overflow-hidden select-none">
      <span className="nav-link-span"></span>
      <Link href={link}>
        <p className="z-[1] text-gray-900 dark:text-gray-300 group-hover:text-purple-900 dark:group-hover:text-purple-500">
          {name}
        </p>
      </Link>
    </div>
  );
};

export default NavbarLink;
