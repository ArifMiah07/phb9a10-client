import { useSouthAsiaContext } from "../../contexts/southAsiaContext";

const Aside = () => {

    const {southAsiaData} = useSouthAsiaContext();
    console.log(southAsiaData);
    return (
        <div className="flex flex-row flex-wrap lg:flex lg:flex-col justify-center gap-12">
            <div className="bg-white lg:p-6 flex flex-col justify-center">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="bg-gray-300 grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
            <div className="p-6 bg-white flex flex-col">
                <h1 className="font-semibold py-2 ">Recent Posts</h1>
                <div className="flex flex-col gap-3">
                    {southAsiaData.map(sad => <div key={sad.id}>
                        <h1>{sad.name}</h1>
                    </div>)}
                </div>
            </div>
            <div className="bg-white p-6 ">
                <h1 className="font-semibold py-2 ">Categories</h1>
                <div  className="flex flex-col gap-3">
                    <p>Africa 3</p>
                    <p>Asia 5</p>
                    <p>Europe 5</p>
                    <p>North America 2</p>
                    <p>South America 2</p>
                </div>
            </div>

            <div  className="p-6 bg-white ">
                <h1 className="font-semibold py-2 ">Archives</h1>
                <div  className="flex flex-col gap-3">
                    <p>January 2018</p>
                    <p>November 2017</p>
                    <p>October 2017</p>
                    <p>August 2017</p>
                    <p>June 2017</p>
                    <p>May 2017</p>
                    <p>April 2017</p>
                    <p>February 2017</p>
                    <p>December 2016</p>
                    <p>November 2016</p>
                    <p>April 2016</p>
                    <p>October 2015</p>
                </div>
            </div>
        </div>
    );
};

export default Aside;