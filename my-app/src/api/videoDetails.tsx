import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const key = '41f4e07bbemshb46d6d6c105e338p1b404cjsn1c8105fc4986';

const fetchDataApi = async(videoID: string) => {
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