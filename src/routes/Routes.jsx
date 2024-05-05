import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import NotFound from "../pages/shared/NotFound/NotFound";
import Countries from "../components/Countries/Countries";
import Country from "../components/Country/Country";

// import Home from "../Pages/Home/Home";
// import Root from "../Layouts/Root/Root";
// import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
// import UserProfile from "../Pages/UserProfile/UserProfile";
// import LogIn from "../Pages/LogIn/LogIn";
// import Register from "../Pages/Register/Register";
// import ApartmentCardDetails from "../Components/ApartmentCardDetails/ApartmentCardDetails";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";
// import About from "../Pages/About/About";
// import PrivateRoute from "./PrivateRoute";
// import Blog from "../Pages/Blog/Blog";


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