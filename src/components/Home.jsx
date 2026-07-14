import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constant";
import { addStats } from "../store/stats";
import TextType from "./TextType";
import LineWaves from "./LightFall";
import Lightfall from "./LightFall";

const Home = () => {
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store?.user);

  const dispatch = useDispatch();
  const stats = useSelector((store) => store?.stats);

  const getStats = async () => {
    try {
      const res = await axios.get(BASE_URL + "/dashboard/stats", {
        withCredentials: true,
      });
      dispatch(addStats(res?.data?.stats));
    } catch (err) {
      console.log(err?.response?.data?.message);
    }
  };
  useEffect(() => {
    if (!userDetails) {
      navigate("/login");
    }
  }, [userDetails]);

  useEffect(() => {
    getStats();
  }, []);
  return (
    <div className="w-screen border border-slate-800 bg-black">
      <div className="w-screen mx-auto  overflow-hidden  shadow-2xl">
        <div className="relative overflow-hidden h-[580px]">
          <Lightfall />
          {/* Hero Section */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full ">
            {/* Left Content */}
            <div className=" flex items-center">
              <TextType
                text={[
                  "Sharpen Your Coding Skills",
                  "Compete, Solve and Climb the Leaderboard",
                  "Welcome to JudgeX 🚀",
                ]}
                typingSpeed={70}
                deletingSpeed={40}
                pauseDuration={1800}
                className="text-5xl font-bold text-white leading-tight"
              />
            </div>
            <div className="w-2/3  flex flex-col ">
              <div className="flex justify-center">
                <p className="text-slate-400 mt-4  text-xl font-semibold">
                  Solve problems, participate in contests and become the best of
                  the best.
                </p>
              </div>

              <div className="flex justify-center gap-12 mt-6 ">
                <Link
                  to={`/problem/6a43ed91a112992e8b165965`}
                  className="btn btn-primary"
                >
                  {"</>"} Start Coding
                </Link>

                <Link
                  to="/problems"
                  className="btn btn-active border-slate-600"
                >
                  ☰ View Problems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-slate-800">
        <div className="bg-[#0f172a] p-5 flex items-center gap-4">
          <div className="text-blue-500 text-3xl">👥</div>

          <div>
            <h3 className="font-bold text-xl text-gray-200">
              {stats?.totalUser}
            </h3>
            <p className="text-xs text-slate-400">Total Users</p>
          </div>
        </div>

        <div className="bg-[#0f172a] p-5 flex items-center gap-4">
          <div className="text-green-500 text-3xl">📄</div>

          <div>
            <h3 className="font-bold text-xl text-gray-200">
              {stats?.totalQuestions}
            </h3>
            <p className="text-xs text-slate-400">Total Problems</p>
          </div>
        </div>

        <div className="bg-[#0f172a] p-5 flex items-center gap-4">
          <div className="text-yellow-500 text-3xl">{"</>"}</div>

          <div>
            <h3 className="font-bold text-xl text-gray-200">
              {stats?.submissions}
            </h3>
            <p className="text-xs text-slate-400">Total Submissions</p>
          </div>
        </div>

        <div className="bg-[#0f172a] p-5 flex items-center gap-4">
          <div className="text-purple-500 text-3xl">🏆</div>

          <div>
            <h3 className="font-bold text-xl text-gray-200">25</h3>
            <p className="text-xs text-slate-400">Active Contests</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-6 px-4 md:px-8 lg:px-12">
        {/* Problems by Difficulty */}
        <div className="card bg-[#111827] border border-slate-700">
          <div className="card-body">
            <h2 className="font-semibold text-white">Problems by Difficulty</h2>

            <div className="grid grid-cols-3 gap-3 mt-3">
              <div className="bg-green-900/30 rounded-lg p-4 text-center">
                <p className="text-green-400 font-semibold">Easy</p>
                <h1 className="text-3xl font-bold mt-2 text-white">
                  {stats?.easyQuestions}
                </h1>
                <p className="text-xs text-slate-400">Problems</p>
              </div>

              <div className="bg-yellow-900/30 rounded-lg p-4 text-center">
                <p className="text-yellow-400 font-semibold">Medium</p>
                <h1 className="text-3xl font-bold mt-2 text-white">
                  {stats?.mediumQuestions}
                </h1>
                <p className="text-xs text-slate-400">Problems</p>
              </div>

              <div className="bg-red-900/30 rounded-lg p-4 text-center">
                <p className="text-red-400 font-semibold">Hard</p>
                <h1 className="text-3xl font-bold mt-2 text-white">
                  {stats?.hardQuestions}
                </h1>
                <p className="text-xs text-slate-400">Problems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem of the Day */}
        <div className="card bg-[#111827] border border-slate-700">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="font-semibold text-white">
                🌟 Problem of the Day
              </h2>

              <div className="badge badge-success">Easy</div>
            </div>

            <h1 className="text-2xl font-bold mt-2 text-slate-200">Two Sum</h1>

            <p className="text-slate-400 text-sm mt-2">
              Given an array of integers, return indices of the two numbers such
              that they add up to a specific target.
            </p>

            <button className="btn btn-primary btn-sm mt-4 w-fit">
              Solve Now
            </button>
          </div>
        </div>

        {/* Top Performers */}
        <div className="card bg-[#111827] border border-slate-700 text-white">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="font-semibold">Top Performers</h2>

              <button className="text-primary text-sm">View All</button>
            </div>

            {[
              ["🥇", "Mani", 150],
              ["🥈", "Arjun", 145],
              ["🥉", "Karthik", 130],
              ["#4", "Divya", 120],
              ["#5", "Priya", 110],
            ].map((user, index) => (
              <div key={index} className="flex justify-between mt-2">
                <span>
                  {user[0]} {user[1]}
                </span>

                <span className="text-yellow-400">{user[2]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mt-4 px-4 md:px-8 lg:px-12 py-3 text-white ">
        {/* Recent Problems */}
        <div className="card bg-[#111827] border border-slate-700">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="font-semibold">Recent Problems</h2>

              <button className="text-primary text-sm">View All</button>
            </div>

            {[
              ["Binary Search", "Medium"],
              ["Merge Intervals", "Medium"],
              ["Reverse Linked List", "Easy"],
              ["Maximum Subarray", "Hard"],
              ["Valid Parentheses", "Easy"],
            ].map((problem, idx) => (
              <div key={idx} className="flex justify-between mt-2">
                <span>{problem[0]}</span>

                <div
                  className={`badge ${
                    problem[1] === "Easy"
                      ? "badge-success"
                      : problem[1] === "Medium"
                        ? "badge-warning"
                        : "badge-error"
                  }`}
                >
                  {problem[1]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Contests */}
        <div className="card bg-[#111827] border border-slate-700">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="font-semibold">Upcoming Contests</h2>

              <button className="text-primary text-sm">View All</button>
            </div>

            <div className="space-y-3 mt-2">
              <div className="bg-slate-800 p-3 rounded-lg">
                <p className="font-medium">Weekly Contest #1</p>
                <p className="text-sm text-slate-400">
                  Jun 20, 2025 • 08:00 PM
                </p>
              </div>

              <div className="bg-slate-800 p-3 rounded-lg">
                <p className="font-medium">Monthly Challenge</p>
                <p className="text-sm text-slate-400">
                  Jun 23, 2025 • 07:00 PM
                </p>
              </div>

              <div className="bg-slate-800 p-3 rounded-lg">
                <p className="font-medium">CodeArena Cup</p>
                <p className="text-sm text-slate-400">
                  Jun 30, 2025 • 09:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why CodeArena */}
        <div className="card bg-[#111827] border border-slate-700">
          <div className="card-body">
            <h2 className="font-semibold">Why CodeArena?</h2>

            <ul className="space-y-3 mt-3 text-sm">
              <li>⚡ Online Code Execution</li>
              <li>🏆 Competitive Leaderboards</li>
              <li>📈 Progress Tracking</li>
              <li>🎯 Real Coding Challenges</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
