import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store?.user);
  useEffect(() => {
    if (!userDetails?.data) {
      navigate("/login");
    }
  }, [userDetails]);
  return (
    <div className="w-screen border border-slate-800 bg-[#0B1120]">
      <div className="max-w-screen mx-auto  overflow-hidden  shadow-2xl">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1e1b4b]">
          {/* Left Content */}
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold leading-tight">
              Sharpen Your Coding Skills
            </h1>

            <h2 className="text-4xl font-bold mt-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Compete, Solve, and Climb the Leaderboard
            </h2>

            <p className="text-slate-400 mt-4 max-w-md">
              Solve problems, participate in contests and become the best of the
              best.
            </p>

            <div className="flex gap-3 mt-6">
              <button className="btn btn-primary">{"</>"} Start Coding</button>

              <button className="btn btn-active border-slate-600">
                ☰ View Problems
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex items-center justify-center p-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
              alt="coding"
              className="w-80 object-contain"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-slate-800">
          <div className="bg-[#0f172a] p-5 flex items-center gap-4">
            <div className="text-blue-500 text-3xl">👥</div>

            <div>
              <h3 className="font-bold text-xl text-gray-200">12,540</h3>
              <p className="text-xs text-slate-400">Total Users</p>
            </div>
          </div>

          <div className="bg-[#0f172a] p-5 flex items-center gap-4">
            <div className="text-green-500 text-3xl">📄</div>

            <div>
              <h3 className="font-bold text-xl text-gray-200">350</h3>
              <p className="text-xs text-slate-400">Total Problems</p>
            </div>
          </div>

          <div className="bg-[#0f172a] p-5 flex items-center gap-4">
            <div className="text-yellow-500 text-3xl">{"</>"}</div>

            <div>
              <h3 className="font-bold text-xl text-gray-200">50,892</h3>
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
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-6 px-4 md:px-8 lg:px-12">
        {/* Problems by Difficulty */}
        <div className="card bg-[#111827] border border-slate-700">
          <div className="card-body">
            <h2 className="font-semibold text-white">Problems by Difficulty</h2>

            <div className="grid grid-cols-3 gap-3 mt-3">
              <div className="bg-green-900/30 rounded-lg p-4 text-center">
                <p className="text-green-400 font-semibold">Easy</p>
                <h1 className="text-3xl font-bold mt-2 text-white">120</h1>
                <p className="text-xs text-slate-400">Problems</p>
              </div>

              <div className="bg-yellow-900/30 rounded-lg p-4 text-center">
                <p className="text-yellow-400 font-semibold">Medium</p>
                <h1 className="text-3xl font-bold mt-2 text-white">150</h1>
                <p className="text-xs text-slate-400">Problems</p>
              </div>

              <div className="bg-red-900/30 rounded-lg p-4 text-center">
                <p className="text-red-400 font-semibold">Hard</p>
                <h1 className="text-3xl font-bold mt-2 text-white">80</h1>
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
