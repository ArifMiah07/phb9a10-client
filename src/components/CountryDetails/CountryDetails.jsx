import Navbar from "../../pages/shared/Navbar/Navbar";
import Cities from "../Cities/Cities";
import PropTypes from 'prop-types'; 

const CountryDetails = ({saData}) => {
    const {name, img, description, touristSpots}  = saData;
    console.log(saData.name, touristSpots);
    
    return (
        <div>
            <div className="relative flex flex-col items-center">
                <img src={img[1]} alt={name} />
                <div className="w-full absolute top-0">
                    <Navbar></Navbar>
                </div>
            </div>
            {/* floating text div */}
            <div className='my-12 md:mb-24 lg:mb-40 md:relative lg:relative w-10/12 md:w-10/12 lg:w-10/12 bg-red-400  mx-auto'>
                <div className='p-8   md:absolute md:-top-32 lg:absolute lg:-top-32 bg-[#fff]  w-full mx-auto drop-shadow-xl'>
                    <h1 className='mb-6 text-[#3A3A3A] text-[20px] lg:text-[30px] text-center playfair'>{name}</h1>
                    <p className='block text-[#3a3a3adc] text-[14px] lg:text-[15px] lg:hidden mulish'>{description}</p>
                    <p className='text-[#3a3a3adc]  text-[14px] lg:text-[17px] hidden md:hidden lg:block  mulish  '>{description}</p>
                </div>
            </div>
            <div className="w-10/12 mx-auto bg-[#fff] p-6 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    touristSpots.map(ts => <Cities key={ts.id} ts={ts} ></Cities>)
                }
            </div>
        </div>
    );
};

CountryDetails.propTypes = {
    saData: PropTypes.object
}

export default CountryDetails;