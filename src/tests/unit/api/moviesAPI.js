const movieDB = require('../../../configs/config');
const fetch = require('node-fetch');
const assert = require('chai').assert;


//Mocha test function
describe.only('Movies API unit testing', async function () {
    
    const MOVIE_LIST_QUERY = `${movieDB.url}3/search/movie?api_key=${movieDB.apiKey}&page=1&include_adult=${movieDB.showAdult}&query=a`; 
    const MOVIE_DETAIL_QUERY = `${movieDB.url}3/movie/513573`;
    
    before((done) => { 
        done();
    })
    
    it('Able to reach movies search api', async (done) => {
        const response = await fetch(MOVIE_LIST_QUERY);
        if(response.ok) {
            done()
        } else {
            done(new Error('Unable to reach the movies search api'))
        }
        
    });
    
    it('Able to reach movies details api', async (done) => {
        const response = await fetch(MOVIE_DETAIL_QUERY);
        if(response.ok) {
            done()
        } else {
            done(new Error('Unable to reach the movie details api'))
        }
    });
            
    after((done) => {
        console.log('\nOperations after testing: N/A');
        done();
    });
    
})





