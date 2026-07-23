import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BASE_URL } from "../utils/constant";
import { useSelector } from "react-redux";

const UserSubmissions = () => {
  const { id } = useParams();
  const [submission, setSubmissions] = useState([]);
  const userDetails = useSelector((store) => store?.user);
  const navigate = useNavigate();
  const getSubmissions = async () => {
    try {
      const res = await axios.get(
        BASE_URL + `/recentSubmissions/${userDetails?._id}`,
        {
          withCredentials: true,
        },
      );
      setSubmissions(res?.data?.submissions);
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };
  useEffect(() => {
    if (!userDetails) {
      navigate("/login");
      return;
    }

    getSubmissions();
  }, [userDetails]);
  useEffect(() => {
    getSubmissions();
  }, [id]);
  return (
    <div>
      <div className="min-h-screen bg-base-400 p-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Recent Submissions</h1>
              <p className="text-base-content/60 mt-1">
                View all your coding submissions.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Problem</th>
                  <th>Difficulty</th>
                  <th>Status</th>
                  <th>Language</th>
                  <th>Submitted</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {submission.length > 0 &&
                  submission?.map((submission, index) => (
                    <tr key={submission._id} className="hover">
                      <td>{index + 1}</td>

                      <td className="font-semibold">
                        {submission.problemId.title}
                      </td>

                      <td>
                        <div
                          className={`badge ${
                            submission.problemId.difficulty === "easy"
                              ? "badge-success"
                              : submission.problemId.difficulty === "medium"
                                ? "badge-warning"
                                : "badge-error"
                          }`}
                        >
                          {submission.problemId.difficulty}
                        </div>
                      </td>

                      <td>
                        <div
                          className={`badge ${
                            submission.result === true
                              ? "badge-success"
                              : "badge-error"
                          }`}
                        >
                          {submission.result ? "Pass" : "Fail"}
                        </div>
                      </td>

                      <td>{submission.language}</td>

                      <td>{new Date(submission.createdAt).toLocaleString()}</td>

                      <td>
                        <button className="btn btn-sm btn-outline btn-primary">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSubmissions;
