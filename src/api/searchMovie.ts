import axios from '../axios';
import requests from '../axios/request';

type Props = {
  replace(arg0: any, arg1: string): unknown;
  query: any;
};

export const searchMovie = async (query: Props) => {
  const request = await axios.get(
    requests.searchMovie + query.replace(/ /g, '+')
  );
  const { results } = request.data;
  return results;
};
