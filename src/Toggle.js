import { Link } from "react-router-dom";
import { useState } from "react";
import Thumbs from "./Thumbs";

function Toggle() {    

    let person = {
        id: 1,
        name: "viola",
        description: "shef",
        price: 69.99,
        age: 25,
        active: 1,
        favorite: true,
        stats: {
            rating: 10.0,
            reviewCount: 420
        }
    }
    const [value, setValue] = useState(person)

    function toggleFavorite() {
        setValue(oldValue => {
            return {
                ...oldValue,
                favorite: !oldValue.favorite
           }
       })
    }


    return (
        <div className="card d-inline-block" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{value.name}</h5>
                <p className="card-text">{value.description} {value.price}</p>
                <small>{value.age}</small>
                {value.active === 0 && <div className="badge bg-warning">Disabled</div>}
                
                <Thumbs favorite={value.favorite} onClick={toggleFavorite} />
                
            </div>
            <Link to={`/cards/${value.id}`} className="stretched-linka"></Link> 
        </div>
    )
}

export default Toggle;