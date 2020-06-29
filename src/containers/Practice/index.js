import React, { Component } from 'react';

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

class Practice extends Component {
    state = {
        answer: samplePractice.options[0]
    }

    handleChange = (event) => {
        this.setState({ answer: event.target.value });
    };

    render() {
        const options = [];
        samplePractice.options.forEach(option => {
            options.push(
                <FormControlLabel value={option} control={<Radio />} label={option.charAt(0).toUpperCase() + option.slice(1)} />
            )
        })

        return (
            <div>
                <div>
                    {samplePractice.question}
                </div>
                <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Multiple Choice</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={this.state.answer} onChange={handleChange}>
                        {options}
                    </RadioGroup>
                </FormControl>
                </div>
            </div>
        )
    }
}

export default Practice;