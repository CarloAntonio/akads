
import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const sampleLesson = {
    title: "Draw Pictures to Add",
    prereq: 'none',
    id: "1234",
    grade: "first",
    subject: "math",
    video: "https://www.youtube.com/embed/YNInoJPaJco",
    script: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue tincidunt pretium. Morbi ut pharetra mi. Vivamus rutrum, elit a dignissim laoreet, eros turpis dignissim velit, sit amet ullamcorper mi nunc id orci. Donec ut mauris tempor dui bibendum maximus. Praesent et rhoncus ante. Ut viverra consequat finibus. Aliquam fermentum lectus ac commodo aliquet. Etiam vitae elementum velit. Morbi ultrices semper blandit. Aliquam placerat dui in dolor convallis, vel vulputate ligula fringilla. In hac habitasse platea dictumst. Ut consequat mauris enim, sit amet convallis nulla bibendum vel. Cras ut varius eros. Suspendisse sit amet purus justo."
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
        title: {
        flexGrow: 1,
    },
        hide: {
        display: 'none',
    },
        drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
        drawerPaper: {
        width: drawerWidth,
    },
        drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function Lesson() {
    // Example only
    // const auth = useSelector(state => state.firebase.auth);
    // console.log(auth);
    // const dispatch = useDispatch()
    // dispatch("import function from store")

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <div className={classes.root}>
            <main
                className={clsx(classes.content, {
                [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            <div>
                <iframe width="420" height="315" title={sampleLesson.title}   src={sampleLesson.video}></iframe>
            </div>
            <div style={{ marginBottom: "10rem"}}>
                <Typography>{sampleLesson.script}</Typography>
            </div>
            <Button size="medium" onClick={handleDrawerOpen}>
                Practice Problems
            </Button>
            </main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronRightIcon />
                </IconButton>
                </div>
                <Divider />
                <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
            
            
        </div>
    )
}