import "./App.css";
import { useState } from "react";
import FruitComponent from "./Fruit";

function App() {
  const initialFruits = [
    {
      name: "apple",
      description: "a mediocre fruit",
      price: 2.5,
      color: "red",
    },
    {
      name: "banana",
      description: "an amazing fruit",
      color: "yellow",
    },
    {
      name: "orange",
      description: "a very good fruit",
      price: 2.5,
      color: "orange",
    },
  ];

  const [fruits, setFruits] = useState(initialFruits);
  const [color, setColor] = useState("green");
  const [number, setNumber] = useState(0);
  const [inputText, setInputText] = useState("");

  function changeColor() {
    setColor(color === "green" ? "blue" : "green");
  }

  return (
    <div className={"App " + color}>
      <p>Hello me! Number of clicks is: {number}</p>
      <button onClick={changeColor}>Change background color!</button>
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button
        onClick={() => {
          if (inputText.trim() !== "") {
            setFruits((prevFruits) => [...prevFruits, { name: inputText }]);
          }
        }}
      >
        Add fruit!
      </button>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            <FruitComponent
              fruit={fruit}
              setNumber={setNumber}
              setFruits={setFruits}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
