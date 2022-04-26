import React from "react";
import PropTypes from "prop-types";

const flowTypes = "flow-l,flow-r,flow-b,flow-t".split(",");

const FlowButton = ({ text, flowDirection, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      <span className="text flex gap-2 items-center">{text}</span>
      <span className={`flow ${flowDirection}`}></span>
    </button>
  );
};

FlowButton.defaultProps = {
  className: "",
  flowDirection: "flow-b",
  onClick: () => {},
};

FlowButton.proptypes = {
  className: PropTypes.string,
  text: PropTypes.node.isRequired,
  flowDirection: PropTypes.oneOf(flowTypes).isRequired,
};

export default FlowButton;
