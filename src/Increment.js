import { useState, useEffect } from "react"
import Count from "./Count"

function Increment() {    

    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
        function handleKeyDown(e) {
            console.log(e.keyCode);
            if(e.keyCode == 37) decrement()
            if(e.keyCode == 39) increment()
        }
        document.addEventListener("keydown", handleKeyDown);
    }, [])



    return (        
        <div className="container">
            <div className="row m-5">
                <button onClick={decrement}>-</button>
                <Count number={count} />
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Increment;