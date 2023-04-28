import React from "react";
import "/src/styles/GameCapabilities.css"

function GameCapabilities(){
    return(
        <div className="gCContainer">
            <div className="GCData">
                <a className="gCAtag" href="https://store.steampowered.com/search/?category2=2">
                    <div className="gCIcon">
                        <img className="img" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_singlePlayer.png" alt="single person"></img>
                    </div>
                    <div className="gCLabel">Single-Player</div>
                </a>
                <a className="gCAtag" href="https://store.steampowered.com/search/?category2=36">
                    <div className="gCIcon">
                        <img className="img" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png" alt="multiple people"></img>
                    </div>
                    <div className="gCLabel">Online PvP</div>
                </a>
                <a className="gCAtag" href="https://store.steampowered.com/search/?category2=23">
                    <div className="gCIcon">
                        <img className="img" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_cloud.png" alt="cloud"></img>
                    </div>
                    <div className="gCLabel">Steam Cloud</div>
                </a>
                <a className="gCAtag" href="https://store.steampowered.com/search/?category2=8">
                    <div className="gCIcon">
                        <img className="img" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_vac.png" alt="shield"></img>
                    </div>
                    <div className="gCLabel">Valve Anti-Cheat enabled</div>
                </a>
                <a className="gCAtag" href="https://store.steampowered.com/search/?category2=41">
                    <div className="gCIcon">
                        <img className="img" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_remote_play.png" alt="remote phone"></img>
                    </div>
                    <div className="gCLabel">Remote Play on Phone</div>
                </a>
                <a className="gCAtag" href="https://store.steampowered.com/search/?category2=42">
                    <div className="gCIcon">
                        <img className="img" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_remote_play.png" alt="remote tablet"></img>
                    </div>
                    <div className="gCLabel">Remote Play on Tablet</div>
                </a>
                <a className="gCAtag" href="https://store.steampowered.com/search/?category2=44">
                    <div className="gCIcon">
                        <img className="img" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_remote_play_together.png" alt="remote game"></img>
                    </div>
                    <div className="gCLabel">Remote Play Together</div>
                </a>
            </div>
        </div>
    )
}
export default GameCapabilities;