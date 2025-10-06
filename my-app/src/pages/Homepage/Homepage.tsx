import Video from "../../components/Video/Video";
import './Homepage.css'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Homepage = ({}) => {

    return(
        <div className="homepage-parent">
            <div className="homepage">
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
            </div>
        </div>   
    )
}

export default Homepage;