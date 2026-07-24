const ProfileSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#050816] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Profile Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Left */}
            <div className="flex gap-6">
              <div className="skeleton w-32 h-32 rounded-full bg-slate-700"></div>

              <div className="space-y-4">
                <div className="skeleton h-8 w-64 bg-slate-700"></div>
                <div className="skeleton h-4 w-44 bg-slate-700"></div>
                <div className="skeleton h-4 w-36 bg-slate-700"></div>

                <div className="space-y-2 pt-2">
                  <div className="skeleton h-4 w-80 bg-slate-700"></div>
                  <div className="skeleton h-4 w-72 bg-slate-700"></div>
                </div>

                <div className="flex gap-3 pt-3">
                  <div className="skeleton h-10 w-28 rounded-lg bg-slate-700"></div>
                  <div className="skeleton h-10 w-28 rounded-lg bg-slate-700"></div>
                  <div className="skeleton h-10 w-28 rounded-lg bg-slate-700"></div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <div className="skeleton h-4 w-56 bg-slate-700"></div>
              <div className="skeleton h-4 w-48 bg-slate-700"></div>
              <div className="skeleton h-4 w-36 bg-slate-700"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="skeleton h-6 w-12 bg-slate-700"></div>
              <div className="skeleton h-4 w-32 mt-4 bg-slate-700"></div>
              <div className="skeleton h-10 w-24 mt-4 bg-slate-700"></div>
              <div className="skeleton h-4 w-20 mt-4 bg-slate-700"></div>
            </div>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="grid lg:grid-cols-2 gap-5 mt-6">
          {[1, 2].map((card) => (
            <div
              key={card}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="skeleton h-6 w-40 bg-slate-700 mb-6"></div>

              {[1, 2, 3, 4, 5].map((row) => (
                <div
                  key={row}
                  className="flex justify-between items-center mb-4"
                >
                  <div className="skeleton h-4 w-44 bg-slate-700"></div>
                  <div className="skeleton h-6 w-16 rounded-full bg-slate-700"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
