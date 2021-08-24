import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import { useHistory } from 'react-router-dom';
import logo from '../images/brand-logo.svg';

export default function Home() {
    const [search, setSearch] = useState("");
    const history = useHistory();

    function handleSearchSubmit(e) {
        e.preventDefault();
        if (search === "") {
            return;
        }
        history.push(`/search?q=${search}`);
    }

    function handleSearchInputChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div className="App home-container">
            <img className="home-logo" src={logo} alt="Tiger Recipe" />
            <SearchForm search={search} handleSearchInputChange={handleSearchInputChange} handleSearchSubmit={handleSearchSubmit} /> 
            <div className="placeholder"></div>
        </div>
        
    )
}
