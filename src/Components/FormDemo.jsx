import React from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
const FormDemo = () => {
  return (
    <div>
      <FormControl >
        <FormLabel> Which framework would you like to use ?</FormLabel>
        <RadioGroup defaultValue='laravel' row name='radio-framwork'>
          <FormControlLabel
            value='bootstrap'
            control={<Radio />}
            label='Bootstrap'
          />
          <FormControlLabel value='react' control={<Radio />} label='React' />
          <FormControlLabel
            value='laravel'
            control={<Radio />}
            label='Laravel'
          />
          <FormControlLabel value='other' control={<Radio />} label='Other' />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default FormDemo;
