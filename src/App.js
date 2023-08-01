import "./App.css";
import { useState, useEffect } from "react";
import FruitComponent from "./Fruit";

function App() {
  const [fruits, setFruits] = useState([]);
  const [color, setColor] = useState("green");
  const [number, setNumber] = useState(0);
  const [inputText, setInputText] = useState("");

  function changeColor() {
    setColor(color === "green" ? "blue" : "green");
  }

  useEffect(() => {
    fetch("http://www.fruityvice.com/api/fruit/all", {
      method: "GET",
      // headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        // console.log(response); // On success; Prints a Response object
        response.json().then((responseJSON) => {
          console.log(responseJSON);
          setFruits(responseJSON);
        });
      })
      .catch((error) => {
        // On failure (timeout, bad request, ...)
        console.log(error);
      });
  }, []);

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
