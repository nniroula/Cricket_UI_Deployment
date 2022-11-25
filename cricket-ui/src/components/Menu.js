import React, { useState } from "react"
const Menu = () => {
    // set to be true or false
    const [navbarOpen, setNavbarOpen] = useState(false);

    // const buttonToggle = () => {
    //     setNavbarOpen(prev => !prev)
    // }

    const buttonToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <nav className="navBar">
          {/* <button>{navbarOpen ? "Close" : "Open"}</button> */}
          {/* <button onClick={buttonToggle}>{navbarOpen ? "Close" : "Open"}</button> */}
          <button onClick={buttonToggle}>{navbarOpen ? "Close" : "Open"}</button>
          {/* <ul>adbc</ul>
          <ul>AAA</ul> */}
        </nav>
      )
}
export default Menu;