import React from "react";
import { Box } from "@mui/material";

function RightContent() {
  return (
    <Box
      flex={1}
      bgcolor='lightgreen'
      sx={{ display: { xs: "none", sm: "block" } }}>
      RightContent
    </Box>
  );
}

export default RightContent;
