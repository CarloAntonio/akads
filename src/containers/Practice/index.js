import React from 'react';

// material-ui
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const samplePractice = {
    id: "123",
    lesson: "1234",
    grade: "first",
    subject: "math",
    type: "mc",
    question: "which of these is the correct answer",
    answer: "a",
    options: ["cat", "dog", "fish", "carabao"]
}

export default function Practice (props) {
    const [value, setValue] = React.useState('answer');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const options = [];
        samplePractice.options.forEach(option => {
            options.push(
                <FormControlLabel value={option} control={<Radio />} label={option.charAt(0).toUpperCase() + option.slice(1)} />
            )
        })
    
    let lessonBoardButton = null;
    if(!props.showLessonBoard){
        lessonBoardButton = (
            <Button size="medium" onClick={() => props.shouldShowLessonBoard(true)}>
                Show Lesson Board
            </Button>
        )
    }

    return (
        <div>
            <div>
                {samplePractice.question}
            </div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Multiple Choice</FormLabel>
                    <RadioGroup aria-label="question" name="question" value={value} onChange={handleChange}>
                        {options}
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <Button size="medium" onClick={() => props.shouldShowPractice(false)}>
                    Hide Practice Board
                </Button>
                {lessonBoardButton}
            </div>
        </div>
    )
}