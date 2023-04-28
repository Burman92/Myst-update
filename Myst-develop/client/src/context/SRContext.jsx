import { useState, createContext } from "react";

const SRContext = createContext();

export const SRProvider = ({children}) =>{
    const [showWindows, setShowWindows] = useState(true);
    const [showMac, setShowMac] = useState(false);
    const [showLinux, setShowLinux] = useState(false);

    const handleWindowsClick = () =>{
        setShowWindows(true)
        setShowMac(false);
        setShowLinux(false);
    }
    const handleMacClick = () =>{
        setShowMac(true);
        setShowWindows(false);
        setShowLinux(false);
    }
    const handleLinuxClick = () =>{
        setShowLinux(true);
        setShowWindows(false);
        setShowMac(false);
    }

    return( <SRContext.Provider value={{
        showWindows,
        showMac,
        showLinux,
        handleWindowsClick,
        handleMacClick,
        handleLinuxClick
    }}>
        {children}
    </SRContext.Provider>

    )
}
export default SRContext