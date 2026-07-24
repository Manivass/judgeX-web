import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BASE_URL } from "../utils/constant";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const SubmissionDetails = () => {
  const { id } = useParams();
  const [submission, setSubmission] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const getSubmission = async () => {
    try {
      const res = await axios.get(BASE_URL + `/submissionDetails/${id}`);
      setSubmission(res?.data?.submission);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, []);
  useEffect(() => {
    getSubmission();
  }, [id]);
  return (
    <div>
      <div className="min-h-screen bg-base-200 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <Link
                to={`/problem/${submission?.problemId?._id}`}
                className="text-3xl font-semibold hover:text-blue-800 hover:underline"
              >
                {submission?.problemId?.title}
              </Link>
              <p className="text-base-content/60">Submission Details</p>
            </div>

            <button className="btn btn-outline">← Back</button>
          </div>

          {/* Top Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div className="card bg-base-100 shadow">
              <div className="card-body items-center">
                <h2 className="text-sm text-gray-500">Status</h2>
                <span
                  className={`badge badge-lg ${
                    submission?.result ? "badge-success" : "badge-error"
                  }`}
                >
                  {submission?.result ? "Pass" : "Fail"}
                </span>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body items-center">
                <h2 className="text-sm text-gray-500">language</h2>
                <p className="font-bold">{submission?.language}</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body items-center">
                <h2 className="text-sm text-gray-500">Runtime</h2>
                <p className="font-bold text-success">
                  {submission?.executionTime}
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body items-center">
                <h2 className="text-sm text-gray-500">Memory</h2>
                <p className="font-bold text-info">
                  {Math.floor(Number(submission?.memory) / 1000)} MB
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body items-center">
                <h2 className="text-sm text-gray-500">Submitted</h2>
                <p className="font-bold">2 mins ago</p>
              </div>
            </div>
          </div>

          {/* Code */}
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Submitted Code</h2>
              </div>

              <div className="mockup-code text-sm overflow-x-auto">
                <pre>
                  <code>{submission?.sourceCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetails;
