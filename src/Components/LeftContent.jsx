import React from "react";
import { Box } from "@mui/material";
function LeftContent() {
  return (
    <Box
      flex={1}
      bgcolor='lightblue'
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      <p>LeftContent</p>
      <p>This is the left content of the page</p>
    </Box>
  );
}

export default LeftContent;
