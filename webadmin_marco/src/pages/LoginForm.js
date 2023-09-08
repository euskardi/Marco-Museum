
import React from "react";
import InputField from "./InputField";
import UserStore from "../stores/UserStore";
import SubmitButton from "./SubmitButton";
import { createConnection } from "mongoose";
import './loginForm.css'


class LoginForm extends React.Component {

    
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false
        }
    }
    setInputValue(property, val){
        val = val.trim();
        if(val.length > 12) {
            return;
        }
        this.setState({
            [property]: val
        })
    }
    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }

    async doLogin() {
        // console.log(this.state.username);
        // console.log(this.state.password);
        if(!this.state.username) {
            return;
        }
        if(!this.state.password){
            return;
        }
        this.setState({
            buttonDisabled: true
        })
        try {
            let res = await fetch('http://100.24.228.237:10023/users/login', {
                method: 'post',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });

            let use = await fetch('http://100.24.228.237:10023/users/'+this.state.username, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            });
            
            let result = await res.json();
            let user = await use.json();
            console.log(user.user.usertype[0]);
            if (result.message == "token" && user.user.usertype[0] == "admin") {
                UserStore.isLoggedIn = true;
                UserStore.username = this.state.username;
            }
            else{
                this.resetForm();
                alert("Wrong Credentials");
            }
        }
        catch(e){
            console.log(e);
            this.resetForm();
        }
    }
    render() {
        return(
            <div className="loginForm">
                <div className="loginText">
                    Log In
                </div>
                <div className ="fields">
                Username
                <InputField
                    type='text'
                    value={this.state.username ? this.state.username: ''}
                    onChange={ (val) => this.setInputValue('username', val) }
                    placeholder='Username'
                />
                Password
                <InputField
                        type='password'
                        value={this.state.password ? this.state.password : ''}
                        onChange={(val) => this.setInputValue('password', val)}
                        placeholder='Password'
                />
                <SubmitButton
                    text='Login'
                    disabled={this.state.buttonDisabled}
                    onClick={ () => this.doLogin()}
                />
                </div>
            </div>
        )
    }
}

export default LoginForm