import Video from "../../components/Video/Video";
import './LoadingPage.css'
import { connectionContext } from "../../useContext/ConnectionProvider";
import { useEffect } from "react";
import { useOutletContext } from 'react-router';
import Channel from "../../components/Channel/Channel";

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
    const { videoData, isFetched, setClickValue } = useOutletContext<{ videoData: LoadingPageDataType, isFetched: boolean, setClickValue: React.Dispatch<React.SetStateAction<string>> }>();
/* 
    useEffect(() => {
        setClickValue('nesto')
    }, []) */

    const handleChannelClick = (value: string) => {
        setClickValue(value);
        hideMenu();
    }

    if(!isHidden && isFetched) return(
        <div className="homepage-parent">
            <div className="homepage">
               {videoData?.data?.contents?.map((videoData, index: number) => {
                     
                    if(videoData.type === 'video') return(
                        <Video key={index} videoData={videoData} onClick={hideMenu}></Video>
                    )
                    if(videoData.type === 'channel') return(
                        <Channel key={index} videoData={videoData} onClick={handleChannelClick} />
                    )
               })}
            </div>
        </div>   
    )
}

export default LoadingPage;