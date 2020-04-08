import React from 'react';
import { useResources } from './useResources';
import { movieDB } from '../configs/config';

const MovieList = ({ queryRequest, search, movieSelectedId }) => {
    const resources = useResources(queryRequest);
    if(resources.length>1) {
        return (
            <div>
                <ol>
                    {resources.map((record) => 
                        <li 
                            style={styles.listStyle}
                            onClick={(e) => movieSelectedId(e.target.dataset['item'])} 
                            key={record.id} data-item={record.id}
                        >
                            <div style={styles.listItemStyle}>
                                <img src={getPosterFullUrl(record.poster_path)} alt={"No Image found"} style={styles.listPosterStyle}/>
                                <p><strong>{record.title}</strong> ({new Date(record.release_date).getFullYear() || 'No Year'})</p>
                            </div>
                            
                        </li>
                    )} 
                </ol>
            </div>
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
        'borderWidth': '2px',
        'padding': "25px",
        'width': "20%",
        "boxShadow": '2px 2px 26px -4px rgba(66,66,66,0.30)',
        'height': "5%",
        "outline":'none',
        "marginBottom": '1em',
        "cursor": 'pointer',
        'listStyleType': 'none'
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