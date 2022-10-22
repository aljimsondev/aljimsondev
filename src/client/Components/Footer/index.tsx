import Image from "next/image";
import React from "react";
import imgLogo from "../../../../public/Assets/brand.svg";

function Footer() {
  return (
    <footer className="footer-base">
      <figure className="flex items-center justify-center flex-col">
        <div className="max-h-[40px]  max-w-[40px] h-[40px]  w-[40px] overflow-hidden flex items-center justify-center relative">
          <Image src={imgLogo} layout="fixed" />
        </div>
        <figcaption>Created by Al Jimson A. Megriño</figcaption>
      </figure>
    </footer>
  );
}

export default Footer;
