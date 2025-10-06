import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/v2/trending',
  headers: {
    'x-rapidapi-key': '58ebefbf81mshd5f944318b77b95p142c10jsn560e81ba595e',
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData = async() => {
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
      console.error(error);
  }
}
  