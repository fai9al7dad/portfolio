import React from 'react'
import xdlogo from '../../images/xdlogo.png'
import lightDesign from '../../images/lightDesign.png'

export default function Section1() {
    return (
        <div className="py-10 dark:bg-dark-darkBlue flex justify-center flex-col transition duration-500">
            <div className="container mx-auto px-5 md:py-20 ">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="text-center md:text-right flex justify-between items-center md:items-start flex-col w-full">

                        <div className="flex flex-col md:flex-row mb-5 items-center ">
                            <div className="rounded-full h-10 w-10 flex items-center justify-center border-4 border-blue-400 text-blue-400 font-bold">
                                1
                            </div>
                            <div className="text-light-secondary dark:text-gray-50 text-md mt-2 md:mr-5 md:mt-0">
                                مرحلة التصميم
                                <br/>
                                UI/UX
                            </div>
                        </div>
                        <div>
                        <div className="text-2xl lg:text-5xl text-light-primary dark:text-gray-50 font-bold">التركيز على تجربة المستخدم !</div>
                        <div className="text-xl lg:text-2xl text-light-secondary dark:text-gray-400 pt-5">
                            بعد فهمي للفكرة العامة منك، أبدا اصمم 
                            تصميمًا يركز أولا على وصول المستخدم للغاية 
                            التي يريدها صاحب الفكرة بأسهل طريقة ممكنة
                        </div>
                        </div>
                        <div className="flex flex-col mt-2 items-center sm:items-start">
                            <div className="text-xl lg:text-2x text-light-secondary dark:text-gray-400 font-bold mb-2">الأدوات</div>
                            <img src={xdlogo} className="w-10"/>
                        </div>

                    </div>
                    <div>
                        <img src={lightDesign} className="rounded-xl"/>
                        <div className="text-sm text-gray-400 text-center mt-5">
                            صورة أثناء تصميم الموقع عن طريق برنامج ADOBE XD
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
