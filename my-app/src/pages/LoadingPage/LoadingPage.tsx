import Video from "../../components/Video/Video";
import './LoadingPage.css'
import { connectionContext } from "../../useContext/ConnectionProvider";
import { useOutletContext } from 'react-router';
import Channel from "../../components/Channel/Channel";
import ChannelPage from "../ChannelPage/ChannelPage";
import type { ChannelDataType } from "../ChannelPage/ChannelPage";
import type { ChannelVideosType } from "../ChannelPage/ChannelPage";

type LoadingPageDataType = {
    data?: {
        config: {},
        data: {
            contents: [{
                type: string,
                video: {
                    author: {

                    },
                    descriptionSnippet: string,
                    publishedTimeText: string,
                    stats: Number,
                    thumbnails: {
                        url: string
                    },
                    title: string
                }
            }]
        },
        headers: {},
        request: {}
    }
}

const LoadingPage = () => {
    const { hideMenu, isHidden } = connectionContext();
    const { videoData, showCategory, setClickValue, channelData, channelVideos, showChannel, showChannelVideos, setVideoClickValue } = useOutletContext<{ videoData: LoadingPageDataType, showCategory: boolean, setClickValue: React.Dispatch<React.SetStateAction<string>>, channelData: ChannelDataType, channelVideos: ChannelVideosType, showChannel: boolean, showChannelVideos: boolean, setVideoClickValue: React.Dispatch<React.SetStateAction<string>>}>();
   
    const handleChannelClick = (value: string) => {
        setClickValue(value);
        hideMenu(false);
    }
    const handleVideoClick = (value: string) => {
        setVideoClickValue(value);
        hideMenu(true);
    }
    if(!isHidden && showCategory) return(
        <div className="loadingpage-parent">
            <div className="homepage">
               {videoData?.data?.contents?.map((videoData, index: number) => {
                     
                    if(videoData.type === 'video') return(
                        <Video key={index} videoData={videoData} onClick={handleVideoClick} ></Video>
                    )
                    if(videoData.type === 'channel') return(
                        <Channel key={index} videoData={videoData} onClick={handleChannelClick} />
                    )
               })}
            </div>
            
        </div>   
    ) 
    if(!isHidden && showChannel && showChannelVideos) return (
        <div className="loadingpage-parent">
            <ChannelPage channelData={channelData} channelVideos={channelVideos}/>
        </div> 
    )
}

export default LoadingPage;