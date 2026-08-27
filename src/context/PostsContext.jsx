import { createContext, useState, useEffect} from "react";


export const PostContext = createContext();

export function PostProvider({children, token}){
    const [cards, setCards] = useState([]);
    const [likedCardIds, setLikeCardIds] = useState([]);
    let userId = null;

    if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        userId = Number(payload.user_id);}

    useEffect(() => {
    async function fetchCards() {
        const response = await fetch(
            "http://127.0.0.1:8000/api/cards/"
        );

        console.log("GET STATUS:", response.status);

        const data = await response.json();

        console.log("GET DATA:", data);

        setCards(data);
    }

    fetchCards();
}, []);
    async function AddCard(name, description, image) {
        console.log("TOKEN BEING SENT:", token);
        const formData = new FormData();

        formData.append("name", name);
        formData.append("description", description);
        formData.append("image", image);

        const response = await fetch(
            "http://127.0.0.1:8000/api/cards/",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            }
        );
        console.log("POST status:", response.status);
       
        const data = await response.json();
        console.log("POST ERROR:", JSON.stringify(data, null, 2));
        if (!response.ok) {
            return {
                success: false,
                error: data
            };
        }

        setCards((prevCards) => [data, ...prevCards]);
        console.log("POST response:", data);
        return {
            success: true,
            data: data
            
        };
     

    }
   
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
        <PostContext.Provider value={{cards, ToggleLike, likedCardIds, AddCard, userId}}>
                {children}
        </PostContext.Provider>
    )

}