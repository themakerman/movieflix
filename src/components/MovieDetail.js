import React from 'react';
import { useResources } from './useResources';
import { movieDB } from '../configs/config';


const MovieDetail = ({ queryRequest, search }) => {
    const movieDetail = useResources(queryRequest);
    const imageUrl = `${movieDB.imageUrl}${movieDetail.poster_path}`;
    if(Object.keys(movieDetail).length<1) {
        return (
            <h1>Nothing to show</h1>
        )
    }
    return (
        <div>
            <h1>Your selection</h1>
            <img src={imageUrl} alt={"No Image found"} />
            <h4>
                {movieDetail.title}
            </h4>
            <p>
                {movieDetail.overview}
            </p>
        </div>
    )
}

export default MovieDetail;