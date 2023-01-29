import React from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reservasi from "./pages/Reservasi";

const WebRoute = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16 min-h-screen dark:bg-neutral-900 bg-neutral-100 !overflow-x-hidden w-full">
        <Routes>
          <Route path="/" exact element={<Navigate to={"/home"} />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/reservasi" exact element={<Reservasi />} />
        </Routes>
      </div>
    </Router>
  );
};

export default WebRoute;
