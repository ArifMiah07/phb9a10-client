import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import NotFound from "../pages/shared/NotFound/NotFound";
import Countries from "../components/Countries/Countries";
import CountryDetails from "../components/CountryDetails/CountryDetails";
import Country from "../components/Country/Country";
import About from "../pages/About/About";


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
            }
            
        ]
    }    
]);

export default router;