
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

// custom components
import LessonBoard from '../LessonBoard';
import Practice from '../Practice';

// utils
import { closeProblemDrawer } from '../../store/actions/index';

const samplePractices = [
    {
        id: "123",
        name: "Question 1",
        lesson: "1234",
        grade: "first",
        subject: "math",
        type: "mc",
        question: "which of these is the correct answer",
        answer: "a",
        options: ["cat", "dog", "fish", "carabao"]
    },
    {
        id: "234",
        name: "Question 2",
        lesson: "1234",
        grade: "first",
        subject: "math",
        type: "mc",
        question: "which of these is the correct answer",
        answer: "a",
        options: ["cat", "dog", "fish", "carabao"]
    },
    {
        id: "345",
        name: "Question 3",
        lesson: "1234",
        grade: "first",
        subject: "math",
        type: "mc",
        question: "which of these is the correct answer",
        answer: "a",
        options: ["cat", "dog", "fish", "carabao"]
    },
]

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
    const showProblemDrawer = useSelector(state => state.misc.showProblemDrawer);
    const dispatch = useDispatch();
    const classes = useStyles();

    const [showPractice, shouldShowPractice] = React.useState(true);
    const [showLessonBoard, shouldShowLessonBoard] = React.useState(true);
    const [practiceId, setPracticeId] = React.useState(null);

    useEffect(() => {
        return function cleanup() {
          dispatch(closeProblemDrawer())
        };
    }, [dispatch]);

    const practiceList = samplePractices.map((practice, index) => (
        <ListItem button key={practice.id}>
            <ListItemText onClick={() => handlePracticeProblemClick(practice.id)} primary={practice.name} />
        </ListItem>
    ))

    let lessonBoard = null;
    if(showLessonBoard){
        lessonBoard = (
            <Grid item xs={showPractice ? 7 : 12}>
                <LessonBoard shouldShowLessonBoard={shouldShowLessonBoard}/>
            </Grid>
        )
    }

    let practice = null;
    if(showPractice){
        practice = (
            <Grid item xs={showLessonBoard ? 5 : 12}>
                <Practice 
                    shouldShowPractice={shouldShowPractice}
                    shouldShowLessonBoard={shouldShowLessonBoard}
                    showLessonBoard={showLessonBoard}/>
            </Grid>
        );
    }

    const handlePracticeProblemClick = (practiceId) => {
        setPracticeId(practiceId);
        shouldShowPractice(true);
    }

    return (
        <div className={classes.root}>
            <main
                className={clsx(classes.content, {
                [classes.contentShift]: showProblemDrawer,
                })}
            >
                <div className={classes.drawerHeader} />
                <Grid container spacing={2}>
                    {lessonBoard}
                    {practice}
                </Grid>
            </main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={showProblemDrawer}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                <IconButton onClick={() => dispatch(closeProblemDrawer())}>
                    <ChevronRightIcon />
                </IconButton>
                </div>
                <Divider />
                <List>
                    {practiceList}
                </List>
            </Drawer>
        </div>
    )
}