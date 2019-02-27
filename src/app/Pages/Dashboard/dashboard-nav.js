import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Tooltip from '@material-ui/core/Tooltip';
import ButtonBase from '@material-ui/core/ButtonBase';

// Material UI Icons
import HomeIcon from '@material-ui/icons/HomeOutlined';
import EventIcon from '@material-ui/icons/Event';

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
                    <ButtonBase>
                        <li>
                            <div>
                                <HomeIcon />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Home
                            </small>
                        </li>
                    </ButtonBase>
                </Link>
                <Link to="/speakers">
                    <ButtonBase>
                        <li>
                            <div>
                                <i className="fa fa-users" />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Speakers
                            </small>
                        </li>
                    </ButtonBase>
                </Link>
                <Link to="/events">
                    <ButtonBase>
                        <li>
                            <div>
                                <EventIcon />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Events
                            </small>
                        </li>
                    </ButtonBase>
                </Link>
                    <Tooltip title="Grow / Shrink" aria-label="Grow / Shrink" placement="right-start">
                <span className={this.state.expand ? 'slider show': 'slider'} onClick={this.expandNav}>
                        <i className="fa fa-caret-right " />
                </span>
                    </Tooltip>
                <span className="spacer" />
                <Link to="/">
                    <ButtonBase>
                        <li>
                            <div>
                                <i className="fa fa-cog" />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Settings
                            </small>
                        </li>
                    </ButtonBase>
                </Link>
            </ul>
        )
    }
}

export default DashboardNav;