import LeaderboardRow from "./LeaderboardRow";

const LeaderboardTable = ({ leaderboard }) => {
  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-xl">
      <table className="table">
        <thead className="bg-slate-800">
          <tr className="text-white">
            <th>Rank</th>
            <th>User</th>
            <th>Problems</th>
            <th>Solved</th>
            <th>Streak</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {leaderboard?.map((user, index) => (
            <LeaderboardRow key={user._id} user={user} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
