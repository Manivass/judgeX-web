import { useNavigate } from "react-router";

const Premium = ({ membershipType }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-screen bg-[#050816] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* PREMIUM HERO */}

          <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-white/5 to-transparent p-8 md:p-12">
            {/* Glow */}

            <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />

            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative">
              {/* BADGE */}

              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <span className="text-3xl">👑</span>
                </div>

                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    ACTIVE MEMBERSHIP
                  </span>
                </div>
              </div>

              {/* TITLE */}

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-8">
                Welcome to{" "}
                <span className="text-yellow-400">JudgeX Premium</span>
              </h1>

              <p className="text-slate-400 mt-4 max-w-2xl text-lg">
                You have unlocked the premium JudgeX experience. Keep solving,
                keep learning and level up your coding skills.
              </p>

              {/* MEMBERSHIP CARD */}

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* PLAN */}

                <div className="rounded-2xl bg-black/20 border border-white/10 p-5">
                  <p className="text-slate-500 text-sm">Current Plan</p>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-2xl">👑</span>

                    <h3 className="text-xl font-bold text-yellow-400">
                      {membershipType || "Gold"}
                    </h3>
                  </div>
                </div>

                {/* STATUS */}

                <div className="rounded-2xl bg-black/20 border border-white/10 p-5">
                  <p className="text-slate-500 text-sm">Status</p>

                  <h3 className="text-xl font-bold text-green-400 mt-2">
                    Active
                  </h3>

                  <p className="text-slate-500 text-xs mt-1">
                    Premium access enabled
                  </p>
                </div>

                {/* ACCESS */}

                <div className="rounded-2xl bg-black/20 border border-white/10 p-5">
                  <p className="text-slate-500 text-sm">Premium Access</p>

                  <h3 className="text-xl font-bold text-white mt-2">
                    Unlimited
                  </h3>

                  <p className="text-slate-500 text-xs mt-1">
                    All premium features
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PREMIUM BENEFITS */}

          <div className="mt-10">
            <div className="mb-6">
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                Your Benefits
              </p>

              <h2 className="text-2xl font-bold text-white mt-2">
                Premium features unlocked
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* FEATURE 1 */}

              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center text-xl">
                    ⚡
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">
                      Premium Problems
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Access exclusive coding problems and challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* FEATURE 2 */}

              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl">
                    🚀
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">
                      Advanced Features
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Unlock advanced JudgeX features and tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* FEATURE 3 */}

              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center text-xl">
                    💡
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">
                      Editorial Access
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Get access to detailed problem explanations and solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* FEATURE 4 */}

              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-xl">
                    🏆
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">
                      Premium Experience
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Enjoy the complete JudgeX premium experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER ACTION */}

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-white font-semibold">
                Enjoying JudgeX Premium?
              </h3>

              <p className="text-slate-400 text-sm mt-1">
                Keep practicing and improve your coding skills.
              </p>
            </div>

            <button
              onClick={() => navigate("/problems")}
              className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
            >
              Start Coding →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
