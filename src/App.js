import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//componentes
import {NavbarEx} from './components';
import BlogList from './blogList';
import BlogPost from './blogPost';

import FavoriteView from "./components/favorites";
import WatchList from "./components/watchlist";

function App() {
    return(
        <React.Fragment>
            <NavbarEx/>
            <Routes>
                <Route path = '/BlogList' element={<BlogList/>}/>
                <Route path = '/BlogPost' element={<BlogPost/>}/>
                <Route path = '/Favorites' element={<FavoriteView/>}/>
                <Route path = '/WatchList' element={<WatchList/>}/>
            </Routes>
        </React.Fragment>
    )
}
export default App;
  
