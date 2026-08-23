import Card from "./card";
import cards from "../data/cards.json"

function Home() {
    
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