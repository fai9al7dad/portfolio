import React from 'react'
import laravel from '../../images/laravel.png'
import react from '../../images/react.png'
import postman from '../../images/postman.png'
import vue from '../../images/vue.png'
import mysql from '../../images/mysql.png'
import programming from '../../images/programming.png'

export default function Section2() {
    return (
        <div className="py-10 bg-light-lightBG dark:bg-gray-900 flex justify-center flex-col transition duration-500">
            <div className="container mx-auto px-5 md:py-20 ">
                <div className="grid lg:grid-cols-2 gap-10">

                     <div>
                        <img src={programming} className="rounded-xl"/>
                    </div>

                    <div className="text-center md:text-right flex justify-between items-center md:items-start flex-col w-full">

                        <div className="flex flex-col md:flex-row mb-5 items-center ">
                            <div className="rounded-full h-10 w-10 flex items-center justify-center border-4 border-blue-400 text-blue-400 font-bold">
                                2
                            </div>
                            <div className="text-light-secondary dark:text-gray-50 text-md mt-2 md:mr-5 md:mt-0">
                                مرحلة التطوير - البرمجة
                                <br/>
                                Development
                            </div>
                        </div>
                        <div>
                        <div className="text-2xl lg:text-5xl text-light-primary dark:text-gray-50 font-bold">برمجة التصميم</div>
                            <div className="text-xl lg:text-2xl text-light-secondary dark:text-gray-400 pt-5">
                                تبدأ اهم وأطول مرحلة
                                في هذه المرحلة ابحث واختار لغة البرمجة والاطار
                                المناسب لاداء طلبك..
                                سواء كان تطبيق جوال او موقع أو كلاهما !
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="text-xl lg:text-2x text-light-secondary dark:text-gray-400 font-bold mb-2 ">الأدوات</div>
                            <div className="grid grid-rows-1 grid-flow-col gap-4 h-10 ">
                                <img src={react} className="max-w-xss ml-5"/>
                                <img src={vue} className="max-w-xss ml-5"/>
                                <img src={postman} className="max-w-xss ml-5"/>
                                <img src={laravel} className="max-w-xss ml-5"/>
                                <img src={mysql} className="max-w-xss ml-5"/>

                            </div>
                        </div>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}
