import React from 'react';
import Link from 'react-router-dom';

class DashboardNav extends React.Component {
    render() {
        return(
            <ul>
                <li>
                    Dashboard
                </li>
                <li>
                    Speakers
                </li>
                <li>
                    Events
                </li>
            </ul>
        )
    }
}

export default DashboardNav;