import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { removeTestcase } from "../store/testcase";
import QuestionSkeleton from "../skeleton/QuestionsSkeleton";
import { dataStructreTypes } from "../utils/constant";
const Questions = () => {
  const [allQuestion, setAllQuestion] = useState();
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  const [difficulty, setDifficulty] = useState("all");
  const [dataStructure, setDataStrucute] = useState("all");
  const dispatch = useDispatch();
  dispatch(removeTestcase());
  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState(0);

  const solvedProblems = useSelector(
    (store) => store?.user?.solvedProblems?.total,
  );
  const solvedQuestions = useSelector(
    (store) => store?.user?.solvedProblems?.solvedQuestionsIds,
  );

  const userRole = useSelector((store) => store?.user?.role);

  let getQuestions = async () => {
    try {
      const res = await axios.get(
        BASE_URL + `/questions/?page=${page}&limit=20`,
        {
          withCredentials: true,
        },
      );
      setAllQuestion(res?.data?.questions);
      setQuestions(res?.data?.questions);
      setPagination(res?.data?.totalQuestions);
    } catch (err) {
      console.log(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(id);

      await axios.delete(BASE_URL + `/deleteQuestion/${id}`, {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setLoading(true);
  }, []);
  useEffect(() => {
    getQuestions();
  }, [page]);
  const handleDifficultyAndDataStructre = async () => {
    try {
      const res = await axios.get(
        BASE_URL +
          `/question/search?difficulty=${difficulty}&dataStructure=${dataStructure}`,
        {
          withCredentials: true,
        },
      );
      setAllQuestion(res?.data?.questions);
      setQuestions(res?.data?.questions);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (value) => {
    const searchValue = value.toLowerCase();
    const getQuestion = allQuestion.filter((question) =>
      question.title.toLowerCase().includes(searchValue),
    );

    setQuestions(getQuestion);
  };
  useEffect(() => {
    handleDifficultyAndDataStructre();
  }, [difficulty, dataStructure]);
  return (
    <div>
      <div className="min-h-screen bg-[#050b18] text-white p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Problems</h1>
            <p className="text-sm text-gray-400">
              Explore and solve problems to improve your coding skills.
            </p>
          </div>
        </div>

        {/* Status Cards */}
        {userRole == "user" && (
          <div className="flex gap-3 mb-6">
            {loading ? (
              <div className="skeleton bg-[#1f2937] h-9 w-22"></div>
            ) : (
              <div className="badge badge-primary p-4">
                All Problems {pagination}
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
                Unsolved {pagination - solvedProblems}
              </div>
            )}
          </div>
        )}

        <div className="flex gap-5 w-10/12 mx-auto">
          {/* Filter Sidebar */}
          {/* Problems Table */}

          <div className="flex-1 bg-[#0b1428] rounded-lg overflow-hidden px-3">
            {/* Search */}
            <div className=" w-full flex gap-3 justify-between ">
              <div className="p-4">
                <input
                  className="
          input 
          input-bordered 
          w-[450px]
          bg-[#111c33]
          "
                  placeholder="Search problems..."
                  onChange={(e) => {
                    handleSearch(e.target.value);
                  }}
                />
              </div>
              <div className="flex gap-4 my-auto">
                <select
                  className="select select-bordered w-44 bg-blue-900 text-white"
                  value={difficulty}
                  onChange={(e) => {
                    setDifficulty(e.target.value);
                  }}
                >
                  <option value="all">All Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>

                <select
                  className="select select-bordered w-52 bg-blue-900 text-white"
                  value={dataStructure}
                  onChange={(e) => {
                    setDataStrucute(e.target.value);
                  }}
                >
                  <option value="all">All Data Structures</option>
                  {dataStructreTypes?.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr className="text-gray-400">
                    <th>#</th>
                    <th>Title</th>
                    <th>Difficulty</th>
                    <th>Data Structure</th>
                    {userRole == "user" && <th>Tags</th>}
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
                        {userRole == "user" ? (
                          <td>
                            <button className="btn btn-ghost btn-sm">🔖</button>
                          </td>
                        ) : (
                          <td className="flex gap-5">
                            <Link
                              to={`/questions/edit/${problem?._id}`}
                              className="btn btn-active btn-md"
                            >
                              Edit
                            </Link>
                            <button
                              className="btn btn-error btn-md"
                              onClick={() => handleDelete(problem?._id)}
                            >
                              Delete
                            </button>
                          </td>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}

            <div className="flex justify-between items-center p-5 border-t border-slate-700">
              <p className="text-sm text-slate-400">
                Page <span className="text-white font-semibold">{page}</span> of{" "}
                <span className="text-white font-semibold">
                  {Math.ceil(pagination / 20) || 0}
                </span>
              </p>

              <div className="join">
                <button
                  className="join-item btn btn-sm"
                  disabled={page === 1 || loading}
                  onClick={() => setPage(page - 1)}
                >
                  «
                </button>

                <button className="join-item btn btn-sm btn-primary">
                  {page}
                </button>

                <button
                  className="join-item btn btn-sm"
                  disabled={page === Math.ceil(pagination / 20) || loading}
                  onClick={() => setPage(page + 1)}
                >
                  »
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
