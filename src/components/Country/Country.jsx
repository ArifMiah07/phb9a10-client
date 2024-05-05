import { useLoaderData, useParams } from "react-router-dom";
import CountryDetails from "../CountryDetails/CountryDetails";
// import { useSouthAsiaContext } from "../../contexts/southAsiaContext";

const Country = () => {

    const southAsiaData = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const saData = southAsiaData.find(sad => sad.id === intId);

    console.log("id: data", id, saData);

    console.log('keno?',southAsiaData);
    return (
        <div>
            <h1>this is country!! </h1>
            <div>
                <CountryDetails key={saData.id} saData={saData}></CountryDetails>
            </div>
        </div>
    );
};

export default Country;