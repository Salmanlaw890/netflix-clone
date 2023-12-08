// normally we put api key in {process.env.API_KEY}
const API_KEY = "e0c29c45d117362f5059404e968ec779";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

//the full api is :
// "https://api.themoviedb.org/3"    from axois
// "/trending/all/week?api_key=${API_KEY}&language=en-US"  from here with api key in it

//it becomes

// "https://api.themoviedb.org/3/trending/all/week?api_key=e0c29c45d117362f5059404e968ec779&language=en-US" 