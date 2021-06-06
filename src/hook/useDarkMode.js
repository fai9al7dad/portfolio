import React, { useEffect, useState } from 'react'

export default function useDarkMode() {

    const colorTheme = theme === 'dark' ? 'light' :'dark'
    const [theme,setTheme] = useState(null)
    useEffect(() =>{
        const root = window.document.documentElement;

        root.classList.remove(colorTheme)
        root.classList.add(theme)
        if(typeof window !== 'undefined'){
            localStorage.setItem('theme', theme)
            setTheme(localstorage.theme)
        } 
    },[colorTheme,setTheme])

    return [colorTheme,setTheme]
}
