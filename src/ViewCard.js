import { useParams } from "react-router-dom";
import personsData from "./personsData" 

function ViewCard() {
    let persons = personsData;
    let params = useParams();
    let cardId = parseInt(params.cardId);

    let getPerson = (id) => {
        return persons.find(
            (person) => person.id === id
        );
    }

    const { name, description, age, img, price, active } = getPerson(cardId);

    return (
        <div className="card d-inline-block" style={{ width: '18rem' }}>
            <img className="card-img-top" src={`../images/${img}`} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description} {price}</p>
                <small>{age}</small>
                {active === 0 && <div className="badge bg-warning">Disabled</div>}
            </div>
        </div>       
    )
}

export default ViewCard;