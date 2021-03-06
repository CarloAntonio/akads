import React from 'react';
import { useDispatch } from 'react-redux';


// material-ui
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// utils
import { openProblemDrawer } from '../../store/actions/index';

const sampleLesson = {
    title: "Draw Pictures to Add",
    prereq: 'none',
    id: "1234",
    grade: "first",
    subject: "math",
    video: "https://www.youtube.com/embed/YNInoJPaJco",
    script: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue tincidunt pretium. Morbi ut pharetra mi. Vivamus rutrum, elit a dignissim laoreet, eros turpis dignissim velit, sit amet ullamcorper mi nunc id orci. Donec ut mauris tempor dui bibendum maximus. Praesent et rhoncus ante. Ut viverra consequat finibus. Aliquam fermentum lectus ac commodo aliquet. Etiam vitae elementum velit. Morbi ultrices semper blandit. Aliquam placerat dui in dolor convallis, vel vulputate ligula fringilla. In hac habitasse platea dictumst. Ut consequat mauris enim, sit amet convallis nulla bibendum vel. Cras ut varius eros. Suspendisse sit amet purus justo."
}

export default function LessonBoard(props) {
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div>
                <iframe width="420" height="315" title={sampleLesson.title}   src={sampleLesson.video}></iframe>
            </div>
            <div style={{ marginBottom: "10rem"}}>
                <Typography>{sampleLesson.script}</Typography>
            </div>
            <Button size="medium" onClick={() => dispatch(openProblemDrawer())}>
                Practice Problems
            </Button>
            <Button size="medium" onClick={() => props.shouldShowLessonBoard(false)}>
                Hide Lesson Board
            </Button>
        </React.Fragment>
    )
}