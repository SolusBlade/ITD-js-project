import axios from 'axios';

import BASE_URL from './base-url';

export default async function fetchData(request) {
  try {
    const response = await axios.get(`${BASE_URL}${request}`);

    return response.data.drinks;
  } catch (error) {

  }
}
