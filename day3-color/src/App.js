import React, { useState } from "react";

function App() {
  

  const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

  function getCharacter(index) {
    return hexCharacters[index];
  }

  function generateJustOneColor() {
    let hexColorRep = "#";
    for (let i = 0; i < 6; i++) {
      hexColorRep += getCharacter(Math.floor(Math.random() * hexCharacters.length));
    }
    return hexColorRep;
  }
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(generateJustOneColor);

  function handleClick() {
    const newColor = generateJustOneColor();
    setCount(count + 1);
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  }

  return (
    <div className="main">
      <button onClick={handleClick}>ClickMe</button>
      <div>You have clicked {count} times</div>
    </div>
  );
}

export default App;
