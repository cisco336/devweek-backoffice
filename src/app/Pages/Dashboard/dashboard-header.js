import React from 'react';

class DashboardHeader extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">Title</a>
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