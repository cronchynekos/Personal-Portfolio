import React from "react";
import "./index.scss";
import portfolioData from "../../Data/portfolio.json";

const Portfolio = () => {
    console.log(portfolioData);
    return (
        <div className="container portfolio-page">
            <h1 className="page-title">Portfolio</h1>
            {/* <div>{renderPortfolio()}</div> */}
        </div>
    )
}

export default Portfolio;