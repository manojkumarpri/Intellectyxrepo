import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Createcustomer from './components/Createcustomer';
import Customerlist from './components/Customerlist';
 const Routes =() => (
     <BrowserRouter >
        <Switch>
            <Route exact path='/' component={Createcustomer}></Route>
            <Route exact path='/Customerlist' component={Customerlist}></Route>

           

        </Switch>
    </BrowserRouter>
 )

 export default Routes;