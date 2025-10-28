import { Outlet } from "react-router";
import "./App.css";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import ConnectionProvider from "./useContext/ConnectionProvider";
import SingleVideo from "./pages/SingleVideo/Index";
import { useEffect, useState } from "react";
import { useDataApi } from "./api/videoDataApi";
import { getChannelDataApi } from "./api/channelApi";
import { getChannelVideosApi } from "./api/channelVideosApi";
import { getVideoDetailsApi } from "./api/videoDetails";
import { getVideoCommentsApi } from "./api/videoComments";

function App() {
  //Staviti da se searchValue okida samo kad se input promijeni na debounce
  //Spustiti ostale states 
  //Napraviti router tako da se u url prikazuje putanja do kanala ili videa 
  //Preko params potegnuti onda iz url podatke 
  //Promijeniti sve isFetched u isLoading
  
  const [searchValue, setValue] = useState<string>("");
  const [clickValue, setClickValue] = useState<string>("");
  const [videoClickValue, setVideoClickValue] = useState<string>("");
  const { data: videoData, isFetched: showCategory } = useDataApi(searchValue);
  const { data: channelData, isFetched: showChannel } = getChannelDataApi(clickValue);
  const { data: channelVideos, isFetched: showChannelVideos } = getChannelVideosApi(clickValue);
  const { data: clickedVideoData, isFetched: showClickedVideo } = getVideoDetailsApi(videoClickValue);
  const { data: videoComments, isFetched: showVideoComments } = getVideoCommentsApi(videoClickValue);

  useEffect(() => {
  /*   fetchDataApi('mC3tjysJ01E')  */
    //mC3tjysJ01E
    //https://youtube138.p.rapidapi.com/video/related-contents/?id=mC3tjysJ01E
   },[])

  return (
    <div className="main">
      <ConnectionProvider>
        <Header setValue={setValue} />
        <div className="main-content">
          <Menu setValue={setValue}/>
          <Outlet
            context={{ videoData, showCategory, channelData, setClickValue, channelVideos, showChannel, showChannelVideos, setVideoClickValue }}
          />
          <SingleVideo clickedVideoData={clickedVideoData} showClickedVideo={showClickedVideo} videoComments={videoComments} showVideoComments={showVideoComments} /> 
        </div>
      </ConnectionProvider>
    </div>
  );
}

export default App;
