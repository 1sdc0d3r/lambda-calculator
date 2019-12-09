import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [specialButton, setSpecialNumber] = useState(specials);
  return (
    <div className="specialsDiv">
      {specialButton.map(e => {
        return <SpecialButton value={e} />;
      })}
    </div>
  );
};

export default Specials;
