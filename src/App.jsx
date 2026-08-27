import "./assets/css/app.css"
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar";

import Home from "./pages/home";
import Cards from "./pages/card";
import CardDetails from "./pages/cardDetail";
import Favorite from "./pages/favorites";
import Footer from "./components/footer";
import Register from "./pages/register";
import Login from "./pages/login";
import Upload from "./pages/upload";
import ProfileGrid from "./pages/profile";
import { PostProvider } from "./context/PostsContext";
import { SaveProvider } from "./context/saveContexts";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [token, setToken] = useState(localStorage.getItem("accessToken"))
  return (
    <>
    <PostProvider token={token}>
      <SaveProvider>
      <Navbar token={token}  setToken={setToken} />


    <main className="page-content">
      
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards/:id" element={<CardDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken}/>} />
        <Route element={<ProtectedRoute/>}>

          <Route path="/favorites" element={<Favorite />} />
        
          <Route path="/upload"element={<Upload/>} />
          <Route path="/profile"element={<ProfileGrid/>} />
        </Route>
      </Routes>
    </main>
      
      <Footer/>
      </SaveProvider>
       </PostProvider>
    </>
  );
}

export default App;