import axios from 'axios';


const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/video/details/',
        params: {
            id: 'kJQP7kiw5Fk',
            hl: 'en',
            gl: 'US'
        },
        headers: {
            'x-rapidapi-key': '58ebefbf81mshd5f944318b77b95p142c10jsn560e81ba595e',
            'x-rapidapi-host': 'youtube138.p.rapidapi.com'
        }
      };

export const fetchData = async() => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
      console.error(error);
  }
}
  