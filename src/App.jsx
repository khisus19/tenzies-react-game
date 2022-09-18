import { useState } from 'react'
import Content from "./components/Content"
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Content />
    </div>
  )
}
