import "./App.css";
import { useEffect, useState } from "react";
import Home from './pages/Home';
import Search from './pages/Search';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Redirect to="/" />
        </Switch>
        
    );
}

export default App;
