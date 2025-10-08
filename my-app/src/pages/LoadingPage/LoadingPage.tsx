import Video from "../../components/Video/Video";
import './LoadingPage.css'
import youtubeData from "../../data/youtubeData";
import { useState } from "react";

const LoadingPage = ({}) => {
    const [ ytData, setYtData ] = useState(youtubeData);


    return(
        <div className="homepage-parent">
            <div className="homepage">
               {ytData.map(data => {
                    return(
                        <Video data={data}></Video>
                    )
               })}
            </div>
        </div>   
    )
}

export default LoadingPage;