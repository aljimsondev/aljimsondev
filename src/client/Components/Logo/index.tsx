import Image from "next/image";
import logo from "../../../../public/Assets/brand.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="logo-base">
        <Image src={logo} alt="brand" />
      </div>
    </Link>
  );
}

export default Logo;
