import React, { useState } from "react";
import styled from "styled-components";

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .main-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
  }

  .roles-container {
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

function FruitComponent({ fruit, setNumber, setFruits }) {
  const [currentPrice, setCurrentPrice] = useState(fruit.price);

  function handleClick() {
    setCurrentPrice((prevPrice) => prevPrice + 1);
    setNumber((prevNumber) => prevNumber + 1);
  }

  return (
    <Style>
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
    </Style>
  );
}

export default FruitComponent;
