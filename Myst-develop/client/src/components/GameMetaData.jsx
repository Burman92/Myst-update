import React from "react";
import GameRelevency from "./GameRelevency";
import GameCapabilities from "./GameCapabilities";
import ShareLink from "./ShareLink";
import SupportedLanguages from "./SupportedLanguages";
import SteamDeck from "./SteamDeck";
import MetaCritic from "./MetaCritic";
import "/src/styles/GameMetaData.css"
import GameInfoAtGlance from "./GameInfoAtGlace";

function GameMetaData(){
    return (
        <div className="column">
            <GameRelevency />
            <GameCapabilities /> 
            <SupportedLanguages />
            <SteamDeck />
            <GameInfoAtGlance />
            <ShareLink />
            <MetaCritic />  
        </div>
        
    )
}

export default GameMetaData;