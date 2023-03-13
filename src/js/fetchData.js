import axios from 'axios';

import BASE_URL from './base-url';

export default async function fetchData(request) {
  try {
    const response = await axios.get(`${BASE_URL}${request}`);

    console.log(response.data.drinks);
    return response.data.drinks;
  } catch (error) {
    console.log(error);
  }
}
