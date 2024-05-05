import { useLoaderData, useParams } from "react-router-dom";
import CountryDetails from "../CountryDetails/CountryDetails";

const Country = () => {

    const southAsiaData = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const saData = southAsiaData.find(sad => sad.id === intId);
    
    return (
        <div>
            <div>
                <CountryDetails key={saData.id} saData={saData}></CountryDetails>
            </div>
        </div>
    );
};

export default Country;