import PropTypes from 'prop-types'; 
import { GrGroup } from "react-icons/gr";


const Cities = ({ts}) => {


    // const {southAsiaData} = useSouthAsiaContext();
    const { title, total_visitor, living_cost, image, description, booking_price} = ts;

    console.log(ts);
    return (
        <div className='flex flex-col justify-between bg-gray-50 border border-gray-300 rounded-lg p-3'>
            <div>
                <img src={image} alt={title} />
            </div>
            <div className='fle flex-col p-3'>
                <h1 className='text-[] font-medium text-[25px] '>{title}</h1>
                <h1 className='p-2 bg-cyan-50 text-[#5a5a5a] text-[17px] my-4'>{description}</h1>
                <div className='flex flex-col md:flex md:flex-col lg:flex lg:flex-col '>
                    <h1 className='bg-green-50 p-2 text- font-medium text-[] flex items-center gap-2'><span className='font-semibold'>Total visitor</span> : {total_visitor} <span><GrGroup /></span> </h1>
                    <h1 className='bg-green-50 p-2 text- font-medium text-[] flex items-center'><span className='font-semibold'> Booking price</span> : {booking_price}</h1>
                    <h1 className='bg-green-50 p-2 text- font-medium text-[] flex items-center'><span className='font-semibold'>Living cost</span> : {living_cost}</h1>
                </div>
            </div>
                <div className='w-full flex justify-evenly'>
                    <button className=" lg:px-3 border hover:border-2 border-white hover:border-cyan-400 p-3 text-[20px] text-white py-1 bg-pink-600 hover:bg-purple-800 hover:bg-transparent hover:text-black md:w-full md:bg-black md:hover:bg-transparent md:hover:text-black lg:w-fit lg:bg-purple-700 lg:hover:bg-white lg:text-white lg:hover:text-black">Book Now</button>
                    <button className=' lg:px-3 border hover:border-2 border-white hover:border-cyan-400 p-3 text-[20px] text-white py-1 bg-pink-600 hover:bg-purple-800  hover:bg-transparent hover:text-black md:w-full md:bg-black md:hover:bg-transparent md:hover:text-black lg:w-fit lg:bg-black lg:hover:bg-white lg:text-white lg:hover:text-black'>View Details</button>
                    {/* <Link to={`/city/${id}/touristSpots/${id}`}></Link> */}
                </div>
            <div>
                
            </div>
        </div>
    );
};


Cities.propTypes = {
    ts: PropTypes.object
}
export default Cities;