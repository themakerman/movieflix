import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import { movieDB } from '../configs/config';

const MOVIE_LIST_QUERY = `${movieDB.url}3/search/movie?api_key=${movieDB.apiKey}&page=1&include_adult=${movieDB.showAdult}`; 
const MOVIE_DETAIL_QUERY = `${movieDB.url}3/movie/`;

const App = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [movieSelectedId, setMovieSelectedId] = useState('')
    
    return (
        <div>
            <SearchBar searchText={(searchText) => setSearchTerm(searchText)}/>
            <MovieList 
                queryRequest={`${MOVIE_LIST_QUERY}&query=${searchTerm}`} 
                search={searchTerm} 
                movieSelectedId={(movieSelectedId) => setMovieSelectedId(movieSelectedId)}
            />
            <MovieDetail 
                queryRequest={`${MOVIE_DETAIL_QUERY}${movieSelectedId}?api_key=${movieDB.apiKey}`} 
                search={movieSelectedId}
            />
        </div>
    )
}

export default App;