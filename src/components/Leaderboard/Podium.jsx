import { FaCrown } from "react-icons/fa";
import { Link } from "react-router";

import { MdVerified } from "react-icons/md";

const Podium = ({ leaderboard }) => {
  console.log(leaderboard);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12 items-end">
      {/* 2nd */}
      <div className="card h-auto flex flex-col justify-between bg-slate-900 border border-slate-700 shadow-xl hover:-translate-y-2 duration-300">
        <Link
          to={`/profile/${leaderboard[1]?._id}`}
          className="card-body items-center"
        >
          <div className="text-6xl">🥈</div>

          <img
            src={leaderboard[1]?.profilePicture}
            className="w-24 h-24 rounded-full border-4 border-slate-300"
          />

          <h2 className="text-xl font-bold text-white mt-3">
            {leaderboard[1]?.firstName} {leaderboard[1]?.lastName}
            {leaderboard[1]?.isPremium && (
              <span className="inline-flex items-center ml-1">
                <MdVerified className="text-blue-500 text-2xl translate-y-1" />
              </span>
            )}
          </h2>
          <p className="text-slate-400">Rank #2</p>

          <div className="stats shadow bg-slate-800 mt-4">
            <div className="stat px-8">
              <div className="stat-title text-white text-white">Solved</div>

              <div className="stat-value text-primary text-center">
                {leaderboard[1]?.solvedProblems?.total}
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* 1st */}

      <div className="card h-[500px] bg-gradient-to-b from-yellow-500/20 to-slate-900 border-2 border-yellow-400 shadow-2xl scale-105 hover:scale-110 duration-300">
        <Link
          to={`/profile/${leaderboard[0]?._id}`}
          className="card-body items-center py-4"
        >
          <FaCrown className="text-6xl text-yellow-400 mb-3" />

          <img
            src={leaderboard[0]?.profilePicture}
            className="w-32 h-32 rounded-full border-4 border-yellow-400"
          />

          <h2 className="text-2xl font-bold text-white mt-4">
            {leaderboard[0]?.firstName} {leaderboard[0]?.lastName}{" "}
            {leaderboard[0]?.isPremium && (
              <span className="inline-flex items-center ml-1">
                <MdVerified className="text-blue-500 text-2xl translate-y-1" />
              </span>
            )}
          </h2>

          <p className="text-yellow-300 font-semibold">Champion</p>

          <div className="stats shadow bg-slate-800 mt-5">
            <div className="stat px-10">
              <div className="stat-title text-white">Solved</div>

              <div className="stat-value text-primary text-center">
                {leaderboard[0]?.solvedProblems?.total}
              </div>
            </div>
          </div>

          <div className="badge badge-warning mt-5">👑 Rank #1</div>
        </Link>
      </div>

      {/* 3rd */}

      <div className="card  bg-slate-900 border border-slate-700 shadow-xl hover:-translate-y-2 duration-300">
        <Link
          to={`/profile/${leaderboard[2]?._id}`}
          className="card-body h-auto items-center"
        >
          <div className="text-6xl">🥉</div>

          <img
            src={leaderboard[2]?.profilePicture}
            className="w-24 h-24 rounded-full border-4 border-orange-400"
          />

          <h2 className="text-xl font-bold text-white mt-3">
            {leaderboard[2]?.firstName} {leaderboard[2]?.lastName}
            {leaderboard[2]?.isPremium && (
              <span className="inline-flex items-center ml-1">
                <MdVerified className="text-blue-500 text-2xl translate-y-1" />
              </span>
            )}
          </h2>

          <p className="text-slate-400">Rank #3</p>

          <div className="stats shadow bg-slate-800 mt-4">
            <div className="stat px-8">
              <div className="stat-title text-white">Solved</div>

              <div className="stat-value text-primary text-center">
                {leaderboard[1]?.solvedProblems?.total}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Podium;
