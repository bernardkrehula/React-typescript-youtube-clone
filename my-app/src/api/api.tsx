import axios from 'axios';

const apiKey = 'bf3d316b93msh524143a624c0e96p14df26jsndfaaec8d6cf4';

const options = {
  method: 'GET',
  url: `https://youtube138.p.rapidapi.com/video/details/`,
  params: {
    id: 'kJQP7kiw5Fk',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'x-rapidapi-key': 'key',
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};
//Axinos usage

export const fetchData = async() => {
  
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
      console.error(error);
  }
}
  