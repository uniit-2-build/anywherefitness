import { useEffect, useState } from "react";

const useSearch = (initialData, searchQuery) => {

    const [filteredData, setFilteredData] = useState(initialData);
    const searchTerms = Object.keys(searchQuery);

    useEffect(() => {
        setFilteredData(initialData.filter(Class => {
            // loop through every key and see of the terms match at least partially
            const isSearchedFor = searchTerms.reduce((searchedFor, term) => {
                // if that query isnt filled out tehn skip it
                if (!searchQuery[term]) return searchedFor;
                // if they dont match then set the reducer to false
                // if they do than keep the reducer the same 
                Class[term].includes(searchQuery[term]) ? false : searchedFor;
            }, true)
            // classes that pass all search querries are included in teh new array
            return isSearchedFor;
        }))
    }, [searchQuery]);

    return filteredData; 
}

export default useSearch;