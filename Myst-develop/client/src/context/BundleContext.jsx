import { useState, createContext } from 'react';

const BundleContext = createContext();

export const BundleProvider = ({ children }) => {
    const [showBundleTooltip, setShowBundleTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        setTooltipPosition({ x, y });
        setShowBundleTooltip(true);
    };

    const handleMouseExit = () => {
        setShowBundleTooltip(false);
    };

    return (
        <BundleContext.Provider
            value={{
                showBundleTooltip,
                tooltipPosition,
                handleMouseEnter,
                handleMouseExit,
            }}
        >
            {children}
        </BundleContext.Provider>
    );
};

export default BundleContext;