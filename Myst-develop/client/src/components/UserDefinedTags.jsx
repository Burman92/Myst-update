import React, {useContext} from "react";
import "/src/styles/GameDescription.css"
import ModalContext from "../context/ModalContext";

function UserDefinedTags(){
    const {showModal, handleClick} = useContext(ModalContext)

    return(
        <div>
            <a className="tag" href="https://store.steampowered.com/tags/en/FPS/">
                FPS
            </a>
            <a className="tag" href="https://store.steampowered.com/tags/en/Sci-fi/">
                Sci-fi
            </a>
            <a className="tag" href="https://store.steampowered.com/tags/en/1990%27s/">
                1990's
            </a>
            <a className="tag" href="https://store.steampowered.com/tags/en/Multiplayer/">
                Multiplayer
            </a>
            <a className="tag" href="https://store.steampowered.com/tags/en/Classic/">
                Classic
            </a>
            <a className="tag" href="https://store.steampowered.com/tags/en/Gore/">
                Gore
            </a>
            <div onClick={handleClick}className="tagBtn">
                +
            </div>
            
        </div>
    )
}
export default UserDefinedTags;