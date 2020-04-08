import React from 'react';
import { useResources } from './useResources';
import { movieDB } from '../configs/config';


const MovieDetail = ({ queryRequest, search }) => {
    const movieDetail = useResources(queryRequest);
    const imageUrl = `${movieDB.imageUrl}${movieDetail.poster_path}`;
    console.log(imageUrl);
    if(Object.keys(movieDetail).length<1) {
        return (
            <h3 style={styles.paragraphBoldStyle}>Nothing to show...</h3>
        )
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={imageUrl} alt={"No Image found"} style={styles.movieDetailsPosterStyle}/>
            <p>
                <strong style={styles.movieTitleStyle}>{movieDetail.title}</strong><span style={styles.movieTitleStyle}> ({new Date(movieDetail.release_date).getFullYear() || 'No Year'})</span>
            </p>
            <p>
                <span style={styles.paragraphBoldStyle}>{movieDetail.overview}</span>
            </p>
            
        </div>
    )
}

const styles={
    movieDetailsPosterStyle: {
        width: 'auto',
        height: 'auto'
    },
    movieTitleStyle: {
        'color': '#FEFEFE',
        fontSize: '2em'
    },
    paragraphBoldStyle: {
        'color': '#FEFEFE',
    },
    paragraphTextStyle: {
        'color': '#424242'
    }
}

export default MovieDetail;