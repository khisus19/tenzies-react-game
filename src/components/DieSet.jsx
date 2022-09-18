import React from "react";
import dieArray from "../DieArray"

export default function DieSet() {
  const [die, setDie] = React.useState([
    {
      id: "1",
      freeze: false,
      number: 0
    }
  ])

  const dieElements = dieArray.map(dice => {
    return <div key={dice.id} className="dice" >{dice.number}</div>
  })

  return(
    <>
      <section className="die-grid">
        {dieElements}
      </section>
      <button className="btn">Roll</button>
    </>
  )
}