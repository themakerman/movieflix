const { movieDB } = require('../../../configs/config');
require('es6-promise').polyfill();
require('isomorphic-fetch');
const assert = require('chai').assert;


//Mocha test function
describe.only('Movies API unit testing', function () {
    
    const MOVIE_LIST_QUERY = `${movieDB.url}3/search/movie?api_key=${movieDB.apiKey}&page=1&include_adult=${movieDB.showAdult}&query=a`; 
    const MOVIE_DETAIL_QUERY = `${movieDB.url}3/movie/513573?api_key=${movieDB.apiKey}`;
    
    before((done) => { 
        done();
    })
    
    it('Able to reach movies search api', (done) => {
        fetch(MOVIE_LIST_QUERY)
        .then((data) => {
            if(data.status !== 200) {
                done(new Error('Unable to reach movies search api'))
            } else {
                done();
            }
        })
        .catch((error) => {
          done(error)
        });
        
    });
    
    it('Able to reach movies details api', (done) => {
        fetch(MOVIE_DETAIL_QUERY)
        .then((data) => {
            if(data.status !== 200) {
                done(new Error('Unable to reach movies search api'))
            } else {
                done();
            }
        })
        .catch((error) => {
          done(error)
        });
    });
            
    after((done) => {
        console.log('\nOperations after testing: N/A');
        done();
    });
    
})





