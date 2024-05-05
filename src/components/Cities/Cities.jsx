import { useSouthAsiaContext } from "../../contexts/southAsiaContext";


const Cities = () => {


    const {southAsiaData} = useSouthAsiaContext();

    console.log(southAsiaData);
    return (
        <div>
            <h1>Cities</h1>
        </div>
    );
};

export default Cities;