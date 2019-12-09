import React from "react";

const NumberButton = props => {
  // console.log(props);
  const { value, key } = props;
  return (
    <>
      <button className="button number-button">
        {value}
        {key}
      </button>
    </>
  );
};

export default NumberButton;
