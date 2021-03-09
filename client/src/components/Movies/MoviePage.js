import React, { useEffect, useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



const MoviePage = ({ match }) =>{
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = 'f9e274276050bf3ab215535300d9eb1e';

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results);
                console.log(response);
                console.log(match.params.id)

            })
    }

    const IMAGE_URL = 'https://image.tmdb.org/t/p/w200/'

    return(
        <div className="movie-page"> 
          { movies.map(movie => (movie.id == match.params.id ? <h1>{ movie.title }</h1> : console.log(movie.id)) ) }
        </div>
        
    )
}

export default MoviePage;