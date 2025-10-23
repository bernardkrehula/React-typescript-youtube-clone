import './ChannelVideo.css'

type VideoDataType = {
    data?: {
        video: {
        title: string;
        thumbnails: [{ url: string }];
        publishedTimeText: string;
    };
    }
    onClick: () => void;
}

const ChannelVideo = ({data}: VideoDataType) => {
    const { video } = data;
    const { thumbnails, title, publishedTimeText } = video;
   
    return(
        <div className="channel-video">
            <img src={thumbnails[0].url}/> 
            <div className='channel-video-content'>
                <h1>{title}</h1>
                <h3>{publishedTimeText}</h3>
            </div>
        </div>
    )  
}

export default ChannelVideo;