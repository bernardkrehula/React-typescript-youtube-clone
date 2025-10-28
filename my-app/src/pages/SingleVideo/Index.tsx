import './SingleVideo.css'
import RecomendedVideo from './RecomendedVideo/RecomendedVideo';
import recomendedVideos from '../../data/recomendedVideos';
import Comment from './Comment/Comment';
import { connectionContext } from '../../useContext/ConnectionProvider';
import type { CommentTypes } from './Comment/Comment';
type SingleVideoTypes = {
    videoComments: {
        totalCommentsCount: number;
        comments: CommentTypes[];
    }
    clickedVideoData: {
        author: {
            title: string;
        }
        title: string;
        thumbnails: [{
            url: string;
            width: number;
            height: number;
        }]
        stats: {
            comments: number;
            likes: number;
            views: number;
        }
    }
    showClickedVideo: boolean;
    showVideoComments: boolean;
}

const SingleVideo = ({clickedVideoData, showClickedVideo, videoComments, showVideoComments}: SingleVideoTypes) => {
    const { isHidden } = connectionContext();
/*     console.log(clickedVideoData, 'video-comments:', videoComments)
 */    //Single video data
    
    if(isHidden && showClickedVideo && showVideoComments){
    const { totalCommentsCount, comments } = videoComments;
    const { author, title, thumbnails, stats} = clickedVideoData; 
    const { likes, views } = stats;
    const { title: authorName } = author;
    const lastThumbnail = thumbnails[thumbnails.length - 1];
    const { url } = lastThumbnail;
   
    //useContext
    return(
        <div className='single-video'>
            <div className='single-video-icon'>
                <img src={url} className='thumbnail'/>
                <div className='single-video-content'>
                    <div className='video-title'>
                        <h2>{title}</h2>
                        <h3>{authorName}</h3>
                    </div>
                    <div className='video-likes-views'>
                        <h2 className='views'>{Number(views).toLocaleString()} views</h2>
                        <div className='likes'>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="like-svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>
                            <h3>{Number(likes).toLocaleString()}</h3>
                        </div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="dislike"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>
                        <div className='share'>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="share-svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" /></svg>
                            <h2>Share</h2>
                        </div>
                        <div className='download'>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="download-svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                            <h2>Download</h2>
                        </div>
                    </div>
                </div>
                <h4 className='comments-count'>{Number(totalCommentsCount).toLocaleString()} comments</h4>
                <div className='comments'>
                    {comments.map((comment, index: number) => {
                        return(
                            <Comment key={index} {...comment}/>
                        )
                    })}
                </div>
            </div>
            <div className='recomended-videos'>
                {recomendedVideos.items.map((data, index) =>{
                    return(
                        <RecomendedVideo  key={index} videoData={data}/>
                    )
            })} 
            </div>
        </div>
    )} 
}

export default SingleVideo;