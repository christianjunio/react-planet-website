import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Planets from './pages/Planets'
import About from './pages/About'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    // Rotas
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
  )
}

export default App
