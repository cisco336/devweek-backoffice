import React from 'react';
import { NavLink } from 'react-router-dom';

// Material UI
import Tooltip from '@material-ui/core/Tooltip';
import ButtonBase from '@material-ui/core/ButtonBase';

// Material UI Icons
import Dashboard from '@material-ui/icons/DashboardOutlined';
import EventIcon from '@material-ui/icons/Event';
import RecordVoiceOverOutlined from '@material-ui/icons/RecordVoiceOverOutlined';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import PlayArrow from '@material-ui/icons/PlayArrow';

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
                <NavLink to="/">
                    <ButtonBase>
                        <li>
                            <div>
                                <Dashboard />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Home
                            </small>
                        </li>
                    </ButtonBase>
                </NavLink>
                <NavLink to="/speakers">
                    <ButtonBase>
                        <li>
                            <div>
                                <RecordVoiceOverOutlined  />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Speakers
                            </small>
                        </li>
                    </ButtonBase>
                </NavLink>
                <NavLink to="/events">
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
                </NavLink>

                
                {/* Slider to expand or shrink the side nav */}
                <Tooltip title="Grow / Shrink" aria-label="Grow / Shrink" placement="right-start">
                    <span className={this.state.expand ? 'slider show': 'slider'} onClick={this.expandNav}>
                        <PlayArrow />
                    </span>
                </Tooltip>
                <span className="spacer" />
                <NavLink to="/settings">
                    <ButtonBase>
                        <li>
                            <div>
                                <SettingsOutlined />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Settings
                            </small>
                        </li>
                    </ButtonBase>
                </NavLink>
            </ul>
        )
    }
}

export default DashboardNav;