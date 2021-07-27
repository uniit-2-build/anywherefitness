import { useEffect, useState } from "react";

const useSearch = (initialData, searchQuery) => {

    const [filteredData, setFilteredData] = useState(initialData);
    const searchTerms = Object.keys(searchQuery);
    const filterCallback = Class => {
        const reducerCallback = (searchedFor, term) => {
            // if that query isnt filled out tehn skip it
            if (!searchQuery[term]) return searchedFor;
            // if they dont match then set the reducer to false
            return Class[term].includes(searchQuery[term]) ? false : searchedFor; // if they do than keep the reducer the same 
        }
        // loop through every key and see of the terms match at least partially
        const isSearchedFor = searchTerms.reduce(reducerCallback, true)
        // classes that pass all search querries are included in teh new array
        return isSearchedFor;
    }
    
    useEffect(() => {
        setFilteredData(initialData?.filter(filterCallback))
    }, [searchQuery]);
    

    return filteredData; 
}

export default useSearch;