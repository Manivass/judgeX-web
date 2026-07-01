import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addSubmission } from "../store/submission";

const Submissions = () => {
  const question = useSelector((store) => store?.question?._id);
  let submission = useSelector((store) => store?.submission);
  const dispatch = useDispatch();
  const [verdict, setVerdict] = useState();

  let getSubmission = async () => {
    try {
      const res = await axios.get(BASE_URL + `/getSubmission/${question}`, {
        withCredentials: true,
      });
      dispatch(addSubmission(res?.data?.submissions));
      setVerdict(question?.verdict);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSubmission();
  }, []);
  return (
    <div className="px-3  py-3 w-full">
      <div className="join join-vertical  w-full  bg-gray-200 border border-gray-300">
        {submission &&
          submission?.map((val, index) => (
            <div
              key={index}
              className="collapse collapse-arrow join-item border-gray-400 border-b"
            >
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold ">
                <ul className="flex justify-between">
                  <li>🟢 {val?.verdict}</li>
                  <li className=" ">{val?.language}</li>
                  <li>{val?.executionTime} s</li>
                  <li>Jun 24, 12:45 PM</li>
                </ul>
              </div>
              <div className="collapse-content  px-4">
                <h2 className="text-md font-semibold">
                  <span className="text-blue-900 font-semibold">language </span>
                  : {val?.language}
                </h2>
                <h2 className="text-md font-semibold">
                  <span className="text-blue-900 font-semibold">verdict </span>:{" "}
                  {verdict === "Wrong Answer"
                    ? "🔴 wrong answer"
                    : "🟢 correct answer"}
                </h2>
                <h2 className="text-md font-semibold">
                  <span className="text-blue-900 font-semibold">
                    Execution Time{" "}
                  </span>
                  : {val?.executionTime}s
                </h2>
                <div className="mockup-code my-2 p-3">
                  <pre>
                    <code>{val?.sourceCode}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Submissions;
