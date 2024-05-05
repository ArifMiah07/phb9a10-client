import { Helmet } from "react-helmet-async";
import './Home.css'
import Header from "../shared/Header/Header";
import { useEffect, useState } from "react";
import Countries from "../../components/Countries/Countries";
import Aside from "../../components/Aside/Aside";

const Home = () => {
    const [southAsiaData, setSouthAsiaData] = useState([]);

    useEffect(() => {
        fetch('south_asia.json')
            .then(res => res.json())
            .then(data => {
                setSouthAsiaData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // console.log(southAsiaData);

    return (
        <div className="w-full h-full">
            <Helmet><title> Home </title></Helmet>
            <div className="h-fit ">
                <div></div>
                <div className="relative ">
                    <Header></Header>
                </div>
                <div className="flex flex-col md:flex md:flex-col lg:flex lg:flex-row">
                    <div className="flex flex-col gap-6 p-6 drop-shadow-lg">
                        {
                            southAsiaData && southAsiaData.map((southAsia, idx) => (
                                <Countries key={idx} southAsia={southAsia} ></Countries>
                            ))
                        }
                    </div>
                    {/* aside */}
                    <div className="flex flex-row flex-wrap lg:flex lg:flex-col w-fit h-fit ">
                        <Aside></Aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
