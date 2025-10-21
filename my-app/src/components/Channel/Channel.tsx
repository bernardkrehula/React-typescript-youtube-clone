
type ChannelDataType = {
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


const Channel = ({videoData}: ChannelDataType) => {
    const { channel } = videoData;
    const { title, avatar, descriptionSnippet } = channel;  

    return(
        <div className='channel-icon'>
            <img src={avatar[1].url}/>
            <div className='channel-icon-content'>
                <h2>{title}</h2>
                <h3>{descriptionSnippet}</h3>
            </div>
        </div>
    )
}

export default Channel;