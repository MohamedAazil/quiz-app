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
    if (userChoice.length == 0) {
      alert("Enter Answer");
      return;
    }
    console.log(userChoice)
    console.log(result)

    if (answer === userChoice) {
      setResult("Correct");
    }
    else{
        setResult("Wrong")
    }
    setShowResult(true);
  };

  const contextValue = {
    type,
    setType,
    answer,
    setAnswer,
    question,
    setQuestion,
    showType,
    setShowType,
    showQuestion,
    setShowQuestion,
    showAnswer,
    setShowAnswer,
    waiting,
    setWaiting,
    option1,
    setOption1,
    option2,
    setOption2,
    option3,
    setOption3,
    userChoice,
    setUserChoice,
    result,
    showResult,
    checkAnswer
  };

  
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
