import React from 'react';
import { useResources } from './useResources';
import { movieDB } from '../configs/config';


const MovieDetail = ({ queryRequest, search }) => {
    const movieDetail = useResources(queryRequest);
    const imageUrl = `${movieDB.imageUrl}${movieDetail.poster_path}`;
    
    return (
        <div>
            <img src={imageUrl} alt={"No Image found"} />
            <p>
                {movieDetail.title}
            </p>
            <p>
                {movieDetail.overview}
            </p>
        </div>
    )
}

export default MovieDetail;