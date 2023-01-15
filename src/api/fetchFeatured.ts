import axios from '../axios';
import { FetchProps } from '../typings';

export const fetchFeatured = async ({ fetchUrl }: FetchProps) => {
  const request = await axios.get(fetchUrl);

  const { results } = request.data;

  return results;
};
