import axios from "axios";
import { useEffect } from "react";
import { BASE_URL, map } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addSubmission } from "../store/submission";

const Submissions = () => {
  const question = useSelector((store) => store?.question?._id);
  let submission = useSelector((store) => store?.submission);
  const dispatch = useDispatch();

  let getSubmission = async () => {
    try {
      const res = await axios.get(BASE_URL + `/getSubmission/${question}`, {
        withCredentials: true,
      });
      dispatch(addSubmission(res?.data?.submissions));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSubmission();
  }, []);
  return (
    <div className="px-3  py-3 w-full">
      {submission?.length > 0 ? (
        <div className="join join-vertical  w-full  bg-gray-200 border border-gray-300">
          {submission?.map((val, index) => (
            <div
              key={index}
              className="collapse collapse-arrow join-item border-gray-400 border-b"
            >
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold ">
                <ul className="flex justify-between">
                  <li>{val?.result ? "🟢 Right Answer" : "🔴 Wrong Answer"}</li>
                  <li className=" ">{val?.language}</li>
                  <li>{val?.executionTime} s</li>
                  <li>
                    {map[val?.createdAt?.slice(0, 7)?.split("-")[1]]}-
                    {val?.createdAt?.slice(0, 10)?.split("-")[2]}-
                    {val?.createdAt?.slice(0, 10)?.split("-")[0]}-
                    <span className="text-blue-700">
                      {Number(val?.createdAt?.slice(11, 13)) + 5}:
                      {Math.floor(
                        (Number(val?.createdAt?.slice(14, 16)) + 32) % 60,
                      )}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="collapse-content  px-4">
                <h2 className="text-md font-semibold">
                  <span className="text-blue-900 font-semibold">language </span>
                  : {val?.language}
                </h2>
                <h2 className="text-md font-semibold">
                  <span className="text-blue-900 font-semibold">verdict </span>:{" "}
                  {val?.result ? "🔴 wrong answer" : "🟢 correct answer"}
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
      ) : (
        <h2 className="text-lg font-semibold text-center py-3">
          No submission found
        </h2>
      )}
    </div>
  );
};

export default Submissions;
