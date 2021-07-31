const NavLinkList = ({ children, className, active }) => {
  return (
    <ul
      className={`
        absolute
        right-0
        w-full
        sm:w-2/4
        bg-white
        border-red-600
        border-2
        grid
        ${
          active
            ? " opacity-100 visible top-full transition-all ease-out duration-200 -translate-x-0 z-10"
            : "opacity-0 invisible translate-x-full"
        }
        lg:border-0
        lg:relative
        lg:w-auto
        lg:py-0
        lg:translate-x-0
        lg:opacity-100
        lg:transition-none
        lg:grid-flow-col
        lg:col-start-2
        lg:col-end-4
        lg:justify-end
        lg:gap-10
        lg:text-gray-700
         lg:visible
         lg:top-0
         lg:bg-transparent
         ${className}
         `}>
      {children}
    </ul>
  );
};

export default NavLinkList;
