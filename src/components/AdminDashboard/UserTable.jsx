import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaBan,
  FaCheckCircle,
} from "react-icons/fa";

import { BASE_URL } from "../../utils/constant";
import { Link } from "react-router";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState({
    totalUsers: 0,
    totalPages: 0,
  });

  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        BASE_URL + `/leaderboard?page=${page}&limit=10`,
        {
          withCredentials: true,
        },
      );

      setUsers(res?.data?.leaderboard || []);

      setPagination(res?.data?.pagination || {});
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  return (
    <div className="min-h-screen bg-[#050816] p-8">
      <div className="max-w-7xl mx-auto">
        {/* TABLE */}

        <div className="bg-[#111827] border border-slate-700 rounded-3xl overflow-hidden shadow-xl">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-2xl font-bold text-white">All Users</h2>

            <p className="text-sm text-slate-400 mt-1">
              Registered JudgeX users
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-slate-800">
                <tr className="text-slate-300">
                  <th>User</th>
                  <th>Problems Solved</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6">
                      <div className="flex justify-center py-10">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                      </div>
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center text-slate-400 py-10"
                    >
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-slate-800/70 transition"
                    >
                      {/* USER */}

                      <td>
                        <div className="flex items-center gap-4">
                          <img
                            src={user?.profilePicture}
                            alt={user?.firstName}
                            className="w-12 h-12 rounded-full border-2 border-slate-600"
                          />

                          <div>
                            <h3 className="font-semibold text-white">
                              {user?.firstName} {user?.lastName}
                            </h3>

                            <p className="text-xs text-slate-400">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* SOLVED */}

                      <td>
                        <div className="flex gap-2">
                          <div className="badge badge-success">
                            {user?.solvedProblems?.easy}
                          </div>

                          <div className="badge badge-warning">
                            {user?.solvedProblems?.medium}
                          </div>

                          <div className="badge badge-error">
                            {user?.solvedProblems?.hard}
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className="font-bold text-green-400">
                          {user?.solvedProblems?.total || 0}
                        </span>
                      </td>

                      {/* SUBMISSIONS */}

                      {/* STATUS */}

                      <td>
                        {user?.isBlocked ? (
                          <div className="badge badge-error gap-2">
                            <FaBan />
                            Blocked
                          </div>
                        ) : (
                          <div className="badge badge-success gap-2">
                            <FaCheckCircle />
                            Active
                          </div>
                        )}
                      </td>

                      {/* JOINED */}

                      <td className="text-slate-400">
                        {user?.createdAt
                          ? new Date(user.createdAt).toLocaleDateString()
                          : "-"}
                      </td>

                      {/* ACTION */}

                      <td>
                        <Link
                          to={`/profile/${user?._id}`}
                          className="btn btn-primary btn-sm rounded-xl"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}

          <div className="flex justify-between items-center p-5 border-t border-slate-700">
            <p className="text-sm text-slate-400">
              Page <span className="text-white font-semibold">{page}</span> of{" "}
              <span className="text-white font-semibold">
                {pagination.totalPages || 0}
              </span>
            </p>

            <div className="join">
              <button
                className="join-item btn btn-sm"
                disabled={page === 1 || loading}
                onClick={() => setPage(page - 1)}
              >
                «
              </button>

              <button className="join-item btn btn-sm btn-primary">
                {page}
              </button>

              <button
                className="join-item btn btn-sm"
                disabled={page === pagination.totalPages || loading}
                onClick={() => setPage(page + 1)}
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
