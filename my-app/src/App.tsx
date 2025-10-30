import { Outlet } from "react-router";
import "./App.css";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import ConnectionProvider from "./useContext/ConnectionProvider";
import { useState } from "react";
import { useDataApi } from "./api/videosDataApi";

function App() {
  const [searchValue, setValue] = useState<string>("");
  const { data: videoData, isFetched: showCategory } = useDataApi(searchValue);

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
