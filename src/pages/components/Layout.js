import React from 'react'
import useDarkMode from '../../hook/useDarkMode';
import Footer from './Footer'
import LargeNavbar from './LargeNavbar'
import MobileNavbar from './MobileNavbar'
import { Helmet } from "react-helmet"

export default function Layout({children}) {
    useDarkMode();

    return (
        <div>
             <Helmet>
                <title>فيصل حداد | Faisal haddad</title>
                <meta name="og:title" content="فيصل حداد | Faisal haddad"/>
                <meta name="description" content="مبرمج ومصمم مواقع وتطبيقات، أساعدك في وضع أفكارك وطموحاتك على العالم التقني"/>
                <meta name="og:description" content="مبرمج ومصمم مواقع وتطبيقات، أساعدك في وضع أفكارك وطموحاتك على العالم التقني"/>
                <link rel="canonical" href="https://faisalhaddad.com" />
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="../../images/favicon.ico"></link>
            </Helmet>
            <LargeNavbar/>
            <div>
                {children}
            </div>
            <Footer/>
            <MobileNavbar/>
            
        </div>
    )
}
