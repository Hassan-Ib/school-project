import React from "react";
import Avatar from "../Avatar";
import PropType from "prop-types";
import SocialLinks from "../SocialLinks";
import SignButton from "../Buttons/SignIn";
import CreateArticleButton from "../Buttons/CreateArticle";
import Container from "../Container";
import { useMediaQuery } from "react-responsive";
import NavLinkList from "./NavLinkList";
import { MenuToggleClose } from "./NavToggle";

const MobileNav = ({ closeNav, isNavToggled }) => {
  const isDesktop = useMediaQuery({ query: "(min-width : 1024px)" });

  if (isDesktop) return null;
  return (
    <nav aria-hidden={!isNavToggled ? true : false}>
      <Container>
        <div
          className={`lg:hidden fixed z-50 w-full top-0 left-0 bottom-0 overflow-hidden text-white transition duration-75 ease-out
       transform ${!isNavToggled ? "-translate-x-full" : ""}
        `}>
          {/* overlay  */}
          <div onClick={closeNav} className="nav__overlay"></div>

          {/* overlay ends */}
          <div className="overflow-auto flex flex-col max-w-xs h-full sm:w-3/4 bg-birch-500 relative z-20 px-6 pb-8">
            <section className="flex items-center justify-between  py-12  ">
              {/* logo */}
              <Avatar size="lg" />
              <MenuToggleClose closeNav={closeNav} />
            </section>

            {/* navigation links */}

            <NavLinkList closeNav={closeNav} />

            <div className="flex-1 pt-8 ">
              <div className="flex gap-4 px-1">
                <SignButton />
                <CreateArticleButton />
              </div>
            </div>

            {/* social icons */}
            <SocialLinks />
          </div>
        </div>
      </Container>
    </nav>
  );
};

MobileNav.PropType = {
  closeNav: PropType.func,
  isNavToggled: PropType.bool,
};

export default MobileNav;
