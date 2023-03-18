import { BrowserRouter as Router } from "react-router-dom"
import {About, Contact, Feedbacks, Hero, Navbar, StarsCanvas,Tech, Works} from "./components"

const App=() =>{
  return (
    <Router>
      <div className="realtive z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="realtive z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>

    )
}

export default App
