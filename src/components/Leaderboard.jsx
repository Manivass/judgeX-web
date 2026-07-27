import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constant";

const Leaderboard = () => {
  const userDetails = useSelector((store) => store?.user);
  const [leaderboard, setLeaderboard] = useState([]);
  const navigate = useNavigate();
  const getLeaderboard = async () => {
    try {
      const res = await axios.get(BASE_URL + "/leaderboard", {
        withCredentials: true,
      });
      setLeaderboard(res?.data?.leaderboard);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!userDetails) {
      navigate("/login");
      return;
    }
    getLeaderboard();
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-[#050816] p-8 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold">🏆 Leaderboard</h1>
              <p className="text-slate-400 mt-1">
                Top coders ranked by solved problems.
              </p>
            </div>

            <button className="btn btn-primary">Back to Home</button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-[#111827]">
            <table className="table">
              <thead>
                <tr className="text-slate-300">
                  <th>Rank</th>
                  <th>User</th>
                  <th>Easy</th>
                  <th>Medium</th>
                  <th>Hard</th>
                  <th>Total Solved</th>
                </tr>
              </thead>

              <tbody>
                {leaderboard?.map((user, index) => (
                  <tr
                    key={user._id}
                    className="hover:bg-slate-800 duration-200"
                  >
                    {/* Rank */}
                    <td className="font-bold text-lg">
                      {index + 1 === 1
                        ? "🥇"
                        : index + 1 === 2
                          ? "🥈"
                          : index + 1 === 3
                            ? "🥉"
                            : `#${index + 1}`}
                    </td>

                    {/* User */}
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                            <img src={user.profilePicture} alt="" />
                          </div>
                        </div>

                        <div>
                          <Link
                            to={`/profile/${user?._id}`}
                            className="font-bold hover:text-blue-400 cursor-pointer"
                          >
                            {user.firstName} {user.lastName}
                          </Link>
                        </div>
                      </div>
                    </td>

                    {/* Easy */}
                    <td>
                      <span className="badge badge-success badge-lg">
                        {user.solvedProblems.easy}
                      </span>
                    </td>

                    {/* Medium */}
                    <td>
                      <span className="badge badge-warning badge-lg">
                        {user.solvedProblems.medium}
                      </span>
                    </td>

                    {/* Hard */}
                    <td>
                      <span className="badge badge-error badge-lg">
                        {user.solvedProblems.hard}
                      </span>
                    </td>

                    {/* Total */}
                    <td>
                      <span className="font-bold text-primary text-lg">
                        {user.solvedProblems.total}
                      </span>
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

export default Leaderboard;
