import React from "react";
import MainDiv from "./MainDiv";
import MainCarousel from "./MainCarousel";
import { useSelector} from "react-redux";

const Main = () => {

    const isLogged = useSelector((state) => state.loginStore.isLogged);

    return (
        <div className="container-first-page">
            {isLogged && (
            <div>bakakakak</div>
            )}
            <MainCarousel />
            <MainDiv/>
        </div>
    )};

export default Main;