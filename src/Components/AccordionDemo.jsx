import React from "react";
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionDemo() {
  return (
    <div className=''>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {" "}
          MUI-5{" "}
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography> this is a lib to build website quickly</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
