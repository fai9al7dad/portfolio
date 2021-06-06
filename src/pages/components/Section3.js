import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

export default function Section3() {
    return (
        <div className="py-10 dark:bg-dark-darkBlue flex justify-center flex-col transition duration-500">
            <div className="container mx-auto px-5 md:py-20 ">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="text-center md:text-right flex justify-between items-center md:items-start flex-col w-full">

                        <div className="flex flex-col md:flex-row mb-5 items-center ">
                            <div className="rounded-full h-10 w-10 flex items-center justify-center border-4 border-blue-400 text-blue-400 font-bold">
                                3
                            </div>
                            <div className="text-light-secondary dark:text-gray-50 text-md mt-2 md:mr-5 md:mt-0">
                                مرحلة المتابعة والتحسين
                                <br/>
                                Testing and monitoring
                            </div>
                        </div>
                        <div>
                        <div className="text-2xl lg:text-5xl text-light-primary dark:text-gray-50 font-bold">ضمان استمرارية البرنامج</div>
                        <div className="text-xl lg:text-2xl text-light-secondary dark:text-gray-400 pt-5">
                            هذه المرحلة تكون بعد تسليم البرنامج الجاهز اليك،
                            ويتم فيها متابعة البرنامج بشكل مستمر
                            للتأكد من جودته ولضمان ان كل شيء يعمل 
                            كما هو مطلوب، ولقبول الإضافات الجديدة 
                            والمميزات الى البرنامج
                        </div>
                        </div>
                        <div className="flex flex-col mt-2 items-center sm:items-start">
                            <div className="text-xl lg:text-2x text-light-secondary dark:text-gray-400 font-bold mb-2">الأدوات</div>
                            <div className="text-xl lg:text-2x text-gray-400 mb-2">المتابعة تكون عن طريق قنوات التواصل، الواتس اب، تيليقرام، ايميل</div>

                        </div>

                    </div>
                    <div className="flex justify-center items-center flex-1 text-9xl text-green-500 order-1">
                        <FontAwesomeIcon icon={faCheckSquare}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
