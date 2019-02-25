import React from 'react';

class DashboardNav extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">DevWeek</a>
                    
                        <ul>
                            <li>
                                <i className="fa fa-user"></i>
                            </li>
                            <li>
                                <i className="fa fa-bars"></i>
                            </li>
                        </ul>
                    
                </nav>
            </div>
        )
    }
}

export default DashboardNav;