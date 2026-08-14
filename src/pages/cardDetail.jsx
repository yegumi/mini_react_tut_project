import "../assets/css/carddetails.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import cards from "../data/cards.json";

function CardDetails() {
    const { id } = useParams();

    const card = cards.find(
        (card) => card.id === Number(id)
    );

    const [isFavorite, setIsFavorite] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");

        if (!savedFavorites) {
            return false;
        }

        const favorites = JSON.parse(savedFavorites);

        return favorites.includes(Number(id));
    });

    function addToFavorites() {
        const savedFavorites = localStorage.getItem("favorites");

        const favorites = savedFavorites
            ? JSON.parse(savedFavorites)
            : [];

        if (favorites.includes(card.id)) {
            return;
        }

        favorites.push(card.id);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        setIsFavorite(true);
    }

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

            <p>
                <strong>Type:</strong> {card.type}
            </p>

            <button
                onClick={addToFavorites}
                disabled={isFavorite}
            >
                {isFavorite
                    ? "Already in your favorites ♥"
                    : "Add to Favorites"}
            </button>
        </main>
    );
}

export default CardDetails;