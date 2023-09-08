
import React from "react";
import { useState } from "react";
import {BrowserRouter as Router, Switch, Link } from "react-router-dom";

import logo from '../assets/images/marco_cuadro.svg'
import Layout from "../components/layout/Layout";
import './login.css'

import UserStore from "../stores/UserStore";
import LoginForm from "./LoginForm"
import SubmitButton from "./SubmitButton.js" 
import { observer } from "mobx-react";

// const Login = () => {

//     return (
//         <Router>
//         <div>
//             <div className="logo">
//                 <img src={logo} alt="MARCO Logo" />
//             </div>
//             <div className="form">
//                 <form>
//                     <input type='username' name='username' placeholder='Username...' required onChange/>
//                     <input type='password' name='pwd' placeholder='Password...' required onChange/>
//                 </form>
//                 <Link to = {Layout} className="button">Log In</Link>
//             </div>
//         </div>
//         </Router>
//     )
// }

class Login extends React.Component {
    async componentDidMount(){
        try{
            let res = await fetch('/isLoggedIn', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            });
            let result = await res.json();

            if(result && result.success){
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }
            else{
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }
        }
        catch(e){
            UserStore.loading = false;
            UserStore.isLoggedIn = false;

        }
    }   
    
    async doLogout() {
        try {
            let res = await fetch('/logout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let result = await res.json();

            if (result && result.success) {
                UserStore.isLoggedIn = false;
                UserStore.username = '';
            }
        }
        catch (e) {
            console.log(e)

        }
    }

    render () {

        if(UserStore.loading) {
            return (
                <div className="app">
                    <div className='container'>
                        Loading, please wait...
                    </div>
                </div>
            );
        }
        else{
            if(UserStore.isLoggedIn){
                return(
                    <div className="app">
                        <div className='container'>
                            <Layout/>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div className="page" >
                        <style>{'body { background-color: #d3d3d3; }'}</style>
                    {/* <Router> */}
                        
                        {/* <div>
                            <div className="logo">
                                <img src={logo} alt="MARCO Logo" />
                            </div>
                            <div className="form">
                                <form>
                                    <input type='username' name='username' placeholder='Username...' required onChange />
                                    <input type='password' name='pwd' placeholder='Password...' required onChange />
                                </form>
                            </div>
                            <div>
                                <SubmitButton
                                    text={'Log In'}
                                    disabled={false}
                                    // onClick={() => t}
                                />
                            </div>
                        </div> */}
                        <div className="logo">
                            <img src={logo} alt="MARCO Logo" />
                        </div>
                        <div className="login">
                            <LoginForm></LoginForm>
                        </div>
                        
                    {/* </Router> */}
                    </div>
                )
            }
        }   
        
    }
}

export default observer(Login); // si pongo observer se queda en la pagina de login
