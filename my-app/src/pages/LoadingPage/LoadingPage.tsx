import Video from "../../components/Video/Video";
import './LoadingPage.css'
import youtubeData from "../../data/youtubeData";
import { connectionContext } from "../../useContext/ConnectionProvider";

const LoadingPage = ({}) => {
    const ytData = youtubeData;
    const { hideMenu, isHidden } = connectionContext();

    if(isHidden) return(
        <div className="homepage-parent">
            <div className="homepage">
               {ytData.map((data, index) => {
                    return(
                        <Video key={index} data={data} onClick={hideMenu}></Video>
                    )
               })}
            </div>
        </div>   
    )
}

export default LoadingPage;