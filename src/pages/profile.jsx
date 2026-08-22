import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../context/PostsContext";
import "../assets/css/profile.css"

function ProfileGrid(){
    const {cards, ToggleLike, likedCardIds} = useContext(PostContext);
    const adminPosts = cards.filter((card)=> card.user ==="admin");
    return (
        <div className="post-grid">
            {adminPosts.map((card)=>(
                <div key={card.id} className="post-thumb">
                <Link  to={`/cards/${card.id}`} >
                    <img src={card.image} alt={card.name}/>
                </Link>
                <button onClick={() => ToggleLike(card.id)} className="like-button">
                      {likedCardIds.includes(card.id) ? "❤️" : "🤍"} {card.likes}
                </button>
                </div>)

            )}

        </div>
    );
}


export default ProfileGrid;