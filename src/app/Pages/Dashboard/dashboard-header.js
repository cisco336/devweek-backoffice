import React from 'react';

class DashboardHeader extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-light">
                    <span className="navbar-brand" href="#">Title</span>
                        <ul>
                            <li>
                                <i className="far fa-bell" />
                            </li>
                            <li>
                                <i className="far fa-envelope" />
                            </li>
                            <li>
                               <i className="fa fa-sign-out-alt" /> 
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}

export default DashboardHeader;