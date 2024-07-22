import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner';
import { Blogdetails } from './Blogdetails';

export const Blog = () => {
    const {posts,loading}=useContext(AppContext);
  return (
    <div className='w-full flex flex-col items-center'>
            <div className='w-[40%] flex flex-col items-center gap-4 '>
        {
            loading? (<Spinner/>):(
                posts.length===0?
                (<div>No Post Found</div>):
                (posts.map((post)=>
                    (
                        <Blogdetails key={post.id} post={post}/>
                    )
                ))
            )
        }
    </div>
    </div>

  )
}
