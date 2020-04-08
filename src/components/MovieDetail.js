import React from 'react';
import { useResources } from './useResources';

const MovieDetail = ({ queryRequest, search }) => {
    const movieDetail = useResources(queryRequest);
    console.log(movieDetail);
    return (
        <div>
            Movie details:
        </div>
    )
}

export default MovieDetail;