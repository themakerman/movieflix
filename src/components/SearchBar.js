import React from 'react';

/**
 * My Search Bar Component
 * @param {SearchBarProps} props 
 */
const SearchBar = (props) => {
    let myEfficientFn = debounce((term) => props.searchText(term), 300);
    return (
        <div>
            <form>
                <input 
                    placeholder={'Begin your movie search here'} 
                    onChange={(term) => myEfficientFn(term.target.value)} 
                    type="text" name="movie-search-bar" 
                    style={styles.searchBarStyle}
                />
            </form>
        </div>
    )
}

const styles = {
    searchBarStyle: {
        'borderRadius': "18px",
        'borderWidth': '1px solid',
        'padding': "10px",
        'width': "500px",
        "boxShadow": '2px 2px 26px -4px rgba(247,63,82,0.10)',
        'height': "20px",
        "outline":'none',
        'color': '#F73F52',
        'borderColor': '#F73F52'
    }
    
}

export default SearchBar;
/**
 * @typedef SearchBarProps
 * @property {callback} searchText 
 */
 
 function debounce(func, wait, immediate) {
 	var timeout;
 	return function() {
 		var context = this, args = arguments;
 		var later = function() {
 			timeout = null;
 			if (!immediate) func.apply(context, args);
 		};
 		var callNow = immediate && !timeout;
 		clearTimeout(timeout);
 		timeout = setTimeout(later, wait);
 		if (callNow) func.apply(context, args);
 	};
 };