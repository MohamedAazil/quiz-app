import React, { useContext } from "react";
import { Context } from "../../Context/Context";

const Maker = () => {
  const {
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
    choiceCount,
    setChoiceCount,
    showCount,
    setShowCount,
    setFinalCount,
    finalCount,
    options,
    setOptions,
  } = useContext(Context);

  return (
    <div className="bg-slate-100 rounded flex flex-col items-center w-[45%] mt-10 mx-auto px-4 py-4">
      {showType && (
        <div
          className="flex flex-col items-center py-3 px-2 h-[80vh] justify-center"
          id="question-type"
        >
          <h1 className="text-black font-bold text-4xl my-5 mx-auto">
            Type of question?
          </h1>

          <select
            onChange={(e) => setType(e.target.value)}
            className="my-5 w-52"
            required
          >
            <option value="text">Text</option>
            <option value="radio">Multiple Choice</option>
            <option value="select">Drop Down</option>
            <option value="multi-select">Multiple Drop Down</option>
            <option value="radio">Long answer</option>
          </select>
          <button
            className="text-white bg-black rounded w-32"
            onClick={() => {
              setShowType((prev) => !prev);
              setShowQuestion((prev) => !prev);
            }}
          >
            Submit
          </button>
        </div>
      )}
      {showQuestion && (
        <div
          className="flex flex-col items-center py-3 px-2 h-[80vh] justify-center"
          id="question"
        >
          <h1 className="text-black font-bold text-4xl my-5 mx-auto">
            Enter Question
          </h1>
          <input
            required
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="my-5 w-52"
          />
          <button
            className="text-white bg-black rounded w-32"
            onClick={() => {
              setShowQuestion((prev) => !prev);
              setShowAnswer((prev) => !prev);
            }}
          >
            Submit
          </button>
        </div>
      )}
      {showAnswer && type != "text" && (
        <div
          className="flex flex-col items-center py-3 px-2 h-[80vh] justify-center"
          id="answer"
        >
          <div
            className={`${
              showCount ? "flex" : "hidden"
            }  flex-col gap-3 items-center`}
          >
            <h2>Enter Number Of Choices</h2>
            <input
              type="text"
              value={choiceCount}
              onChange={(e) => {
                setChoiceCount(e.target.value);
              }}
            />
            <button
              className="text-white bg-black rounded w-32"
              onClick={() => {
                setFinalCount(parseInt(choiceCount));
                setShowCount(false);
              }}
            >
              Submit
            </button>
            <h3>{choiceCount}</h3>
          </div>
          <div
            className={`${
              !showCount ? "flex" : "hidden"
            }  flex-col gap-3 items-center overflow-y-scroll`}
          >
            <h1 className="text-black font-bold text-4xl my-5 mx-auto">
              Enter Options
            </h1>
            {choiceCount!= 0 && Array(parseInt(choiceCount))
              .fill()
              .map((item, index) => {
                return (
                  <div className="flex flex-col items-center" key={index}>
                    <h2>Option {index + 1}</h2>
                    <input
                      required
                      type="text"
                      value={options[index]}
                      onChange={(e) => {
                        let temp = options.slice();
                        temp[index] = e.target.value;
                        setOptions(temp);
                      }}
                      className="my-5 w-52"
                      placeholder="Enter Option"
                    />
                    <button
                      className="text-white bg-black rounded w-32"
                      onClick={() => {}}
                    >
                      Submit
                    </button>
                    <h2>{options[index]}</h2>
                  </div>
                );
              })}

            <input
              required
              type={`${answer}`}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="my-5 w-52"
              placeholder="Enter answer"
            />
            <button
              className="text-white bg-black rounded w-32"
              onClick={() => {
                setShowAnswer((prev) => !prev);
                setWaiting((prev) => !prev);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {showAnswer && type == "text" && (
        <div
          className="flex flex-col items-center py-3 px-2 h-[80vh] justify-center"
          id="answer"
        >
          <h1 className="text-black font-bold text-4xl my-5 mx-auto">
            Enter Answer
          </h1>
          <input
            required
            type={`${answer}`}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="my-5 w-52"
          />
          <button
            className="text-white bg-black rounded w-32"
            onClick={() => {
              setShowAnswer((prev) => !prev);
              setWaiting((prev) => !prev);
            }}
          >
            Submit
          </button>
        </div>
      )}

      {waiting && (
        <div className="flex items-center justify-center h-[80vh]">
          <h1 className="text-5xl font-bold mx-2 text-center">
            Question Setting Complete
          </h1>
        </div>
      )}
    </div>
  );
};

export default Maker;
