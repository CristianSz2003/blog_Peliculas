
import React from 'react';
import './App.css';
import {NavbarEx} from './components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//componentes
import BlogList from './blogList';
import BlogPost from './blogPost';
{/*import navbar from './navbar';*/}



function App() {
    return(
        <React.Fragment>
            <NavbarEx/>

            <Routes>
                <Route path = '/BlogList' element={<BlogList/>}/>
                <Route path = '/BlogPost' element={<BlogPost/>}/>
            </Routes>
        </React.Fragment>

        

    )
    
}
export default App;
  