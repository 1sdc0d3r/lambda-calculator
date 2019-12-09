import React from "react";

const OperatorButton = props => {
  console.log(props);
  return (
    <>
      <button className="button operator-button">{props.value}</button>
    </>
  );
};

export default OperatorButton;
