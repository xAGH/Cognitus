import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Fruits = () => {
  const [fruits, setFruits] = useState(["Pera ", "Manzana", "Banano"]);
  const [showList, setShowList] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  const onKeyDownEnsureEnter = (event) => {
    const value = event.target.value;
    if (event.key === "Enter" && value !== "") {
      setFruits([...fruits, value]);
    }
  };

  useEffect(() => {
    console.log("Mount Fruits");
    console.log(isDarkMode);

    return () => {
      console.log("Unmount Fruits");
    };
  }, []);

  return (
    <>
      <h3>Frutas: </h3>
      <input
        onKeyDown={(event) => onKeyDownEnsureEnter(event)}
        type="text"
        placeholder="Nombre fruta"
      />
      <button
        onClick={() => {
          setShowList(!showList);
        }}
      >
        Listar
      </button>
      {showList && (
        <ul>
          {fruits.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Fruits;
