import { FaTrophy, FaCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";

const CurrentUserCard = ({ leaderboard }) => {
  const loggedUser = useSelector((store) => store?.user);
  const rank =
    leaderboard?.findIndex((user) => user._id === loggedUser?._id) + 1;
  return (
    <div className="my-10 rounded-3xl border border-primary/20 bg-gradient-to-r from-[#111827] via-[#0f172a] to-[#111827] shadow-2xl">
      <div className="flex flex-col lg:flex-row justify-between items-center p-8">
        {/* Left */}

        <div className="flex items-center gap-6">
          <img
            src={loggedUser?.profilePicture}
            alt=""
            className="w-24 h-24 rounded-full border-4 border-primary"
          />

          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-white">
                {loggedUser?.firstName} {loggedUser?.lastName}
              </h2>

              <div className="badge badge-primary">You</div>
            </div>

            <p className="text-slate-400 mt-1">
              Rank is based on total solved problems.
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8 lg:mt-0">
          <div className="rounded-2xl bg-slate-800 border border-slate-700 px-6 py-5 text-center">
            <FaTrophy className="mx-auto text-yellow-400 text-2xl mb-2" />

            <h2 className="text-3xl font-bold text-white">{rank}</h2>

            <p className="text-sm text-slate-400">Rank</p>
          </div>

          <div className="rounded-2xl bg-slate-800 border border-slate-700 px-6 py-5 text-center">
            <FaCircleCheck className="mx-auto text-green-400 text-2xl mb-2" />

            <h2 className="text-3xl font-bold text-white">
              {loggedUser?.solvedProblems?.total}
            </h2>

            <p className="text-sm text-slate-400">Solved</p>
          </div>

          <div className="rounded-2xl bg-slate-800 border border-slate-700 px-6 py-5 text-center">
            <span className="text-2xl">⭐</span>

            <h2 className="text-3xl font-bo24 Day Streakld text-primary mt-2">
              1850
            </h2>

            <p className="text-sm text-slate-400">Rating</p>
          </div>
        </div>
      </div>

      {/* Progress */}

      <div className="border-t border-slate-700 px-8 py-6">
        <div className="flex justify-between mb-3">
          <span className="text-slate-400">Progress to Top 10</span>

          <span className="text-primary font-semibold">72%</span>
        </div>

        <progress
          className="progress progress-primary w-full h-3"
          value="72"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default CurrentUserCard;
