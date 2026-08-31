import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheck, FaTimes, FaUser } from "react-icons/fa";
import { BASE_URL, socketConnectionString } from "../utils/constant";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  const getRequests = async () => {
    try {
      setLoading(true);

      const res = await axios.get(BASE_URL + "/request/getRequest", {
        withCredentials: true,
      });
      console.log(res?.data);

      setRequests(res.data.requests || []);
    } catch (error) {
      console.log("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);


  // Accept request
  const handleRequest = async (reqId, status) => {
    try {
      setActionLoading(reqId);

      const res = await axios.post(
        BASE_URL + `/request/review/${status}/${reqId}`,
        {},
        {
          withCredentials: true,
        },
      );

      console.log(res?.data);

      // Remove accepted/rejected request from UI
      setRequests((prev) => prev.filter((request) => request._id !== reqId));
    } catch (err) {
      console.log("Request review error:", err.response?.data || err.message);
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050816] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white px-4 sm:px-6 lg:px-10 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Connection Requests</h1>

          <p className="text-gray-400 mt-2">
            People who want to connect with you
          </p>

          {requests.length > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
              <span className="font-semibold">{requests.length}</span>
              Pending Requests
            </div>
          )}
        </div>

        {/* Empty State */}
        {requests.length === 0 ? (
          <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center">
              <FaUser className="text-gray-500 text-3xl" />
            </div>

            <h2 className="text-xl font-semibold mt-5">No pending requests</h2>

            <p className="text-gray-500 mt-2">You're all caught up! 🎉</p>
          </div>
        ) : (
          /* Request List */
          <div className="space-y-4">
            {requests.map((request) => {
              const user = request.fromUserId;

              return (
                <div
                  key={request._id}
                  className="bg-[#0b1120] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    {/* User Details */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                        {user?.photoUrl ? (
                          <img
                            src={user.photoUrl}
                            alt={user.firstName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-xl font-bold">
                            {user?.firstName?.charAt(0)}
                          </span>
                        )}
                      </div>

                      {/* Info */}
                      <div>
                        <h2 className="font-semibold text-lg">
                          {user?.firstName} {user?.lastName}
                        </h2>

                        <p className="text-gray-400 text-sm">
                          @{user?.firstName?.toLowerCase()}
                        </p>

                        {user?.about && (
                          <p className="text-gray-500 text-sm mt-1 line-clamp-1">
                            {user.about}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      {/* Accept */}
                      <button
                        onClick={() => handleRequest(request._id, "accepted")}
                        disabled={actionLoading === request._id}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition disabled:opacity-50"
                      >
                        {actionLoading === request._id ? (
                          <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                          <>
                            <FaCheck />
                            Accept
                          </>
                        )}
                      </button>
                      {/* Reject */}
                      <button
                        onClick={() => handleRequest(request._id, "rejected")}
                        disabled={actionLoading === request._id}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition disabled:opacity-50"
                      >
                        {actionLoading === request._id ? (
                          <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                          <>
                            <FaTimes />
                            Reject
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Requests;
