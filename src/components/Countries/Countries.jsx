// import Country from "../Country/Country";

const Countries = ({southAsia}) => {
  // console.log(so);
  // const { _id, name, touristSpots } = dt;

  // Remove newline characters and parse the JSON string to an array
  // const formattedTouristSpots = JSON.parse(touristSpots.replace(/\n/g, ''));
// 
  return (
    <div>
      <h1>this is countries!</h1>
      <div>
        <h1>name: {southAsia.name}</h1>
        <div>
          <img src={southAsia.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Countries;
