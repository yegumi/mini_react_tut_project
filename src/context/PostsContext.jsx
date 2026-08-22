import { createContext, useState} from "react";
import cardsData from "../data/cards.json";

export const PostContext = createContext();

export function PostProvider({children}){
    const [cards, setCards] = useState(cardsData);
    const [likedCardIds, setLikeCardIds] = useState([]);


    function ToggleLike(cardId){
        const alreadyLiked = likedCardIds.includes(cardId); 
        setCards(cards.map((card)=> cardId === card.id ?{...card, likes:alreadyLiked ? card.likes -1: card.likes+1 }:card))

        if (alreadyLiked) {
            setLikeCardIds(likedCardIds.filter((id)=> cardId!== id));
        } else {
            setLikeCardIds([...likedCardIds, cardId]);
        }

    }
    return (
        <PostContext.Provider value={{cards, ToggleLike, likedCardIds}}>
                {children}
        </PostContext.Provider>
    )

}