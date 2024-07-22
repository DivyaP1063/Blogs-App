import Home from "./components/Home";
import Blogpage from "./components/Blogpage";
import Tagpage from "./components/Tagpage";
import Categorypage from "./components/Categorypage";
import { Routes,Route, useSearchParams, useLocation} from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const{fetchBlogPosts}=useContext(AppContext);
  const[searchParams,setSearchParams]=useSearchParams();
  const location = useLocation(); 
  useEffect(()=>{
    const page= searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
        const tag= location.pathname.split("/").at(-1).replaceAll("-"," ");
        fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
        const category= location.pathname.split("/").at(-1).replaceAll("-"," ");
        fetchBlogPosts(Number(page),null,category);
    }

    else fetchBlogPosts(Number(page));

},[location.pathname, location.search]);
  return (

     <div className="App  min-h-[100vh] max-w-[100vw] leading-4">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<Blogpage/>}/>
      <Route path="/tags/:tag" element={<Tagpage/>}/>
      <Route path="/categories/:catergory" element={<Categorypage/>}/>
    </Routes>
    </div> 
  );
}

export default App;
