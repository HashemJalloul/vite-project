import { Link, Outlet } from "react-router-dom"

const About = () => {
    return (
        <>
            <p>about</p>
            <div>
                <Link to='/about/add'>add commit</Link>
            </div>
            <div>
                <Link to='/about/edit'>editing</Link>
            </div>
            <Outlet />
        </>
    )
}

export default About
