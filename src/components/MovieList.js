import React from 'react';
import { useResources } from './useResources';

const MovieList = ({ queryRequest, search, movieSelectedId }) => {
    const resources = useResources(queryRequest);
    if(resources.length>1) {
        return (
            <ol>
                {resources.map((record) => 
                    <li onClick={(e) => movieSelectedId(e.target.dataset['item'])} key={record.id} data-item={record.id}>
                        {record.title}
                    </li>
                )} 
            </ol>
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