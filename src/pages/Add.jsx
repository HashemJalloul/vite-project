import { Link, Outlet } from "react-router-dom"

const Add = () => {
    let id = 3
    let name = "hashem"
    return (
        <>
            <form>
                <input type="text" />
                <input type="submit" value="send" />
            </form>
            <Link to={`/about/add/test/${id}/${name}`}>show</Link>
            <Outlet />
        </>

    )
}

export default Add
