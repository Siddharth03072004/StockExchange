import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import Orders from "./Components/Orders";
import Positions from "./Components/Positions";
import Holdings from "./Components/Holdings";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/holdings" element={<Holdings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
