import { Context } from '@/context/Context'
import React, { useContext } from 'react'
import {Category} from '@/utils/types'
import Loader from './Loader'

const News = () => {
  const {active, activeTab} = useContext(Context)
  
  const categories: Category[] = [
    {
      id: 1,
      name: 'Latest',
    },
    {
      id: 2,
      name: 'Entertainment',
    },
    {
      id: 3,
      name: 'World',
    },
    {
      id: 4,
      name: 'Business',
    },
    {
      id: 5,
      name: 'Health',
    },
    {
      id: 6,
      name: 'Sport',
    },
    {
      id: 7,
      name: 'Science',
    },
    {
      id: 8,
      name: 'Technology',
    },
  ]
  return (
    <div className='w-full min-h-[100dvh] bg-white text-[#444] dark:bg-[#333] dark:text-white p-4'>
      <h1 className='w-full flex items-center justify-center text-xl '>News</h1>
    <div className='p-2 w-full overflow-x-scroll flex items-center md:justify-center justify-start custom-scrollbar'>
      {categories.map((category, index) => (
        <button key={category.id + index} className={`p-2 m-2 border-none bg-slate-200 dark:bg-blue-100  rounded-md font-light cursor-pointer ${
          active === category.name ? 'text-blue-800 dark:text-white  font-extrabold dark:bg-blue-800' : 'dark:text-blue-800'
        }`}  onClick={() => activeTab(category.name)}>{category.name}</button>
      ))}
    </div>
        <>
        {
          Array.from({ length: 4 }, (_, index) => (
            <Loader key={index} />
          ))
        }
        </>
    </div>
  )
}

export default News