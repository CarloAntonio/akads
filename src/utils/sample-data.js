
const grades = {
    first: {
        subjects: {
            math: {
                title: "First Grade Math",
            },
            reading: {
                title: "First Grade Reading",
            },
            science: {
                title: "First Grade Science",
            }
        }
    },
    second: {
        subjects: {
            math: {
            }
        }
    },
    third: {
        subjects: {
            math: {
            }
        }
    }
}

export const lessons = [
    {
        title: "Draw Pictures to Add",
        prereq: 'none',
        id: "1234",
        grade: "first",
        subject: "math",
        video: "https://www.youtube.com/watch?v=YNInoJPaJco",
        script: "some text"
    },
    {
        title: "Draw Circles to Add",
        prereq: '1234',
        id: "2345",
        grade: "first",
        subject: "math",
        video: "url",
        script: "some text"
    },
    {
        title: "Writing Addition Problems (using pictures)",
        prereq: '2345',
        id: "3456",
        grade: "first",
        subject: "math",
        video: "url",
        script: "some text"
    },
    {
        title: "Count On (Start with greater addend)",
        prereq: '3456',
        id: "4567",
        grade: "first",
        subject: "math",
        video: "url",
        script: "some text"
    },
    {
        title: "Add Doubles",
        prereq: '4567',
        id: "5678",
        grade: "first",
        subject: "math",
        video: "url",
        script: "some text"
    },
    {
        title: "Use Doubles to Add",
        prereq: '5678',
        id: "6789",
        grade: "first",
        subject: "math",
        video: "url",
        script: "some text"
    },
    {
        title: "Adding to 20 (use previous strategies)",
        prereq: '1234',
        id: "2345",
        grade: "first",
        subject: "math",
        video: "url",
        script: "some text"
    },
    {
        title: "Count On Using Hundred Chart (count on by ones and tens)",
        prereq: '6789',
        id: "7890",
        grade: "first",
        subject: "math",
        video: "url",
        script: "some text"
    },
    {
        title: "Use Models to Add Ones",
        prereq: '7890',
        id: "8901",
        grade: "first",
        subject: "math",
        video: "url",
        script: "some text"
    },
    {
        title: "Make 10 to Add",
        prereq: '8901',
        id: "9012",
        grade: "first",
        subject: "math",
        video: "url",
        script: "some text"
    },
];

export const practice = [
    {
        id: "123",
        lesson: "1234",
        grade: "first",
        subject: "math",
        type: "mc",
        question: "which of these is the correct answer",
        answer: "a",
        options: ["cat", "dog", "fish", "carabao"]
    },
]

export default grades;