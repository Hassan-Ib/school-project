import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  //   const startFrom768 = useMediaQuery({ query: "(min-width: 768px)" });
  // const endAt1024 = useMediaQuery({ query: "(max-width: 1023px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return { isDesktop, isMobile, isTablet };
};

export default useMedia;
