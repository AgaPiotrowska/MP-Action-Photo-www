import React from "react";
import MainDiv from "./MainDiv";
import MainCarousel from "./MainCarousel";
import { useSelector} from "react-redux";

const Main = () => {

    const isLogged = useSelector((state) => state.loginStore.isLogged);

    return (
        <div className="container-first-page">
            {isLogged && (
                <button className="button-upload">Upload pictures</button>
            )}
            <MainCarousel />
            <MainDiv/>
        </div>
    )};

export default Main;