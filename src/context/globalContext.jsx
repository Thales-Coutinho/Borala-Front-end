import { createContext, useEffect, useState } from 'react';
import apiRest from '../utils/apiRest';

export const GlobbalContext = createContext();
GlobbalContext.displayName = "Context Borala"

export const GlobbalProvider = ({ children }) => {

    let [cities, setCities] = useState([])
    let [trips, setTrips] = useState([])
    let [filters, setfilters] = useState([])

    useEffect(() => {
        apiRest.get('cities/')
            .then(response => {
                setCities(response.data)
            })
    }, [])

    return (
        <GlobbalContext.Provider
            value={{
                cities,
                trips,
                setTrips,
                filters,
                setfilters
            }}
        >
            {children}
        </GlobbalContext.Provider>
    )
}