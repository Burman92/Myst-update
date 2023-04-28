import React from "react";
import "/src/styles/MetaCritic.css"

function MetaCritic(){
    return(
        <div className="mcContainer">
            <div className="scoreArea">
                <div className="score">96</div>
                <div className="critic"></div>
            </div>
            <div className="words">
                <div className="metaCritic">metacritic</div>
                <div className="metaLink">
                   <a className="mcA" href="https://www.metacritic.com/game/pc/half-life?ftag=MCD-06-10aaa1f">Read Critic Reviews</a>
                    <img className="linkImg" src="https://store.cloudflare.steamstatic.com/public/images/ico/iconExternalLink.gif" alt="link icon"></img>
                </div>
                <div className="scaryDiv"></div> 
            </div>
        </div>
    )
}
export default MetaCritic;