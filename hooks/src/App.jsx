// App.js
import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Fruits from "./components/Fruits";
import ThemeComponent from "./components/ThemeComponent";
import Users from "./components/Users";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ThemeComponent>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Frutas</Link>
              </li>
              <li>
                <Link to="/users">Usuarios</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Fruits />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Router>
      </ThemeComponent>
    </ThemeProvider>
  );
}

export default App;
