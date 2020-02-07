import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [buttonNumber, setButtonNumber] = useState(numbers);
  return (
    <div className="numsDiv">
      {buttonNumber.map(e => {
        // console.log(e, props);
        console.log(e);

        return <NumberButton value={e} />;
      })}
    </div>
  );
};

export default Numbers;
