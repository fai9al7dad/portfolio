import { Link } from 'gatsby'
import React from 'react'
import useDarkMode from '../../hook/useDarkMode';
import heroImage from '../../images/heroImage.jpeg'
import heroDark from '../../images/heroDark.svg'
import heroLight from '../../images/heroLight.svg'


export default function Hero() {
    const [colorTheme,setTheme] = useDarkMode();

    return (
        <div className="py-10  bg-light-lightBG dark:bg-gray-900 flex justify-center flex-col transition duration-500">
            <div className="container mx-auto px-5 md:py-20 ">
                <div className="grid lg:grid-cols-2 gap-10">

                    <div className="text-center md:text-right flex justify-between items-center md:items-start flex-col w-full">
                        <div>
                            <img src={heroImage} className="w-20 rounded-lg"/>
                            <p className="text-md text-light-secondary dark:text-gray-400 mb-5 lg:mb-0">فيصل حداد</p>
                        </div>
                        <div className="text-2xl lg:text-5xl text-light-primary dark:text-gray-50 font-bold">مبرمج ومصمم مواقع وتطبيقات</div>
                        <div className="text-xl lg:text-2xl text-light-secondary dark:text-gray-400 pt-5">أساعدك في وضع أفكارك وطموحاتك على العالم التقني</div>
                        <div className="md:flex w-full">
                            <Link to="/Contact" className="w-full">
                                <div  className="w-full bg-blue-500 hover:bg-blue-400 transition mt-5 sm:mt-0 py-3 px-2 rounded-lg font-bold text-xl text-center text-gray-50 mb-3 sm:ml-5 sm:mb-0 ">تواصل معي</div>
                            </Link>
                            <Link to="/Projects" className="w-full lg:mr-5">
                                <div to="/Projects" className="w-full bg-gray-700 hover:bg-gray-600 transition py-3 px-2 rounded-lg font-bold text-xl text-center text-gray-50">رؤية مشاريعي</div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        {colorTheme ==='dark' ? (<img src={heroLight}/>) : (<img src={heroDark}/>)}

                    </div>

                </div>

            </div>
            <div className="flex flex-col items-center text-center px-5 pt-10 md:pt-0">
                <div className="text-3xl lg:text-4xl text-light-primary dark:text-gray-50 font-bold">
                    تصميم - تطوير - تحسين
                </div>
                <div className="text-xl lg:text-2xl text-light-secondary dark:text-gray-400 pt-5">بعد استلام الفكرة أبدا على هذه المراحل الثلاث</div>
            </div>
        </div>
    )
}
