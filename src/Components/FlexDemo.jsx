import React from "react";
import LeftContent from "./LeftContent";
import MainContent from "./MainContent";
import RightContent from "./RightContent";
import { Stack } from "@mui/material";
function FlexDemo() {
  return (
    <div>
      <Stack direction='row' justifyContent='space-between'>
        <LeftContent />
        <MainContent />
        <RightContent />
      </Stack>
    </div>
  );
}

export default FlexDemo;
