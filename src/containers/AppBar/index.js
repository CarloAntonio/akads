import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import clsx from 'clsx';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// utils
import { signOut } from '../../store/actions/index';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
  }));
  
export default function CustomAppBar() {
    const classes = useStyles();
    const showProblemDrawer = useSelector(state => state.misc.showProblemDrawer)
    const dispatch = useDispatch();

    return(
        <div>
            <AppBar position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: showProblemDrawer,
                })}
            >
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Akads
                </Typography>
                <Button onClick={() => dispatch(signOut())} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}