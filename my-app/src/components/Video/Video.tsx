import './Video.css'

type VideoType = {
    data: VideoTypes;
}
type VideoTypes = {
    title: string;
    publishedAt: string;
    thumbnail: string;
    channelTitle: string;
}

const Video = ({data}: VideoType) => {
    const { title, publishedAt, thumbnail, channelTitle } = data;

    return(
            <div className='video'>
            <img src={thumbnail}/>
            <div className='video-content'>
                <h1>{title}</h1>
                <h2>{channelTitle}</h2>
                <h3>{publishedAt}</h3>
            </div>
        </div>
       
    )
}

export default Video;