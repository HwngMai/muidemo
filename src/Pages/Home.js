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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import CustomerCard from "../Components/CustomerCard";
import CustomerContext from "../Context/CustomerContext";
function Home() {
  const { customers } = useContext(CustomerContext);
  return (
    <Container>
      <Typography variant='h3' gutterBottom align='center'>
        APP TO MANAGE CUSTOMERS
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Drawer variant='permanent' anchor='left'>
            <List>
              <ListItem component='a' href='/create'>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary='Create new customer'></ListItemText>
              </ListItem>
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
