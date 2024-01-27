import "./index.css" ;

import { React } from "react" ;
import { Route, Routes } from "react-router-dom" ;

import Home from "./routes/Home" ;
import Projects from "./routes/Projects" ;
import About from "./routes/About" ;
import Contact from "./routes/Contact" ;


function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/projects" element = { <Projects /> } />
        <Route path = "/about" element = { <About /> } />
        <Route path = "/contact" element = { <Contact /> } />
      </Routes>
    </div>
  ) ;
} ;


export default App ;
