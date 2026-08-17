import { FaFire } from "react-icons/fa";
const LeaderboardRow = ({ index, user }) => {

  return (
    <tr className="hover:bg-slate-800 transition duration-300">
      <td>
        <span className="font-bold text-white">{index + 4}</span>
      </td>

      <td>
        <div className="flex items-center gap-4">
          <img src={user?.profilePicture} className="w-12 rounded-full" />

          <div>
            <h2 className="font-semibold text-gray-300">
              {user?.firstName} {user?.lastName}
            </h2>

            <p className="text-xs text-slate-400">@hari</p>
          </div>
        </div>
      </td>

      <td>
        <div className="flex gap-2">
          <div className="badge badge-success">
            {user?.solvedProblems?.easy}
          </div>

          <div className="badge badge-warning">
            {user?.solvedProblems?.medium}
          </div>

          <div className="badge badge-error">{user?.solvedProblems?.hard}</div>
        </div>
      </td>

      <td>
        <span className="font-bold text-primary">
          {user?.solvedProblems?.total}
        </span>
      </td>

      <td>
        <div className="flex items-center gap-2 text-orange-400">
          <FaFire />
          18
        </div>
      </td>

    </tr>
  );
};

export default LeaderboardRow;
