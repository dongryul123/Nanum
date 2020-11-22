import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserListComponent from "../user/UserListComponent";
import AddUserComponent from "../user/AddUserComponent";
import LoginComponent from "../user/LoginComponent";
import MainComponent from '../user/main/MainComponent';
//import EditUserComponent from "../user/EditUserComponent";

const AppRouter = () =>{
    return(
        <div>
            <BrowserRouter>
            <div style={style}>
                <Switch>
                    <Route exact path="/" component={MainComponent} />
                    <Route path="/users" component={UserListComponent} />
                    <Route path="/add-user" component={AddUserComponent} />
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
                    