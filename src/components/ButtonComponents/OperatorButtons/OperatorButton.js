import React from "react";

const OperatorButton = props => {
  console.log(props);
  const { value } = props;
  return (
    <>
      <button className="button operator-button">{value}</button>
    </>
  );
};

export default OperatorButton;
