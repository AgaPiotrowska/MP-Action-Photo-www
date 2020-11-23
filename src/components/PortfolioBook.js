import React from "react";
import {Link} from "react-router-dom";

const PortfolioBook = ({PortfolioPicture, PortfolioTitle, PortfolioLink, SpanText}) => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-book">
                <Link to={"/portfolio/" + PortfolioLink}>
                    <img src={PortfolioPicture} className="photo-portfolio" alt="portfolio"></img>
                    <div className="div-circle">
                        <div className="circle-text">{SpanText}</div>
                    </div>
                </Link>
            </div>
            <h3>{PortfolioTitle}</h3>
        </div>
    )
};

export default PortfolioBook;