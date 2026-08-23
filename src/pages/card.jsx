import "../assets/css/card.css"
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <article className="lenormand-card">   
      <div className="card-image-container">
        <img
          src={card.image}
          alt={card.name}
          className="card-image"
        />
        <span className="card-number">{card.id}</span>
      </div>

      <div className="card-content">
        <h2>{card.name}</h2>
        <h3>creator : {card.user}</h3>
        <h4>uploaded on : {card.created_at}</h4>
       
        <Link
                    to={`/cards/${card.id}`}
                    className="card-details-button"
                >
                    See details </Link>
      </div>
    </article>
  );
}

export default Card;