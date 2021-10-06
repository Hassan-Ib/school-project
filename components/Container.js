function Container({ children, className }) {
  return (
    <div className={"lg:container relative m-auto sm:px-2" + className}>
      {children}
    </div>
  );
}
export const Section = ({ className, children }) => {
  return (
    <section className={className + " " + "px-6 mb-20"}>{children}</section>
  );
};

export default Container;
