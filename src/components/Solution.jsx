import axios from "axios";
import { useEffect } from "react";
import { BASE_URL, map } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addSolutions } from "../store/solution";

const Solution = () => {
  const questionId = useSelector((store) => store?.question?._id);
  const solutions = useSelector((store) => store?.solution);
  console.log(solutions);

  const dispatch = useDispatch();
  const getSolutions = async () => {
    try {
      const res = await axios.get(BASE_URL + `/getSolutions/${questionId}`);
      dispatch(addSolutions(res?.data?.solutions));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSolutions();
  }, []);
  return (
    <div>
      <div className="px-3  py-3 w-full">
        {solutions?.length > 0 ? (
          <div className="join join-vertical  w-full  bg-gray-200 border border-gray-300">
            {solutions &&
              solutions?.map((val, index) => (
                <div
                  key={index}
                  className="collapse collapse-arrow join-item border-gray-400 border-b"
                >
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-semibold ">
                    <ul className="flex justify-between">
                      <li className="hover:text-blue-600 cursor-pointer">
                        {val?.user?.firstName} {val?.user?.lastName}
                      </li>
                      <li className=" ">{val?.bestSolution?.language}</li>
                      <li>{val?.bestSolution?.executionTime} s</li>
                      <li>
                        {
                          map[
                            val?.bestSolution?.createdAt
                              ?.slice(0, 7)
                              ?.split("-")[1]
                          ]
                        }
                        -
                        {
                          val?.bestSolution?.createdAt
                            ?.slice(0, 10)
                            ?.split("-")[2]
                        }
                        -
                        {
                          val?.bestSolution?.createdAt
                            ?.slice(0, 10)
                            ?.split("-")[0]
                        }
                        -
                        <span className="text-blue-700">
                          {Number(val?.bestSolution?.createdAt?.slice(11, 13)) +
                            5}
                          :
                          {Math.floor(
                            (Number(
                              val?.bestSolution?.createdAt?.slice(14, 16),
                            ) +
                              32) %
                              60,
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="collapse-content  px-4">
                    <h2 className="text-md font-semibold">
                      <span className="text-blue-900 font-semibold">Name </span>
                      :{" "}
                      <span className="hover:text-blue-600 cursor-pointer">
                        {val?.user?.firstName} {val?.user?.lastName}
                      </span>
                    </h2>
                    <h2 className="text-md font-semibold">
                      <span className="text-blue-900 font-semibold">
                        language{" "}
                      </span>
                      : {val?.bestSolution?.language}
                    </h2>
                    <h2 className="text-md font-semibold">
                      <span className="text-blue-900 font-semibold">
                        Execution Time{" "}
                      </span>
                      : {val?.bestSolution?.executionTime}s
                    </h2>
                    <div className="mockup-code my-2 p-3">
                      <pre>
                        <code>{val?.bestSolution?.sourceCode}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <h2 className="text-lg text-center py-2 font-semibold">
            No solution found
          </h2>
        )}
      </div>
    </div>
  );
};

export default Solution;
