import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";

function App() {
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
