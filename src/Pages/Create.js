import React from "react";
import { useState, useContext } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Rating,
  Snackbar,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CustomerContext, { CustomerProvider } from "../Context/CustomerContext";
function Create() {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [detailErr, setDetailErr] = useState(false);
  const [gender, setGender] = useState("male");
  const [rating, setRating] = useState(5);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && detail) {
      console.log(name, detail, gender, rating);
      createCustomer({ name, detail, gender, rating });
      setOpenSnackBar(true);
    }
    if (name === "") {
      setNameErr(true);
    }
    if (detail === "") {
      setDetailErr(true);
    }
  };
  const handleClose = () => {
    setOpenSnackBar(false);
  };
  const { createCustomer } = useContext(CustomerContext);
  return (
    <Container>
      <Typography variant='h3' gutterBottom align='center'>
        {" "}
        CREATE A NEW CUSTOMER
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Box pb={2}>
          <TextField
            label='Name'
            variant='standard'
            fullWidth
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            error={nameErr}></TextField>
          <TextField
            label='Details'
            variant='standard'
            fullWidth
            multiline
            rows={3}
            required
            onChange={(e) => {
              setDetail(e.target.value);
            }}
            error={detailErr}></TextField>
          <RadioGroup row value={gender}>
            <FormControlLabel
              value='male'
              onChange={(e) => setGender(e.target.value)}
              control={<Radio />}
              label='Male'
            />
            <FormControlLabel
              value='female'
              onChange={(e) => setGender(e.target.value)}
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel
              value='other'
              control={<Radio />}
              label='Other'
              onChange={(e) => setGender(e.target.value)}
            />
          </RadioGroup>
          <Rating
            value={rating}
            onChange={(e) => {
              setRating(~~e.target.value);
            }}
          />
        </Box>
        <Button type='submit' variant='contained' startIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={1500}
        onClose={handleClose}>
        <Alert severity='success'>Created new customer successfully!</Alert>
      </Snackbar>
    </Container>
  );
}

export default Create;
