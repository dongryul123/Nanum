import React from 'react';
import ApiService from "../../ApiService";
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Component } from 'react';
//import addUser from '../user/UserListComponent'

class NavBar extends Component{
    constructor(props){
        super(props);
    }

    addUser = () =>{
        window.localStorage.removeItem("userID");
        this.props.history.push('/add-user');
    } 

    render() {
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu" href="/">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={style}>
                            NaNum
                        </Typography>
                        <Button variant="contained" color="primary" href="login">로그인</Button>
                    </Toolbar>
                </AppBar>
            </div>
        
        );
    }
}

const style ={
    flexGrow: 1
}

export default NavBar;
