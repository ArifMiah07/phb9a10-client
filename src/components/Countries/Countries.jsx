import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../Styles/Styles.css'
// import Country from '../Country/Country';

const Countries = ({southAsia}) => {

  const { id, name, img, description} = southAsia;
  // console.log(touristSpots);

  return (
    <div className='w-full drop-shadow-xl border border-red-300'>
      <div className='flex flex-col w-full p-6 border border-red-300'>
        <div className='flex flex-col items-center border w-full border-red-300'>
          <img className=' w-[300px] lg:w-full' src={img[0]} alt={name} />
        </div>
        <h1 className='text-[#3a3a3a] playfair font-medium text-[25px]'>{name}</h1>
        <div>
          <p className='mulish text-[15px] text-[#3a3a3a]'>{description.slice(0, 170)} ... <span className='bg-gray-100 px-2 underline font-thin '><Link to={`/country/${id}`}>read more</Link></span> </p>
        </div>
      </div>
    </div>
  );
};



Countries.propTypes = {
  southAsia: PropTypes.object
}
export default Countries;
