import { Outlet } from "react-router";
import "./App.css";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import ConnectionProvider from "./useContext/ConnectionProvider";
import SingleVideo from "./pages/SingleVideo/Index";
import { useEffect, useState } from "react";
import { useDataApi } from "./api/videosDataApi";
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
  const { data: videoData, isFetched: showCategory  } = useDataApi(searchValue);

  return (
    <div className="main">
      <ConnectionProvider>
        <Header setValue={setValue} />
        <div className="main-content">
          <Menu setValue={setValue}/>
          <Outlet
            context={{ videoData, showCategory }}
          />
        </div>
      </ConnectionProvider>
    </div>
  );
}

export default App;
