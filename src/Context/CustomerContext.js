// lấy thông tin + quản lý data cho {customers}
import { createContext, useState, useEffect } from "react";

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/customer");
      const responseJSON = await response.json();
      setCustomers(responseJSON);
    };
    fetchData();
  }, []);

  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:3001/customer/${id}`, { method: "DELETE" });
    setCustomers(customers.filter((customer) => customer.id !== id));
  };
  const createCustomer = async ({ name, detail, gender, rating }) => {
    const response = await fetch(`http://localhost:3001/customer/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, detail, gender, rating }),
    });
    const data = response.json();
    setCustomers([data, ...customers]);
  };
  return (
    <CustomerContext.Provider
      value={{ customers, deleteCustomer, createCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
export default CustomerContext;
