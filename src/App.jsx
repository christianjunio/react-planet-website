import React from "react"
import Navbar from "./components/Navbar"
import Button from "./components/Button"
import planet from "./images/planet.png"

function App() {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="title-section">
          <h1 className="title">Titulo Teste</h1>
          <Button text="Contact-me" />
        </div>
        <img src={planet} alt="" />
      </section>
    </>
  )
}

export default App
