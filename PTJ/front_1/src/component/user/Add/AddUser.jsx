import React, {Component} from 'react';
import ApiService from '../../../ApiService'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class AddUser extends Component {
        constructor(props){
            super(props);

            this.state = {
                id: '',
                password: '',
                firstName: '',
                lastName: '',
                age: '',
                tel: '',
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
                id: this.state.id,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                tel: this.state.tel,
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
            return (
                <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    회원 정보
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="id"
                        name="id"
                        label="아이디"
                        value={this.state.username}
                        onChange={this.onChange}
                        autoComplete="id"
                    />
                    
                    </Grid>
                    <a>aa</a>
                    <Grid item xs={12}>
                        <TextField
                        required
                        id="password"
                        name="password"
                        label="비밀번호"
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        id="passwordCheck"
                        name="passwordCheck"
                        label="비밀번호 확인"
                        
                        type="password"
                        autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="성"
                        value={this.state.firstName}
                        onChange={this.onChange}
                        fullWidth
                        autoComplete="given-name"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="이름"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        fullWidth
                        autoComplete="family-name"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="age"
                        name="age"
                        label="나이"
                        value={this.state.age}
                        onChange={this.onChange}
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id="tel"
                        name="tel"
                        label="전화번호"
                        value={this.state.tel}
                        onChange={this.onChange}
                        fullWidth
                        autoComplete="shipping address-line2"
                    />
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={this.saveUser}>Temp 등록</Button>
                </React.Fragment>
            );
        }
    }

    export default AddUser;

