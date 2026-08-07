import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const submissions = [
  {
    user: "Manivass",
    problem: "Two Sum",
    language: "Java",
    verdict: "Accepted",
    time: "2 mins ago",
  },
  {
    user: "Hari",
    problem: "LRU Cache",
    language: "C++",
    verdict: "Wrong Answer",
    time: "5 mins ago",
  },
  {
    user: "Vignesh",
    problem: "Merge Intervals",
    language: "Python",
    verdict: "Time Limit",
    time: "8 mins ago",
  },
  {
    user: "Akash",
    problem: "Binary Search",
    language: "Java",
    verdict: "Accepted",
    time: "12 mins ago",
  },
  {
    user: "Rahul",
    problem: "Valid Parentheses",
    language: "JavaScript",
    verdict: "Accepted",
    time: "18 mins ago",
  },
];

const getVerdict = (verdict) => {
  switch (verdict) {
    case "Accepted":
      return (
        <div className="badge badge-success gap-2">
          <FaCheckCircle />
          Accepted
        </div>
      );

    case "Wrong Answer":
      return (
        <div className="badge badge-error gap-2">
          <FaTimesCircle />
          Wrong Answer
        </div>
      );

    default:
      return (
        <div className="badge badge-warning gap-2">
          <FaClock />
          Time Limit
        </div>
      );
  }
};

const RecentSubmission = () => {
  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl shadow-xl">
      <div className="flex justify-between items-center p-6 border-b border-slate-700">
        <div>
          <h2 className="text-2xl font-bold text-white">
            📝 Recent Submissions
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Latest submissions from users
          </p>
        </div>

        <button className="btn btn-primary btn-sm rounded-xl">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-slate-300">
              <th>User</th>

              <th>Problem</th>

              <th>Language</th>

              <th>Verdict</th>

              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {submissions.map((submission, index) => (
              <tr key={index} className="hover:bg-slate-800 transition">
                <td className="font-semibold text-white">{submission.user}</td>

                <td className="text-slate-300">{submission.problem}</td>

                <td>
                  <div className="badge badge-outline">
                    {submission.language}
                  </div>
                </td>

                <td>{getVerdict(submission.verdict)}</td>

                <td className="text-slate-400">{submission.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSubmission;
