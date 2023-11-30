import React from "react";

const Plus = (props) => {
  return (
    <>
      <svg
        fill={props.fill}
        width={`${props.size}px`}
        height={`${props.size}px`}
        stroke={props.stroke}
        viewBox="0 0 24 24"
      >
        <path
          d="M6 12H18M12 6V18"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Plus;
