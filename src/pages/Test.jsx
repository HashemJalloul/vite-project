import { useParams } from "react-router-dom"

const Test = () => {
    const params = useParams()
    console.log(params);

    return (
        <>
            test
            <p>{params.id}</p>
        </>
    )
}

export default Test
