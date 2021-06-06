import React, { useEffect, useState } from 'react'

  export default function DarkModeSwitch () {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
          const val = localStorage.getItem('theme');
          return val ? JSON.parse(val) : 'dark';
        }
        return 'dark';
      });
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', JSON.stringify(theme));
        }
      }, [theme]);
    
      const toggleMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };
}
