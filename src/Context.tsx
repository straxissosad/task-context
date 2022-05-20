import React, { ReactElement, useEffect, useState, useContext }from 'react';


type Theme = 'light' | 'dark';
const contextTheme = React.createContext<Theme>('light');

export function ThemeProvider(props: {
    theme: Theme;
    children: ReactElement;
}) {
    return (
        <contextTheme.Provider value={props.theme}>{props.children}</contextTheme.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(contextTheme);
}
