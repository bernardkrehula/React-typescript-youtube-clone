import Video from "../../components/Video/Video";
import './LoadingPage.css'
import youtubeVideosData from "../../data/youtubeVideosData";
import { connectionContext } from "../../useContext/ConnectionProvider";
import { useEffect } from "react";
import { useOutletContext } from 'react-router';
import fetcheData from "../../data/FetchedData";

type LoadingPageDataType = {
    fetchedData?: {
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
    const { data } = useOutletContext<{ data: LoadingPageDataType }>();
    const { newData } = fetcheData;
/* 
    useEffect(() => {
        console.log(data)
    },[data]) */

    if(isHidden) return(
        <div className="homepage-parent">
            <div className="homepage">
               {newData.contents.map((data, index) => {
                    
                    return(
                        <Video key={index} videoData={data} onClick={hideMenu}></Video>
                    )
               })}
            </div>
        </div>   
    )
}

export default LoadingPage;