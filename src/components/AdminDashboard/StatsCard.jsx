const StatsCard = ({ title, value, icon, color, bg }) => {
  return (
    <div className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-lg hover:shadow-2xl hover:border-primary transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium">{title}</p>

          <h2 className="text-4xl font-bold text-white mt-3">{value}</h2>
        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${bg}`}
        >
          <span className={`text-3xl ${color}`}>{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
