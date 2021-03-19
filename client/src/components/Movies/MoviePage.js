import React, { useEffect, useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Media } from 'reactstrap';




const MoviePage = ({ match }) =>{
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = 'f9e274276050bf3ab215535300d9eb1e';

    const [movie, setMovie] = useState({});
    
    useEffect(() => {
        getMovie(match.params.id);
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
          { <div>
                <Container className="container">
                    <Media>
                        <Media left href="#">
                            <Media className="poster" object src={ IMAGE_URL + movie.poster_path } alt="Generic placeholder image" />
                        </Media>
                        <Media className="body" body>
                            <Media className="heading" heading>
                            { movie.title }
                            </Media  >
                            <p className="date">{ movie.release_date }</p>
                            <p className="overview">{ movie.overview }</p>
                            <p className="vote">{ movie.vote_average }</p>
                        </Media>
                    </Media>
                </Container>
            </div>}
        </div>
        
    )
}

export default MoviePage;