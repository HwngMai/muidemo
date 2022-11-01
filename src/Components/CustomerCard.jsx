import React from "react";
import { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomerContext from "../Context/CustomerContext";
function CustomerCard({ customer }) {
  const { deleteCustomer } = useContext(CustomerContext);
  return (
    <Card>
      <CardHeader
        action={
          <IconButton
            onClick={() => {
              deleteCustomer(customer.id);
            }}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        }
        title={customer.name}></CardHeader>
      <CardContent>
        <Typography>{customer.detail}</Typography>
      </CardContent>
    </Card>
  );
}

export default CustomerCard;
