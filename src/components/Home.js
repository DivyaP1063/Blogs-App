import React from 'react'
import { Header } from './Header'
import { Blog } from './Blog'
import { Pagination } from './Pagination'

function Home() {
  return (
    <div className='w-full flex flex-row justify-center mt-[50px] mb-2'>
        <Header/>
        <Blog/>
        <Pagination/>
    </div>
  )
}

export default Home;
