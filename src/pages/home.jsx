import Card from "./card";
import cards from "../data/cards.json"

function Home() {
    
    return (
   <main>
            <h1>Welcome to Lenormand</h1>
            <p>Discover the 36 Lenormand cards.</p>

            <section className="cards-grid">
                {cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </section>
        </main>)
    }

export default Home;