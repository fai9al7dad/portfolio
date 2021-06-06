import React from 'react'
import Footer from './Footer'
import LargeNavbar from './LargeNavbar'
import MobileNavbar from './MobileNavbar'
export default function Layout({children}) {
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
