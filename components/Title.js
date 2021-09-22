import React from "react";

const Title = ({ text }) => {
  return (
    <React.Fragment>
      <h6 className="mt-8 opacity-70">
        <span className="inline-block border w-7 h-1 bg-gray-800"></span>
        {text}
      </h6>
    </React.Fragment>
  );
};

export default React.memo(Title);
