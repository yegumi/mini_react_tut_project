import Card from "./card";
import { useState, useEffect } from "react";

function Home() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function fetchCards() {
            const response = await fetch("http://127.0.0.1:8000/api/cards/");
            const cards = await response.json();
            setCards(cards);
        }

        fetchCards();
    }, []);
    
    return (
   <main>
            <section className="hero">
                <div className="hero-label">Welcome</div>
                <span><h3>yegumi + logo = logomi</h3></span>
            </section>
            <section className="cards-grid">
                {cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </section>
        </main>)
    }

export default Home;