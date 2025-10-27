import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const key = 'ec0e452206msh6457687ec51e1f6p1b9439jsnb98b8a108017';

export const fetchDataApi = async(videoID: string) => {
    const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/video/comments/',
    params: {
        id: videoID,
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

export const getVideoCommentsApi = (value: string) => {
    return useQuery({
        queryKey: ['video-comments', value],
        queryFn: () => fetchDataApi(value),
        enabled: !!value,
    })
}
//Random video - kJQP7kiw5Fk
//
//Pewdiepie - UC-lHJZR3Gqxm24_Vd_AJ5Yw
