import React from "react";
import { useContext } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomerContext from "../Context/CustomerContext";
import CustomerModal from "./CustomerModal";
function CustomerCard({ customer }) {
  const { deleteCustomer } = useContext(CustomerContext);
  const stringAvatar = (name) => {
    let avaText = `${name.split(" ")[0][0]}`;
    return {
      children: avaText.toUpperCase(),
    };
  };
  return (
    <Card>
      <Avatar
        {...stringAvatar(customer.name)}
        sx={{ bgcolor: "green" }}></Avatar>
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
        <CustomerModal customer={customer} />
      </CardContent>
    </Card>
  );
}

export default CustomerCard;
