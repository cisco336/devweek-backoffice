import React from 'react';
import { Link } from 'react-router-dom';

class DashboardNav extends React.Component {
    render() {
        return(
            <div>    
                <ul>
                    <li>
                        <Link to="/">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/speakers">
                            Speakers
                        </Link>
                    </li>
                    <li>
                        <Link to="/events">
                            Events
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default DashboardNav;