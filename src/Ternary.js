import { useState } from "react";

function Ternary() {

    const [count, addValue] = useState(['Thing 1', 'Thing 2'])

    function addCount() {
        return addValue(oldValue => [...oldValue, `Thing ` + (count.length + 1)])
    }

    
    return (
        <div>
            {count}
            <br />
            <button onClick={addCount}>add</button>
        </div>
    )
}

export default Ternary;