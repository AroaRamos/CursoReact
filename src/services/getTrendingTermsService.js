import { API_KEY } from './settings';

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;
  return data;
};

export default function getTrendingTerms() {
  const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs);
}
