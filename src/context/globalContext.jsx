import { createContext, useEffect, useMemo, useState } from 'react';
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
            .catch(error => 
                alert("erro ao carregar Cidades error:" + error)
                )
    }, [])

    useMemo(() => {
        apiRest.get('trips/', {
            params: filters,
        })
            .then(response => {
                setTrips(response.data)
            })
            .catch(error => 
                alert("erro ao carregar viagens error:" + error)
                )
    }, [filters])

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