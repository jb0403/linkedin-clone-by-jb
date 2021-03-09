import React from "react";
import "../styles/widgets.css";

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("This is News", "Top news - 9099 readers")}
      {newsArticle("Stock Market Update", "Top news - 5000 readers")}
      {newsArticle("Tesla Hits New Height", "Car & Auto - 45000 readers")}
      {newsArticle("Bitcoin Breaks $50k", "Crypto - 9000 readers")}
      {newsArticle("Is Redux too good", "code - 3000 readers")}
      {newsArticle("Stock Market Update", "Top news - 5000 readers")}
    </div>
  );
};

export default Widgets;
