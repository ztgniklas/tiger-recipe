import React from "react";


export default function SearchForm({search, handleSearchSubmit, handleSearchInputChange}) {
    return (
        <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
                className="search-bar"
                type="text"
                value={search}
                onChange={handleSearchInputChange}
            />
            <button className="search-button" type="submit">
                Search
            </button>
        </form>
    );
}
