import React, {useContext} from "react";
import SRContext from "../../context/SRContext";
import './styles/SystemRequirements.css'

function SystemRequirements(){
    const {showWindows, showMac, showLinux, handleWindowsClick, handleMacClick, handleLinuxClick} = useContext(SRContext);

    return(
        <div className="srContainer">
            <h2 className="srH2">SYSTEM REQUIREMENTS</h2>
            <div className="abTopBar"></div>
            <div className="srTabs">
                <div className={showWindows ? "srtabopen" : "srtab"} onClick={handleWindowsClick}>Windows</div>
                <div className={showMac ? "srtabopen" : "srtab"} onClick={handleMacClick}>macOS</div>
                <div className={showLinux ? "srtabopen" : "srtab"} onClick={handleLinuxClick}>SteamOS + Linux</div>
            </div>
            <br></br>
            {showWindows && <div className="srInfo">
                <div className="srContents"> 
                    <ul className="srUL">
                        <p className="srP">
                            <strong>Minimum:</strong>
                            500 mhz processor, 96mb ram, 16mb video card, Windows XP, Mouse, Keyboard, Internet Connection
                            <br></br>
                        </p>
                        <p className="srP">
                            <strong>Recomended:</strong>
                            800 mhz processor, 128mb ram, 32mb+ video card, Windows XP, Mouse, Keyboard, Internet Connection
                            <br></br>
                        </p>
                    </ul>
                </div>
            </div>}
            {showMac && <div className="srInfo">
                <div className="srContents">
                    <ul className="srUL">
                        <p className="srP">
                            <strong>Minimum:</strong>
                            OS X Snow Leopard 10.6.3, 1GB RAM, 4GB Hard Drive Space,NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection
                            <br></br>
                        </p>
                    </ul>
                </div>
            </div>}
            {showLinux && <div className="srInfo">
                <div className="srContents">
                    <ul className="srUL">
                        <p className="srP">
                            <strong>Minimum:</strong>
                            Linux Ubuntu 12.04, Dual-core from Intel or AMD at 2.8 GHz, 1GB Memory, nVidia GeForce 8600/9600GT, ATI/AMD Radeaon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1, 4GB Hard Drive Space, OpenAL Compatible Sound Card
                            <br></br>
                        </p>
                    </ul>
                </div>
            </div>}
        </div>
    )
}
export default SystemRequirements;