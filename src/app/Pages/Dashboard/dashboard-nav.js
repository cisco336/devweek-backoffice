import React from 'react';
import { Link } from 'react-router-dom';

class DashboardNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expand: false
        };

        this.expandNav = this.expandNav.bind(this);
    }

    expandNav() {
        this.setState(state =>({expand: !state.expand}));
        console.log(this.state.expand);
    }
    
    render() {
        return(
            <ul>
                <Link to="/">
                    <li>
                        <i className="fa fa-home" />
                        <small className={this.state.expand ? '' : 'no-show'}>
                            Home
                        </small>
                    </li>
                </Link>
                <Link to="/speakers">
                    <li>
                        <i className="fa fa-users" />
                        <small className={this.state.expand ? '' : 'no-show'}>
                            Speakers
                        </small>
                    </li>
                </Link>
                <Link to="/events">
                    <li>
                        <i className="fa fa-bullhorn" />
                        <small className={this.state.expand ? '' : 'no-show'}>
                            Events
                        </small>
                    </li>
                </Link>
                <span className={this.state.expand ? 'slider show': 'slider'} onClick={this.expandNav}>
                    <i className="fa fa-caret-right " />
                </span>
                <span className="spacer" />
                <li>
                    <i className="fa fa-cog" />
                    <small className={this.state.expand ? '' : 'no-show'}>
                        Settings
                    </small>
                </li>
            </ul>
        )
    }
}

export default DashboardNav;