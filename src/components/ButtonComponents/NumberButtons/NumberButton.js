import React from "react";
import data from "../../../data";
console.log(data);
const NumberButton = props => {
  const { data } = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{data.numbers[0]}</button>
    </>
  );
};

export default NumberButton;
