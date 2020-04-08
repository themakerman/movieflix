import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import { movieDB } from '../configs/config';
import movieFlexLogo from '../assets/logo_transparent.png'

const MOVIE_LIST_QUERY = `${movieDB.url}3/search/movie?api_key=${movieDB.apiKey}&page=1&include_adult=${movieDB.showAdult}`; 
const MOVIE_DETAIL_QUERY = `${movieDB.url}3/movie/`;

const App = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [movieSelectedId, setMovieSelectedId] = useState('');
    
    return (
        <div style={styles.appContainerStyle}>
            
            <div style={styles.searchBarLogoContainerStyle}>
                <img src={movieFlexLogo} style={styles.logoStyle}/>
                <SearchBar searchText={(searchText) => setSearchTerm(searchText)}/>
            </div>
            
            <div>
                <div style={styles.movieListDetailsContainerStyle}>
                    <div style={styles.movieListContainerStyle}>
                        <MovieList 
                            queryRequest={`${MOVIE_LIST_QUERY}&query=${searchTerm}`} 
                            search={searchTerm} 
                            movieSelectedId={(movieSelectedId) => setMovieSelectedId(movieSelectedId)}
                        />
                    </div>
                    <div style={styles.movieDetailContainerStyle}>
                        <MovieDetail 
                            queryRequest={`${MOVIE_DETAIL_QUERY}${movieSelectedId}?api_key=${movieDB.apiKey}`} 
                            search={movieSelectedId}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

const styles = {
    searchBarLogoContainerStyle:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
        height: '85vh'
    },
    logoStyle: {
        width: '250px', 
        height: '70px', 
        marginBottom: '3em' 
    },
    movieListDetailsContainerStyle: {
        marginTop: 20, 
        flex: 5, 
        display: 'flex', 
        direction: 'row',  
        height: '100%',
        backgroundColor: '#FEFEFE'
    },
    movieListContainerStyle: {
        alignItems: 'center', 
        flex: 3.5, 
        boxShadow: '2px 2px 26px -4px rgba(66,66,66,0.75)', 
        padding: '1em'
    },
    movieDetailContainerStyle: {
        marginLeft: 10, 
        flex: 1.5, 
        justifyContent: 'center', 
        boxShadow: '2px 2px 26px -4px rgba(66,66,66,0.75)', 
        padding: '1em',
        backgroundColor: '#F73F52'
    }
}

export default App;