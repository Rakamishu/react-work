import { useState, useEffect } from "react";


function Api() {

    const [starWarsData, setStarWarsData] = useState()
    const [count, setCount] = useState(1)

    function handleOnClick() {
        setCount(oldCount => oldCount + 1)
    }

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])


    return (
        <div>
            <pre>
                <button onClick={handleOnClick}>Get another</button><br />
                {count}
                <hr />
                {JSON.stringify(starWarsData, null, 2)}
            </pre>
        </div>
    )
}

export default Api;