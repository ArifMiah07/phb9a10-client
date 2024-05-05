import PropTypes from 'prop-types';

const CityDetails = ({ cityData, touristSpotId }) => {
    const touristSpot = cityData.touristSpots.find(ts => ts.id === touristSpotId);

    return (
        <div>
            <h2>{cityData.name}</h2>
            <h3>Tourist Spot Details</h3>
            <h4>{touristSpot.title}</h4>
            <p>{touristSpot.description}</p>
        </div>
    );
};

CityDetails.propTypes = {
    cityData: PropTypes.object.isRequired,
    touristSpotId: PropTypes.string.isRequired,
};

export default CityDetails;
