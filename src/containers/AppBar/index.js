import React from 'react'
import { useSelector, useDispatch } from "react-redux";

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
  }));
  
export default function CustomAppBar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const auth = useSelector(state => state.firebase.auth);
    

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
                <Button onClick={() => dispatch(signOut())} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}