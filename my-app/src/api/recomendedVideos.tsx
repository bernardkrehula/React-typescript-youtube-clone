import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const key = 'b856423178msh48e94cd57f9b831p1dc629jsn9a39fd69eb20';

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
        return response.data;
        } catch (error) {
        console.error(error);
    }
}

export const getRecomendedVideosApi = (value: string) => {
    return useQuery({
        queryKey: ['recomended-videos', value],
        queryFn: () => fetchDataApi(value),
        enabled: !!value,
    })
}
//recomended video - mC3tjysJ01E