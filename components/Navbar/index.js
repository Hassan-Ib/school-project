import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Container from "../Container";

const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = React.useState(false);

  const closeNav = () => setIsNavToggled(false);

  return (
    <Container>
      <>
        <DesktopNav showNav={setIsNavToggled} />
        <MobileNav closeNav={closeNav} isNavToggled={isNavToggled} />
      </>
    </Container>
  );
};

export default Navbar;
