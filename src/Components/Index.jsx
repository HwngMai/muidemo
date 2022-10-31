import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Typography, AppBar, Toolbar, Box, Stack, Button } from "@mui/material";
export default function Index() {
  return (
    <div className='Index'>
      <AppBar color='myColor' position='static'>
        <Toolbar>
          <Typography variant='h5' align='left' sx={{ flexGrow: 1 }}>
            {" "}
            MUI-5{" "}
          </Typography>
          <Button color='inherit'> LOGIN </Button>
          <Button color='inherit'> SIGN UP </Button>
        </Toolbar>
      </AppBar>
    <Typography  variant='h1' gutterBottom>
        {" "}
        MUI-5 APP{" "}
      </Typography>
      <Typography variant='body1' gutterBottom>
        {" "}
        This is a app using MUI{" "}
      </Typography>
      <Typography variant='subtitle2' gutterBottom>
        {" "}
        The following demo illustrates how to work with the sx prop. Note that
        not all of the values are valid CSS properties—that's because the sx
        keys are mapped to specific properties of the theme. The rest of this
        document explores this concept in more detail.{" "}
      </Typography>
      <Box mt={5}>
        <Stack direction='row' spacing={5} paddingTop={15}>
          <Button variant='text'> CLICK ME </Button>
          <Button variant='contained'> SUBMIT </Button>
          <Button variant='outlined'> SIGN IN </Button>
          <Button variant='outlined' disabled>
            {" "}
            CAN'T CLICK ME{" "}
          </Button>
          <Button variant='outlined'> DELETE</Button>
          <Button variant='outlined' startIcon={<AcUnitIcon />}>
            {" "}
            SEND{" "}
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
