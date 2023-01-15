const API_KEY = process.env.REACT_APP_TMDB_API_KEY || '';

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchFeaturedMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchFeaturedCasts: `/person/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchExclusiveVideos: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNewArrivals: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
