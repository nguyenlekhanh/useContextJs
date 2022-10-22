import React from "react";
import { Link } from "react-router-dom";
import UserContextProvider from "./UserContext";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
