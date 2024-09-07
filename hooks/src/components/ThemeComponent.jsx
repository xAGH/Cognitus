// ThemeComponent.js
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeComponent = ({ children }) => {
  const { isDarkMode, toogleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "gray" : "aliceblue",
        height: "100vh",
        color: isDarkMode ? "white" : "black",
        padding: "0px",
        margin: "0px",
      }}
    >
      <h1>{isDarkMode ? "Modo Oscuro" : "Modo Claro"}</h1>
      <button onClick={toogleTheme}>Cambiar Tema</button>
      {children}
    </div>
  );
};

export default ThemeComponent;
