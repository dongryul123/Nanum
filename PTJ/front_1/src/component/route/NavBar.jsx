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
                {/* <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu" href="/">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={style}>
                            NaNum
                        </Typography>
                        <Button variant="contained" color="primary" href="login">로그인</Button>
                    </Toolbar>
                </AppBar> */}

                <div>
                    <header id="header" className="fixed-top">
                        <div className="container d-flex align-items-center">
                    
                            <h1 className="logo mr-auto"><a href="/">NaNum</a></h1>
                            
                        
                    
                            <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="#about">추천 모임</a></li>
                                <li><a href="#services">모임 개설</a></li>
                                <li><a href="#portfolio">모임 찾기</a></li>
                                <li className="drop-down"><a href="">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="drop-down"><a href="#">Deep Drop Down</a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                                </li>
                                <li><a href="#contact">Contact</a></li>
                    
                            </ul>
                            </nav>
                    
                            <a href="login" className="get-started-btn scrollto">로그인</a>
                    
                        </div>
                    </header>
                    </div>
                </div>
        
        );
    }
}

const style ={
    flexGrow: 1
}

export default NavBar;
