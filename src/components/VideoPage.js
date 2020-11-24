import React from "react";
import HeaderTitle from "./HeaderTitle";
import { useSelector} from "react-redux";

const VideoPage = ({header}) => {

    const isLogged = useSelector((state) => state.loginStore.isLogged);

    return (
        <div>

            {/*{isLogged && (*/}
                <div className="button-upload-div">
                    <button className="button-upload">Upload video</button>
                </div>


            <HeaderTitle header="VIDEO"/>
            <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CPMr9Q1C3jE" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                <div>
                        <p>FlowerMyDay</p>
                        <p>Odtworz Wideo</p>
                </div>
            </div>
        </div>
    )
};

export default VideoPage;