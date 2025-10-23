import './Video.css'

type VideoDataType = {
    videoData?: {
        video: {
        title: string;
        author?: {
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
    const lastThumbnail = thumbnails[thumbnails.length - 1];
  
   return(
        <div className='video' onClick={onClick}>
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