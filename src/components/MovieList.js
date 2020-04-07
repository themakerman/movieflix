import React, { useState, useEffect } from 'react';
import { movieDB } from '../configs/config';

const useResources = (resource) => {
    const [movies, setMovies] = useState([]);
    
    const fetchResource = async (resource) =>  {
        const query = `3/search/movie?api_key=${movieDB.apiKey}&page=1&include_adult=${movieDB.showAdult}&query=${resource}`
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
    if(resources.length>1) {
        return (
            <ul>
                {resources.map((record) => 
                    <li onClick={(e) => console.log(e.target.dataset['item'])} key={record.id} data-item={record.id}>
                        {record.title}
                    </li>
                )} 
            </ul>
        )
    } else {
        if(search.length === 0) {
            return (
                <div>
                    Begin your search now.
                </div>
            )
        } else {
            return (
                <div>
                    No results found.
                </div>
            )
        }
    }
}

export default MovieList;