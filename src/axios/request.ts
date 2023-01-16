const API_KEY = process.env.REACT_APP_TMDB_API_KEY || '';

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=${
    Math.floor(Math.random() * 10) + 1
  }`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=${
    Math.floor(Math.random() * 10) + 1
  }`,
  fetchFeaturedMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&page=${
    Math.floor(Math.random() * 10) + 1
  }`,
  fetchFeaturedCasts: `/person/popular?api_key=${API_KEY}&language=en-US&page=${
    Math.floor(Math.random() * 10) + 1
  }`,
  fetchExclusiveVideos: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${
    Math.floor(Math.random() * 10) + 1
  }`,
  fetchNewArrivals: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${
    Math.floor(Math.random() * 10) + 1
  }`,
};

export default requests;
