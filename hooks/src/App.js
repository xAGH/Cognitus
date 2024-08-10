import { useState } from "react";

const App = () => {
  const [fruits, setFruits] = useState(["Pera ", "Manzana", "Banano"]);
  const [showList, setShowList] = useState(false);

  const onKeyDownEnsureEnter = (event) => {
    const value = event.target.value;
    if (event.key === "Enter" && value !== "") {
      setFruits([...fruits, value])  
    }
  }

  return (
    <>
      <h3>Frutas: </h3>
      <input onKeyDown={(event) => onKeyDownEnsureEnter(event)} type="text" placeholder="Nombre fruta"/>
      <button onClick={() => {setShowList(!showList);}}>Listar</button>
      {showList &&
        <ul>
          { fruits.map(((el, idx) => <li key={idx}>{el}</li>)) }
        </ul>
      }
    </>
  )
}

export default App;
