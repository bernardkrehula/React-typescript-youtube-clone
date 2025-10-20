import Video from "../../components/Video/Video";
import './LoadingPage.css'
import { connectionContext } from "../../useContext/ConnectionProvider";
import { useEffect } from "react";
import { useOutletContext } from 'react-router';

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
    const { hideMenu } = connectionContext();
    const { data, isFetched } = useOutletContext<{ data: LoadingPageDataType, isFetched: boolean }>();
 
/*     useEffect(() => {
        console.log(data) 
    },[data]) 
 */
    if(isFetched) return(
        <div className="homepage-parent">
            <div className="homepage">
               {data.data.contents.map((data, index) => {
                    
                    if(data.type === 'video')return(
                        <Video key={index} videoData={data} onClick={hideMenu}></Video>
                    )
               })}
            </div>
        </div>   
    )
}

export default LoadingPage;