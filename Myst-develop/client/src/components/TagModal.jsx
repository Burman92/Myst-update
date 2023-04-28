import React,{useContext} from "react";
import "/src/styles/GameDescriptionModal.css"
import ModalContext from "../context/ModalContext";

function TagModal(){
    const {handleCloseModal} = useContext(ModalContext)
    return(
        <div className="modal">
            <div className="modalTopBar"></div>
            <div className="modalHeaderBoarder">
                <div className="modalHeader">
                    <div onClick={handleCloseModal} className="modalCloseHead"></div>
                    <div className="modalTopText">
                        VIEW AND EDIT TAGS FOR THIS PRODUCT
                    </div>                      
                </div>
              
            </div>


            
            <div className="modalContent">
                <div className="modalDisplay">
                    <div >
                        <div className="modalTagContent">
                        <div className="modalSubTagContent">
                      
                            <div className="modalTagSeperator"></div>
                            <div className="modalTagLeft">
                                <h2 className="modalLeftH2">Popular user-defined tags for this product:<span className="modalToolTip">(?)</span></h2>
                                <div className="modalTagList">
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/FPS/">FPS</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Sci-fi/">Sci-fi</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/1990's/">1990's</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Multiplayer/">Multiplayer</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Classic/">Classic</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Singleplayer/">Singleplayer</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Action/">Action</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Shooter/">Shooter</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/First-Person/">First-Person</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Aliens/">Aliens</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Silent%20Protagonist/">Silent Protagonist</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Story%20Rich/">Story Rich</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Atmospheric/">Atmospheric</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Moddable/">Modable</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Adventure/">Adventure</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Retro/">Retro</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Gore/">Gore</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Action-Adventure/">Action-Adventure</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/Difficult/">Difficult</a>
                                    </div>
                                    <div className="modalTag" >
                                        <a className="modalTagHref" href="https://store.steampowered.com/tags/en/PvP/">PvP</a>
                                    </div>
                                </div>
                            </div>
                            <div className="modalTagRight">
                                <h2 className="modalRightH2">Sign In</h2>
                                <p className="modalRightP">Sign in to add your own tags to this product.</p>
                                <p className="modalRightPP">
                                    <a className="modalSingIn" href="https://store.steampowered.com/login/?redir=app/70">
                                        <span className="modalSignInSpan">Sign In</span>
                                    </a>
                                </p>
                            </div>
                            <div className="modalTagBottomSeperator"></div>
                        
                        </div>
                        </div>
                    </div>
                    <div className="modalFooter">
                        <div onClick={handleCloseModal} className="modalCloseFoot">
                            <span className="modalFooterSpan">Close</span>
                        </div>
                    </div>
                </div>    
            </div>
        </div> 
    )

}
export default TagModal;