import { Link, useLoaderData } from "react-router-dom";


const Login = () => {
    const cars = useLoaderData();
    return (
        <div>
            <h1>this is login page</h1>
            <div>
                {cars.length}
                <div>
                    {
                        cars.map((car, i)=> <div key={i}>
                            <p>{car._id}</p>
                            <p>{car.name}</p>
                            <p>{car.price}</p>
                        </div>)
                    }
                </div>
            </div>
            <Link to={'/register'}>Go Register page</Link>
        </div>
        
    );
};

export default Login;