import React, {useContext} from "react";
import ModalContext from "../context/ModalContext";
import "../styles/YourStoreModal.css";



function YourStoreModal() {
    const {handleYourStoreMouseExit} = useContext(ModalContext);
    
    return(
        <div className="popUpContainerStore" onMouseLeave={handleYourStoreMouseExit}>
            <a className="item" href="https://store.steampowered.com/">Home</a>
            <a className="item" href="https://store.steampowered.com/communityrecommendations/">Community Recomendations</a>
            <a className="item" href="https://store.steampowered.com/recommended/">Recently Viewed</a>
            <a className="item" href="https://store.steampowered.com/curators/">Steam Curators</a>
        </div>
    )  
}

export default YourStoreModal