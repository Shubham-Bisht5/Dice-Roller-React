import { useState } from "react";
import "./DiceRoller.css";

function DiceRoller() {
  const [noOfDice, setNoOfDice] = useState(1);
  const [values, setValues] = useState([]);

  const rollDice = () => {
    const newValues = [];

    for (let i = 0; i < noOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      newValues.push(value);
    }

    setValues(newValues);
  };

  return (
    <div id="container">
      <h1>Dice Roller</h1>

      <label># of Dice</label>
      <br />
      <input
        type="number"
        value={noOfDice}
        min="1"
        onChange={(e) => setNoOfDice(Number(e.target.value))}
      />
      <br /><br />

      <button onClick={rollDice}>Roll Dice</button>

      <div id="diceresult">
        {values.length > 0 && `Dice: ${values.join(", ")}`}
      </div>

      <div id="diceimages">
        {values.map((value, index) => (
          <img
            key={index}
            src={`/Dice_images/${value}.svg`}
            alt={`Dice ${value}`}
          />
        ))}
      </div>
    </div>
  );
}

export default DiceRoller;