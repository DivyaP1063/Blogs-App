import React from 'react'
import { Header } from './Header'
import { Blog } from './Blog'
import { Pagination } from './Pagination'
import { useLocation, useNavigate } from 'react-router-dom'

function Categorypage(){
    const navigation =useNavigate();
    const location = useLocation();
    const category= location.pathname.split("/").at(-1);
  return (
    <div>
    <Header/>
    <div className='w-full flex flex-row justify-center mt-[50px] mb-2' >
        <div className='w-[40%] flex flex-row items-center  gap-2'>
        <button className='border-2 py-1 px-2 rounded' onClick={()=>navigation(-1)}>Back</button>
        <h2 className='text-[18px] font-extrabold'>Blogs On <span>{category}</span></h2>
        </div>
    </div>
    <Blog/>
    <Pagination/>
    </div>
  )
}

export default Categorypage;
