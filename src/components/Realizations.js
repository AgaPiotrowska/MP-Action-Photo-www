import React from "react";
import HeaderTitle from "./HeaderTitle";
import PortfolioBook from "./PortfolioBook";
import {useSelector} from "react-redux";

const RealizationsPage = ({header}) => {

    const isLogged = useSelector((state) => state.loginStore.isLogged);

    return (
        <div>

            {isLogged && (
                <button className="button-upload">Upload pictures</button>
            )}

            <HeaderTitle header="REALIZACJE"/>
            <div className="realizations-all">
                <PortfolioBook PortfolioLink={"obt"} PortfolioPicture={"images/obt10.jpg"} SpanText={"obt!"}/>
                <PortfolioBook PortfolioLink={"sona"} PortfolioPicture={"images/wnetrza25.jpg"} SpanText={"Sona"}/>
                <PortfolioBook PortfolioLink={"flower"} PortfolioPicture={"images/wnetrza5.jpg"} SpanText={"Flower My Day"}/>
            </div>
        </div>
    )
};

export default RealizationsPage;