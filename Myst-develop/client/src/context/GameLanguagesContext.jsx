import React, { createContext, useState, useEffect} from 'react';

const GameLanguagesContext = createContext();

export const GameLanguagesContextProvider = ({ children }) =>{
    const [languages, setLanguages] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/games/1/languages')
            .then(response => response.json())
            .then(data => setLanguages(data))
            .catch(error => console.log(error));
    },[]);

    return(
        <GameLanguagesContext.Provider value={{languages}}>
            {children}
        </GameLanguagesContext.Provider>
    )
}
export default GameLanguagesContext
