import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 2,
        // marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

class Landing extends Component {

    handleLoginRedirect = () => {
        this.props.history.push('/login')
    }

    handleSignUpRedirect = () => {
        this.props.history.push('/signup')
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Akads
                    </Typography>
                        <Button onClick={null} color="inherit" disabled={true}>Donate</Button>
                        <Button onClick={this.handleLoginRedirect} color="inherit">Login</Button>
                        <Button onClick={this.handleSignUpRedirect} color="inherit">Sign Up</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
  }
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Landing));