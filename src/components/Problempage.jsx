import { useDispatch, useSelector } from "react-redux";
import CodeEditor from "./CodeEditor";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { addQuestion } from "../store/question";
const ProblemPage = () => {
  const question = useSelector((store) => store.question);
  const testcases = question?.testcase;
  const constraints = question?.constraints;
  const visisbleTestcase = testcases?.filter((val) => val.ishidden === false);

  const hiddenTestcase = testcases?.filter((val) => val.ishidden === true);

  const dispatch = useDispatch();
  const getQuestions = async () => {
    try {
      const res = await axios.get(BASE_URL + "/questions", {
        withCredentials: true,
      });
      dispatch(addQuestion(res?.data?.questions[0]));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div className="h-auto bg-gray-100 text-base-content flex  overflow-auto">
      {/* Left Side */}
      <div className="w-[40%] border-r border-base-content/10 overflow-y-auto">
        <div className="tabs tabs-bordered px-4 pt-2  top-0 bg-base-300 z-10">
          <a className="tab tab-active">Problem</a>
          <a className="tab">Submissions</a>
          <a className="tab">Discuss</a>
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold">{question?.title}</h1>

          <div className="mt-3">
            <span className="badge badge-success">{question?.difficulty}</span>
          </div>

          <p className="mt-5 leading-7 font-semibold">
            {question?.description}
          </p>

          <p className="mt-4 leading-7">{question?.explanation}</p>

          {/* Example 1 */}
          {visisbleTestcase &&
            visisbleTestcase?.map((val, index) => {
              return (
                <div key={index}>
                  <div className="mt-8">
                    <h2 className="font-bold mb-3">Example {index + 1}</h2>

                    <div className="mockup-code">
                      <pre>
                        <code>{val.input}</code>
                      </pre>

                      <pre>
                        <code>{val.output}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* Constraints */}
          <div className="mt-8">
            <h2 className="font-bold mb-3">Constraints</h2>

            <ul className="list-disc pl-5 space-y-2">
              {constraints && constraints?.map((val) => <li>{val}</li>)}
            </ul>
            <h2 className="font-bold text-lg my-2">Hidden Testcase</h2>

            {hiddenTestcase &&
              hiddenTestcase?.map((val, index) => {
                return (
                  <div key={index}>
                    <div className="p-4 space-y-4">
                      <div className=" bg-base-200 border border-base-400">

                        <div className="collapse-title font-semibold">
                          Case {index + 1}
                        </div>

                        <div className="collapse-content"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        <CodeEditor />
        {/* Test Cases */}
        <div className="flex-1 border-t border-base-content/10 overflow-y-auto">
          <div className="tabs tabs-bordered px-4">
            <a className="tab tab-active">Testcase</a>

            <a className="tab">Output</a>
          </div>
        </div>

        {/* Bottom Buttons */}
      </div>
    </div>
  );
};

export default ProblemPage;
