import React, { useState } from "react";

function FruitComponent({ fruit, setNumber, setFruits }) {
  const [currentPrice, setCurrentPrice] = useState(fruit.price);

  function handleClick() {
    setCurrentPrice((prevPrice) => prevPrice + 1);
    setNumber((prevNumber) => prevNumber + 1);
  }

  return (
    <div style={{ color: fruit.color, backgroundColor: "grey" }}>
      <h3>{fruit.name}</h3>
      <p>{fruit.description}</p>
      <p>{currentPrice}</p>

      <button onClick={handleClick}>Increase price!</button>
      <button
        onClick={() =>
          setFruits((prevFruits) =>
            prevFruits.filter((currFruit) => currFruit.name !== fruit.name)
          )
        }
      >
        Remove!
      </button>
    </div>
  );
}

export default FruitComponent;
