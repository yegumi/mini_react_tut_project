import cards from "../data/cards.json";
import { Link } from "react-router-dom";
import { SaveContext } from "../context/saveContexts";
import { useContext } from "react";

function Favorite() {
    const {saveToggle, usersavedItems} = useContext(SaveContext);

    const favoriteCards = cards.filter((card)=> usersavedItems.includes(card.id));

    return (
        <main>
            <h1>My Favorites</h1>

            <section className="cards-grid">
                {favoriteCards.map((card) => (
                    <article
                        className="lenormand-card"
                        key={card.id}
                    >
                        <div className="card-image-container">
                            <img
                                src={card.image}
                                alt={card.name}
                                className="card-image"
                            />
                        </div>

                        <div className="card-content">
                            <h2>{card.name}</h2>
                            <p>{card.type}</p>
                        <Link to={`/cards/${card.id}`}
                    className="card-details-button"
                >
                    See details </Link>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default Favorite;