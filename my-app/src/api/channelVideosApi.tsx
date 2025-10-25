import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const key = '41f4e07bbemshb46d6d6c105e338p1b404cjsn1c8105fc4986';

export const fetchDataApi = async(channelID: string) => {
    const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/channel/videos/',
    params: {
        id: channelID,
        filter: 'videos_latest',
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
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getChannelVideosApi = (channelID: string) => {
    return useQuery({
        queryKey: ['channel-videos', channelID],
        queryFn: () => fetchDataApi(channelID),
        enabled: !!channelID,
    })
}
//UCX6OQ3DkcsbYNE6H8uQQuVA - Mrbeast