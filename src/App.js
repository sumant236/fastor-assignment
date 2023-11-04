import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegisterWithOtp from "./Components/RegisterWithOtp";
import Register from "./Components/Register";
import Homepage from "./Components/Homepage";
import ProductDetailPage from "./Components/ProductDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/register" element={<RegisterWithOtp />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/product/:id" element={<ProductDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
