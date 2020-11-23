import React from "react";
import HeaderTitle from "./HeaderTitle";
import { useSelector} from "react-redux";

const VideoPage = ({header}) => {

    const isLogged = useSelector((state) => state.loginStore.isLogged);

    return (
        <div>

            {isLogged && (
                <button className="button-upload">Upload pictures</button>
            )}

            <HeaderTitle header="VIDEO"/>
            <div>
                <video width="100%">
                    <source className="video-link" type="video/mp4" src=""></source>
                    <a href="/" className="video-div">
                        <p>FlowerMyDay</p>
                        <p>Odtworz Wideo</p>
                    </a>
                </video>
            </div>
        </div>
    )
};

export default VideoPage;