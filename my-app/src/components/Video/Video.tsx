import './Video.css'
import { differenceInDays } from 'date-fns';
import { useEffect, useState } from 'react';

type VideoType = {
    data: VideoTypes;
    onClick: () => void;
}
type VideoTypes = {
    title: string;
    publishedAt: string;
    thumbnail: string;
    channelTitle: string;
}

const Video = ({videoData, onClick}: VideoType) => {
    const [ timeOfPublishing , setTimeOfPublishing ] = useState('');
    const { snippet, id } = videoData;
    const { kind } = id;
    const { channelTitle, description, publishedAt, thumbnails } = snippet;
    const { high } = thumbnails;
    console.log(thumbnails)

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
    console.log(kind)
    if(kind != "youtube#channel") return(
        <div className='video' onClick={onClick}>
            <img src={high.url}/> 
            <div className='video-content'>
                <h1>{description}</h1>
                <h2>{channelTitle}</h2>
                <h3>{timeOfPublishing}</h3>
            </div>
        </div>
       
    )
}

export default Video;