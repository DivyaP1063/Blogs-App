import React, { useContext, useState ,useEffect } from 'react'
import { Header } from './Header'
import { Blog } from './Blog'
import { Pagination } from './Pagination'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { Blogdetails } from './Blogdetails'
import { Spinner } from './Spinner'

function Blogpage(){
    const [blog,setBlogs]=useState(null);
    const [relatedBlogs,setrelatedBlogs]=useState([]);
    const navigation =useNavigate();
    const location = useLocation();
    const {loading, setLoading } = useContext(AppContext);
    const baseUrl = "https://codehelp-apis.vercel.app/api/";
    const blogId= location.pathname.split("/").at(-1);

    async function fetchrelatedBlogs() {
        let url = `${baseUrl}get-blog?blogId=${blogId}`;

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data)
            setBlogs(data?.blog);
            console.log(blog);
            setrelatedBlogs(data?.relatedBlogs);
        }
        catch (e) {
            console.log("Error")
            setBlogs(null);
            setrelatedBlogs([]);
        }

    }

    useEffect(()=>{
    
        if(blogId){
            fetchrelatedBlogs();
        }

    },[location.pathname])

  return (
    <div>
    <Header/>
    <div className='w-full flex flex-col items-center mt-[50px] mb-2 '>
        <div className='w-[40%] mb-1'>
        <button className='border-2 py-1 px-2 rounded' onClick={()=>navigation(-1)}>Back</button>
        </div>
        {
            loading?(<Spinner/>):(
                blog && (
                    <div className='w-[40%] flex flex-col items-center gap-4 '>
                        <Blogdetails post={blog}/>
                        <div className='w-full'>
                        <h2 className='text-[18px] font-extrabold'>Related Blogs</h2>
                        </div>
                        {
                            relatedBlogs?(
                                relatedBlogs.map((post)=>(
                                    <div className='w-full flex flex-col items-center gap-4' key={post.id}>
                                    <Blogdetails post={post}/>
                                    </div>
                                    
                                ))
                                
                            ):(
                                <div>
                                    <p>No Related Blog</p>
                                </div>
                            )
                        }
                    </div>
                )
            )

        }
    </div>
    </div>
  )
}

export default Blogpage;
