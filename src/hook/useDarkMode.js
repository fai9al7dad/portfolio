import React, { useEffect, useState } from 'react'

export default function useDarkMode() {
    useEffect(() =>{
        const [theme,setTheme] = useState(localStorage.theme)
        const colorTheme = theme === 'dark' ? 'light' :'dark'
        const root = window.document.documentElement;

        root.classList.remove(colorTheme)
        root.classList.add(theme)
        if(typeof window !== 'undefined'){
            localStorage.setItem('theme', theme)
        } 
    },[colorTheme,setTheme])

    return [colorTheme,setTheme]
}
