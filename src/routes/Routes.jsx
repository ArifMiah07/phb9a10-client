import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import NotFound from "../pages/shared/NotFound/NotFound";
import Countries from "../components/Countries/Countries";

import Country from "../components/Country/Country";
import About from "../pages/About/About";
import City from "../components/City/City";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/countries',
                element: <Countries></Countries>
            },
            {
                path: '/country/:id',
                element: <Country></Country>,
                loader: ()=> fetch('/south_asia.json')
            },
            {
                path: '/city/:_id/touristSpots/:touristSpotId',
                element: <City></City>,
                loader: ()=> fetch('/south_asia.json')
            },
            {
                path: '/login',
                element: <Login></Login>,
                loader: () => fetch('http://localhost:3000/cars') 
            },
            {
                path: '/register',
                element: <Register></Register>,
                
            }
            
        ]
    }    
]);

export default router;