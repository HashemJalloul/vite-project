import { useState } from "react"
import "./NavBar.css"
import NavMenuButton from "./NavMenuButton"
import { Link, NavLink } from "react-router-dom"

const NavBar = ({ logo, items, btn }) => {
    // const [navActive, setNavActive] = useState(items[0]?.content)
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav >
            <h1 className="logo">{logo}g</h1>
            <ul className="navItems">
                {items?.map((item, index) => {
                    return (
                        <li key={index} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""}>
                            <NavLink to={item?.link}>{item?.content}</NavLink>
                        </li>
                    )
                })}
            </ul>
            <button className="btn">{btn}</button>
            <button className="showMenuButton"
                onClick={() => setShowMenu(!showMenu)}>{<NavMenuButton />}
            </button>
            <ul className={`navMenu ${showMenu && 'show'}`}>
                {items?.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={item?.link}>{item?.content}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar
