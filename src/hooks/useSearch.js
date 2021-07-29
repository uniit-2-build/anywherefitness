import { useEffect, useState } from "react";

const useSearch = (initialData, searchQuery) => {

    const [filteredData, setFilteredData] = useState(initialData);
    const searchTerms = Object.keys(searchQuery);
    
    useEffect(() => {
        setFilteredData(initialData.filter(data => {
            // loop through every key and see if the terms match at least partially
            const isSearchedFor = searchTerms.reduce((searchedFor, term) => {
                // if that query isnt filled out then skip it
                if (!searchQuery[term] || !data[term]) return searchedFor;
                const searchTerm = (searchQuery[term]).toString().toLowerCase();
                const dataTerm = (data[term]).toString().toLowerCase();
                console.table(searchTerm, dataTerm)
                // if they dont match then set the reducer to false
                return dataTerm.includes(searchTerm) ? searchedFor : false; 
                // if they do than keep the reducer the same 
            }, true)
            // classes that pass all search querries are included in teh new array
            return isSearchedFor;
        }))
    }, [searchQuery, initialData]);
    

    return filteredData; 
}

export default useSearch;