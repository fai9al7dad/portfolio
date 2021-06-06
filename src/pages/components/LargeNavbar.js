import { Link } from 'gatsby'
import React from 'react'
import DarkModeSwitch from '../../hook/DarkModeSwitch';
// activeClassName="bg-gray-200 text-light-primary dark:bg-gray-800 dark:text-gray-50"
export default function LargeNavbar() {
  return (
      <nav className="flex items-center w-full bg-white dark:bg-dark-darkBlue h-16 fixed shadow-lg invisible lg:visible">
      <div className="container mx-auto px-5 flex justify-between  ">
        <Link to="/" className="text-gray-400 font-bold text-lg">فيصل حداد</Link>
          <div className="flex">
            <Link to="/" className="text-gray-400 text-lg ml-20  hover:bg-gray-200 dark:hover:bg-gray-800 px-5 hover:text-light-primary dark:hover:text-white rounded-lg">الرئيسة</Link>
            <Link to="/Projects" className="text-gray-400 text-lg ml-20 hover:bg-gray-200 dark:hover:bg-gray-800 px-5 hover:text-light-primary dark:hover:text-white rounded-lg">أعمالي</Link>
            <Link to="/Contact" className="text-gray-50 text-lg px-3 bg-blue-500 rounded">تواصل معي</Link>

            <div className=" mr-20 text-white" onClick={toggleMode}>
              {theme === 'dark' ? (
                <svg className="w-6 h-6 text-white rounded-full bg-dark-darkBlue cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              
               ) : (
                <svg className="w-6 h-6 text-light-primary rounded-full bg-light-lightBG cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              )
              }
            </div>
          </div>
      </div>
    </nav>
  )
}
