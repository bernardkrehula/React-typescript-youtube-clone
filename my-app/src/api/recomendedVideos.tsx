import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const key = 'ec0e452206msh6457687ec51e1f6p1b9439jsnb98b8a108017';

const fetchDataApi = async (value: string) => {
    const id = value[1];

    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
        channelId: id,
        part: 'snippet,id',
        order: 'date',
        maxResults: '34',
        },
        headers: {
        'X-RapidAPI-Key': 'ca15920c56mshf9c581b5644b811p131238jsnb4402ca00e5c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } 
    catch (error) {
        console.error(error);
    }
};

export const getRecomendedVideosApi = (value: string) => {
    return useQuery({
        queryKey: ['recomended-videos', value],
        queryFn: () => fetchDataApi(value),
        enabled: !!value,
    })
}
//recomended video - mC3tjysJ01E