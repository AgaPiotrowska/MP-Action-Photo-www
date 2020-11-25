import React from "react";
import HeaderTitle from "./HeaderTitle";


const VideoPage = ({header}) => {

    return (
        <div>

            <HeaderTitle header="VIDEO"/>
            <div className="video-container">
                <p className="video-title">FlowerMyDay</p>
                <video controls autoPlay muted>
                    <source src='/Flowermyday.mp4' type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
};

export default VideoPage;