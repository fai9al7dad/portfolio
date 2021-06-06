import React, { useEffect, useState } from 'react'

const isBrowser = typeof window !== "undefined"
export default function useDarkMode() {
    if(isBrowser) {
        const [theme,setTheme] = useState(localStorage.theme)
        const colorTheme = theme === 'dark' ? 'light' :'dark'
        useEffect(() =>{
            const root = window.document.documentElement;
    
            root.classList.remove(colorTheme)
            root.classList.add(theme)
            localStorage.setItem('theme', theme)
        },[colorTheme,setTheme])
    
        return [colorTheme,setTheme]

    }
}
