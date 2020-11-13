import React, {useState, useEffect} from "react";
import HeaderTitle from "./HeaderTitle";
import PortfolioBook from "./PortfolioBook";

const Portfolio = ({header}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://o7byko6zw0.execute-api.eu-central-1.amazonaws.com/prod/albums")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result)
                },
            )
    }, []);

    return (
        <div>
            <HeaderTitle header="PORTFOLIO"/>
            <div className="portfolio-all">
                {/*{return (3===4 ? null : <div></div>)}*/}
                {items.map(item => (
                    <PortfolioBook PortfolioLink={item.link} PortfolioTitle={item.name} PortfolioPicture={item.picture} SpanText={item.text}/>
                        ))}
            {/*<PortfolioBook PortfolioLink={"sport"} PortfolioPicture={"images/main6.jpg"} PortfolioTitle={"sport / outdoor / eventy"} SpanText={"sport"}/>*/}
            {/*<PortfolioBook PortfolioLink={"wnetrza"} PortfolioPicture={"images/architektura.jpg"} PortfolioTitle={"architektura / wnętrza / produkty"} SpanText={"wnętrza"}/>*/}
            {/*<PortfolioBook PortfolioLink={"portret"} PortfolioPicture={"images/portret.jpg"} PortfolioTitle={"portret / reportaż / zwierzęta"} SpanText={"portrety"}/>*/}
            </div>
        </div>
    )
};

export default Portfolio;