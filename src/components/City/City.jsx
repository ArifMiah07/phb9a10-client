import { useLoaderData, useParams } from "react-router-dom";
import CityDetails from "../CityDetails/CityDetails";

const City = () => {
    const southAsiaData = useLoaderData();
    const { id, touristSpotId } = useParams();
    

    const cityData = southAsiaData.find(city => city.id === parseInt(id));

    return (
        <div>
            <h1>City</h1>
            {touristSpotId ? (
                <CityDetails
                    key={cityData.id}
                    cityData={cityData}
                    touristSpotId={touristSpotId}
                />
            ) : (
                <h2>No tourist spot selected</h2>
            )}
        </div>
    );
};

export default City;
