import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ShowCard, SearchForm, Header } from '../../components';

const SearchPage = () => {

    const [showData, setShowData] = useState([]);
    const [searchString, setSearchString] = useState("b9ary01");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        async function searchAPI() {
            setIsLoading(true);
         //  const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchString}`);
           
         const url=`https://api.github.com/users/${searchString}/repos`
         const result = await axios.get(url);
         console.log(result)

           setShowData(result.data);
            setIsLoading(false);
        }

        searchAPI();

    }, [searchString]);

    function handleSearch(userInput){
        setSearchString(userInput);
    }

    return <>
            <Header />
            <SearchForm handleSearchSubmission={handleSearch}/>
            {isLoading ? <em>Loading...</em> : showData.map((s) => <ShowCard key={s["id"]} data={s} />)}
            </>
}

export default SearchPage;
