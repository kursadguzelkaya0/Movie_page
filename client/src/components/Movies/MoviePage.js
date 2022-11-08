import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const MoviePage = () =>{
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = 'f9e274276050bf3ab215535300d9eb1e';

    const [movie, setMovie] = useState({});
    
    const { id } = useParams();
    useEffect(() => {
        getMovie(id);
    }, [])

    const getMovie = (movie_id) => {
        fetch(`${API_URL}movie/${movie_id}?api_key=${ API_KEY }&language=en-US`)
            .then(response => response.json())
            .then(response => {
                setMovie(response);
                console.log(response);
            })
    }

    const IMAGE_URL = 'https://image.tmdb.org/t/p/w200/'

    return(
        <div className="movie-page"> 
            <div className="movie-wrapper">
                <img src={IMAGE_URL + movie.poster_path} alt="movie-image"/>
                <div className="movie-page-body">
                    <h2 className="title">{ movie.title }</h2>
                    <p className="date description">{ movie.release_date }</p>
                    <p className="overview description">{ movie.overview }</p>
                    <p className="vote description">{ movie.vote_average }</p>
                </div>
            </div>
            <Link to={'/home'}>
                <button className='button'>Back</button>
            </Link>
        </div>
        
    )
}

export default MoviePage;