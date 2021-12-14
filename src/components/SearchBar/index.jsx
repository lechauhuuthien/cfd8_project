import React, { useState } from 'react'

export default function SearchBar(props) {    
    const {handleSearch} = props;
    /*------------------------------*/
    const [keywords, setKeywords] = useState("");
    const [filter, setFilter] = useState("");
    /*------------------------------*/

    const handleFilter = () => {
        /*---------------filter---------------*/
    }
    
    const handleChange = () => {
        /*---------------update input---------------*/
    }

    const onSearch = () => {
        /*---------------click search---------------*/
        handleSearch(filter, keywords)
    }

    /*------------------------------*/
    return (
        <div>
            SearchBar
        </div>
    )
}
