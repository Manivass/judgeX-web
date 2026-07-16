import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { removeTestcase } from "../store/testcase";
import QuestionSkeleton from "./QuestionsSkeleton";
import ProblemSkeleton from "./StatsSkeleton";
const Questions = () => {
  const [allQuestion, setAllQuestion] = useState();
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  dispatch(removeTestcase());
  const solvedProblems = useSelector(
    (store) => store?.user?.solvedProblems?.total,
  );
  const solvedQuestions = useSelector(
    (store) => store?.user?.solvedProblems?.solvedQuestionsIds,
  );
  console.log();

  let getQuestions = async () => {
    try {
      const res = await axios.get(BASE_URL + "/questions", {
        withCredentials: true,
      });
      setAllQuestion(res?.data?.questions);
      setQuestions(res?.data?.questions);
      setLoading(false);
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };
  useEffect(() => {
    setLoading(true);
    getQuestions();
  }, []);

  const handleSearch = (value) => {
    const searchValue = value.toLowerCase();
    const getQuestion = allQuestion.filter((question) =>
      question.title.toLowerCase().includes(searchValue),
    );

    setQuestions(getQuestion);
  };
  return (
    <div>
      <ProblemSkeleton />
      <div className="min-h-screen bg-[#050b18] text-white p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Problems</h1>
            <p className="text-sm text-gray-400">
              Explore and solve problems to improve your coding skills.
            </p>
          </div>

          <button className="btn btn-primary btn-sm">Random Problem</button>
        </div>

        {/* Status Cards */}
        <div className="flex gap-3 mb-6">
          {loading ? (
            <div className="skeleton bg-[#1f2937] h-9 w-22"></div>
          ) : (
            <div className="badge badge-primary p-4">
              All Problems {allQuestion?.length}
            </div>
          )}

          {loading ? (
            <div className="skeleton bg-[#1f2937] h-9 w-22"></div>
          ) : (
            <div className="badge badge-success p-4">
              {" "}
              Solved {solvedProblems}
            </div>
          )}
          {loading ? (
            <div className="skeleton bg-[#1f2937] h-9 w-22"></div>
          ) : (
            <div className="badge badge-warning p-4">
              Unsolved {allQuestion?.length - solvedProblems}
            </div>
          )}
        </div>

        <div className="flex gap-5 w-10/12 mx-auto">
          {/* Filter Sidebar */}
          {/* Problems Table */}

          <div className="flex-1 bg-[#0b1428] rounded-lg overflow-hidden px-3">
            {/* Search */}

            <div className="p-4">
              <input
                className="
          input 
          input-bordered 
          w-full 
          bg-[#111c33]
          "
                placeholder="Search problems..."
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>

            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr className="text-gray-400">
                    <th>#</th>
                    <th>Title</th>
                    <th>Difficulty</th>
                    <th>Data Structure</th>
                    <th>Tags</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <QuestionSkeleton />
                  ) : (
                    questions !== undefined &&
                    questions?.map((problem, index) => (
                      <tr key={index} className="hover:bg-[#071024]">
                        <td className="flex gap-2">
                          <p>{problem?.questionNumber} </p>
                          <p className="text-green-500 text-lg  my-auto">
                            {solvedQuestions?.includes(problem._id) && (
                              <SiTicktick />
                            )}
                          </p>
                        </td>
                        <td>
                          <Link
                            to={`/problem/${problem._id}`}
                            className="font-semibold  text-gray-300 cursor-pointer"
                          >
                            {problem?.title}
                          </Link>
                        </td>
                        <td>
                          <span
                            className={
                              problem?.difficulty === "easy"
                                ? "badge badge-success"
                                : problem?.difficulty === "medium"
                                  ? "badge badge-warning"
                                  : "badge badge-error"
                            }
                          >
                            {problem?.difficulty}
                          </span>
                        </td>

                        <td>
                          <div className="flex gap-2">
                            {problem?.dataStructure?.map((tag) => (
                              <span key={tag} className="badge badge-outline">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>

                        <td>
                          <button className="btn btn-ghost btn-sm">🔖</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
