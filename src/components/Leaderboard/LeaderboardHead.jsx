import { FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const LeaderboardHeader = () => {
  const stats = useSelector((store) => store?.stats);
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-r from-[#111827] via-[#0f172a] to-[#111827] shadow-2xl">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 h-66 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute -bottom-20 -right-20 h-66 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-5 py-5">
        {/* Left */}

        <div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
              <FaTrophy className="text-3xl text-white" />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-white">
                Global Leaderboard
              </h1>

              <p className="text-slate-400 mt-2 text-md">
                Compete with the best programmers on JudgeX 🚀
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex gap-5 mt-8 lg:mt-0">
          <div className="stats shadow bg-slate-800 border border-slate-700">
            <div className="stat text-center">
              <div className="stat-title text-white">Users</div>

              <div className="stat-value text-primary">{stats?.totalUser}</div>
            </div>
          </div>

          <div className="stats shadow bg-slate-800 border border-slate-700">
            <div className="stat text-center">
              <div className="stat-title text-white">Problems</div>

              <div className="stat-value text-success">{stats?.totalQuestions}</div>
            </div>
          </div>

          <div className="stats shadow bg-slate-800 border border-slate-700">
            <div className="stat text-center">
              <div className="stat-title text-white">Submissions</div>

              <div className="stat-value text-warning">{stats?.submissions}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
