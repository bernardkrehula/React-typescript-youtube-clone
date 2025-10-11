import './SingleVideo.css'
import youtubeSingleVideoData from '../../data/youtubeSingleVideoData'

const SingleVideo = () => {
    const { items } = youtubeSingleVideoData;
    const [ firstItem ] = items;
    const { snippet, statistics } = firstItem;
    const { title, thumbnails, channelTitle } = snippet;
    const { viewCount, likeCount, commentCount } = statistics; 
    const { maxres } = thumbnails;
 
    console.log(thumbnails)

    return(
        <div className='single-video'>
            <div className='single-video-icon'>
                <img src={maxres.url} className='thumbnail'/>
                <div className='single-video-content'>
                    <div className='video-title'>
                        <h2>{title}</h2>
                        <h3>{channelTitle}</h3>
                    </div>
                    <div className='video-likes-views'>
                        <h2>{viewCount}</h2>
                        <div className='likes'>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="like-svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>
                            <h3>{likeCount}</h3>
                        </div>

                        <div className='share'>

                        </div>
                        <div className='download'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleVideo;