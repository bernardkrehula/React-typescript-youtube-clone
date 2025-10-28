import Video from "../../components/Video/Video";
import './LoadingPage.css'
import { connectionContext } from "../../useContext/ConnectionProvider";
import { useOutletContext } from 'react-router';
import Channel from "../../components/Channel/Channel";
import ChannelPage from "../ChannelPage/ChannelPage";
import type { ChannelDataType } from "../ChannelPage/ChannelPage";
import type { ChannelVideosType } from "../ChannelPage/ChannelPage";
import { useState } from "react";
import { getChannelDataApi } from "#/api/channelApi";
import { getChannelVideosApi } from "#/api/channelVideosApi";

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
    const [clickValue, setClickValue] = useState<string>("");
    const { data: channelData, isFetched: showChannel } = getChannelDataApi(clickValue);
    const { data: channelVideos, isFetched: showChannelVideos } = getChannelVideosApi(clickValue);
    const { hideMenu, isHidden } = connectionContext();
    const { videoData, showCategory, setVideoClickValue } = useOutletContext<{ videoData: LoadingPageDataType, showCategory: boolean,  showChannelVideos: boolean, setVideoClickValue: React.Dispatch<React.SetStateAction<string>>}>();
   
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