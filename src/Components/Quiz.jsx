import React, { useEffect } from "react";
import { useState } from "react";

import { Grid, Paper, Typography, Button } from "@mui/material";
import { Box } from "@mui/material";
// import Timer from "./Timer";

import Slider from '@mui/material/Slider';


import '../App.css';




function Quiz() {
    const questions = [
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
    const [counter, setCounter] = useState(10);
    // const [timeOut, setTimeOut] = useState(false)
    const [indexNumber, setIndexNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    // const [showQuiz, setShowQuiz] = useState(false);


    let checkQuestion = (a, b) => {
        if (a == b) {
            setScore(score + 1);
        }
        if (indexNumber + 1 == questions.length) {
            setShowResult(true);
        } else {
            setIndexNumber(indexNumber + 1);
        }
        setCounter(10)

    };

    // let quizHandler = () => {
    //     setShowQuiz(true);
    // }



    useEffect(() => {
        if (counter === 0) {
            setIndexNumber(indexNumber + 1);
            setCounter(10)
        }

        const timer =
            counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);






    return (

        // {(showQuiz === false) ?  <Box><Button onClick={quizHandler}> StartQuiz </Button></Box> :

            <Box className="box1" sx={{
                m: 1, height: "650px", width: "80%", display: "flex", flexDirection: "column",
                justifyContent: "center", color: "black"
            }}>


                '
                {/* Heading */}
                <Typography variant="h2" sx={{ textAlign: "center", color: "black", padding: "20px" }}>
                    React Quiz
                </Typography>

                {/* Heading End */}


                {/* Main Box Start */}



                {showResult ? <Box sx={{
                    border: "5px solid black", display: "flex", width: "80%", margin: "auto", height: "350px",
                    flexDirection: "column", alignContent: "center", alignItems: "center",
                    justifyContent: " space-evenly"
                }}>

                    {/* Ressult Card  */}


                    <Box>
                        {/* <progress className="p-3" id="file" value={score} max={questions.length}></progress> */}
                        <Slider
                            value={score}
                            max={questions.length}
                            sx={{
                                width: 300,
                                color: 'success.main',
                            }}
                        />


                    </Box>

                    <Box>
                        <Typography variant="h5">
                            Correct answers is {(score)} out of 10
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5">
                            Your percentage is {((score / questions.length) * 100).toFixed(2)} %
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5">
                            {(score / questions.length) * 100 < 60 ? "Fail 😞" : "Pass 🤗"}{" "}
                        </Typography>
                    </Box>





                </Box> : <Box sx={{
                    border: "5px solid black", borderRadius: "15px", m: 1, p: "10px", height: "450px", display: "flex",
                    alignItems: "center", flexDirection: "column"
                }}>

                    {/* Counter Box */}
                    <Box sx={{
                        fontFamily: "Roboto", display: "flex", justifyContent: " space-between",
                        width: "100%", alignItems: "center"
                    }}>


                        <Typography variant="h6" sx={{ display: "flex", alignItems: " center" }}>
                            <Typography variant="h4" sx={{ m: 0 }}>  Question no   {indexNumber + 1}/ </Typography>  {questions.length}
                        </Typography>

                        <Box>
                            <Typography variant="h5">
                                Countdown: {counter}
                            </Typography>

                        </Box>

                    </Box>
                    {/* Counter Box */}

                    {/* question Box */}
                    <Box sx={{ height: "100px", width: "97%", padding: "10px", margin: "10px" }}>

                        <Typography variant="h5">
                            {questions[indexNumber].question}
                        </Typography>

                    </Box>
                    {/* question Box  End*/}



                    {/* Option box */}
                    <Box>
                        <Grid container>
                            {questions[indexNumber].options.map((e, i) => {
                                return (
                                    <Grid key={i} item md={6}>
                                        <Paper sx={{ height: "75px", width: "100%", textAlign: "center", backgroundColor: "black" }}>

                                            <button className="buttons"
                                                onClick={() => checkQuestion(e, questions[indexNumber].correctAns)}
                                                label={e}>
                                                {e}
                                            </button>
                                        </Paper>
                                    </Grid>
                                );
                            })}


                        </Grid>


                    </Box>




                </Box>}






            </Box >

                        // }

    );
}

export default Quiz;