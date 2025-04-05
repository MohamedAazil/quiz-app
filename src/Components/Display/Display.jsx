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
    choiceCount,
    finalCount,
    options,
  } = useContext(Context);

  return (
    <div className="bg-slate-100 rounded flex flex-col items-center w-[45%] mt-10 px-4 mx-auto h-[85vh] justify-center">
      <div className="py-1 items-start text-center" id="question">
        <h1 className="text-4xl  font-bold my-3">Question</h1>
        <h2 className="text-3xl text-center">{question}</h2>
      </div>
      {type === "text" && (
        <input
          type="text"
          value={userChoice}
          onChange={(e) => setUserChoice(e.target.value)}
          className="my-5 w-52"
        />
      )}
      {type === "radio" && (
        <div id="multiple choice">
          <div className="flex flex-col items-start overflow-y-scroll h-[50vh] px-4">
            {choiceCount != 0 &&
              [...Array(parseInt(choiceCount))].map((item, index) => {
                return (
                  <div className="flex flex-col items-center" key={index}>
                    <label for="option1">
                      <input
                        type="radio"
                        value={options[index]}
                        onChange={(e) => setUserChoice(options[index])}
                        className="my-5 mx-2"
                        id="option1"
                        name="multiple-choice"
                      />
                      {options[index]}
                    </label>
                  </div>
                );
              })}
          </div>
          <button
            className="flex w-32 text-white bg-black rounded-full justify-center px-3 py-2"
            onClick={() => checkAnswer()}
          >
            Submit
          </button>
        </div>
      )}

      {type === "select" && (
        <div id="select">
          <div className="flex flex-col items-start justify-center overflow-y-scroll h-[50vh] px-4">
            <select name="" id="" onSelect={()=>{setUserChoice(optionsState)}} className="w-[200px]">
              {choiceCount != 0 &&
                [...Array(parseInt(choiceCount))].map((item, index) => {
                  return (
                    <option value={options[index]}>{options[index]}</option>
                  );
                })}
            </select>
          </div>
          <button
            className="flex w-32 text-white bg-black rounded-full justify-center px-3 py-2"
            onClick={() => checkAnswer()}
          >
            Submit {userChoice}
          </button>
        </div>
      )}
      {showResult && (
        <div className="" id="result">
          <h2
            className={`${
              result == "Correct" ? "text-green-700" : "text-red-700"
            } text-3xl font-bold mt-4`}
          >
            {result}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Display;
