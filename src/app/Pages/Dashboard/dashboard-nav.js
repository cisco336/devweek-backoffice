import React from 'react';
import Link from 'react-router-dom';

class DashboardNav extends React.Component {
    render() {
        return(
            <div>    
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
            </div>
        )
    }
}

export default DashboardNav;