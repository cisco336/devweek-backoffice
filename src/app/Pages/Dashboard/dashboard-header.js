import React from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

// Material UI Icons
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';

class DashboardHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClick(event) {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose() {
    this.setState({ anchorEl: null });
    };
    render() {
        const { anchorEl } = this.state;
        return(
            <AppBar position="static" color="primary">
                <Toolbar className="topnav">
                    <Typography variant="h6" color="inherit">
                        Title
                    </Typography>
                    <div>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-owns={this.anchorEl ? 'users-menu' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                        >
                            <AccountCircleOutlined />
                        </IconButton>
                        <Menu
                            id="user-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <Divider />
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default DashboardHeader;