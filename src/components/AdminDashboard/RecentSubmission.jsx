import axios from "axios";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { BASE_URL } from "../../utils/constant";
import { useEffect, useState } from "react";
const getVerdict = (verdict) => {
  switch (verdict) {
    case true:
      return (
        <div className="badge badge-success gap-2">
          <FaCheckCircle />
          Accepted
        </div>
      );

    case false:
      return (
        <div className="badge badge-error gap-2">
          <FaTimesCircle />
          Wrong Answer
        </div>
      );
  }
};

const RecentSubmission = () => {
  const [submissions, getSubmissions] = useState();
  console.log(submissions);

  const getSubmission = async () => {
    try {
      const res = await axios.get(BASE_URL + "/admin/getSubmissions", {
        withCredentials: true,
      });
      getSubmissions(res?.data?.submissions);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSubmission();
  }, []);
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
            </tr>
          </thead>

          <tbody>
            {submissions?.map((submission, index) => (
              <tr key={index} className="hover:bg-slate-800 transition">
                <td className="font-semibold text-white">{submission?.userId?.firstName}</td>

                <td className="text-slate-300">{submission?.problemId?.title}</td>

                <td>
                  <div className="badge badge-outline text-white">
                    {submission?.language}
                  </div>
                </td>

                <td>{getVerdict(submission?.result)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSubmission;
