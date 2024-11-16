import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [cars, setCars] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/cars')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCars(data);
    })
  }, [])


  const handleCars = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;

    if (!name || !price) {
        alert("Both fields are required");
        return;  // Prevent submission if fields are empty
    }

    const newCar = { name, price };
    console.log(newCar);

    fetch('http://localhost:3000/cars', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newCar),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            alert("Hey, data added successfully in database!")
        }
        const newCars = [...cars, data];
        setCars(newCars);
        form.reset();
    });

    // console.log({ name, price });
}




    return (
        <div className="p-40 flex flex-col items-center justify-center">
            <h1>this is register page</h1>
            <div>
                <form onSubmit={handleCars} className="flex flex-col ">
                    <label  >Name</label>
                    <input name="name" type="text" />
                    <label >Price</label>
                    <input name="price" type="text" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                {
                    cars.map((c, i)=> <div key={i}>
                        <p>{c._id}</p>
                        <p>{c.name}</p>
                        <p>{c.price}</p>
                    </div>)
                }
            </div>
            <Link to={'/login'}>Go Login page</Link>
        </div>
    );
};

export default Register;