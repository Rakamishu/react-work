import { Link } from "react-router-dom";

function Card(props) {    
    
    return (
        <div className="card d-inline-block" style={{ width: '18rem' }}>
            <img className="card-img-top" src={`../images/${props.item.img}`} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">{props.item.description} {props.item.price}</p>
                <small>{props.item.age}</small>
                {props.item.active === 0 && <div className="badge bg-warning">Disabled</div>}
            </div>
            <Link to={`/cards/${props.item.id}`} className="stretched-link"></Link> 
        </div>
    )
}

export default Card;