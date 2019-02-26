import React from 'react';
import { Link } from 'react-router-dom';

class DashboardNav extends React.Component {
    render() {
        return(
            <div>    
                <ul>
                    <li>
                        <Link to="/">
                            <i className="fa fa-home" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/speakers">
                            <i className="fa fa-users" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/events">
                            <i className="fa fa-bullhorn" />
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default DashboardNav;