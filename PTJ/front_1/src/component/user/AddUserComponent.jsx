import React, {Component} from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddUserComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            message: null
        }
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveUser = (e) =>{
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            salary: this.state.salary,
        }

        ApiService.addUser(user)
        .then( res => {
            this.setState({
                message: user.username + "님이 등록되었습니다."
            })
            console.log(this.state.message);
            this.props.history.push('/users');
        })
        .catch(err => {
            console.log('saveUser() 에러', err);
        })
    }

    render(){
        return(
            <div>
                <Typography>Add user</Typography>
                <form style={formContainer}>
               
                    <TextField type="text" placeholder="username" name="username"
                    fullWidth margin="normal" value={this.state.username} onChange={this.onChange} />

                    <TextField type="password" placeholder="비번" name="password"
                    fullWidth margin="normal" value={this.state.password} onChange={this.onChange} />
                    
                    <TextField placeholder="성" name="firstName"
                    fullWidth margin="normal" value={this.state.firstName} onChange={this.onChange} />
                    
                    <TextField placeholder="이름" name="lastName"
                    fullWidth margin="normal" value={this.state.lastName} onChange={this.onChange} />

                    <TextField placeholder="나이" name="age"
                    fullWidth margin="normal" value={this.state.age} onChange={this.onChange} />

                    <TextField placeholder="급여" name="salary"
                    fullWidth margin="normal" value={this.state.salary} onChange={this.onChange} />

                    <Button variant="contained" color="primary" onClick={this.saveUser}>등록</Button>
                </form>
            </div>
        )
    }
}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default AddUserComponent;