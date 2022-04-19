import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = React.useState(false);
  const closeNav = () => setIsNavToggled(false);

  return (
    <>
      <DesktopNav showNav={setIsNavToggled} />

      <MobileNav closeNav={closeNav} isNavToggled={isNavToggled} />
    </>
  );
};

export default Navbar;
