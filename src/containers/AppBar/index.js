import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";

// material-ui
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// utils
import { signOut } from '../../store/actions/index';

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
  
class CustomAppBar extends Component {
    render() {
        const { classes } = this.props;

        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Akads
                    </Typography>
                    <Button onClick={this.props.signOut} color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

AppBar.propTypes = {
    classes: PropTypes.object,
};
  

const mapStateToProps = state => {
    return {
      auth: state.firebase.auth,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      signOut: () => dispatch(signOut()),
    };
  };

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CustomAppBar));