import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const key = 'b856423178msh48e94cd57f9b831p1dc629jsn9a39fd69eb20';

export const fetchDataApi = async(videoID: string) => {
    const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/details/',
    params: {
        id: videoID,
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
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getVideoDetailsApi = (value: string) => {
    return useQuery({
        queryKey: ['video-details', value],
        queryFn: () => fetchDataApi(value),
        enabled: !!value,
    })
}