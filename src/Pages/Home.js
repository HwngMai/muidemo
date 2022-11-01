import React from "react";
import { useContext } from "react";
import { Container, Typography, Grid } from "@mui/material";
import CustomerCard from "../Components/CustomerCard";
import CustomerContext from "../Context/CustomerContext";
function Home() {
  const { customers } = useContext(CustomerContext);
  console.log("customers: ", customers);
  return (
    <Container>
      <Typography variant='h3' gutterBottom align='center'>
        {" "}
        APP TO MANAGE CUSTOMERS
      </Typography>
      <Grid container p={5} spacing={5}>
        {customers &&
          customers.map((customer) => (
            <Grid xs={4} item key={customer.id}>
              <CustomerCard customer={customer} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Home;
