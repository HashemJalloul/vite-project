import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import NavBar from "./components/NavBar/NavBar"
import './app.css'
import Add from "./pages/Add"
import Edit from "./pages/Edit"
import Test from "./pages/Test"

function App() {

  return (
    <>
      <NavBar logo="ReacrRouterDom"
        items={[{ link: "/", content: "Home" },
        { link: "/about", content: "About" },
        { link: "/contact", content: "contact" },]}
        btn="Check Status" />

    </>
  )
}

export default App
