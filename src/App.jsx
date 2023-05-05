import React from "react"
import Navbar from "./components/Navbar"
import Button from "./components/Button"
import planet from "./assets/planet.png"

function App() {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="title-section">
          <h1 className="title">React Planet Website</h1>
          <Button text="See Planets" />
        </div>
        <img src={planet} alt="" />
      </section>
    </>
  )
}

export default App
