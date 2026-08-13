import { useParams } from "react-router-dom";
import cards from "../data/cards.json";

function CardDetails() {
    const { id } = useParams();

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

            <p>{card.description}</p>

            <div>
                <p>
                    <strong>Period:</strong> {card.period}
                </p>

                <p>
                    <strong>Region:</strong> {card.region}
                </p>

                <p>
                    <strong>Type:</strong> {card.type}
                </p>

                <p>
                    <strong>Direction:</strong> {card.direction}
                </p>
            </div>
        </main>
    );
}

export default CardDetails;