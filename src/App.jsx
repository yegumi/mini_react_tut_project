import "./assets/css/app.css"
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/home";
import Cards from "./pages/card";
import CardDetails from "./pages/cardDetail";
import Favorite from "./pages/favorites";
import Footer from "./components/footer";
import Register from "./pages/register";
import Login from "./pages/login";
import Upload from "./pages/upload";

function App() {
  return (
    <>
      <Navbar />


    <main className="page-content">
      
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards/:id" element={<CardDetails />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload"element={<Upload/>} />


      </Routes>
    </main>
      
      <Footer/>
    </>
  );
}

export default App;