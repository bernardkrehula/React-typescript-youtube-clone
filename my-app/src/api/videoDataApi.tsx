import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const key = '626dfad1a1msheb6bc4ea7fe69fcp1cc550jsnff35c70ac520';

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
        'x-rapidapi-key': key,
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        return response;
        } catch (error) {
        console.error(error);
    }
}

export const useDataApi = (value: string) => {
    return useQuery({
        queryKey: [value],
        queryFn: () => fetchDataApi(value),
        enabled: !!value,
    })
}


