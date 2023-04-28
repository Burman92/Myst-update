import React from "react";
import { UseGameData } from "../../hooks/UseGameData";
import "./styles/AboutThisGame.css"

function AboutThisGame(){
    const aboutGame= UseGameData(13)
    return(
        <div className="abContainer">
            <div className="abdataPanel">
                <h2 className="abH2">About this game
                    <div className="abTopBar"></div>
                </h2>
                {aboutGame}
                
            </div>
        </div>
    )
}
export default AboutThisGame