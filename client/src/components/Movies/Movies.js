import React,{ useEffect, useState } from 'react';
import Movie from './Movie';
import './Movies.css'

function Movies() {
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = 'f9e274276050bf3ab215535300d9eb1e';

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("avengers");
    const [search, setSearch] = useState("");

    
    useEffect(() => {
        searchMovies();
    }, [query])

    const getPopularMovies = () => {
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results);
                console.log(response);
            })
    }

    const getMovies = (movie_id) => {
        fetch(`${API_URL}movie/${movie_id}?api_key=${ API_KEY }&language=en-US`)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results);
                console.log(response);
            })
    }

    const searchMovies = () => {
        fetch(`${API_URL}search/movie?api_key=${ API_KEY }&language=en-US&query=${ query }&page=1&include_adult=false`)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results);
                console.log(response);
            })
    }

    const updateQuery = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
        console.log(query);
    }

    const updateSearch = e => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    

    return(
        <div>
            <form className="search-form" onSubmit={updateQuery}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
                <button className="search-btn" type="submit" >Search </button>
            </form>
            <div className="movies">
            {
                movies.map(movie => (
                    <Movie key={ movie.title } movie={ movie } />
                ))
            }
            { console.log(movies)}
            </div>
        </div>
        
    )
}

export default Movies;