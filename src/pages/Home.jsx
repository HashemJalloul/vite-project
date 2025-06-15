import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()
    function goTo() {
        navigate('/About')
    }
    return (
        <div>
            home
            <button onClick={goTo}>Go To About</button>
        </div>
    )
}

export default Home
