import React, { useEffect, useState } from 'react'

export default function useDarkMode() {

    const [theme,setTheme] =  typeof window !== 'undefined' ? useState(localStorage.theme) : null
    const colorTheme = theme === 'dark' ? 'light' :'dark'
    useEffect(() =>{
        const root = window.document.documentElement;

        root.classList.remove(colorTheme)
        root.classList.add(theme)
        if(typeof window !== 'undefined'){
            localStorage.setItem('theme', theme)
        } 
    },[colorTheme,setTheme])

    return [colorTheme,setTheme]
}
