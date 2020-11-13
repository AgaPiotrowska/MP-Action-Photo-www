import React from "react";

const PortfolioBook = ({PortfolioPicture, PortfolioTitle, PortfolioLink, SpanText}) => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-book">
                <a href={"./portfolio/" + PortfolioLink}>
                    <img src={PortfolioPicture} className="photo-portfolio"></img>
                    <div className="div-circle">
                        <div className="circle-text">{SpanText}</div>
                    </div>
                </a>
            </div>
            <h3>{PortfolioTitle}</h3>
        </div>
    )
};

export default PortfolioBook;