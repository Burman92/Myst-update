import React from "react";
import { UseGameData } from "/src/hooks/UseGameData";
import "/src/styles/GameInfoAtGlace.css"

function GameInfoAtGlance (){
    const name = UseGameData(1);
    const franchise = UseGameData(1);
    
    const date = UseGameData(4);

    return(
        <div className="gagWrapper">
            <div className="gagContainer">
                <div className="gagBlockContent">
                    <div className="gagfetchData">
                        <b className="weirdb">Title: </b>
                        {name}
                        <br></br>
                        <b className="weirdb">Genre: </b>
                        <span className="gagspan">
                            <a className="gagA" href="https://store.steampowered.com/tags/en/Action/"> Action</a>
                        </span>
                        <br></br>
                        <div className="gagRow">
                            <b className="weirdB">Developer:</b>
                            <a className="gagA" href="https://store.steampowered.com/developer/valve"> Valve</a>
                        </div>
                        <div className="gagRow">
                            <b className="weirdB">Publisher:</b>
                            <a className="gagA" href="https://store.steampowered.com/developer/valve"> Valve</a>
                        </div>
                        <div className="gagRow">
                            <b className="weirdB">Franchise:</b>
                            <a className="gagA" href="https://store.steampowered.com/franchise/Half-Life"> {franchise} </a>
                        </div>
                        <b className="weirdB">Release Date: </b> 
                             {date}
                        <br></br>
                     </div>
                    <div className="gagBtns">
                        <a className="gagBtn" href="https://www.half-life.com/en/alyx/">
                            Visit the website 
                            <img className="gagImg" src="https://store.cloudflare.steamstatic.com/public/images/v5/ico_external_link.gif" alt="gag Image"></img>
                        </a>
                        <a className="gagBtn" href="https://store.steampowered.com/news/app/70?updates=true">View update history</a>
                        <a className="gagBtn" href="https://store.steampowered.com/news/app/70">Read related news</a>
                        <a className="gagBtn" href="https://steamcommunity.com/app/70/discussions/">View discussions</a>
                        <a className="gagBtn" href="https://steamcommunity.com/search/groups/?text=Half-Life">Find community Groups</a>
                    </div>
                </div>  
            </div>
        </div>
    )
}
export default GameInfoAtGlance;