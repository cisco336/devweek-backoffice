import React from 'react';

class DashboardHeader extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand" href="#">Title</span>
                        <ul>
                            <li>
                                User's menu
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}

export default DashboardHeader;