import HeaderTitle from "./HeaderTitle";
import PortfolioBook from "./PortfolioBook";
import {useSelector} from "react-redux";
import React, {useState, useEffect} from "react";

const RealizationsPage = ({header}) => {

    const isLogged = useSelector((state) => state.loginStore.isLogged);

    const [showForm, setShowForm] = useState(false);
    const [albumName, setAlbumName] = useState("");
    const [albumText, setAlbumText] = useState("");

    const saveAlbum = () => {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: albumName, text: albumText, link: albumText})
        };

        fetch('https://api.mpactionphoto.pl/albums', requestOptions)
            .then(response => response.json())
            .then(data => {
            });
    }

    return (
        <div>
            <HeaderTitle header="REALIZACJE"/>

            {isLogged && (
                <>
            <div className="button-upload-div">
                <button
                    className="button-upload"
                    onClick={() => setShowForm(true)}
                >ADD ALBUM</button>
            </div>

            <div className="button-upload-div">
                <input
                    type="text"
                    className="button-upload"
                    placeholder= "album name"
                    onChange={(e) => setAlbumName(e.target.value)}
                />
                <input
                    type="text"
                    className="button-upload"
                    placeholder= "album url"
                    onChange={(e) => setAlbumText(e.target.value)}
                />
                <button
                    type="submit"
                    className="button-upload"
                    onClick={saveAlbum}
                >Save</button>
            </div>
            </>
            )}

            <div className="realizations-all">
                <PortfolioBook PortfolioLink={"obt"} PortfolioPicture={"images/obt10.jpg"} SpanText={"obt!"}/>
                <PortfolioBook PortfolioLink={"sona"} PortfolioPicture={"images/wnetrza25.jpg"} SpanText={"Sona"}/>
                <PortfolioBook PortfolioLink={"flower"} PortfolioPicture={"images/wnetrza5.jpg"} SpanText={"Flower My Day"}/>
            </div>
        </div>
    )
};

export default RealizationsPage;