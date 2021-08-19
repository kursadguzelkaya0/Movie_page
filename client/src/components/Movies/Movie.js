import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) =>{
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w200/';
    return(
        <Link to={`/${ movie.id }`}>
            <div className="movie"> 
                <img src={ IMAGE_URL + movie.poster_path } alt="movie image" />
                <div className="card-body">
                    <span className="title movie-title">{ movie.title }</span>
                    <span className="description imdb">IMDB { movie.vote_average }</span>
                </div>
            </div>
        </Link>
        
    )
}

export default Movie;