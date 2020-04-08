import { useState, useEffect } from 'react';
import { movieDB } from '../configs/config';

export const useResources = (url) => {
    const [resource, setResource] = useState([]);
    
    const fetchResource = async (url) =>  {
        const response = await fetch(url);
        if(response.ok) {
            let data = await response.json();
            let { results = null } = data;
            if(results) {
                setResource(data.results);
            } else {
                setResource(data);
            }
        } else {
            setResource({});
        }
    }
    
    useEffect(() => {
        fetchResource(url)
    }, [url])
    
    return resource
}