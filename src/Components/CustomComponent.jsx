import React from "react";
import { Button, styled } from "@mui/material";
function CustomComponent() {
  const MyButton = styled(Button)({
    backgroundColor: "#009900",
    margin: 5,
    color: "white",
    "&:hover": {
      backgroundColor: "#339966",
    },
  });
  return (
    <div>
      CustomComponent
      <MyButton> This is a custom button </MyButton>
    </div>
  );
}

export default CustomComponent;
