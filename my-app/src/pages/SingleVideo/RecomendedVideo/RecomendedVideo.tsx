import './RecomendedVideo.css'

type VideoDataType = {
    videoData: VideoType
    onClick?: () => void;
}
export type VideoType = {
    type: string;
    video: {
        thumbnails: [{height: number, url: string, width: number}];
        title: string;
        publishedTimeText: string;
        author: {
            title: string;
        }
    }
}

const RecomendedVideo = ({videoData, onClick}: VideoDataType) => {
    const { video } = videoData;
    const { thumbnails, title, publishedTimeText, author } = video;
    const { url } = thumbnails[0];
    const { title: authorName } = author;

    const cutTitle = (text: string, limit: number) => {
        if (text.length <= limit) return text;
            return text.slice(0, limit) + '...';
    };

    return(
        <div className='recomended-video' onClick={onClick}>
            <img src={url}/> 
            <div className='recomended-content'>
                <h1>{cutTitle(title, 40)}</h1>
                <h2>{authorName}</h2>
                <h3>{publishedTimeText}</h3>
            </div>
        </div>
    )

}

export default RecomendedVideo;