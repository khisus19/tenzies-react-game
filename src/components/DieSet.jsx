import React from "react";
import dieArray from "../DieArray"

export default function DieSet() {
  const [die, setDie] = React.useState(dieArray)
  
  function roller() {
    setDie(prevDieSet => {
      return prevDieSet.map(dice => {
        return dice.freeze === false ?
          {
            ...dice, 
            number: ramdonmizer()
          } :
          dice
      })
    })
  }
  
  function ramdonmizer() {
    return Math.floor(Math.random() * 6) + 1
  }

  function freezer(event, id) {
    event.target.className += " frozen"
    setDie(prevDieSet => {
      return prevDieSet.map(dice => {
        return dice.id === id ? 
          {...dice,
            freeze: true
          } :
          dice
      })
    })
  }
  
  const dieElements = die.map(dice => {
    return <div 
              key={dice.id} 
              className="dice" 
              onClick={(event) => freezer(event, dice.id)}
            >{dice.number}</div>
  })
  return(
    <>
      <section className="die-grid">
        {dieElements}
      </section>
      <button className="btn" onClick={roller}>Roll</button>
    </>
  )
}