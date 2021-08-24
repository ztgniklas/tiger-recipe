import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Recipe from "../components/Recipe";
import SearchForm from "../components/SearchForm";
import logo from '../images/brand-logo.svg';

export default function Search() {
    const APP_ID = "4d4dbd52";
    const APP_KEY = "9639802bfcdcfc9003bb9207efcb976e";

    // A custom hook that builds on useLocation to parse
    // the query string for you.
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery();
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState(query.get("q"));
    const history = useHistory();

    const examReqUrl = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect(() => {
        if (search === "") {
            return;
        }
        reqRecipes(examReqUrl);
    }, []);

    async function reqRecipes(url) {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setRecipes(data.hits);
        window.scrollTo(0, 0);
    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        reqRecipes(examReqUrl);
        history.push(`/search?q=${search}`);
    }

    function handleSearchInputChange(e) {
        setSearch(e.target.value);
    }

    function handleClickLogo() {
        history.push("/");
    }

    return (
        <div className="App">
            <div className="search-form-container">
                <SearchForm
                    search={search}
                    handleSearchInputChange={handleSearchInputChange}
                    handleSearchSubmit={handleSearchSubmit}
                />
            </div>
            <img className="search-logo" src={logo} alt="Tiger Recipe" onClick={handleClickLogo} />
            
            <div className="recipes">
                {recipes.map((recipe, idx) => (
                    <Recipe key={idx} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
