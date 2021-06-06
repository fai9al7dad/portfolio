import React, { useEffect, useState } from 'react'

export default function useDarkMode() {
    const [theme,setTheme] = useState(undefined)
    const colorTheme = theme === 'dark' ? 'light' :'dark'
    useEffect(() =>{
        const root = window.document.documentElement;

        root.classList.remove(colorTheme)
        root.classList.add(theme)
        if(typeof window !== 'undefined'){
            localStorage.setItem('theme', theme)
            setTheme(localStorage.theme)

        } 
    },[colorTheme,setTheme])

    return [colorTheme,setTheme]
}
