import React,{ useEffect, useState } from 'react';
import Movie from './Movie';
import './Movies.css'

function Movies() {
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
            })
    }

    return(
        <div className="movies">
            {
                movies.map(movie => (
                    <Movie key={ movie.title } movie={ movie } />
                ))
            }
        </div>
    )
}

export default Movies;