import { useState } from "react";
import MovieCard from "../components/movieCard";



function Home(){

    const [searchQuery, setSearchQuery] = useState("");

    const movies =[
        {id:1, title: "Obsession", description:"scary", date_realease:"2026"},
         {id:1, title: "Backrooms", description:"scary", date_realease:"2026"},
          {id:1, title: "choke", description:"scary", date_realease:"2020"}

        ]
     function Search(e) {
        e.preventDefault()//prevent default delete the form
        alert(searchQuery)
        setSearchQuery("-----")
     }

    return (
        
        <>

        <div className="movie-display">
            <form onSubmit={Search} >
            <input 
            type="text" 
            placeholder="search the movie you are looking for" 
            className="search-form"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}>
            </input>
            <button  type="submit" className="search-button">search </button>
        </form>
            {movies.map(  movie =>  movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie= {movie} key={movie.id}/>)}  
        </div>
        </>)

}

export default Home;