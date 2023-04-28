import React from "react";
import "/src/styles/GameRelevency.css"

function GameRelevency(){
    return(
    <>
        <div className="title">
            Is this game relevent to you?
        </div>
        <div className='container'>
            <p className="gRP">
                Sign in to see reasons why you may or may not like this based on your games, friends, and curators you follow.
            </p>
            <br></br>
                <a className="atag" href="https://store.steampowered.com/login/?redir=app/70">
                <span className="gRSpan">Sign In</span>
                </a>
            or
                <a className="atag" href="steam://store/70">
                <span className="gRSpan">Open in Steam</span>
            </a>    
        </div>
    </>

    )
}
export default GameRelevency;