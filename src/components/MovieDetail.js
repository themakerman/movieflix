import React from 'react';
import { useResources } from './useResources';
import { movieDB } from '../configs/config';


const MovieDetail = ({ queryRequest, search }) => {
    const movieDetail = useResources(queryRequest);
    const imageUrl = `${movieDB.imageUrl}${movieDetail.poster_path}`;
    if(Object.keys(movieDetail).length<1) {
        return (
            <h3 style={styles.paragraphBoldStyle}>Nothing to show...</h3>
        )
    }
    return (
        <div>
            <img src={imageUrl} alt={"No Image found"} />
            <p>
                <strong style={styles.paragraphBoldStyle}>Title:</strong> 
                <span style={styles.paragraphTextStyle}> {movieDetail.title}</span>
            </p>
            <p>
                <strong style={styles.paragraphBoldStyle}>Summary:</strong> {movieDetail.overview}
            </p>
        </div>
    )
}

const styles={
    paragraphBoldStyle: {
        'color': '#F73F52'
    },
    paragraphTextStyle: {
        'color': '#424242'
    }
}

export default MovieDetail;