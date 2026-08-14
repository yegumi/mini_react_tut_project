import Card from "./card";
import cards from "../data/cards.json"

function Home() {
    
    return (
   <main>
            <h1>Welcome to My Logo Website</h1>
            <p>yegumi + logo = logomi </p>
            <section className="cards-grid">
                {cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </section>
        </main>)
    }

export default Home;