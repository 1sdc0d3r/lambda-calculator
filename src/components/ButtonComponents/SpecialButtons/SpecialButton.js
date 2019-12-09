import React from "react";

const SpecialButton = props => {
  // console.log(props);
  return (
    <>
      <button className="button special-button">{props.value}</button>
    </>
  );
};

export default SpecialButton;
