import Cities from "../Cities/Cities";
import PropTypes from 'prop-types'; 

const CountryDetails = ({saData}) => {
    const {name, id, img, description, touristSpots}  = saData;
    console.log(saData.name, touristSpots);
    
    return (
        <div>
            <h1>this is {name} details {id} </h1>

            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                {description}
            </div>
            <div>
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