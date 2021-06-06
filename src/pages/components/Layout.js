import React from 'react'
import useDarkMode from '../../hook/useDarkMode';
import Footer from './Footer'
import LargeNavbar from './LargeNavbar'
import MobileNavbar from './MobileNavbar'
export default function Layout({children}) {
    useDarkMode();

    return (
        <div>
            <LargeNavbar/>
            <div>
                {children}
            </div>
            <Footer/>
            <MobileNavbar/>
            
        </div>
    )
}
