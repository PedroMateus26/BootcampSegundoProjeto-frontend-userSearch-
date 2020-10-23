import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Headerbar from './core/components/Headerbar';
import Home from './pages/Home';
import SearchUserPage from './pages/SearchUserPage';


const Routes=()=>(
    
    <BrowserRouter>
    <Headerbar/>
    <Route path="/" exact>
        <Home/>
    </Route>
    <Route path="/searchUser">
        <SearchUserPage/>
    </Route>
    </BrowserRouter>
)

export default Routes;