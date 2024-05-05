import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';

const Banner = ({ ts }) => {
    const { image } = ts;

    return (
        <div className='w-full'>
            <Marquee speed={0.05}>
                <div className="rounded-lg w-fit">
                    <div>
                        <img className='rounded-lg' src={image} alt="" />
                    </div>          
                </div>
            </Marquee>
        </div>
    );
};

Banner.propTypes = {
    ts: PropTypes.object
};

export default Banner;
