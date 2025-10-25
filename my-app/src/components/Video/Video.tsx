import './Video.css'

type VideoDataType = {
    videoData: {
        type: string;
        video: {
        title: string;
        author?: {
            title: string;
        }
        thumbnails: [{ height: number, url: string, width: number }];
        videoId: string;
        stats: { views: number };
        publishedTimeText: string;
        movingThumbnails: [{ height: number, url: string, width: number; }];
        badges: [];
        isLiveNow: boolean;
        lengthSeconds: number;
        };
    }
    onClick: (value: string) => void;
}

const Video = ({videoData, onClick}: VideoDataType) => {

    const { video } = videoData;
    const { title, author, thumbnails, publishedTimeText, videoId } = video;
    const lastThumbnail = thumbnails[thumbnails.length - 1];

    const videoClick = () => {
        onClick(videoId);
    }

    return(
            <div className='video' onClick={videoClick}>
                <img src={lastThumbnail.url}/> 
                <div className='video-content'>
                    <h1>{title}</h1>
                    <h2>{author ? author.title : ''}</h2>
                    <h3>{publishedTimeText}</h3>
                </div>
            </div>
        
        )
}

export default Video;