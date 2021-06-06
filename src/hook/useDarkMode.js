import React, { useEffect, useState } from 'react'

export default function useDarkMode() {
    const [theme,setTheme] = useState(() =>{
      if(typeof window !== "undefined"){
        return localstorage.theme
      }
      return 'dark'
    })
    const colorTheme = theme === 'dark' ? 'light' :'dark'
    useEffect(() =>{
        const root = window.document.documentElement;

        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)

    },[colorTheme,setTheme])

    return [colorTheme,setTheme]
}
