import { forwardRef } from "react";

const NavLinkList = ({ children, className }, ref) => {
  // useImperativeHandle(
  //   ref,
  //   () => ({
  //     getBoundingClientRect : ()=>{

  //     }
  //   }),
  //   [input],
  // )
  return (
    <ul
      ref={ref}
      className={`
        grid
        col-start-1 
        col-end-4
        sm:col-end-3
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
        lg:text-white
         lg:visible
         lg:top-0
         lg:bg-transparent
         ${className}
         `}>
      {children}
    </ul>
  );
};

export default forwardRef(NavLinkList);
