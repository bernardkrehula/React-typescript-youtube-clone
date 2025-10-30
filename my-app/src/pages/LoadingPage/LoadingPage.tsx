import Video from "../../components/Video/Video";
import './LoadingPage.css'
import { connectionContext } from "../../useContext/ConnectionProvider";
import { useOutletContext, useParams } from 'react-router';
import Channel from "../../components/Channel/Channel";
import ChannelPage from "../ChannelPage/ChannelPage";
import { useEffect, useState } from "react";
import { getChannelDataApi } from "#/api/channelApi";
import { getChannelVideosApi } from "#/api/channelVideosApi";

type LoadingPageDataType = {
    data: {
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
    const [channelID, setChannelID] = useState<string>("");
    const { id } = useParams();
    const { data: channelData, isFetched: showChannel } = getChannelDataApi(channelID);
    const { data: channelVideos, isFetched: showChannelVideos } = getChannelVideosApi(channelID);
    const { hideMenu, isHidden } = connectionContext();
    const { videoData, showCategory } = useOutletContext<{ videoData: LoadingPageDataType, showCategory: boolean}>();
   
    useEffect(() => {
        setChannelID(id || "");
        console.log(videoData,showCategory)
    }, [id])

    const handleChannelClick = () => {
        hideMenu(false);
    }
    const handleVideoClick = () => {
        hideMenu(true);
    }
    if(!isHidden && showCategory) return(
        <div className="loadingpage-parent">
            <div className="homepage">
               {videoData?.data?.contents.map((videoData, index: number) => {
                     
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