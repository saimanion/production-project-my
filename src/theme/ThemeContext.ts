import {createContext, useContext} from "react";
export const enum Themes {
    DARK = "dark",
    NORMAL = "normal",
}
interface ThemeProps {
    theme?:Themes;
    setTheme?: (theme:Themes) => void;
}
export const ThemeContext = createContext<ThemeProps>({})

export const LOCAL_STORAGE_THEME_KEY = "theme"