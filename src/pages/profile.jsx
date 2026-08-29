import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../context/PostsContext";
import "../assets/css/profile.css";

function ProfileGrid(){
    const {cards, ToggleLike, likedCardIds, userId} = useContext(PostContext);
    const myCards = cards.filter(
        (card) => Number(card.user_id) === Number(userId)
    );

    return (
        <div className="profile-page">
            <div className="profile-header">
                <h1>My Profile</h1>
                <Link to="/profile/edit" className="edit-profile-button">
                    Edit Profile
                </Link>
            </div>

            <div className="post-grid">
                {myCards.map((card)=>(
                    <div key={card.id} className="post-thumb">
                        <Link to={`/cards/${card.id}`}>
                            <img src={card.image} alt={card.name}/>
                        </Link>
                        <button onClick={() => ToggleLike(card.id)} className="like-button">
                            {likedCardIds.includes(card.id) ? "❤️" : "🤍"} {card.likes}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfileGrid;