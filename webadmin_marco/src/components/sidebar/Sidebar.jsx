import React from 'react'

import './sidebar.css'

import { Link } from 'react-router-dom'

import logo from '../../assets/images/marcologo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

import UserStore from '../../stores/UserStore'
// import { Button } from 'react-bootstrap'

import SubmitButton from '../../pages/SubmitButton'

import { Observer } from 'mobx-react-lite'



const SidebarItem = props => {
    const active = props.active ? 'active': ''

    return (
        <div className="sidebar_item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const doLogout = () => {
    UserStore.isLoggedIn = false;
}



const Sidebar = props => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    console.log(UserStore.username);

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt ="MARCO Logo" />
            </div>
            {
                sidebar_items.map((item, index) =>(
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title = {item.display_name}
                            icon = {item.icon}
                            active = {index === activeItem}
                        />
                    </Link>
                ))
            }
            <div className="login-name">
                Logged in as: {UserStore.username} 
                <input type="button" value="Logout" className="logout" onClick={doLogout}/> 
            </div>
        </div>
    )
}

export default Sidebar
