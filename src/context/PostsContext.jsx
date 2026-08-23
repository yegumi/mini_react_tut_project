import { createContext, useState, useEffect} from "react";


export const PostContext = createContext();

export function PostProvider({children}){
    const [cards, setCards] = useState([]);
    const [likedCardIds, setLikeCardIds] = useState([]);

    useEffect(() => {
        async function fetchCards() {
            const response = await fetch("http://127.0.0.1:8000/api/cards/");
            const data = await response.json();
            setCards(data);
        }

        fetchCards();
    }, []);


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