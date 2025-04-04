import React, { useContext } from "react";
import { Context } from "../../Context/Context";

const Display = () => {
  const {
    type,
    question,
    userChoice,
    setUserChoice,
    option1,
    option2,
    option3,
    checkAnswer,
    showResult,
    result,
  } = useContext(Context);
  return (
    <div className="bg-slate-100 rounded flex flex-col items-center w-[45%] mt-10 px-4 mx-auto h-[85vh] justify-center">
      <div className="py-1 items-start text-center" id="question">
        <h1 className="text-4xl  font-bold my-3">Question</h1>
        <h2 className="text-3xl text-center">{question}</h2>
      </div>
      {type == "text" && (
        <input
          type="text"
          value={userChoice}
          onChange={(e) => setUserChoice(e.target.value)}
          className="my-5 w-52"
        />
      )}
      {type != "text" && (
        <div id="multiple choice">
          <div className="flex">
            <label for="option1">
              <input
                type="radio"
                value={option1}
                onChange={(e) => setUserChoice(option1)}
                className="my-5 mx-2"
                id="option1"
                name="multiple-choice"
              />
              {option1}
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              value={option2}
              onChange={(e) => setUserChoice(option2)}
              className="my-5 mx-2"
              id="option2"
              name="multiple-choice"
            />
            <label for="option2">{option2}</label>
          </div>
          <div className="">
            <input
              type="radio"
              value={option3}
              onClick={(e) => setUserChoice(option3)}
              className="my-5 mx-2"
              id="option3"
              name="multiple-choice"
            />
            <label for="option3">{option3}</label>
          </div>
        </div>
      )}
      <button className="flex w-32 text-white bg-black rounded-full justify-center px-3 py-2" onClick={() => checkAnswer()}>Submit</button>
      {showResult && (
        <div className="" id="result">
          <h2 className={`${(result == 'Correct')? "text-green-700":"text-red-700"} text-3xl font-bold mt-4`}>{result}</h2>
        </div>
      )}
    </div>
  );
};

export default Display;
