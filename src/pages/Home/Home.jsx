import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button"
import planet from "../../assets/planet.png"
import { Link } from "react-router-dom"
import './home.css'

function Home() {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="title-section">
          <h1 className="title">React Planet Website</h1>
          <Link to="/planets"><Button text="See Planets" /></Link>
        </div>
        <img src={planet} alt="" />
      </section>
    </>
  )
}

export default Home
