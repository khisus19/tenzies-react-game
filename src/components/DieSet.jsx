import React from "react";
import diceArray from "../DiceArray"
import Confetti from "react-confetti";

export default function DieSet() {
  const [dice, setDice] = React.useState(diceArray)
  const [tenzies, setTenzies] = React.useState(false)
  const [rolls, setRolls] = React.useState(0)

  function roller() {
    if (tenzies) {
      setDice(diceArray)
      setTenzies(false)
      setRolls(0)
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
      setRolls(prevCount => prevCount + 1)
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
              className={die.isFrozen ? "die frozen" : "die"} 
              onClick={(event) => freezer(event, die.id)}
            >
              <img src={`../../src/assets/die-${die.number}.svg`} />
            </div>
  })
  
  return(
    <>
      {tenzies && <Confetti className="confetti"/>}
      <h3 className="rolls-title">Rolls</h3>
      <h4 className="rolls-count">{rolls}</h4>
      <section className="dice-grid">
        {diceElements}
      </section>
      <button className="btn" onClick={roller}>{tenzies ? "New Game" : "Roll"}</button>
    </>
  )
}