import React from "react";
import "./Card.css";
import CardHeading from "./CardHeading";
import CardDetail from "./CardDetail";

const Card = () => {
  return (
    <div className="note">
      
    <CardHeading />
    <CardDetail />
    </div>
  );
};

export default Card;
