// import { Routes, Route } from "react-router-dom"
// import Layout from "./components/Layout"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Work from "./components/Work"
// import SharedLayout from "./components/SharedLayout"


function App() {
  
  return(
  <div>
        <Navbar />
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
        <Footer/>
        {/* <SharedLayout/> */}

    {/* <Routes>
      <Route path="layout" element={<Layout/>}>
      </Route>
    </Routes> */}
  </div>
  )
}

export default App
