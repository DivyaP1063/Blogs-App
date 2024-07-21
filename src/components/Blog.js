import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner';

export const Blog = () => {
    const {posts,loading}=useContext(AppContext);
  return (
    <div className='w-full flex flex-col items-center my-[50px] '>
            <div className='w-[40%] flex flex-col items-center gap-4 '>
        {
            loading? (<Spinner/>):(
                posts.length===0?
                (<div>No Post Found</div>):
                (posts.map((post)=>
                    (
                    <div key={post.id}>
                        <p className='text-[15px] font-extrabold'>{post.title}</p>
                        <p className='text-[14px] font-semibold'>
                            By <span className='italic font-normal'>{post.author}</span> On <span className='font-bold underline'>{post.category}</span>
                        </p>
                        <p className='text-[14px] font-semibold'>Posted On {post.date}</p>
                        <p className='text-[14px] font-semibold mt-2'>{post.content}</p>
                        <div className='flex flex-row gap-2'>
                            {
                                post.tags.map((tag,index)=>{
                                    return(
                                        <span className='text-blue-700 text-[12px] font-bold underline' key={index}>{`#${tag}`}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    )
                ))
            )
        }
    </div>
    </div>

  )
}
