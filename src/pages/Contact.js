import React from 'react'
import Layout from "./components/Layout"

export default function Contact() {
    return (
        <Layout>
            <div className=" flex flex-col justify-center items-center py-20 bg-light-lightBG dark:bg-gray-900 h-screen transition duration-500">
                <div className="container mx-auto px-5">
                    <div className="text-center text-light-primary dark:text-gray-50 font-bold text-5xl">
                        تواصل معي
                    </div>
                    <div className="bg-white shadow-sm dark:bg-dark-darkBlue p-10 flex flex-col justify-center items center rounded-lg mt-10">
                        <div className="text-2xl text-center lg:text-5xl text-light-primary dark:text-gray-50 mb-20">
                            حياكم الله.. نتشرف بالعمل معكم
                        </div>
                        <div className="flex flex-col lg:flex-row justify-evenly">
                            <div className="text-light-primary dark:text-gray-50 text-lg">
                                تواصل معي واتس <a href="https://wa.me/966599924457" className="text-blue-400 underline font-bold">بالضغط هنا</a>
                            </div>
                            <div className="text-light-primary dark:text-gray-50 mt-5 lg:mt-0 text-lg">
                                أو تواصل معي عالإيميل <a href="mailto:fai9al7dad@gmail.com" className="text-blue-400 underline font-bold">بالضغط هنا</a>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </Layout>
    )
}
