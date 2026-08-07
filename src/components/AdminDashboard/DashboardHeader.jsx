import { FaBell } from "react-icons/fa";
import { HiOutlineCalendarDays } from "react-icons/hi2";

const DashboardHeader = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8 shadow-xl">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Left */}

        <div>
          <h1 className="text-4xl font-bold text-white">
            👋 Welcome Back, Admin
          </h1>

          <p className="text-slate-400 mt-3 text-lg">
            Manage your coding platform efficiently.
          </p>

          <div className="flex items-center gap-2 mt-5 text-slate-300">
            <HiOutlineCalendarDays className="text-xl text-primary" />

            <span>{today}</span>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-5">
          {/* Notification */}

          <button className="relative btn btn-circle btn-outline border-slate-600">
            <FaBell className="text-lg" />

            <span className="absolute -top-1 -right-1 badge badge-error badge-sm">
              3
            </span>
          </button>

          {/* Admin */}

          <div className="flex items-center gap-4 bg-slate-800 px-5 py-3 rounded-2xl border border-slate-700">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="admin"
              className="w-14 h-14 rounded-full border-2 border-primary"
            />

            <div>
              <h2 className="font-bold text-white">Admin</h2>

              <p className="text-sm text-slate-400">Super Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
