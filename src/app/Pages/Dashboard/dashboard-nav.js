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
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';

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
            <div>
                <NavLink exact to="/">
                    <ButtonBase>
                        
                            <div>
                                <Dashboard />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Home
                            </small>
                        
                    </ButtonBase>
                </NavLink>
                <NavLink to="/speakers">
                    <ButtonBase>
                            <div>
                                <RecordVoiceOverOutlined  />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Speakers
                            </small>
                    </ButtonBase>
                </NavLink>
                <NavLink to="/events">
                    <ButtonBase>
                            <div>
                                <EventIcon />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Events
                            </small>
                    </ButtonBase>
                </NavLink>
                <NavLink to="/articles">
                    <ButtonBase>
                            <div>
                                <DescriptionOutlined />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Articles
                            </small>
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
                        
                            <div>
                                <SettingsOutlined />
                            </div>
                            <small className={this.state.expand ? '' : 'no-show'}>
                                Settings
                            </small>
                        
                    </ButtonBase>
                </NavLink>
            </div>
        )
    }
}

export default DashboardNav;