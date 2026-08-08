import {
  FaPlusCircle,
  FaUsers,
  FaClipboardList,
  FaTrophy,
} from "react-icons/fa";
import { Link } from "react-router";

const actions = [
  {
    title: "Add Problem",
    desc: "Create a new coding problem",
    icon: <FaPlusCircle />,
    color: "text-green-400",
    to: "/questions/create",
  },
  {
    title: "Manage Users",
    desc: "View and manage platform users",
    icon: <FaUsers />,
    color: "text-blue-400",
    to: "/admin/manage-users",
  },
  {
    title: "Problem Of The Day",
    desc: "Update today's challenge",
    icon: <FaClipboardList />,
    color: "text-orange-400",
    to: "/questions/create",
  },
  {
    title: "Leaderboard",
    desc: "View platform rankings",
    icon: <FaTrophy />,
    color: "text-yellow-400",
    to: "/questions/create",
  },
];

const QuickActions = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-5">⚡ Quick Actions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {actions.map((action, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-slate-700 rounded-3xl p-6 cursor-pointer hover:border-primary hover:-translate-y-2 transition-all duration-300"
          >
            <div className={`text-5xl ${action.color} mb-5`}>{action.icon}</div>

            <h2 className="text-xl font-bold text-white">{action.title}</h2>

            <p className="text-slate-400 mt-2 text-sm">{action.desc}</p>

            <Link
              to={action?.to}
              className="btn btn-primary btn-sm mt-6 rounded-xl w-full"
            >
              Open
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
