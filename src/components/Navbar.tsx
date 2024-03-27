import { Context } from '@/context/Context'
import React, { useContext } from 'react'

const Navbar = () => {
    const {darkMode, toggleDarkMode} = useContext(Context)
  return (
    <nav className='flex items-center justify-between w-full p-2 border border-t-0 border-l-0 border-r-0 border-gray-300 bg-white text-[#444] dark:bg-[#333] dark:text-white' id='nav'>
        <div className='w-full font-semibold '> Hunt </div>
        <div className='w-full flex items-center justify-end'>
        <button
          onClick={toggleDarkMode}
          className='p-2 text-["#444] dark:text-["white"] border border-blue-300 rounded-md outline-none flex items-center justify-center'
        >
          {darkMode === true ? '💡' : '🌙'}
        </button>
        </div>
      </nav>
  )
}

export default Navbar