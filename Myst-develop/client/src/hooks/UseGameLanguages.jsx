import { useContext } from 'react';
import GameLanguagesContext from '../context/GameLanguagesContext';

export const useGameLanguages = () => {
    const { languages } = useContext(GameLanguagesContext);
    return languages;
};