import React from "react";
import DieSet from "./DieSet";

export default function Content() {

  return (
    <main className="content">
      <h1 className="title">Tenzies</h1>
      <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <DieSet />
    </main>
  )
}