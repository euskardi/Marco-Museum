import React from 'react'

import { Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Agenda from '../pages/Agenda'
import Login from '../pages/Login'
import Usuarios from '../pages/Usuarios'



const Routes = () => {
    return (
        <Switch>
            <Route path='/usuarios' component={Usuarios} />
            {/* <Route path = '/exposiciones' exact component={Dashboard}/> */}
            <Route path = '/agenda' component={Agenda}/>
            <Route path='/' exact component={Login} />
        </Switch>
    )
}

export default Routes
