import React, {FC, memo, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from './ThemeContext';

const currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.NORMAL

const ThemeProvider:FC = ({children}) => {
    const [theme, setTheme] = useState<Themes>(currentTheme);

    const defaultProps = useMemo(()=>({
        theme:theme,
        setTheme:setTheme
    }),[theme] )
    return (
<ThemeContext.Provider value={defaultProps}>
    {children}
</ThemeContext.Provider>
    );
};

export default ThemeProvider;