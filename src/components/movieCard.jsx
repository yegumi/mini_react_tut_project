function Favorite(){
    alert("this movie is add to your favorite");
}



function MovieCard({movie}){
    return (
        <>
        <div className= "movie-info"> 
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            <p>{movie.date_release}</p>
        </div>
        <div className="movie-poster"><img src={movie.url} alt={movie.title}></img>
             </div>
             <div className="Button">
                <button onClick= {Favorite} >❤️</button>
                
             </div>
        </>
    ) 


}

export default MovieCard