const Question = [
    {
        question: "What is the correct command to create a new React project?",
        options: [
            "npm create-react-app",
            "npx create-react-app",
            "npm create-react-ap myReactApp",
            "npx create-react-app myreactapp"
        ],
        correctAns: "npx create-react-app myreacteapp",
    },
    {
        question: "What does myReactApp refer to in the following command?",
        options: [
            "The directory to create the new app in",
            "The name you want to use for the new app",
            "A reference to an existing app",
            "The type of app to create"
        ],
        correctAns: "The name you want to use for the new app",
    },
    {
        question: "What command is used to start the React local development server?",
        options: [
            "npm start ",
            "npm build",
            "npm serve",
            "npm run dev"
        ],
        correctAns: "npm start",
    },
    {
        question: "What is the default local host port that a React development server uses?",
        options: [
            "3500",
            "3000",
            "8080",
            "5000"
        ],
        correctAns: "3000",
    },
    {
        question: "What is the children prop?",
        options: [
            "A property that adds child values to state",
            "A property that lets you set an object as a property",
            "A property that lets you pass data to child components",
            "A property that lets you nest components in other components"
        ],
        correctAns: "A property that lets you nest components in other components",
    },
    {
        question: "Which keyword creates a constant in JavaScript?",
        options: [
            "var",
            "constant",
            "let",
            "const"
        ],
        correctAns: "const",
    },
    {
        question: "Which operator can be used to conditionally render a React component?",
        options: [
            "::",
            "&&",
            "||",
            "??"
        ],
        correctAns: "&&",
    },
    {
        question: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
        options: [
            "index",
            "data",
            "id",
            "key"
        ],
        correctAns: "key",
    },
    {
        question: "What props will be available to the following component?  <Car {...props} />",
        options: [
            "only static ones",
            "children",
            "all of them",
            "only updated ones"
        ],
        correctAns: "only updated ones",
    },
    {
        question: "Why should you avoid copying the values of props into a component's state?",
        options: [
            "Because you want to allow data to flow back up to the parent",
            "Because prop values cannot be stored in state",
            "Because that would create two instances of the same state that could become out of sync ",
            "Because you should never mutate state"
        ],
        correctAns: "Because that would create two instances of the same state that could become out of sync ",
    },
]