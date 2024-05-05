import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../Styles/Styles.css'
import Banner from '../../pages/Banner/Banner';
// import Country from '../Country/Country';

const Countries = ({southAsia}) => {

  const { id, name, img, description, touristSpots} = southAsia;
  // console.log(touristSpots);

  return (
    <div className='w-full drop-shadow-xl rounded-lg border border-gray-300'>
      <div className='flex flex-col w-full p-6 '>
        <div className='flex flex-col rounded-lg items-center border w-full lg:border-gray-300'>
          <img className='rounded-lg w-[300px] lg:w-full' src={img[0]} alt={name} />
        </div>
        <div className='my-4'>
          <h1 className='text-[#3a3a3a] playfair font-medium text-[25px]'>{name}</h1>
        </div>
        <div className='grid grid-cols-3 md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-2'>
          {/* <Banner key={id} touristSpots={touristSpots}></Banner> */}
          {
            touristSpots.map((ts, idx)=> <Banner key={idx} ts={ts} ></Banner>)
          }
        </div>
        <div className='my-4'>
          <p className='mulish text-[19px] text-[#3a3a3a]'>{description.slice(0, 170)} ... <span className='bg-green-300 px-3 underline font-thin '><Link to={`/country/${id}`}>View Details</Link></span> </p>
        </div>
      </div>
    </div>
  );
};



Countries.propTypes = {
  southAsia: PropTypes.object
}
export default Countries;
