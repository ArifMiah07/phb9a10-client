// import { useSouthAsiaContext } from "../../contexts/southAsiaContext";


const Cities = ({ts}) => {


    // const {southAsiaData} = useSouthAsiaContext();
    const {id, title, total_visitor, living_cost, image, description, booking_price} = ts;

    console.log(ts);
    return (
        <div>
            <h1>{title} {id}</h1>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h1>{total_visitor}</h1>
                <h1>{booking_price}</h1>
                <h1>{living_cost}</h1>
                <h1>{description}</h1>
            </div>
        </div>
    );
};

export default Cities;