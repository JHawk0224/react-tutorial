# Learning to code asynchronously!

Up until this point, we have learned how to store variables using useState, how to write functions, if statements, loops, and how to make components and pass in props.

Now, we will go over a new topic, the `useEffect` [hook](https://www.w3schools.com/react/react_useeffect.asp). This link also provides a tutorial of how to use it, and some of that code is repeated here, but we will also integrate parts of that with our Todo list app.

First, what does `useEffect` do? Well, what do we do if we need to execute a piece of code whenever the page loads? What if we want a function to run whenever a variable or component is updated? This is where the `useEffect` hook comes in. Consider the following code that defines the Fruit component (in `Fruit.js`). It can be run using this project, more details in the appendix (you could also just add it to your own project for testing). To run this, you can just paste in only the `useEffect` part of the code into the Fruit.js file. Note that it comes before the return statement, as we still will only ever return the stuff that is the actual content of the page.

```javascript
import React, { useState, useEffect } from "react";

function FruitComponent({ fruit, setNumber, setFruits }) {
  const [currentPrice, setCurrentPrice] = useState(fruit.price);

  function handleClick() {
    setCurrentPrice((prevPrice) => prevPrice + 1);
    setNumber((prevNumber) => prevNumber + 1);
  }

  useEffect(() => {
    // This function
    // runs on every render
  });

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
```

Note the use of `useEffect`. Here, `useEffect` is a function that takes in another <ins>function</ins> as its argument. What this will do, is that this function will now run _every_ time the Fruit component is rerendered (remember, we don't necessarily control when the rerenderings happen, but this code would execute every time React decides to rerender this component).

For example, we could add a `console.log` statement here to see when this component is rendered. Now let's try it!

### HW TODO 1: Add a `console.log` statement here to see when useEffect runs. Try refreshing the page? Clicking a button? Another button?

Now, what if we only want it to run on the first time the page is loaded, and then not again? Then we would need to use

```javascript
useEffect(() => {
  // This function
  // runs only on the first render
}, []);
```

Note the difference here, it is that an empty array is being passed in as the _second argument_ to `useEffect`. This array being passed in as an argument is the _dependency_ array. It means that, as we'll see in a second, anything that is included in this array will trigger `useEffect` to run. Since this array is currently empty, this means that `useEffect` will trigger on the first render, but then never again.

### HW TODO 2: Try adding a `console.log` here to see this in action! Again, try refreshing the page.

Now let's include some variables in the array.

```javascript
useEffect(() => {
  // This function
  // runs on the first render
  // and any time currentPrice changes
}, [currentPrice]);
```

### HW TODO 3: Try adding a `console.log` in the `useEffect` to see this in action! When you click the increase price button, look for the print statement!

Note that this print statement is executing because the value of _currentPrice changed_, <ins>not</ins> because the button was clicked. If there were more variables in the list, for example, `[currentPrice, fruit.name]`, then this function would run any time _either_ of `currentPrice` or `fruit.name` changes.

Now that we have learned this, how is it useful? When will we want to use something like this? We might want to use this for example if we want to grab data when a page loads. In an upcoming project that we will be doing, we will be creating a weather app. The user will type in a city name, and then we will give the current weather for that city. But how do we get this data? Well, actually getting the data will be covered next week, but the idea is that whenever the `city` variable is updated the user, we will use the `useEffect` function to execute some code (that grabs the appropriate data). For now, you can try experimenting around with different uses of `useEffect`. What happens if you change a variable that was passed down from a different component? For example, consider that currently, `fruit` is being passed down as an argument. What happens if we edit `fruit.name` in `App.js` while `fruit` is in the dependency list of the `useEffect` function? Does it execute?

### HW TODO 4: Try this out! In the `changeColor` function of `App.js`, edit a fruit's name! (We only use the `changeColor` function below to edit the name because it's convienent to edit and see the effects of, as there is a button that triggers it.) It should look like the following:

```javascript
function changeColor() {
  setColor(color === "green" ? "blue" : "green");
  setFruits((prevFruits) =>
    prevFruits.map((fruit) => {
      if (fruit.name === "orange") {
        fruit.name = "watermelon";
      }
      return fruit;
    })
  );
}
```

### Does the `useEffect` print statement execute when the change background color button is pressed (remember, having the dependency list as `[fruit]`)?

### HW TODO 5: Now change the dependency list to `[fruit.name]`. Does the print statement execute still?

You should see that both of these cause the print statement to be executed, as both `fruit.name` and the object `fruit` that contains the name are updated when the `name` is updated.

# Appendix

## How to run this project

First, open VSCode, and then a new terminal (Terminal -> New Terminal). Then, navigate to the directory where you want to open this project. For example, type in `dir` to see the current directory, and if you want to open this in `VSC-Projects`, then execute

```
cd VSC-Projects
```

(You might have to navigate there through a series of `cd` commands).
Once you are where you want to open this project, then enter the following commands

```
git clone https://github.com/JHawk0224/react-tutorial
cd react-tutorial
code .
```

This should open a new VSCode window where you are editing the project files. You can navigate to this `useEffect.md` file if you want to. Then, you can create a new terminal and start the project with `yarn start` like always!
