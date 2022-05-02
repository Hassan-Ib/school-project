import Image from "next/image";
import logo from "../public/img/LAUTECH-Logo.png";
import { Link } from "./Link";

const Logo = () => {
  return (
    <Link className="flex items-center gap-2" href="/">
      <div className="relative w-16 h-full">
        <Image
          src={logo}
          alt="Faculty of computing and Informatics"
          width="200"
          height="200"
          // layout="fill"
          priority
        />
      </div>
      <span className="text-xl font-semibold tracking-widest">FCI</span>
    </Link>
  );
};

export default Logo;
