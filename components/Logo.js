import Image from "next/image";
import logo from "../public/img/LAUTECH-Logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
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
    </div>
  );
};

export default Logo;
