import React from 'react'
import { NavLink } from 'react-router-dom';

export const Blogdetails = (props) => {
    const post=props.post;
  return (
    <div>
    <NavLink to={`/blog/${post.id}`}>
    <p className='text-[15px] font-extrabold underline'>{post.title}</p>
    </NavLink>
    <p className='text-[14px] font-semibold'>
        By <span className='italic font-normal'>{post.author}</span> On <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
        <span className='font-bold underline'>{post.category}</span>
        </NavLink>
    </p>
    <p className='text-[14px] font-semibold'>Posted On {post.date}</p>
    <p className='text-[14px] font-semibold mt-2'>{post.content}</p>
    
    <div className='flex flex-row gap-2'>
        {
        post.tags.map((tag,index)=>{
        return(
        <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
        <span className='text-blue-700 text-[12px] font-bold underline'>{`#${tag}`}</span>
        </NavLink>
                    
        )
        })
        }
    </div>


</div>
  )
}
