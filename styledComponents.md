# Using Styled Components

For class and homework, I would like you to add CSS styling to your fruits project using [Styled Components](https://styled-components.com/docs/basics).

Here are some websites that have example list styling. Some of them provide the corresponding CSS, but don't look at this and instead just use the site as inspiration on how to make your list:

[List 1](https://codepen.io/michellebarker/pen/poLoeRq)<br />
[List 2](https://codepen.io/Adir-SL/pen/rNwBmpM)<br />
[Here](https://freefrontend.com/css-lists/) are some more, but these can get pretty complicated.

## Setting up Styled Components

After opening up the project in VSCode and opening a terminal inside the project directory, you will have do to

```
yarn add styled-components
```

Then, it's as simple as adding a `<Style>` wrapper like I have below in whatever file you want to add styling to!

```typescript
import React, { useState } from "react";
import styled from "styled-components";

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .fruit {
    color: blue;
    background-color: grey;
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
      <div className="fruit">
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
```

## Adding variables

What if you want to add variables in the style? Then you can do something like this:

```typescript
const Style = styled.div<{ $imageSize: number }>`
  .image {
    width: ${(props) => props.$imageSize}px;
    height: ${(props) => props.$imageSize}px;
  }
`;
```

and in the wrapper below:

```typescript
  ...
  const imageSize = 100;
  return (
    <Style $imageSize={imageSize}>
      <div className="image">
        ...
      </div>
    </Style>
  );
```
