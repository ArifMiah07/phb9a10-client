import { Helmet } from "react-helmet-async";
// import Navbar from "../shared/Navbar/Navbar";
// import Banner from "../Banner/Banner";
import './Home.css'
import Header from "../shared/Header/Header";
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="w-full h-full">
            <Helmet><title> Home </title></Helmet>   
            <div className=" h-fit ">
            </div>         
            <div className="relative ">
                {/* <Banner></Banner> */}
                <Header></Header>
                {/* <div className="  ">
                <Link className="sticky top-0"><button className="btn"> Login</button></Link>
                </div> */}
            </div>
        </div>
    );
};

export default Home;