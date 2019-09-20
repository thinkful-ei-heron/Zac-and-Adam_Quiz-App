const STORE = [
    {
        question: 'How many planets are in our solar system?',
        options: [
            '5',
            '6',
            "8",
            '10'
        ],
        answer: '8'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: [
            'Jupiter',
            'Saturn',
            'Earth',
            'Mars'
        ],
        answer: 'Jupiter'
    },
    {
        question: '"The Red Planet" is a poetic name for which planet?',
        options: [
            'Uranus',
            'Mars',
            'Venus',
            'Mercury'
        ],
        answer: 'Mars'
    },
    {
        question: 'What is the name of the galaxy we live in?',
        options: [
            'The Whirlpool',
            'The Andromeda',
            'The Black-Eye',
            'The Milky Way'
        ],
        answer: 'The Milky Way'
    },
    {
        question: 'How many natural satellites does Earth have?',
        options: [
            '1',
            '2',
            '12',
            'none'
        ],
        answer: '1'
    }
]

for (let i = 0; i <= STORE.length; i++) {
    console.log(STORE[i].question);
    console.log(STORE[i].answer);
}