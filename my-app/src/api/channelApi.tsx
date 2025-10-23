import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const key = '265daabe37msh254ff0a0c223316p10d4f3jsn87746d7133f7';

const fetchDataApi = async(channelID: string) => {
    const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/channel/details/',
    params: {
        id: channelID,
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

export const getChannelDataApi = (value: string) => {
    return useQuery({
        queryKey: [value],
        queryFn: () => fetchDataApi(value),
        enabled: !!value,
    })
}
//UCX6OQ3DkcsbYNE6H8uQQuVA - Mrbeast