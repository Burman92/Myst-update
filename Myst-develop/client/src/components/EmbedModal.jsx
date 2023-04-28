import React, {useContext}from "react";
import ModalContext from "../context/ModalContext";
import "/src/styles/EmbedModal.css"

function EmbedModal(){
    const { handleCloseEmbedModal } = useContext(ModalContext)
    return(
           <div className="em">
        <div className="emTopBar"></div>
        <div className="emHeaderBoarder">
            <div className="emHeader">
                    <div className="emX" onClick={handleCloseEmbedModal}></div>
                <div className="emHeaderContent">CREATE WIDGET TO EMBED</div>
            </div>
        </div>
        <div className="emContentBoarder">
            <div className="emContent">
                <div>
                    <div className="emContentSub">
                        <div className="emWidgetCreate">
                            <p className="emInstruction">You can use this widget-maker to generate a bit of HTML that can be embedded in your website to easily allow customers to purchase this game on Steam.</p>
                            <p className="emSubInstruction">Enter up to 375 characters to add a description to your widget:</p>
                            <div className="emTextBoxWraper">
                                <textarea className="emTextArea"placeholder="Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world."></textarea>
                            </div>
                            <div className="emBtnContainer">
                                <a className="emATag">
                                    <span className="emSpan" onClick={handleCloseEmbedModal}>Create widget</span>
                                </a>
                            </div>
                        </div>
                        <div className="emWidgetFinished">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    )

}

export default EmbedModal;