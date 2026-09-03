import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";

const Connections = () => {
  const user = useSelector((store) => store?.user);
  const [connections, setConnection] = useState([]);

  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/getConnections", {
        withCredentials: true,
      });
      setConnection(res?.data?.connections);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getConnections();
  }, [user]);
  return (
    <div className="min-h-screen bg-[#050816] text-white px-4 sm:px-6 lg:px-10 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Connections</h1>

          <p className="text-gray-400 mt-2">People who connected with you</p>

          {connections.length > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
              <span className="font-semibold">{connections.length}</span>
              connections
            </div>
          )}
        </div>

        {/* Empty State */}
        {connections.length === 0 ? (
          <div className="bg-[#0b1120] border border-white/10 rounded-2xl p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center">
              <FaUser className="text-gray-500 text-3xl" />
            </div>

            <h2 className="text-xl font-semibold mt-5">
              No pending connections
            </h2>

            <p className="text-gray-500 mt-2">You're all caught up! 🎉</p>
          </div>
        ) : (
          /* Request List */
          <div className="space-y-4">
            {connections?.map((request) => {
              const touser =
                request?.fromUserId?._id?.toString() === user?._id?.toString()
                  ? request?.toUserId
                  : request?.fromUserId;

              return (
                <div
                  key={request?._id}
                  className="bg-[#0b1120] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 px-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                        {touser?.photoUrl ? (
                          <img
                            src={touser.photoUrl}
                            alt={touser.firstName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-xl font-bold">
                            {touser?.firstName?.charAt(0)}
                          </span>
                        )}
                      </div>

                      <div>
                        <h2 className="font-semibold text-lg">
                          {touser?.firstName} {touser?.lastName}
                        </h2>

                        <p className="text-gray-400 text-sm">
                          @{touser?.email}
                        </p>

                        {touser?.about && (
                          <p className="text-gray-500 text-sm mt-1 line-clamp-1">
                            {touser.about}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Link
                        to={`/chat/${touser?._id}`}
                        className="px-4 py-2 bg-blue-700 text-lg rounded-sm"
                      >
                        Chat
                      </Link>
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

export default Connections;
