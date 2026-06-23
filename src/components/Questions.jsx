import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
const Questions = () => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    getQuestions();
  }, []);
  let getQuestions = async () => {
    try {
      const res = await axios.get(BASE_URL + "/questions", {
        withCredentials: true,
      });
      setQuestions(res?.data?.questions);
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };
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

          <button className="btn btn-primary btn-sm">Random Problem</button>
        </div>

        {/* Status Cards */}
        <div className="flex gap-3 mb-6">
          <div className="badge badge-primary p-4">All Problems 120</div>

          <div className="badge badge-success p-4">Solved 35</div>

          <div className="badge badge-warning p-4">Unsolved 85</div>
        </div>

        <div className="flex gap-5">
          {/* Filter Sidebar */}
          <div className="w-64 bg-white/80 rounded-lg p-4">
            <h2 className="font-semibold mb-4">Filters</h2>

            <p className="text-sm text-gray-400">Difficulty</p>

            <div className="space-y-3 mt-3">
              <label className="flex gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Easy
              </label>

              <label className="flex gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Medium
              </label>

              <label className="flex gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Hard
              </label>
            </div>

            <p className="text-sm text-gray-400 mt-6">Topics</p>

            {[
              "Array",
              "String",
              "Linked List",
              "Tree",
              "Dynamic Programming",
            ].map((item) => (
              <label className="flex gap-2 mt-3" key={item}>
                <input type="checkbox" className="checkbox checkbox-sm" />

                {item}
              </label>
            ))}
          </div>

          {/* Problems Table */}

          <div className="flex-1 bg-[#0b1428] rounded-lg overflow-hidden">
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
                  {questions !== undefined &&
                    questions?.map((problem, index) => (
                      <tr key={index} className="hover:bg-[#071024]">
                        <td className="text-white">{index + 1}</td>
                        <td>
                          <div className="font-semibold  text-gray-300">
                            {problem?.title}
                          </div>
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
                    ))}
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
