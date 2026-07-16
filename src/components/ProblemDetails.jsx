import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeQuestion } from "../store/question";
import QuestionSkeleton from "./QuestionsSkeleton";
const ProblemDetails = () => {
  const [allQuestion, setAllQuestion] = useState();
  const [questions, setQuestions] = useState();
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  dispatch(removeQuestion());
  let getQuestions = async () => {
    try {
      const res = await axios.get(BASE_URL + "/questions", {
        withCredentials: true,
      });
      setAllQuestion(res?.data?.questions);
      setQuestions(res?.data?.questions);
    } catch (err) {
      console.log(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getQuestions();
  }, [reload]);

  const handleSearch = (value) => {
    const searchValue = value.toLowerCase();
    const getQuestion = allQuestion.filter((question) =>
      question.title.toLowerCase().includes(searchValue),
    );

    setQuestions(getQuestion);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(BASE_URL + `/deleteQuestion/${id}`, {
        withCredentials: true,
      });
      setReload(!reload);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-[#050b18] text-white p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Problems</h1>
          </div>

          <Link to="/questions/create" className="btn btn-primary btn-sm">
            Add Problem
          </Link>
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
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <QuestionSkeleton />
                  ) : (
                    questions !== undefined &&
                    questions?.map((problem, index) => (
                      <tr key={index} className="hover:bg-[#071024]">
                        <td className="text-white">
                          {problem?.questionNumber}
                        </td>
                        <td>
                          <span className="font-semibold  text-gray-300 cursor-pointer">
                            {problem?.title}
                          </span>
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

export default ProblemDetails;
