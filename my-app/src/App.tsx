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

function App() {
  const [searchValue, setValue] = useState<string>("");
  const [clickValue, setClickValue] = useState<string>("");
  const [clickedVideoValue, setClickedVideoValue] = useState<string>("");
  const { data: videoData, isFetched: showCategory } = useDataApi(searchValue);
  const { data: channelData, isFetched: showChannel } = getChannelDataApi(clickValue);
  const { data: channelVideos, isFetched: showChannelVideos } = getChannelVideosApi(clickValue);
  const { data: clickedVideoData, isFetched: showClickedVideo } = getVideoDetailsApi(clickedVideoValue);

  useEffect(() => {
    console.log(clickedVideoData)
  },[showClickedVideo])

  return (
    <div className="main">
      <ConnectionProvider>
        <Header setValue={setValue} />
        <div className="main-content">
          <Menu setValue={setValue}/>
          <Outlet
            context={{ videoData, showCategory, channelData, setClickValue, channelVideos, showChannel, showChannelVideos, setClickedVideoValue }}
          />
          {/* <SingleVideo clickedVideo={clickedVideoData} showClickedVideo={showClickedVideo}/> */}
        </div>
      </ConnectionProvider>
    </div>
  );
}

export default App;
