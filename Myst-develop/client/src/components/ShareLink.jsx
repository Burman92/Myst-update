import React, {useContext} from "react";
import "/src/styles/ShareLink.css"
import ModalContext from "../context/ModalContext";

function ShareLink(){
    const {handleShareClick, handleEmbedClick, handleReportClick} = useContext(ModalContext)
    return(
    
        <div className="linkRow">
            <a className="linkbtn" onClick={handleShareClick}>
                <span className="linkText" >Share</span> 
            </a>
            <a className="linkbtn" onClick={handleEmbedClick}>
                <span className="linkText">Embed</span>
            </a>
            <a className="linkbtn" onClick={handleReportClick}>
                <span className="replinkText">
                    <i className="linkIcon"></i>
                </span>
            </a>
        </div>
    )
}
export default ShareLink;