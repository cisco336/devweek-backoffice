import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Styles
import '../Assets/scss/styles.scss';

// Components
import Main from './Pages/main'
import DashboardNav from './Pages/Dashboard/dashboard';

class App extends Component{

    render(){
        return(
            <DashboardNav />
            // <BrowserRouter>
            //     <Switch>
            //         <Route path="/" component={Main} exact/>
            //         <Route path="/dashboard" component={Dashboard} />
            //     </Switch>
            // </BrowserRouter>
        )
    }
}

export default App

