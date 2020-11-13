import React from "react";
import HeaderTitle from "./HeaderTitle";
import PortfolioBook from "./PortfolioBook";

const RealizationsPage = ({header}) => {
    return (
        <div>
            <HeaderTitle header="REALIZACJE"/>
            <div className="realizations-all">
                <PortfolioBook PortfolioLink={"obt"} PortfolioPicture={"images/wnetrza25.jpg"} SpanText={"obt!"}/>
                <PortfolioBook PortfolioLink={"sona"} PortfolioPicture={"images/wnetrza25.jpg"} SpanText={"Sona"}/>
                <PortfolioBook PortfolioLink={"flower"} PortfolioPicture={"images/wnetrza5.jpg"} SpanText={"Flower My Day"}/>
            </div>
        </div>
    )
};

export default RealizationsPage;