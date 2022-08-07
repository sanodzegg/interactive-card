import React from "react";
import "./design.css";

import bgimage from "../../assets/images/bg-main-desktop.png";
import cardBack from "../../assets/images/bg-card-back.png";
import cardFront from "../../assets/images/bg-card-front.png";

function Design({ globalCardNum, globalName, globalMonth, globalYear, globalCVC }) {
  return (
    <>
        <div className="designImg">
            <img src={bgimage} />
        </div>
        <div className="staticCards">
            <div className="cardFrontWrapper">
                <img className="cardFront" src={cardFront} alt="card front" />
                <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
                <span className="cardNum">{ globalCardNum !== "" ? globalCardNum : "0000 0000 0000 0000" }</span>
                <div className="cardFrontInfo">
                    <span className="cardName">{ globalName !== "" ? globalName : "Firstname Lastname" }</span>
                    <span className="cardExp">{ globalMonth !== "" ? globalMonth : "00" }/{ globalYear !== "" ? globalYear : "00" }</span>
                </div>
            </div>
            <div className="cardBackWrapper">
                <img className="cardBack" src={cardBack} alt="card back" />
                <span>{ globalCVC !== "" ? globalCVC : "000" }</span>
            </div>
        </div>
    </>
  );
}

export default Design;
