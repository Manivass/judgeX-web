import { FaSearch, FaUsers, FaUserCheck, FaUserPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import UserTable from "./UserTable";

const ManageUsers = () => {
  const stats = useSelector((store) => store?.stats);

  return (
    <div className="min-h-screen bg-[#050816] p-8 my-12">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">👥 Manage Users</h1>

            <p className="text-slate-400 mt-2">View and manage JudgeX users.</p>
          </div>
        </div>

        {/* STATS */}

        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
          <div className="bg-[#111827] border border-slate-700 rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400">Total Users</p>

                <h2 className="text-3xl font-bold text-white mt-2">
                  {stats?.totalUser}
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <FaUsers className="text-2xl text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-[#111827] border border-slate-700 rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400">Active Users</p>

                <h2 className="text-3xl font-bold text-white mt-2">
                  {stats?.totalUser}
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <FaUserCheck className="text-2xl text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-[#111827] border border-slate-700 rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400">New Users</p>

                <h2 className="text-3xl font-bold text-white mt-2">
                  {stats?.newUsers}
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <FaUserPlus className="text-2xl text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH + FILTER */}

        <div className="bg-[#111827] border border-slate-700 rounded-3xl p-5 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex items-center w-full lg:max-w-2xl bg-slate-400/10 border border-slate-700 rounded-xl px-4">
              <FaSearch className="text-xl text-slate-400 shrink-0" />

              <input
                type="text"
                placeholder="Search by name, username ..."
                className="w-full bg-transparent border-none outline-none px-3 py-3 text-white placeholder:text-slate-500"
              />
            </div>
          </div>
        </div>
        <UserTable />
      </div>
    </div>
  );
};

export default ManageUsers;
