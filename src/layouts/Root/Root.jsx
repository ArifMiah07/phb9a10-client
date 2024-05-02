// import { useEffect } from "react";
// import Navbar from "../../pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
// import Header from "../../pages/shared/Header/Header";
import './Root.css'
import { Helmet } from "react-helmet-async";
const Root = () => {
    

  return (
    <div className="bg-[#F5F5F5] flex flex-col h-fit max-w-full mx-auto font-poppins ">
            <Helmet><title>Eco Wonderland</title></Helmet>
            <div className=" h-fit">
                <Outlet></Outlet>     
            </div> 
            <div className=" h-fit "> 
                <Footer></Footer> 
            </div>   
        </div>
    
  )
};

export default Root;
