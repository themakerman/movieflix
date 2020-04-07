import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const App = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <div>
            <SearchBar searchText={(searchText) => setSearchTerm(searchText)}/>
            <MovieList search={searchTerm}/>
        </div>
    )
}

export default App;