import React from "react";
import Link from "next/link";

const NavbarLink: React.FC<{ name: string; link: string; active: boolean }> = ({
  name,
  link,
  active = false,
}) => {
  return (
    <div className={`nav-link group ${active && "--active-link"}`}>
      <span className="nav-link-span"></span>
      <Link href={link}>
        <p className="nav-link-text">{name}</p>
      </Link>
    </div>
  );
};

export default NavbarLink;
