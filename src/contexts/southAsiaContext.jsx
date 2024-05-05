import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react';


// Create a new context
export const SouthAsiaContext = createContext(null);


// Create a custom hook 
export const useSouthAsiaContext = () => useContext(SouthAsiaContext)


// Json data provider component
export const SouthAsiaDataProvider = ({ children }) => {


    const [southAsiaData, setSouthAsiaData] = useState([]);


    useEffect(()=>{
        fetch('/south_asia.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSouthAsiaData(data);
        })
        .catch(error =>{
            console.log('fetching error: ',error)
        })
    }, [])

    const contextSouthAsiaData = {
        southAsiaData,
    }

    return (

        <SouthAsiaContext.Provider value={contextSouthAsiaData}>
            {children}
        </SouthAsiaContext.Provider>
    );
};

SouthAsiaDataProvider.propTypes = {
    children: PropTypes.node
}