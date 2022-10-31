import React from "react";
import { useState, useEffect } from "react";
import { Container, Typography, Paper, Grid } from "@mui/material";
function Home() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/customer");
      const responseJSON = await response.json();
      setCustomers(responseJSON);
    };
    fetchData();
  }, []);
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
              <Paper>
                {" "}
                <Typography align='center' variant='h5' gutterBottom>
                  {" "}
                  {customer.name}
                </Typography>
                <Typography align='center' variant='h5'>
                  {" "}
                  {customer.detail}
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Home;
