import { Header } from "./components/Header";
import { Blog } from "./components/Blog";
import { Pagination } from "./components/Pagination";
import { Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="./" element={<Home/>}/>
      <Route path="./blog/:blogId" element={<Blogpage/>}/>
      <Route path="./tags/:tag" element={<Tagpage/>}/>
      <Route path="./categories/catergory" element={<Categorypage/>}/>
    </Routes>
    {/* <div className="App  min-h-[100vh] max-w-[100vw] leading-4">
      <Header/>
      <Blog/>
      <Pagination/>
    </div> */}
  );
}

export default App;
