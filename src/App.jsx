import "./assets/css/app.css"
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/home";
import Cards from "./pages/card";
import CardDetails from "./pages/cardDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;