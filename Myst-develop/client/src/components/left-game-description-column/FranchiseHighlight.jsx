import React, { useContext } from "react";
import "./styles/FranchiseHighlight.css";

function FranchiseHighlight() {
    const zoomImageStyle = {
        position: "relative",
        width: "600px",
        height: "50px",
        borderRadius: "8px",
        overflow: "hidden"
    };

    const backgroundImageStyle = {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        backgroundImage:
            "url('https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/33078398/4762deceb71043238f877995e02f33206af3ae4e.jpg')",
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "600px",
        height: "50px",
        backgroundColor: "rgba(0, 0, 0, 0.29)",
        borderRadius: "8px",
    };

    const franchiseStyle = {
        position: "absolute",
        top: "50%",
        left: "15px",
        transform: "translateY(-50%)",
        color: "white",
        textDecoration: "none",
        fontFamily: "Arial",
        fontSize: "16px"
    };

    return (
        <div>
            <a
                className="franchise_notice"
                href="https://store.steampowered.com/franchise/Half-Life?snr=1_5_9__2001"
            >
                <div className="zoom-image" style={zoomImageStyle}>
                    <div className="background_image" style={backgroundImageStyle}></div>
                    <div style={overlayStyle}></div>
                    <div className="franchise_name" style={franchiseStyle}>
                        Check out the entire Half-Life franchise on Steam
                    </div>
                </div>
                <div className="franchise_highlight"></div>
            </a>
        </div>
    );
}

export default FranchiseHighlight;
