import './Video.css'
import { differenceInDays } from 'date-fns';
import { useEffect, useState } from 'react';

type VideoDataType = {
    videoData?: {
        video: {
        title: string;
        author: {
            title: string;
        }
        thumbnails: [{ url: string }];
        publishedTimeText: string;
    };
    }
    onClick: () => void;
}

const Video = ({videoData, onClick}: VideoDataType) => {

    const { video } = videoData;
    const { title, author, thumbnails, publishedTimeText } = video;  
  
/*     const [ url ] = thumnails; */

   /*  const [ timeOfPublishing , setTimeOfPublishing ] = useState('');
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
    } */
    //Razdovjiti channel card i video card
    //Za search pogledaj debounce
    
    /* if(kind === "youtube#channel") return(
        <div className='channel-icon'>
            <img src={high.url}/>
            <div className='channel-icon-content'>
                <h2>{title}</h2>
                <h3>{description}</h3>
            </div>
        </div>
    ) */
   return(
        <div className='video' onClick={onClick}>
            <img src={thumbnails[0].url}/> 
            <div className='video-content'>
                <h1>{title}</h1>
                <h2>{author.title}</h2>
                <h3>{publishedTimeText}</h3>
            </div>
        </div>
       
    )
}

export default Video;