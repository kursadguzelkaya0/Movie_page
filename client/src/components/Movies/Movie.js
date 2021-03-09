import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) =>{
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w200/'
    return(
        <div className="movie"> 
            <Card className="card">
                <CardImg className="card-image" top width="10%" src={ IMAGE_URL + movie.poster_path } alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{ movie.title }</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">IMDB { movie.vote_average }</CardSubtitle>
                    <Link to={`/${ movie.id }`}>
                        <Button>Button</Button>
                    </Link>
                </CardBody>
            </Card>
        </div>
        
    )
}

export default Movie;