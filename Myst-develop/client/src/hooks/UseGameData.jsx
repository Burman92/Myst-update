import { useContext } from "react";
import GameDataContext from "../context/GameDataContext";

export const UseGameData = (index) => {
    const  {gameData} = useContext(GameDataContext);
    const gameDataArray = Object.values(gameData); // convert gameData object into an array
    return gameDataArray[index];
}
