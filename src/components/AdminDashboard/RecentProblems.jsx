import { FaEdit, FaTrash } from "react-icons/fa";

const problems = [
  {
    title: "Two Sum",
    difficulty: "Easy",
    submissions: 1245,
    status: "Published",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    submissions: 985,
    status: "Published",
  },
  {
    title: "Merge Intervals",
    difficulty: "Medium",
    submissions: 632,
    status: "Published",
  },
  {
    title: "LRU Cache",
    difficulty: "Hard",
    submissions: 418,
    status: "Draft",
  },
  {
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    submissions: 276,
    status: "Published",
  },
];

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

              <th>Submissions</th>

              <th>Status</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {problems.map((problem, index) => (
              <tr key={index} className="hover:bg-slate-800 transition">
                <td className="font-semibold text-white">{problem.title}</td>

                <td>
                  <div className={`badge ${badgeColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </div>
                </td>

                <td className="text-slate-300">{problem.submissions}</td>

                <td>
                  <div
                    className={`badge ${
                      problem.status === "Published"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {problem.status}
                  </div>
                </td>

                <td>
                  <div className="flex gap-2">
                    <button className="btn btn-sm btn-info rounded-xl">
                      <FaEdit />
                    </button>

                    <button className="btn btn-sm btn-error rounded-xl">
                      <FaTrash />
                    </button>
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
