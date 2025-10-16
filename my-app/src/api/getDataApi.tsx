import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const key = 'bf3d316b93msh524143a624c0e96p14df26jsndfaaec8d6cf4';

const fetchDataApi = async(value: string) => {
    const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/search/',
    params: {
        q:  value,
        hl: 'en',
        gl: 'US'
    },
    headers: {
            'x-rapidapi-key': 'key',
            'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response;
        } catch (error) {
        console.error(error);
    }
}

export const getDataApi = (value: string) => {
    return useQuery({
        queryKey: [value],
        queryFn: () => fetchDataApi(value),
        enabled: !!value,
    })
}