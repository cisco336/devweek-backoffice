import React from 'react';

class DashboardHeader extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-light">
                    <span className="navbar-brand" href="#">Title</span>
                        <ul>
                            <li>
                                <small>
                                    Welcome "user"
                                </small>
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}

export default DashboardHeader;