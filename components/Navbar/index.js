import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = React.useState(false);

  const closeNav = () => setIsNavToggled(false);

  return (
    <React.Fragment>
      <DesktopNav showNav={setIsNavToggled} />
      <MobileNav closeNav={closeNav} isNavToggled={isNavToggled} />
    </React.Fragment>
  );
};
export default Navbar;
