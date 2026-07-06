import CodeEditor from "./CodeEditor";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { addQuestion } from "../store/question";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Testcase from "./Testcase";
import { changeActiveTab } from "../store/activetab";
import Editorial from "./Editorial";
import Submissions from "./Submission";
import { clearSubmission } from "../store/submission";
import Solution from "./Solution";
import Discuss from "./Discuss";
const ProblemPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((store) => store?.question);
  const activetab = useSelector((store) => store?.activetab);
  const user = useSelector((store) => store?.user?.data?.user);
  const isSolved = user?.solvedProblems?.solvedQuestionsIds?.some(
    (id) => id.toString() === question._id,
  );

  const isAttempted = user?.attemptedProblems?.attemptedQuestionsIds?.some(
    (id) => id.toString() === question._id,
  );

  let getQuestions = async () => {
    try {
      const res = await axios.get(BASE_URL + `/question/${id}`, {
        withCredentials: true,
      });

      dispatch(addQuestion(res?.data?.question));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dispatch(clearSubmission());
    dispatch(changeActiveTab("Problem"));
    getQuestions();
  }, [id]);

  let handleTab = (tab) => {
    dispatch(changeActiveTab(tab));
  };

  const testcases = question?.testcase || [];
  const constraints = question?.constraints || [];
  const visibleTestcase = testcases.filter((val) => !val.ishidden);

  const hiddenTestcase = testcases.filter((val) => !val.ishidden);
  const editorial = question?.editorial;

  return (
    <div className="h-auto bg-gray-100 text-base-content flex  overflow-auto">
      {/* Left Side */}
      <div className="w-[40%] border-r border-base-content/10 overflow-y-auto">
        <div className="tabs overflow-x-auto tabs-bordered px-4 pt-2  top-0 bg-base-300 z-10">
          <a
            className={activetab === "Problem" ? "tab tab-active" : "tab"}
            onClick={() => handleTab("Problem")}
          >
            Problem
          </a>
          <a
            className={activetab === "Testcase" ? "tab tab-active" : "tab"}
            onClick={() => handleTab("Testcase")}
          >
            Testcase
          </a>
          <a
            className={activetab === "Solutions" ? "tab tab-active" : "tab"}
            onClick={() => handleTab("Solutions")}
          >
            Solutions
          </a>
          <a
            className={activetab === "Submissions" ? "tab tab-active" : "tab"}
            onClick={() => handleTab("Submissions")}
          >
            Submissions
          </a>
          <a
            className={activetab === "Editorial" ? "tab tab-active" : "tab"}
            onClick={() => handleTab("Editorial")}
          >
            Editorial
          </a>

          <a
            className={activetab === "Discuss" ? "tab tab-active" : "tab"}
            onClick={() => handleTab("Discuss")}
          >
            Discuss
          </a>
        </div>
        {activetab && activetab === "Problem" && (
          <div className="p-6 ">
            <div className="flex justify-between my-auto">
              <h2 className="text-3xl font-bold">
                {question?.questionNumber}.{question && question?.title}
              </h2>
              <div>
                {isSolved ? (
                  <span className="text-white bg-green-500 p-2 rounded-lg font-semibold">
                    🟢 Solved
                  </span>
                ) : isAttempted ? (
                  <span className="text-yellow-500 font-semibold">
                    🟡 Attempted
                  </span>
                ) : (
                  <span className="text-gray-500"></span>
                )}
              </div>
            </div>

            <div className="mt-3">
              <span className="badge badge-success">
                {question?.difficulty}
              </span>
            </div>

            <p className="mt-5 leading-7 font-semibold">
              {question?.description}
            </p>

            <p className="mt-4 leading-7">{question?.explanation}</p>

            {/* Example 1 */}
            {visibleTestcase &&
              visibleTestcase?.map((val, index) => {
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
                {constraints?.map((val) => (
                  <li>{val}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activetab === "Testcase" && (
          <Testcase testcase={{ hiddenTestcase, visibleTestcase }} />
        )}
        {activetab === "Editorial" && <Editorial editorial={editorial} />}
        {activetab === "Submissions" && <Submissions />}
        {activetab === "Solutions" && <Solution />}
        {activetab === "Discuss" && <Discuss />}
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        <CodeEditor />
        {/* Bottom Buttons */}
      </div>
    </div>
  );
};

export default ProblemPage;
