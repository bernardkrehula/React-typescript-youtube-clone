import './RecomendedVideo.css'

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
    const { thumbnails, title, publishedTimeText, author } = videoData;
    const { height, url, width } = thumbnails[0];
    const { title: authorName } = author;

    return(
        <div className='recomended-video' onClick={onClick}>
            <img src={url}/> 
            <div className='recomended-content'>
                <h1>{title}</h1>
                <h2>{authorName}</h2>
                <h3>{publishedTimeText}</h3>
            </div>
        </div>
    )

}

export default RecomendedVideo;