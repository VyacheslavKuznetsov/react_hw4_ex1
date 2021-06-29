import { Button } from "@material-ui/core";
import React, { useState } from "react";

export default function HandleEvents(props) {
  const [counter, setCounter] = useState(0);
  const handleClick = (event) => {
    setCounter(counter + 1);
  };

  const handleMouseEnter = (event) => {
    console.log("OnMouseEnter");
  };

  const handleMouseLeave = (event) => {
    console.log("OnMouseLeave");
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      На меня нажали {counter} раз
    </Button>
  );
}
