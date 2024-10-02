import React, {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from "../lib/ThemeContext";

interface ThemeParams {
    theme: Themes;
    toggleTheme: () => void;
}

const useTheme = (): ThemeParams => {
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        const newTheme = Themes.NORMAL === theme ? Themes.DARK : Themes.NORMAL
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }
    return {
        theme,
        toggleTheme,
    };
};

export default useTheme;