import {
  FaSearch,
  FaEye,
  FaBan,
  FaCheckCircle,
  FaUsers,
  FaUserCheck,
  FaUserSlash,
  FaUserPlus,
} from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "Manivass Vadivel",
    username: "@manivass",
    email: "manivass@gmail.com",
    solved: 42,
    submissions: 128,
    rank: 4,
    status: "Active",
    joined: "2 Aug 2026",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Hari Kumar",
    username: "@hari",
    email: "hari@gmail.com",
    solved: 31,
    submissions: 96,
    rank: 8,
    status: "Active",
    joined: "28 Jul 2026",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 3,
    name: "Vignesh S",
    username: "@vignesh",
    email: "vignesh@gmail.com",
    solved: 18,
    submissions: 67,
    rank: 15,
    status: "Active",
    joined: "25 Jul 2026",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    name: "Rahul Dravid",
    username: "@rahul",
    email: "rahul@gmail.com",
    solved: 7,
    submissions: 31,
    rank: 29,
    status: "Blocked",
    joined: "20 Jul 2026",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 5,
    name: "Dharsini Vadivel",
    username: "@dharsini",
    email: "dharsini@gmail.com",
    solved: 24,
    submissions: 81,
    rank: 11,
    status: "Active",
    joined: "18 Jul 2026",
    image: "https://i.pravatar.cc/150?img=15",
  },
];

const ManageUsers = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          <div className="bg-[#111827] border border-slate-700 rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400">Total Users</p>

                <h2 className="text-3xl font-bold text-white mt-2">1,245</h2>
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

                <h2 className="text-3xl font-bold text-white mt-2">982</h2>
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

                <h2 className="text-3xl font-bold text-white mt-2">36</h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <FaUserPlus className="text-2xl text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-[#111827] border border-slate-700 rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400">Blocked Users</p>

                <h2 className="text-3xl font-bold text-white mt-2">12</h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <FaUserSlash className="text-2xl text-red-400" />
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH + FILTER */}

        <div className="bg-[#111827] border border-slate-700 rounded-3xl p-5 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

              <input
                type="text"
                placeholder="Search by name, username or email..."
                className="input w-full bg-slate-900 border-slate-700 pl-12 text-white"
              />
            </div>

            <select className="select bg-slate-900 border-slate-700 text-white lg:w-48">
              <option>All Users</option>
              <option>Active</option>
              <option>Blocked</option>
            </select>
          </div>
        </div>

        {/* USERS TABLE */}

        <div className="bg-[#111827] border border-slate-700 rounded-3xl overflow-hidden shadow-xl">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-2xl font-bold text-white">All Users</h2>

            <p className="text-sm text-slate-400 mt-1">
              Manage registered JudgeX users
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-slate-800">
                <tr className="text-slate-300">
                  <th>User</th>
                  <th>Problems Solved</th>
                  <th>Submissions</th>
                  <th>Rank</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-slate-800/70 transition"
                  >
                    {/* USER */}

                    <td>
                      <div className="flex items-center gap-4">
                        <img
                          src={user.image}
                          alt={user.name}
                          className="w-12 h-12 rounded-full border-2 border-slate-600"
                        />

                        <div>
                          <h3 className="font-semibold text-white">
                            {user.name}
                          </h3>

                          <p className="text-xs text-slate-500">
                            {user.username}
                          </p>

                          <p className="text-xs text-slate-400">{user.email}</p>
                        </div>
                      </div>
                    </td>

                    {/* SOLVED */}

                    <td>
                      <span className="font-bold text-green-400">
                        {user.solved}
                      </span>
                    </td>

                    {/* SUBMISSIONS */}

                    <td>
                      <span className="text-slate-300">{user.submissions}</span>
                    </td>

                    {/* RANK */}

                    <td>
                      <span className="font-bold text-purple-400">
                        #{user.rank}
                      </span>
                    </td>

                    {/* STATUS */}

                    <td>
                      {user.status === "Active" ? (
                        <div className="badge badge-success gap-2">
                          <FaCheckCircle />
                          Active
                        </div>
                      ) : (
                        <div className="badge badge-error gap-2">
                          <FaBan />
                          Blocked
                        </div>
                      )}
                    </td>

                    {/* JOINED */}

                    <td className="text-slate-400">{user.joined}</td>

                    {/* ACTION */}

                    <td>
                      <div className="flex gap-2">
                        <button
                          className="btn btn-sm btn-info rounded-xl"
                          title="View User"
                        >
                          <FaEye />
                        </button>

                        {user.status === "Active" ? (
                          <button
                            className="btn btn-sm btn-error rounded-xl"
                            title="Block User"
                          >
                            <FaBan />
                          </button>
                        ) : (
                          <button
                            className="btn btn-sm btn-success rounded-xl"
                            title="Unblock User"
                          >
                            <FaCheckCircle />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
