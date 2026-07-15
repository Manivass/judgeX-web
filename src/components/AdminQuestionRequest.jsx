import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../store/questionRequest";

const AdminQuestionRequests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store?.questionRequest);

  const [pending, setPending] = useState(0);
  const [accepted, setAccepted] = useState(0);
  const [rejected, setRejected] = useState(0);

  var getRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/getRequests", {
        withCredentials: true,
      });

      dispatch(addRequest(res?.data?.requests));
      setPending(res?.data?.stats?.pending);
      setAccepted(res?.data?.stats?.accepted);
      setRejected(res?.data?.stats?.rejected);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRequest();
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">Question Requests</h1>
          <p className="text-slate-400 mt-2">
            Review and approve community submitted coding problems.
          </p>
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered bg-slate-900 border-slate-700 text-white"
          />

          <select className="select bg-slate-900 border-slate-700 text-white">
            <option>All</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="stats bg-slate-900 shadow w-full mb-8">
        <div className="stat">
          <div className="stat-title text-slate-400">Pending</div>
          <div className="stat-value text-warning">{pending}</div>
        </div>

        <div className="stat">
          <div className="stat-title text-slate-400">Approved</div>
          <div className="stat-value text-success">{accepted}</div>
        </div>

        <div className="stat">
          <div className="stat-title text-slate-400">Rejected</div>
          <div className="stat-value text-error">{rejected}</div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-2 gap-6">
        {requests?.map((request) => (
          <div
            key={request.id}
            className="card bg-slate-900 border border-slate-800 hover:border-violet-500 transition-all duration-300 shadow-xl"
          >
            <div className="card-body">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="badge badge-warning">{request.status}</div>

                    <div
                      className={`badge ${
                        request.difficulty === "Easy"
                          ? "badge-success"
                          : request.difficulty === "Medium"
                            ? "badge-warning"
                            : "badge-error"
                      }`}
                    >
                      {request.difficulty}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white mt-4">
                    {request.title}
                  </h2>

                  <p className="text-slate-400 mt-3">{request.description}</p>
                </div>

                <div className="text-right">
                  <p className="text-slate-500 text-sm">Submitted</p>
                  <p className="text-white">{request.submitted}</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-slate-400 text-sm">Author</p>
                  <p className="text-white font-bold mt-1">
                    {request?.createdBy?.firstName +
                      " " +
                      request?.createdBy?.lastName}
                  </p>
                </div>

                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-slate-400 text-sm">Testcases</p>
                  <p className="text-white font-bold mt-1">
                    {request?.testcase.length}
                  </p>
                </div>

                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-slate-400 text-sm">Difficulty</p>
                  <p className="text-white font-bold mt-1">
                    {request.difficulty}
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <button className="btn btn-info">👁 View</button>

                <button className="btn btn-success">✔ Approve</button>

                <button className="btn btn-error">✖ Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminQuestionRequests;
