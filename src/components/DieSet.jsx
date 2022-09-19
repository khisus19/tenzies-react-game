import React from "react";
import diceArray from "../DiceArray"
import Confetti from "react-confetti";

export default function DieSet() {
  const [dice, setDice] = React.useState(diceArray)
  const [tenzies, setTenzies] = React.useState(false)

  function roller() {
    if (tenzies) {
      setDice(diceArray)
      setTenzies(false)
    } else {
      setDice(prevdiceSet => {
        return prevdiceSet.map(die => {
          return die.isFrozen === false ?
            {
              ...die, 
              number: Math.floor(Math.random() * 6) + 1
            } :
            die
        })
      })
    }
  }

  React.useEffect(() => {
    const firstCondition = dice.every(die => die.isFrozen)
    const firstValue = dice[0].number
    const secondCondition = dice.every(die => die.number === firstValue)

    if (firstCondition && secondCondition) {
      setTenzies(true)
    }
  }, [dice])

  function freezer(event, id) {
    event.target.className === "die" ? 
      event.target.className = "die frozen" :
      event.target.className = "die" 
    setDice(prevDiceSet => {
      return prevDiceSet.map(die => {
        return die.id === id ? 
          {...die,
            isFrozen: !die.isFrozen
          } :
          die
      })
    })
  }

  const diceElements = dice.map(die => {
    return <div 
              key={die.id} 
              className="die" 
              onClick={(event) => freezer(event, die.id)}
            >
              {die.number}
            </div>
  })
  
  return(
    <>
      {tenzies && <Confetti />}
      <section className="dice-grid">
        {diceElements}
      </section>
      <button className="btn" onClick={roller}>{tenzies ? "New Game" : "Roll"}</button>
    </>
  )
}