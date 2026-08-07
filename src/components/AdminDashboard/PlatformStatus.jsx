import { FaDatabase, FaServer, FaCloud, FaCheckCircle } from "react-icons/fa";

const status = [
  {
    title: "MongoDB",
    subtitle: "Database Connected",
    icon: <FaDatabase />,
    color: "text-green-400",
    badge: "Online",
    badgeColor: "badge-success",
  },
  {
    title: "Judge0 API",
    subtitle: "Compiler Service",
    icon: <FaCloud />,
    color: "text-blue-400",
    badge: "Running",
    badgeColor: "badge-info",
  },
  {
    title: "Backend Server",
    subtitle: "Express Server",
    icon: <FaServer />,
    color: "text-orange-400",
    badge: "Healthy",
    badgeColor: "badge-warning",
  },
  {
    title: "Platform",
    subtitle: "JudgeX Status",
    icon: <FaCheckCircle />,
    color: "text-purple-400",
    badge: "Operational",
    badgeColor: "badge-secondary",
  },
];

const PlatformStatus = () => {
  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl shadow-xl">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-2xl font-bold text-white">🖥️ Platform Status</h2>

        <p className="text-slate-400 text-sm mt-1">
          Monitor all core services of JudgeX
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">
        {status.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-700 bg-slate-800 p-5 hover:border-primary transition-all"
          >
            <div className="flex justify-between items-center">
              <div className={`text-4xl ${item.color}`}>{item.icon}</div>

              <div className={`badge ${item.badgeColor}`}>{item.badge}</div>
            </div>

            <h2 className="text-xl font-bold text-white mt-5">{item.title}</h2>

            <p className="text-slate-400 mt-2">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformStatus;
