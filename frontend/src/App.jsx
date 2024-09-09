import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceComponent from "./components/InvoiceComponent";

// Saad 3mk Codes
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/invoice-details/:qrCode"
            element={<InvoiceComponent />}
          ></Route>

          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
