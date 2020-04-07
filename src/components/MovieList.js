import React, { useState, useEffect } from 'react';
import { movieDB } from '../configs/config';

const useResources = (resource) => {
    const [movies, setMovies] = useState([]);
    
    const fetchResource = async (resource) =>  {
        const query = `3/search/movie?api_key=${movieDB.apiKey}&language=en-US&page=1&include_adult=false&query=${resource}`
        if(resource) {
            const response = await fetch(movieDB.url+`${query}`);
            let data = await response.json();
            setMovies(data.results);
        } else {
            setMovies([]);
        }
    }
    
    useEffect(() => {
        fetchResource(resource)
    }, [resource])
    
    return movies
}

const MovieList = ({ search }) => {
    const resources = useResources(search);
    return (
        <ul>
            { resources.map((record) => <li key={record.id}>{record.title}</li>)} 
        </ul>
    )
}

export default MovieList;