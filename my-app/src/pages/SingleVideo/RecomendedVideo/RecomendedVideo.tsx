import './RecomendedVideo.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { differenceInDays } from 'date-fns';

type VideoDataType = {
    videoData: VideoTypes;
    onClick?: () => void;
}
type VideoTypes = {
    id: IdType;
    snippet: SnippetType;
}
type IdType = {
    kind: string;
}
type SnippetType = {
    publishedAt: string;
    title: string;
    channelTitle: string;
    thumbnails: { high: { 
        url: string 
    }};
    description: string;
}

const RecomendedVideo = ({videoData, onClick}: VideoDataType) => {
    const [ timeOfPublishing , setTimeOfPublishing ] = useState('');
    const { snippet, id } = videoData;
    const { kind } = id;
    const { channelTitle, title, publishedAt, thumbnails, description } = snippet;
    const { high } = thumbnails;

    useEffect(() => {
        getTimeDifference();
    }, [videoData])

    const getTimeDifference = () => {
            const publisedTime = new Date(publishedAt);
            const currentTime = new Date();
    
            const difference = differenceInDays(currentTime, publisedTime)
            //Show days
            if(difference <= 31) setTimeOfPublishing(`${difference} days ago`);
            //Show months
            if(difference > 31){
                const result = Math.floor(difference/31);
                setTimeOfPublishing(`${result} months ago`);
            }
            //Show year
            if(difference >= 365){
                const result = Math.floor(difference/365);
                setTimeOfPublishing(`${result} year ago`);
            }
        }

    if(kind != "youtube#channel") return(
        <div className='recomended-video' onClick={onClick}>
            <img src={high.url}/> 
            <div className='recomended-content'>
                <h1>{title}</h1>
                <h2>{channelTitle}</h2>
                <h3>{timeOfPublishing}</h3>
            </div>
        </div>
    )

}

export default RecomendedVideo;