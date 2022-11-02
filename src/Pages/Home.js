import React from "react";
import { useContext } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import CustomerCard from "../Components/CustomerCard";
import CustomerContext from "../Context/CustomerContext";
import { NavLink } from "react-router-dom";
function Home() {
  const { customers } = useContext(CustomerContext);

  return (
    <Container>
      <CssBaseline />
      <Typography variant='h3' gutterBottom align='center'>
        APP TO MANAGE CUSTOMERS
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Drawer variant='permanent' anchor='left'>
            <List>
              <NavLink to='/create'>
                <ListItem>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary='Create new customer'></ListItemText>
                </ListItem>
              </NavLink>
            </List>
          </Drawer>
        </Box>
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Grid container p={5} spacing={5}>
            {customers &&
              customers.map((customer) => (
                <Grid xs={4} item key={customer.id}>
                  <CustomerCard customer={customer} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
