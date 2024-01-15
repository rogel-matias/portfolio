import Home from "./components/Home/Home"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Certificates from "./components/Certificates/Certificates"
import Contact from "./components/Contact/Contact"

import Layout from "./layout/Layout"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <Layout>
      <div id="home">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div id="aboutme">
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </div>
      <div id="projects">
        <Routes>
          <Route path="/" element={<Projects />} />
        </Routes>
      </div>
      <div id="skills">
        <Routes>
          <Route path="/" element={<Skills />} />
        </Routes>
      </div>
      <div id="certificates">
        <Routes>
          <Route path="/" element={<Certificates />} />
        </Routes>
      </div>
      <div id="contact">
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
      </div>
    </Layout>
  )
}

export default App
