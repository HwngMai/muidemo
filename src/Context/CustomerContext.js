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

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };
  return (
    <CustomerContext.Provider value={{ customers, deleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
export default CustomerContext;
