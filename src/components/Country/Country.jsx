import { useLoaderData, useParams } from "react-router-dom";
// import { useSouthAsiaContext } from "../../contexts/southAsiaContext";

const Country = () => {

    // const {southAsiaData} = useSouthAsiaContext();
    const data = useLoaderData();
    const id = useParams();

    // const intId = parseInt(id);

    // const data = sAData.find(d=> d.id !== intId) 

    console.log('keno?',data);
    // console.log('keno?',data);

    // console.log('sad', southAsiaData);
    return (
        <div>
            <h1>this is country!! </h1>
            <div>
            </div>
        </div>
    );
};

export default Country;