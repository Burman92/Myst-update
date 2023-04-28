import React, {useContext} from "react";
import ModalContext from "../context/ModalContext";
import "/src/styles/ShareModal.css"

function ShareModal(){
    const {handleCloseShareModal} = useContext(ModalContext)
    return(
        <div className="smContainer">
        <div className="smTopBar"></div>
            <div className="smHeaderBoarder">
                <div className="smHeader">
                    <div className="smX" onClick={handleCloseShareModal}></div>
                    <div className="smText">Share</div>
                </div>
            </div>
            <div className="smContentBoarder">
                <div className="smContentContainer">
                    <div>
                        <div className="smContent">
                            <div className="smDialog">
                                <a className="smIconTag" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F70%2F&t=Half-Life+on+Steam">
                                    <img className="smIcon" src="https://store.cloudflare.steamstatic.com/public/images/social/facebook_large.png"></img>
                                </a>
                                <a className="smIconTag" href="https://twitter.com/intent/tweet/?url=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F70%2F&text=Half-Life+on+Steam&via=steam&hashtags=gaming_news">
                                    <img className="smIcon" src="https://store.cloudflare.steamstatic.com/public/images/social/twitter_large.png"></img>
                                </a>
                                <a className="smIconTag" href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fr%2Fgaming%2Fsubmit%3Furl%3Dhttps%253A%252F%252Fstore.steampowered.com%252Fapp%252F70%252F%26title%3DHalf-Life%2520on%2520Steam" title="">
                                    <img className="smIcon" src="https://store.cloudflare.steamstatic.com/public/images/social/reddit_large.png"></img>
                                </a>
                                
                                <div className="smLink">
                                    <label className="smLabel" hidden>Link to the game's store page</label>
                                    <textarea className="smTextBox" defaultValue="https://store.steampowered.com/app/70/HalfLife/"></textarea>
                                </div>
                                <div className="smResult"></div>
                            </div>
                        </div>
                        <div className="smFooter">
                            <div className="smBtn" onClick={handleCloseShareModal}>
                                <span className="smBtnLabel">OK</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}
export default ShareModal;