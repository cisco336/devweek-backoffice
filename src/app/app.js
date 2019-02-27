import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

// Material UI Theming
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';

// Styles
import '../Assets/scss/styles.scss';

// Components
import DashboardHeader from './Pages/Dashboard/dashboard-header';
import DashboardNav from './Pages/Dashboard/dashboard-nav';
import Statistics from './Pages/Dashboard/components/statistics';
import Speakers from './Pages/Dashboard/components/speakers';
import Event from './Pages/Dashboard/components/event';
import Settings from './Pages/Settings/settings';

// Theming
const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        type: 'light',
        primary: colors.deepPurple,
        secondary: colors.pink
    },
});

class App extends Component{

    render(){
        return(
            <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <div className="wrapper">
                    <DashboardHeader/>
                        <div className="wrapper__grid">
                            <section className="wrapper__grid--nav">
                                <DashboardNav />
                            </section>
                            <section className="wrapper__grid--content">
                                <Route path="/" component={Statistics} exact/>
                                <Route path="/speakers" component={Speakers} exact/>
                                <Route path="/events" component={Event}exact/>
                                <Route path="/settings" component={Settings} exact />
                            </section>
                        </div>
                </div>
            </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}

export default App



{/* <div className="wrapper">
                <DashboardHeader />
                <div className="wrapper__grid">
                    <section className="wrapper__grid--nav">
                    </section>
                    <BrowserRouter>
                        <DashboardNav />
                        <section className="wrapper__grid--content">
                            <Switch>
                                <Route path="/" component={Statistics} exact/>
                                <Route path="/speakers" component={Speakers} exact/>
                                <Route path="/events" component={Event}exact/>
                            </Switch>
                        </section>
                    </BrowserRouter>
                </div>    
            </div> */}

