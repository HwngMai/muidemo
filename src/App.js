import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import Home from "./Pages/Home";
import { CustomerProvider } from "./Context/CustomerContext";
function App() {
  return (
    <CustomerProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/create' exact element={<Create />} />
        </Routes>
      </BrowserRouter>
    </CustomerProvider>
  );
}
export default App;
