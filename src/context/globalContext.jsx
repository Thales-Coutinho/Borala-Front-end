import { createContext, useEffect, useState } from 'react';
import apiRest from '../utils/apiRest';

export const GlobbalContext = createContext();
GlobbalContext.displayName = "Context Borala"

export const GlobbalProvider = ({ children }) => {

    let [cities, setCities] = useState([])
    let [trips, setTrips] = useState([])

    useEffect(() => {
        apiRest.get('cidades/')
            .then(response => {
                setCities(response.data)
            })
    }, [])

    return (
        <GlobbalContext.Provider
            value={{
                cities,
                trips,
                setTrips
            }}
        >
            {children}
        </GlobbalContext.Provider>
    )
}