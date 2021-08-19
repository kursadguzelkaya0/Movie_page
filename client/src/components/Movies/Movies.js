import React,{ useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { getMovies } from '../../store/actions/movieActions'
import Movie from './Movie';
import './Movies.css'

const Movies = ({ movies }) => {

    const [query, setQuery] = useState("avengers");
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        // searchMovies();
        dispatch(getMovies(query));
    }, [query])

    const updateQuery = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
        console.log(query);
    };

    const updateSearch = e => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return(
        <div className="movies-site">
            <form className="search-form" onSubmit={updateQuery}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
                <button className="search-btn" type="submit" >Search </button>
            </form>
            <div className="movies">
                { movies.map(movie => (<Movie key={ movie.title } movie={ movie } />)) }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies,
    }
}

const mapActionsToProps = {
    getMovies,
}

export default connect(mapStateToProps, mapActionsToProps)(Movies);