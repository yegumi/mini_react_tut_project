import "../assets/css/carddetails.css";
import { useParams } from "react-router-dom";
import { useState,useContext  } from "react";
import { PostContext } from "../context/PostsContext";
import { SaveContext } from "../context/saveContexts";

function CardDetails() {
    const { id } = useParams();
    const {cards, ToggleLike, likedCardIds} = useContext(PostContext);
    const {saveToggle, usersavedItems} = useContext(SaveContext);

    const card = cards.find(
        (card) => card.id === Number(id)
    );

  

    if (!card) {
        return (
            <main>
                <h1>Card not found</h1>
                <p>We couldn't find a card with ID {id}.</p>
            </main>
        );
    }

    return (
        <main>
            <img
                src={card.image}
                alt={card.name}
                className="card-details-image"
            />

            <h1>{card.name}</h1>
            <h2>{card.user}</h2>
            <h3>{card.description}</h3>
            <h4>{card.date}</h4>


            <p>
                <strong>Type:</strong> {card.type}
            </p>

            <button
                onClick={()=> saveToggle(card.id)} className= "save-button">
            
                {usersavedItems.includes(card.id) ? "⭐ remove from favorites" : "☆ add to favorites"} add to favorite
            </button>
            <button onClick={() => ToggleLike(card.id)} className="like-button">
                      {likedCardIds.includes(card.id) ? "❤️" : "🤍"} {card.likes}
                </button>
            
              
        </main>
    );
}

export default CardDetails;