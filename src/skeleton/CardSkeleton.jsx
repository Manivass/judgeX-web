const CardSkeleton = () => {
  return (
    <div className="card bg-[#111827] border border-slate-700 shadow-xl animate-pulse">
      <div className="card-body">
        {/* Badge */}
        <div className="flex justify-between items-center">
          <div className="skeleton h-6 w-50"></div>
          <div className="skeleton h-6 w-26 rounded-full"></div>
        </div>

        {/* Title */}
        <div className="mt-4 space-y-3">
          <div className="skeleton h-8 w-3/4"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-5/6"></div>
          <div className="skeleton h-4 w-2/3"></div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <div className="skeleton h-10 w-32 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
