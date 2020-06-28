
const grades = {
    first: {
        subjects: {
            math: {
                title: "First Grade Math",
                lessons: [
                    {
                        title: "Draw Pictures to Add",
                    },
                    {
                        title: "Draw Circles to Add",
                    },
                    {
                        title: "Writing Addition Problems (using pictures)",
                    },
                    {
                        title: "Count On (Start with greater addend)",
                    },
                    {
                        title: "Add Doubles",
                    },
                    {
                        title: "Use Doubles to Add",
                    },
                    {
                        title: "Adding to 20 (use previous strategies)",
                    },
                    {
                        title: "Count On Using Hundred Chart (count on by ones and tens)",
                    },
                    {
                        title: "Use Models to Add Ones",
                    },
                    {
                        title: "Make 10 to Add",
                    },
                ]
            },
            reading: {
                title: "First Grade Reading",
                lessons: [
                    {
                        title: "Draw Pictures to Add",
                    },
                    {
                        title: "Draw Circles to Add",
                    },
                    {
                        title: "Writing Addition Problems (using pictures)",
                    },
                    {
                        title: "Count On (Start with greater addend)",
                    },
                    {
                        title: "Add Doubles",
                    },
                    {
                        title: "Use Doubles to Add",
                    },
                    {
                        title: "Adding to 20 (use previous strategies)",
                    },
                    {
                        title: "Count On Using Hundred Chart (count on by ones and tens)",
                    },
                    {
                        title: "Use Models to Add Ones",
                    },
                    {
                        title: "Make 10 to Add",
                    },
                ]
            },
            science: {
                title: "First Grade Science",
                lessons: [
                    {
                        title: "Draw Pictures to Add",
                    },
                    {
                        title: "Draw Circles to Add",
                    },
                    {
                        title: "Writing Addition Problems (using pictures)",
                    },
                    {
                        title: "Count On (Start with greater addend)",
                    },
                    {
                        title: "Add Doubles",
                    },
                    {
                        title: "Use Doubles to Add",
                    },
                    {
                        title: "Adding to 20 (use previous strategies)",
                    },
                    {
                        title: "Count On Using Hundred Chart (count on by ones and tens)",
                    },
                    {
                        title: "Use Models to Add Ones",
                    },
                    {
                        title: "Make 10 to Add",
                    },
                ]
            }
        }
    },
    second: {
        subjects: {
            math: {
                lessons: [
                    {
                        title: "Draw Pictures to Add",
                    },
                    {
                        title: "Draw Circles to Add",
                    },
                    {
                        title: "Writing Addition Problems (using pictures)",
                    },
                    {
                        title: "Count On (Start with greater addend)",
                    },
                    {
                        title: "Add Doubles",
                    },
                    {
                        title: "Use Doubles to Add",
                    },
                    {
                        title: "Adding to 20 (use previous strategies)",
                    },
                    {
                        title: "Count On Using Hundred Chart (count on by ones and tens)",
                    },
                    {
                        title: "Use Models to Add Ones",
                    },
                    {
                        title: "Make 10 to Add",
                    },
                ]
            }
        }
    },
    third: {
        subjects: {
            math: {
                lessons: [
                    {
                        title: "Draw Pictures to Add",
                    },
                    {
                        title: "Draw Circles to Add",
                    },
                    {
                        title: "Writing Addition Problems (using pictures)",
                    },
                    {
                        title: "Count On (Start with greater addend)",
                    },
                    {
                        title: "Add Doubles",
                    },
                    {
                        title: "Use Doubles to Add",
                    },
                    {
                        title: "Adding to 20 (use previous strategies)",
                    },
                    {
                        title: "Count On Using Hundred Chart (count on by ones and tens)",
                    },
                    {
                        title: "Use Models to Add Ones",
                    },
                    {
                        title: "Make 10 to Add",
                    },
                ]
            }
        }
    }
}

export const lessons = [
    {
        title: "Draw Pictures to Add",
        prereq: 'none',
        id: "1234"
    },
    {
        title: "Draw Circles to Add",
        prereq: '1234',
        id: "2345"
    },
    {
        title: "Writing Addition Problems (using pictures)",
        prereq: '2345',
        id: "3456"
    },
    {
        title: "Count On (Start with greater addend)",
        prereq: '3456',
        id: "4567"
    },
    {
        title: "Add Doubles",
        prereq: '4567',
        id: "5678"
    },
    {
        title: "Use Doubles to Add",
        prereq: '5678',
        id: "6789"
    },
    {
        title: "Adding to 20 (use previous strategies)",
        prereq: '1234',
        id: "2345"
    },
    {
        title: "Count On Using Hundred Chart (count on by ones and tens)",
        prereq: '6789',
        id: "7890"
    },
    {
        title: "Use Models to Add Ones",
        prereq: '7890',
        id: "8901"
    },
    {
        title: "Make 10 to Add",
        prereq: '8901',
        id: "9012"
    },
];

export default grades;