import { useRef, useState } from "react"
import "./App.css"
import * as bootstrap from "bootstrap"
import TempConverter from "./assets/Components/TempratureConverter"
import ChooseConverter from "./assets/Components/ChooseConverter"

function App() {
  return (
    <>
      <ChooseConverter />
    </>
  )
}

export default App
