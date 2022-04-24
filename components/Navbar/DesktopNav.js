import React from "react";
import NavLinkList from "./NavLinkList";
import { MenuToggle } from "../Buttons/MenuToggle";
import Avatar from "../Avatar";
import SignButton from "../Buttons/SignIn";
import CreateArticleButton from "../Buttons/CreateArticle";
import Container from "../Container";
import Logo from "../Logo";
import useMedia from "../../hooks/useMedia";

const DesktopNav = ({ showNav }) => {
  const { isDesktop } = useMedia();
  return (
    <nav>
      <Container>
        <div className="relative z-40 w-full h-20 left-0 flex items-center  p-4 gap-3 bg-birch-500 text-birch-50">
          {/* logo */}
          <div className="flex-1">
            <Logo />
          </div>
          {/* links */}
          {isDesktop ? (
            <>
              <div className="hidden lg:block">
                <NavLinkList />
              </div>
              <div className="hidden lg:flex first-letter: justify-self-end items-center gap-4">
                <SignButton />
                <Avatar />
                <CreateArticleButton />
              </div>
            </>
          ) : null}
          {!isDesktop ? <MenuToggle showNav={showNav} /> : null}
        </div>
      </Container>
    </nav>
  );
};

export default DesktopNav;
