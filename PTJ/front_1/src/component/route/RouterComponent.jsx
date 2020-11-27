import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserListComponent from "../user/UserListComponent";
import LoginComponent from "../user/LoginComponent";
import MainComponent from "../user/MainComponent";

import AddUser from "../user/Add/Checkout";
//import EditUserComponent from "../user/EditUserComponent";

import Test from '../user/MainComponent';

const AppRouter = () =>{
    return(
        <div>
            <BrowserRouter>
            <div style={style}>
                <Switch>
                    <Route exact path="/" component={MainComponent} />
                    <Route path="/users" component={UserListComponent} />
                    <Route path="/add-user" component={AddUser} />
                    <Route path="/login" component={LoginComponent} />
                </Switch>
            </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    margin: '20px',
}

export default AppRouter;
                    