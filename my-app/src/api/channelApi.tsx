import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const key = '626dfad1a1msheb6bc4ea7fe69fcp1cc550jsnff35c70ac520';

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

export const getChannelDataApi = (value: string) => {
    return useQuery({
        queryKey: ['channelData', value],
        queryFn: () => fetchDataApi(value),
        enabled: !!value,
    })
}
//UCX6OQ3DkcsbYNE6H8uQQuVA - Mrbeast