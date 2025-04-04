Quiz Maker App Documentation
Table of Contents
Introduction

Installation and Setup

Project Structure

Context API

Components

App Routing

Usage Guide

Key Features

Future Enhancements

1. Introduction
The Quiz Maker App is a simple React-based application that allows users to create and answer quiz questions. Users can select the type of question (text or multiple-choice), input the question, and provide possible answers. The application then displays the question to the user for answering and evaluates the response.

2. Installation and Setup
To run this application locally, follow these steps:

Prerequisites
Ensure you have the following installed:

Node.js (v16 or later)

npm (Node Package Manager) or yarn

Steps to Install
Clone the repository:

sh
Copy
Edit
git clone https://github.com/your-repo/quiz-maker-app.git
Navigate to the project directory:

sh
Copy
Edit
cd quiz-maker-app
Install dependencies:

sh
Copy
Edit
npm install
Start the development server:

sh
Copy
Edit
npm run dev
Open the application in a browser at:

arduino
Copy
Edit
http://localhost:5173
3. Project Structure
mathematica
Copy
Edit
quiz-maker-app/
│── src/
│   ├── Components/
│   │   ├── Display/
│   │   │   ├── Display.jsx
│   │   ├── Maker/
│   │   │   ├── Maker.jsx
│   ├── Context/
│   │   ├── Context.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   ├── App.jsx
│   ├── index.jsx
│── public/
│── package.json
│── README.md
4. Context API
The Context API manages global state, storing user inputs and quiz-related data.

Context/Context.jsx
js
Copy
Edit
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [type, setType] = useState("text");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showType, setShowType] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  const checkAnswer = () => {
    if (!userChoice) {
      alert("Enter an answer");
      return;
    }
    setResult(answer === userChoice ? "Correct" : "Wrong");
    setShowResult(true);
  };

  const contextValue = {
    type, setType, question, setQuestion, answer, setAnswer,
    showType, setShowType, showQuestion, setShowQuestion,
    showAnswer, setShowAnswer, waiting, setWaiting,
    option1, setOption1, option2, setOption2, option3, setOption3,
    userChoice, setUserChoice, result, showResult, checkAnswer
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};
5. Components
The app consists of the following key components:

Maker.jsx
Handles question creation.

Allows users to input the question type, question text, and possible answers.

js
Copy
Edit
import React, { useContext } from "react";
import { Context } from "../../Context/Context";

const Maker = () => {
  const { type, setType, question, setQuestion, showType, setShowType, showQuestion, setShowQuestion, showAnswer, setShowAnswer, waiting, setWaiting, option1, setOption1, option2, setOption2, option3, setOption3, answer, setAnswer } = useContext(Context);

  return (
    <div className="bg-slate-100 rounded flex flex-col items-center w-[45%] mt-10 mx-auto px-4 py-4">
      {showType && (
        <div className="flex flex-col items-center py-3 px-2 h-[80vh] justify-center">
          <h1 className="text-black font-bold text-4xl my-5 mx-auto">Type of question?</h1>
          <select onChange={(e) => setType(e.target.value)} className="my-5 w-52">
            <option value="text">Text</option>
            <option value="radio">Multiple Choice</option>
          </select>
          <button className="text-white bg-black rounded w-32" onClick={() => { setShowType(false); setShowQuestion(true); }}>Submit</button>
        </div>
      )}
      {showQuestion && (
        <div className="flex flex-col items-center py-3 px-2 h-[80vh] justify-center">
          <h1 className="text-black font-bold text-4xl my-5 mx-auto">Enter Question</h1>
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} className="my-5 w-52" />
          <button className="text-white bg-black rounded w-32" onClick={() => { setShowQuestion(false); setShowAnswer(true); }}>Submit</button>
        </div>
      )}
      {showAnswer && type === "radio" && (
        <div className="flex flex-col items-center py-3 px-2 h-[80vh] justify-center">
          <h1 className="text-black font-bold text-4xl my-5 mx-auto">Enter Options</h1>
          <input type="text" value={option1} onChange={(e) => setOption1(e.target.value)} className="my-5 w-52" placeholder="Option 1" />
          <input type="text" value={option2} onChange={(e) => setOption2(e.target.value)} className="my-5 w-52" placeholder="Option 2" />
          <input type="text" value={option3} onChange={(e) => setOption3(e.target.value)} className="my-5 w-52" placeholder="Option 3" />
          <button className="text-white bg-black rounded w-32" onClick={() => { setShowAnswer(false); setWaiting(true); }}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Maker;
6. App Routing
The app is structured using React Router.

App.jsx
js
Copy
Edit
import React from 'react';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className='bg-slate-300 h-[100vh]'>
      <Home/>
    </div>
  );
};

export default App;
7. Usage Guide
Select the type of question (Text or Multiple Choice).

Enter the question text.

If Multiple Choice, enter up to 3 options.

Click Submit to confirm.

The question will be displayed for answering.
