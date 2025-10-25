import './ChannelPage.css'
import Video from '#/components/Video/Video'

const ChannelPage = ({channelData, channelVideos}) => {
    const { avatar, banner, title, username, stats, description } = channelData.data;
    const { desktop } = banner;
    const lastBanner = desktop[desktop.length - 1];
    const { subscribers, videos } = stats;
    console.log(description.length)

    function formatViews(views: number): string {
        if (views >= 1_000_000) {
            // over milion 
            return (views / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'M';
        } else if (views >= 1_000) {
            // over tousand 
            return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
        } else {
            return views.toString();
        }
    }
    const limit = 60;
    const shortDescription = description.length > limit ? description.slice(0, limit) + '...' : description;

    return(
        <div className="channel-page">
            <img className='banner' src={lastBanner.url}/>
            <div className="channel-logo">
                <img src={avatar[0].url}/>
                <div className='channel-content'>
                    <h2>{title}</h2>
                    <div className='channel-data'>
                        <h3>{username}</h3>
                        <h4>• {formatViews(subscribers)} subscribers</h4>
                        <h4>• {videos} videos</h4>
                    </div>
                    <h4 className='channel-paragraph'>{shortDescription}</h4>
                </div>
            </div>
            <div className='channel-videos'>
                {channelVideos.data.contents.map((videoData, index) => {
                    
                    return(
                        <Video key={index} videoData={videoData}/>
                    )
                })}
            </div> 
        </div>
    )    
}

export default ChannelPage;