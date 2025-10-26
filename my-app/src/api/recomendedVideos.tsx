import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const key = 'ec0e452206msh6457687ec51e1f6p1b9439jsnb98b8a108017';

export const fetchDataApi = async(videoID: string) => {
    const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/related-contents/',
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
        /* console.log(response.data); */
        return response;
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