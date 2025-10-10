import Video from "../../components/Video/Video";
import './LoadingPage.css'
import mrBeastData from "../../data/youtubeData";
import { connectionContext } from "../../useContext/ConnectionProvider";

const LoadingPage = ({}) => {
    const ytData = mrBeastData;
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