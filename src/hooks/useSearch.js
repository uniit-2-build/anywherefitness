import { useEffect, useState } from "react";

const useSearch = (initialData, searchQuery) => {

    const [filteredData, setFilteredData] = useState(initialData);
    const searchTerms = Object.keys(searchQuery);
    const filterCallback = Class => {
        const reducerCallback = (searchedFor, term) => {
            // if that query isnt filled out then skip it
            if (!searchQuery[term]) return searchedFor;
            const classTerm = Class[term].toString();
            const searchTerm = searchQuery[term].toString();
            // if they dont match then set the reducer to false
            return classTerm.includes(searchTerm) ? searchedFor : false; // if they do than keep the reducer the same 
            
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