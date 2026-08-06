const LeaderboardSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
        <div className="flex justify-between items-center">
          <div className="space-y-3">
            <div className="skeleton h-10 w-72"></div>

            <div className="skeleton h-5 w-96"></div>
          </div>

          <div className="flex gap-4">
            <div className="skeleton h-24 w-28 rounded-2xl"></div>

            <div className="skeleton h-24 w-28 rounded-2xl"></div>

            <div className="skeleton h-24 w-28 rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Podium */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card bg-slate-900 border border-slate-700">
          <div className="card-body items-center">
            <div className="skeleton w-24 h-24 rounded-full"></div>
            <div className="skeleton h-6 w-40 mt-4"></div>
            <div className="skeleton h-5 w-24"></div>
            <div className="skeleton h-10 w-24 mt-4"></div>
          </div>
        </div>

        <div className="card bg-slate-900 border border-slate-700 scale-105">
          <div className="card-body items-center">
            <div className="skeleton w-32 h-32 rounded-full"></div>
            <div className="skeleton h-7 w-44 mt-4"></div>
            <div className="skeleton h-5 w-28"></div>
            <div className="skeleton h-12 w-28 mt-5"></div>
          </div>
        </div>

        <div className="card bg-slate-900 border border-slate-700">
          <div className="card-body items-center">
            <div className="skeleton w-24 h-24 rounded-full"></div>
            <div className="skeleton h-6 w-40 mt-4"></div>
            <div className="skeleton h-5 w-24"></div>
            <div className="skeleton h-10 w-24 mt-4"></div>
          </div>
        </div>
      </div>

      {/* Current User */}

      <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <div className="skeleton w-24 h-24 rounded-full"></div>

            <div className="space-y-3">
              <div className="skeleton h-8 w-56"></div>

              <div className="skeleton h-5 w-72"></div>

              <div className="flex gap-3">
                <div className="skeleton h-8 w-28"></div>

                <div className="skeleton h-8 w-32"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="skeleton h-28 w-32 rounded-2xl"></div>

            <div className="skeleton h-28 w-32 rounded-2xl"></div>

            <div className="skeleton h-28 w-32 rounded-2xl"></div>

            <div className="skeleton h-28 w-32 rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Search */}

      <div className="flex justify-between">
        <div className="skeleton h-12 w-[450px] rounded-xl"></div>

        <div className="flex gap-3">
          <div className="skeleton h-12 w-28"></div>

          <div className="skeleton h-12 w-28"></div>

          <div className="skeleton h-12 w-28"></div>
        </div>
      </div>

      {/* Table */}

      <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-5 border-b border-slate-800 last:border-none"
          >
            <div className="flex items-center gap-5">
              <div className="skeleton h-6 w-10"></div>

              <div className="skeleton w-12 h-12 rounded-full"></div>

              <div>
                <div className="skeleton h-5 w-36 mb-2"></div>

                <div className="skeleton h-4 w-24"></div>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="skeleton h-8 w-16"></div>

              <div className="skeleton h-8 w-16"></div>

              <div className="skeleton h-8 w-16"></div>

              <div className="skeleton h-8 w-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardSkeleton;
