import React from 'react'

export default function Project({title, desc, image, link, disabled}) {
    return (
        <div className="container mx-auto px-5 mb-20 flex justify-center items-center">
            <div className="bg-white dark:bg-dark-darkBlue shadow-md w-full rounded-lg p-10 grid lg:grid-cols-2 gap-10">
                <div className="max-h-96 overflow-hidden">
                    <img src={image} className="rounded-lg"/>
                </div>
                <div className="flex flex-col justify-between">

                    <div className="text-4xl text-light-primary dark:text-gray-50 font-bold">
                        {title}
                    </div>

                    <div className="text-xl py-5 lg:py-0 text-light-secondary dark:text-gray-400">
                        {desc}
                    </div>

                    <div>
                        {disabled ? (<div className="text-light-secondary dark:text-gray-400">عذرا الرابط خاص</div>) : ( <a href={link} className="text-xl text-blue-400 underline">اذهب الى الموقع</a>)}
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
