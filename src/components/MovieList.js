import React from 'react';
import { useResources } from './useResources';
import { movieDB } from '../configs/config';

/**
 * Movie List Component
 * @param {MovieListProps} props 
 */
const MovieList = (props) => {
    let { queryRequest, search, movieSelectedId } = props;
    const resources = useResources(queryRequest);
    if(resources.length>1) {
        return (
            <ol style={styles.listContainerStyle}>
                {resources.map((record) => 
                    <li 
                        style={styles.listStyle}
                        onClick={(e) => movieSelectedId(e.currentTarget.dataset['id'])} 
                        key={record.id} data-id={record.id}
                    >
                        <div style={styles.listItemStyle}>
                            <img src={getPosterFullUrl(record.poster_path)} alt={"No Image found"} style={styles.listPosterStyle}/>
                            <p><strong>{record.title}</strong> ({new Date(record.release_date).getFullYear() || 'No Year'})</p>
                        </div>
                        
                    </li>
                )} 
            </ol>
        )
    } else {
        if(search.length === 0) {
            return (
                <div>
                    <h3 style={styles.paragraphBoldStyle}>Begin your search now...</h3>
                </div>
            )
        } else {
            return (
                <div>
                    <h3 style={styles.paragraphBoldStyle}>No results found...</h3>
                </div>
            )
        }
    }
}

function getPosterFullUrl(posterPath) {
    const imageUrl = `${movieDB.imageUrl}${posterPath}`;
    return imageUrl;
}

const styles = {
    listStyle: {
        'padding': "25px",
        'width': "180px",
        "boxShadow": '2px 2px 26px -4px rgba(66,66,66,0.30)',
        'height': "180px",
        "outline":'none',
        "marginBottom": '1em',
        "cursor": 'pointer',
        'listStyleType': 'none',
    },
    listContainerStyle: {
        columnCount: 4
    },
    listItemStyle: {
        display: 'flex',
        flexDirection: 'column'
    },
    listPosterStyle: {
        width: '150px',
        height: '150px'
    },
    paragraphBoldStyle: {
        'color': '#F73F52'
    },
    paragraphTextStyle: {
        'color': '#424242'
    }
}

export default MovieList;
/**
 * @typedef MovieListProps
 * @property {string} queryRequest 
 * @property {string} search 
 * @property {callback} movieSelectedId 
 */