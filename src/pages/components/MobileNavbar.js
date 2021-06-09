import React from 'react'
import { Link } from 'gatsby'
import useDarkMode from '../../hook/useDarkMode';
export default function MobileNavbar() {
  const [colorTheme,setTheme] = useDarkMode();

    return (
        <div className="flex justify-center items-center visible lg:invisible">
          <nav className="fixed bottom-3 flex justify-evenly items-center w-4/5 bg-white dark:bg-gray-700 py-3 shadow-lg rounded-lg">

            <Link to="/" className="flex items-center flex-col text-light-secondary dark:text-gray-50 text-sm" activeClassName="border-b-4 border-blue-500 pb-1">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              <span>الرئيسة</span>
            </Link>

            <Link to="/Projects" className="flex items-center flex-col text-light-secondary dark:text-gray-50 text-sm" activeClassName="border-b-4 border-blue-500 pb-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              <span>المشاريع</span>
            </Link>
            
            <Link to="/Contact" className="flex items-center flex-col text-light-secondary dark:text-gray-50 text-sm" activeClassName="border-b-4 border-blue-500 pb-1 ">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
              <span>تواصل معي</span>
            </Link>


            <div role="button" onClick={() => setTheme(colorTheme)}>
              {colorTheme === 'dark' ? (
              <div className="flex flex-col items-center text-sm text-light-secondary dark:text-gray-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                <span>الوضع الساطع</span>
              </div>
               ) : (
                <div className="flex flex-col items-center text-sm text-gray-50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                  <span>الوضع المعتم</span>

                </div>
                
              )
              }
              
            </div>
          </nav>
        </div>
    )
}
