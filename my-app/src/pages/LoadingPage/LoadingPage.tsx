import Video from "../../components/Video/Video";
import './LoadingPage.css'
import youtubeVideosData from "../../data/youtubeVideosData";
import { connectionContext } from "../../useContext/ConnectionProvider";

const LoadingPage = ({}) => {
    const ytData = youtubeVideosData;
    const { hideMenu, isHidden } = connectionContext();
    if(isHidden) return(
        <div className="homepage-parent">
            <div className="homepage">
               {ytData.items.map((data, index) => {
                    
                    return(
                        <Video key={index} videoData={data} onClick={hideMenu}></Video>
                    )
               })}
            </div>
        </div>   
    )
}

export default LoadingPage;