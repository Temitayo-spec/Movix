import axios from '../axios';
import requests from '../axios/request';

export const fetchMovie = async () => {
  const request = await axios.get(requests.fetchNetflixOriginals);

  const { results } = request.data;

  return results[Math.floor(Math.random() * results.length - 1)];
};
