import { Outlet } from "react-router";
import "./App.css";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import ConnectionProvider from "./useContext/ConnectionProvider";
import SingleVideo from "./pages/SingleVideo/SingleVideo";
import { useEffect, useState } from "react";
import { useDataApi } from "./api/videoDataApi";
import { getChannelDataApi } from "./api/channelApi";

function App() {
  const [searchValue, setValue] = useState<string>("");
  const [clickValue, setClickValue] = useState<string>("");
  const { data: videoData, isFetched } = useDataApi(searchValue);
  const { data: channelData } = getChannelDataApi(clickValue);

  useEffect(() => {
    console.log(videoData, channelData, "radi");

  }, [isFetched]);

  return (
    <div className="main">
      <ConnectionProvider>
        <Header setValue={setValue} />
        <div className="main-content">
          <Menu setValue={setValue} />
          <Outlet
            context={{ videoData, isFetched, channelData, setClickValue }}
          />
          {/*           <SingleVideo />
           */}
        </div>
      </ConnectionProvider>
    </div>
  );
}

export default App;
