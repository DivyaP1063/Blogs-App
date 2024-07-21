import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
    const {page,totalPages,handlerPageChange}=useContext(AppContext);
  return (
    <div className='w-full flex flex-row  justify-center  items-center border-2 fixed bottom-0 bg-white py-2'>
    <div className='flex flex-row w-[40%] justify-between  items-center'>
    <div>
    {
    page>1 && <button className='text-[14px] font-semibold border-2 rounded py-1 px-2' onClick={()=>handlerPageChange(page-1)}>Previous</button>
    }
    {
    page<totalPages && <button className='ml-1 text-[14px] font-semibold border-2 rounded py-1 px-2' onClick={()=>handlerPageChange(page+1)}>Next</button>
    }
    </div>

    <div className='text-[14px] font-semibold'>
        Page <span>{page}</span> of <span>{totalPages}</span>
    </div>
    </div>

    </div>
  )
}
