import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../../utils/constant";

const badgeColor = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "badge-success";
    case "Medium":
      return "badge-warning";
    case "Hard":
      return "badge-error";
    default:
      return "badge-primary";
  }
};

const RecentProblems = () => {
  const [problems, setProblems] = useState([]);

  const getQuestions = async () => {
    try {
      const res = await axios.get(BASE_URL + "/admin/getRecentProblems", {
        withCredentials: true,
      });
      setProblems(res?.data?.question);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl shadow-xl">
      <div className="flex justify-between items-center p-6 border-b border-slate-700">
        <div>
          <h2 className="text-2xl font-bold text-white">📚 Recent Problems</h2>

          <p className="text-slate-400 text-sm mt-1">
            Recently created coding problems
          </p>
        </div>

        <button className="btn btn-primary btn-sm rounded-xl">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-slate-300">
              <th>Problem</th>

              <th>Difficulty</th>
            </tr>
          </thead>

          <tbody>
            {problems &&
              problems?.map((problem, index) => (
                <tr key={index} className="hover:bg-slate-800 transition px-4">
                  <td className="font-semibold text-white">{problem.title}</td>

                  <td>
                    <div className={`badge ${badgeColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProblems;
