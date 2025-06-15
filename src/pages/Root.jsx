import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"

const Root = () => {
    return (
        <>
            <NavBar logo="ReacrRouterDom"
                items={[{ link: "/", content: "Home" },
                { link: "/about", content: "About" },
                { link: "/contact", content: "contact" },]}
                btn="Check Status" />
            <Outlet />
        </>
    )
}

export default Root
