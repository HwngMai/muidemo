import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />

          <Route path='/create' exact element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
